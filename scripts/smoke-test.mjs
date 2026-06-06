import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4321';
const issues = [];

async function checkPage(page, path) {
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push(err.message));

  const response = await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  if (!response || !response.ok()) {
    issues.push(`${path}: HTTP ${response?.status() ?? 'no response'}`);
  }

  await page.waitForTimeout(1000);

  if (consoleErrors.length) {
    issues.push(`${path} console errors: ${consoleErrors.join(' | ')}`);
  }
}

async function checkBrokenImages(page, path) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const broken = await page.evaluate(() => {
    return [...document.querySelectorAll('img')]
      .filter((img) => img.complete && img.naturalWidth === 0)
      .map((img) => img.src);
  });

  if (broken.length) {
    issues.push(`${path} broken images: ${broken.join(', ')}`);
  }
}

async function checkLibraryModal(page) {
  await page.goto(`${BASE}/library`, { waitUntil: 'networkidle' });
  await page.locator('[data-archive-item]').first().click();
  await page.waitForTimeout(500);

  const modalOpen = await page.locator('#archive-modal').evaluate((el) => el.classList.contains('flex'));
  if (!modalOpen) {
    issues.push('/library: archive modal did not open');
    return;
  }

  const downloadHref = await page.locator('#archive-modal-download').getAttribute('href');
  if (!downloadHref || downloadHref === '#') {
    issues.push('/library: modal download href not set');
  }

  await page.locator('#archive-modal-close').click();
  await page.waitForTimeout(300);

  const modalClosed = await page.locator('#archive-modal').evaluate((el) => el.classList.contains('hidden'));
  if (!modalClosed) {
    issues.push('/library: archive modal did not close');
  }
}

async function checkNavOverlap(page) {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`${BASE}/library`, { waitUntil: 'networkidle' });

  const header = await page.locator('header[data-nav]').boundingBox();
  const heading = await page.locator('h1').first().boundingBox();

  if (header && heading && heading.y < header.y + header.height - 4) {
    issues.push('/library: page title overlaps fixed header');
  }
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

try {
  await checkPage(page, '/');
  await checkPage(page, '/library');
  await checkBrokenImages(page, '/');
  await checkLibraryModal(page);
  await checkNavOverlap(page);
} finally {
  await browser.close();
}

if (issues.length) {
  console.log('ISSUES FOUND:');
  issues.forEach((i) => console.log('-', i));
  process.exit(1);
}

console.log('SMOKE TEST PASSED');
