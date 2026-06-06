export interface NavLink {
  label: string;
  href: string;
}

export interface Hero {
  eyebrow: string;
  headline: string;
  subtext: string;
  cta: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface MissionSection {
  label: string;
  headline: string;
  body: string[];
  secondaryHeadline: string;
  secondaryBody: string[];
}

export interface ReflectionSection {
  headline: string;
  body: string[];
}

export interface AboutSection {
  label: string;
  headline: string;
  quote: string;
  bio: string[];
  closing: string;
}

export interface CtaBand {
  headline: string;
  body: string;
  cta: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Footer {
  education: string[];
  domains: string[];
  copyright: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
}

export interface Contact {
  phone: string;
  email: string;
  bookingUrl: string;
  supportFormUrl: string;
}

export interface Brand {
  name: string;
  owner: string;
  credentials: string[];
}

export interface Site {
  brand: Brand;
  contact: Contact;
  social: SocialLinks;
  nav: NavLink[];
  hero: Hero;
  services: Service[];
  mission: MissionSection;
  reflection: ReflectionSection;
  about: AboutSection;
  cta: CtaBand;
  faqs: Faq[];
  footer: Footer;
}

export const site: Site = {
  brand: {
    name: "Hometown Serenity",
    owner: "Ashley Romero",
    credentials: ["CMH", "CAHA", "ISSA Yoga 200"],
  },

  contact: {
    phone: "(870) 750-1275",
    email: "ashleyromero@hometownserenity.com",
    bookingUrl: "https://calendar.app.google/J9AVNGfGc2SLAXTH9",
    supportFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSct44Rk_hFcUnsIHfF0kRTqXKQsS_Y2WoHFMgIUqVjdHWpDhQ/viewform",
  },

  social: {
    instagram: "https://instagram.com/Hometownserenity",
    facebook: "https://www.facebook.com/search/top?q=Ashley%20Romero%20CMH",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Hometown Serenity",
    headline:
      "Allow self-discovery to flow through you and illuminate your soul's purpose",
    subtext:
      'Beyond the roles of parent, spouse, or professional lies a vibrant identity waiting to be rediscovered. At Hometown Serenity, we move past the weight of "fixing" to find the extraordinary rhythm already within you.',
    cta: "Book A Discovery Call",
  },

  services: [
    {
      title: "Neurolinguistic Programming (NLP)",
      description:
        'Identifying and updating the "internal software" of your thoughts to better align with your true identity.',
    },
    {
      title: "Clinical & Ericksonian Hypnotherapy",
      description:
        "Gently shifting your focus inward to access the wisdom of your subconscious mind.",
    },
    {
      title: "Sound Frequency Healing",
      description:
        "Utilizing Solfeggio frequencies, mother nature, and sound therapy to create a harmonious environment for deep restoration.",
    },
    {
      title: "Somatic Movement & Breathwork",
      description:
        'Using yoga, mindfulness, and nervous system regulation to move out of "survival mode" and back into your body.',
    },
    {
      title: "Holistic Nutrition & Wellness",
      description:
        "Supporting your soul's purpose by nourishing the physical vessel that carries it.",
    },
  ],

  mission: {
    label: "Our approach",
    headline: "It's Not About Being Fixed. It's About Being Found.",
    body: [
      "Traditional therapy often begins by asking what is broken — what needs to be repaired, managed, or overcome. While that path has its place, it can leave you feeling defined by your struggles rather than your strengths.",
      "At Hometown Serenity, we start with what is already right within you. Beneath the layers of roles, responsibilities, and expectations lies a core identity that has been there all along — waiting patiently to be remembered.",
      "Think of it like a veil of clouds passing over the sun. The light never left; it was only obscured. Our integrative approach gently lifts that veil so you can reconnect with the clarity, warmth, and direction that were always yours.",
    ],
    secondaryHeadline: "You are more than the titles you hold",
    secondaryBody: [
      "Parent, partner, professional, caregiver — these titles shape your days, but they do not define your soul. When life asks you to be everything for everyone, it is easy to lose sight of who you are when the room goes quiet.",
      "Rather than treating you as a list of symptoms to solve, we honor the full landscape of your experience. Identity is layered, and each layer holds wisdom. Together, we explore what is working, what feels aligned, and what wants to emerge — so healing becomes discovery, not diagnosis.",
    ],
  },

  reflection: {
    headline: "Who are you when no one is in the room?",
    body: [
      "Picture a quiet house. The dishes are done, the emails are answered, and for a moment the roles are set aside. In that stillness, something softer remains — a quiet hum that is not your to-do list, but your soul's purpose trying to speak.",
      "Most of us have learned to turn the volume down on that inner voice. We stay busy, we stay useful, we stay in survival mode. But what if the work is not to become someone new — what if it is simply to turn up the volume on who you already are?",
      "That is the invitation at Hometown Serenity: to create space for the answer to emerge, without pressure, without performance, and without the need to fix what was never broken.",
    ],
  },

  about: {
    label: "About",
    headline: "A Fellow Traveler on the Path to Self-Discovery.",
    quote:
      "I know what it feels like to navigate the world through the lens of your titles — to give so much of yourself to others that the person underneath begins to feel like a stranger. I did not build Hometown Serenity because I had it all figured out. I built it because I understand the longing to feel whole again.",
    bio: [
      "Ashley Romero, CMH, CAHA, is a certified clinical hypnotherapist and behavioral coach who combines evidence-informed modalities with a deeply human, heart-centered approach to wellness.",
      "Drawing on neurolinguistic programming, Ericksonian hypnotherapy, somatic practices, sound healing, and holistic nutrition, Ashley creates a safe container for clients to explore identity, release old patterns, and reconnect with their innate rhythm.",
      "Her work is rooted in the belief that you are not a problem to be solved — you are a person to be known. Every session is an invitation to listen inward, honor your story, and step into a life that feels genuinely yours.",
    ],
    closing: "Allow the veil to lift. The light was always there.",
  },

  cta: {
    headline: "Your Rhythm is Waiting",
    body: "Identity reconstruction is not a journey you have to navigate alone. Whether you are feeling stuck, overwhelmed, or simply curious about who you are beneath the noise — a discovery call is a gentle first step toward clarity, calm, and reconnection.",
    cta: "Book A Discovery Call",
  },

  faqs: [
    {
      question: "What is clinical hypnotherapy, and is it like what I see on stage?",
      answer:
        "Clinical hypnotherapy is a collaborative, therapeutic process — not entertainment. You remain aware and in control while guided into a relaxed, focused state that allows your subconscious mind to engage more openly. It is gentle, consent-based, and tailored to your goals.",
    },
    {
      question: "What can I expect during a discovery call?",
      answer:
        "A discovery call is a complimentary conversation where we explore what you are experiencing, what you hope to shift, and whether Hometown Serenity feels like the right fit. There is no pressure — just space to ask questions and determine your next step.",
    },
    {
      question: "Do I need a formal diagnosis to work with you?",
      answer:
        "No. Hometown Serenity is a wellness practice focused on identity, nervous system regulation, and personal growth — not medical treatment. If you are experiencing a mental health crisis or need clinical care, we will discuss appropriate referrals.",
    },
    {
      question: "How does the integrative approach work?",
      answer:
        "Rather than relying on a single modality, sessions may weave together hypnotherapy, NLP, somatic movement, breathwork, sound healing, and holistic nutrition guidance — depending on what your body and mind respond to best. The approach is personalized, not prescriptive.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Every journey is different. Some clients experience meaningful shifts in a handful of sessions; others prefer ongoing support as they reconstruct identity and build new rhythms. We will discuss a pace that honors your goals, your budget, and your nervous system.",
    },
    {
      question: "Are sessions offered in person or virtually?",
      answer:
        "Both options may be available depending on your location and preference. Virtual sessions are conducted in a private, comfortable setting where you can relax fully. Details are confirmed when you book your discovery call.",
    },
    {
      question: "What should I do to prepare for a session?",
      answer:
        "Come as you are. Wear comfortable clothing, hydrate, and find a quiet space if meeting virtually. There is no special preparation required — openness and curiosity are the most helpful things you can bring.",
    },
    {
      question: "How do I book or get support between sessions?",
      answer:
        "Use the booking link to schedule a discovery call or session. For questions between appointments, reach out via email or the support form — Ashley aims to respond within one to two business days.",
    },
  ],

  footer: {
    education: [
      "Graduating AOS Mind Body Psychology, June 2027",
      "ISSA Yoga 200",
    ],
    domains: [
      "HometownSerenity.com",
      "HometownSerenity.net",
      "HometownSerenity.info",
      "HometownSerenity.store",
      "HometownSerenity.shop",
    ],
    copyright: "Hometown Serenity | Ashley Romero, CMH, CAHA",
  },
};
