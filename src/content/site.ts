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
  image: string;
  imageAlt: string;
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
  headshot: string;
  headshotAlt: string;
}

export interface LinkPreview {
  url: string;
  image: string;
  alt: string;
  badge?: string;
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

export interface FooterLinkCard {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  preview?: LinkPreview;
}

export interface Footer {
  status: string;
  tagline: string;
  linkCards: FooterLinkCard[];
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
    { label: "Services", href: "/#services" },
    { label: "Library", href: "/library" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
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
      image:
        "https://images.unsplash.com/photo-1499203539516-7fddd394601b?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Soft morning light over a calm journal and tea — mindful reflection",
    },
    {
      title: "Clinical & Ericksonian Hypnotherapy",
      description:
        "Gently shifting your focus inward to access the wisdom of your subconscious mind.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Person in peaceful meditation with eyes closed in warm natural light",
    },
    {
      title: "Sound Frequency Healing",
      description:
        "Utilizing Solfeggio frequencies, mother nature, and sound therapy to create a harmonious environment for deep restoration.",
      image:
        "https://images.unsplash.com/photo-1598486788231-c0261a84c8cc?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Tibetan singing bowl resting on a wooden surface in soft light",
    },
    {
      title: "Somatic Movement & Breathwork",
      description:
        'Using yoga, mindfulness, and nervous system regulation to move out of "survival mode" and back into your body.',
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Yoga practice at sunrise overlooking misty mountains",
    },
    {
      title: "Holistic Nutrition & Wellness",
      description:
        "Supporting your soul's purpose by nourishing the physical vessel that carries it.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Fresh herbs and wholesome ingredients arranged on a wooden table",
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
    headshot:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    headshotAlt: "Ashley Romero, clinical hypnotherapist and founder of Hometown Serenity",
  },

  cta: {
    headline: "Your Rhythm is Waiting",
    body: "Identity reconstruction is not a journey you have to navigate alone. Whether you are feeling stuck, overwhelmed, or simply curious about who you are beneath the noise — a discovery call is a gentle first step toward clarity, calm, and reconnection.",
    cta: "Book A Discovery Call",
  },

  faqs: [
    {
      question: "What is Hometown Serenity?",
      answer:
        "Hometown Serenity is a wellness practice led by Ashley Romero, CMH, CAHA, focused on identity reconstruction and integrative mind-body work. It is for anyone who feels buried beneath their titles — parent, partner, professional — and wants to reconnect with who they are beneath the noise.",
    },
    {
      question: "How is this different from traditional therapy?",
      answer:
        "Traditional therapy often begins with what is wrong. Here, we start with what is already right within you. The goal is not to fix you — it is to help you peel back the layers and rediscover the authentic person who has been there all along.",
    },
    {
      question: "Is hypnotherapy safe? Will I lose control?",
      answer:
        "You remain fully aware and in control throughout. Clinical hypnotherapy is nothing like stage hypnosis — it is a gentle, consent-based process that guides you into a relaxed, focused state so your subconscious mind can engage more openly. You can speak, move, or pause at any time.",
    },
    {
      question: "What happens during a discovery call?",
      answer:
        "A discovery call is a complimentary, no-pressure conversation. We talk about what you are experiencing, what you hope to shift, and whether this approach feels like the right fit. From there, we decide together whether to move forward — there is no obligation.",
    },
    {
      question: "What is identity reconstruction?",
      answer:
        "Identity reconstruction is the process of rediscovering who you are beyond the roles you play. When life asks you to be everything for everyone, your own soul's purpose can become a quiet hum in the background. This work helps you turn that volume back up.",
    },
    {
      question: "Which modalities are used in sessions?",
      answer:
        "Sessions may draw on clinical and Ericksonian hypnotherapy, neurolinguistic programming (NLP), somatic movement and breathwork, sound frequency healing, and holistic nutrition guidance — woven together based on what your body and mind respond to best.",
    },
    {
      question: "Can I use the free library without booking?",
      answer:
        "Yes. Visit the Free Library page to stream complimentary guided practices, soundscapes, and reflections — or download them to keep. No account or appointment is required.",
    },
    {
      question: "Are sessions in person or online?",
      answer:
        "Both may be available depending on your location and preference. Virtual sessions work well for hypnotherapy and somatic work — you simply need a private, comfortable space. Details are confirmed when you book your discovery call.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "There is no one-size-fits-all answer. Some people feel a meaningful shift in a few sessions; others prefer ongoing support as they rebuild rhythm and identity. We will talk openly about pace, goals, and what feels sustainable for you.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a free discovery call using the button at the top of this page, or reach out at ashleyromero@hometownserenity.com. You can also explore the free library anytime — listen, download, and see if the approach resonates before committing to a session.",
    },
  ],

  footer: {
    status: "Available for discovery calls",
    tagline:
      "A wellness practice helping you move past fixing into finding — welcome to Hometown Serenity.",
    linkCards: [
      {
        label: "Book A Discovery Call",
        href: "https://calendar.app.google/J9AVNGfGc2SLAXTH9",
        external: true,
        description: "Schedule a complimentary discovery call",
        preview: {
          url: "calendar.app.google",
          image:
            "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80",
          alt: "Calendar booking preview",
          badge: "Booking",
        },
      },
      {
        label: "Free Library",
        href: "/library",
        description: "Stream or download guided practices",
        preview: {
          url: "hometownserenity.com/library",
          image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
          alt: "Free wellness library preview",
          badge: "Library",
        },
      },
      {
        label: "Instagram",
        href: "https://instagram.com/Hometownserenity",
        external: true,
        description: "@Hometownserenity",
        preview: {
          url: "instagram.com/Hometownserenity",
          image:
            "https://images.unsplash.com/photo-1611162617474-5b21e939e966?auto=format&fit=crop&w=800&q=80",
          alt: "Hometown Serenity Instagram preview",
          badge: "Social",
        },
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/search/top?q=Ashley%20Romero%20CMH",
        external: true,
        description: "Ashley Romero CMH",
        preview: {
          url: "facebook.com",
          image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7a784?auto=format&fit=crop&w=800&q=80",
          alt: "Ashley Romero Facebook preview",
          badge: "Community",
        },
      },
      {
        label: "Terms & Support",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSct44Rk_hFcUnsIHfF0kRTqXKQsS_Y2WoHFMgIUqVjdHWpDhQ/viewform",
        external: true,
        description: "Privacy, terms, and client support",
        preview: {
          url: "hometownserenity.com/support",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
          alt: "Support and policies preview",
          badge: "Support",
        },
      },
    ],
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
    copyright: "© 2026 Hometown Serenity · Ashley Romero, CMH, CAHA",
  },
};
