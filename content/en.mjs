// All English text. Mirrors content/nl.mjs key for key.
// Rules: no en or em dashes, no invented facts, prices excl. VAT.
// {placeholders} in curly braces are filled in by src/build.mjs.
export default {
  lang: "en",
  htmlLang: "en",
  locale: "en_GB",

  slugs: {
    home: "",
    services: "services",
    pricing: "pricing",
    cases: "cases",
    about: "about",
    contact: "contact",
    privacy: "privacy",
  },

  // Pages shown in the main menu, in this order.
  nav: ["services", "pricing", "cases", "about", "contact"],
  navLabels: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    cases: "Cases",
    about: "About us",
    contact: "Contact",
    privacy: "Privacy",
  },

  ui: {
    skip: "Skip to content",
    menu: "Menu",
    mainNav: "Main menu",
    homeAlt: "Prehn Consulting, go to the home page",
    langShort: "NL",
    langAria: "Lees deze pagina in het Nederlands",
    book: "Free assessment",
    whatsappLabel: "Questions? Chat on WhatsApp",
    whatsappAria: "Chat with us on WhatsApp",
    whatsappText: "Hi Ioana, I have a question about Prehn Consulting.",
    example: "Example",
    exclVat: "excl. VAT",
    from: "From",
    readMore: "Read more",
    footer: {
      tagline: "Practical IT help for small businesses in the Randstad.",
      area: "Based in Lisse, working across the Randstad.",
      pages: "Pages",
      contact: "Contact",
      company: "Company details",
      kvk: "KvK (Chamber of Commerce)",
      phone: "Call",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
      rights: "All rights reserved.",
    },
  },

  meta: {
    home: {
      title: "Prehn Consulting | Practical IT help in the Bollenstreek",
      description: "Websites, customer management, sales and invoicing, AI and automation for small businesses in the Bollenstreek. Start with a free one-hour assessment.",
    },
    services: {
      title: "Services | Prehn Consulting",
      description: "Websites, CRM, sales, invoicing, AI and automation for small businesses in Lisse and the Bollenstreek. Simple, clear and free of jargon.",
    },
    pricing: {
      title: "Pricing | Prehn Consulting",
      description: "Clear prices for websites, CRM, AI and automation for small businesses in the Bollenstreek. All prices excl. VAT, no hidden costs.",
    },
    cases: {
      title: "Cases | Prehn Consulting",
      description: "What Prehn Consulting does for business owners in the Bollenstreek. Real stories, shared with our clients' permission.",
    },
    about: {
      title: "About us | Prehn Consulting",
      description: "Meet Ioana Vitu and Thomas Prehn: two experienced technology professionals from Lisse who help small businesses with practical IT.",
    },
    contact: {
      title: "Contact | Prehn Consulting",
      description: "Book a free assessment, send a message, call or WhatsApp Prehn Consulting in Lisse.",
    },
    privacy: {
      title: "Privacy statement | Prehn Consulting",
      description: "How Prehn Consulting handles your personal data. No tracking cookies.",
    },
    notFound: {
      title: "Page not found | Prehn Consulting",
      description: "This page does not exist (any more).",
    },
  },

  home: {
    eyebrow: "Local IT help in the Bollenstreek",
    h1: "Less admin.<br><em>More business.</em>",
    lead: "We help small businesses replace scattered tools and repetitive work with a clear website, connected systems, useful AI and smart automation.",
    ctaPrimary: "Book a free coffee",
    ctaSecondary: "See what we do",
    trust: ["First hour is free", "No technical jargon", "Based in Lisse"],
    assess: {
      label: "Your free 60-minute assessment",
      h: "Let's find what is slowing your business down.",
      items: [
        { h: "Where does your time go?", p: "We look at repeated tasks, spreadsheets and double entry." },
        { h: "What do your customers notice?", p: "From finding you online to receiving their invoice." },
        { h: "What would make the biggest difference?", p: "You leave with honest, practical next steps. No obligation." },
      ],
    },
    services: {
      eyebrow: "What we do",
      h: "Technology that makes everyday work easier.",
      p: "We start with your business, not a particular platform. Together we choose the simplest solution that genuinely saves time or helps you serve customers better.",
      link: "All services and prices",
    },
    steps: {
      eyebrow: "How it works",
      h: "Start small. Make it useful.",
      p: "You do not need to arrive with a technical brief. Bring the part of your business that feels messy, slow or frustrating.",
      items: [
        { h: "Coffee and assessment", p: "In a free one-hour conversation, we learn how you work and where technology could help." },
        { h: "A clear recommendation", p: "We explain the best next step, the likely cost and what not to spend money on." },
        { h: "Build and improve", p: "If it feels right, we build the solution with you and keep it understandable." },
      ],
    },
    team: {
      eyebrow: "About us",
      h: "Business understanding and deep technical experience.",
      p: "Two experienced technology professionals based in Lisse. We combine practical business advice with the technical depth to build solutions that last.",
      link: "Meet us",
    },
    testimonials: {
      eyebrow: "Experiences",
      h: "What business owners say",
    },
    local: {
      eyebrow: "Close by, easy to reach",
      h: "IT help with a local face.",
      p: "We work with business owners and small companies across the Bollenstreek. That means we can meet over coffee, see how your business really works and stay close enough to help when you need us.",
      serving: "Serving business owners in places like {areas}.",
      cta: "Get in touch",
      alt: "Illustration of bulb fields with tulips in the Bollenstreek",
    },
  },

  cta: {
    h: "What is taking too much time in your business?",
    p: "Let's look at it together over coffee. The first hour is free and there is no obligation.",
    button: "Choose a time",
  },

  servicesPage: {
    eyebrow: "Services",
    h1: "Help with everything that keeps your business running digitally.",
    lead: "From your website to your invoices. We tackle what makes the biggest difference first, and keep it simple.",
    pricesLink: "See all prices",
    notSure: {
      h: "Not sure where to start?",
      p: "You don't have to be. In the free assessment we work out together what will help most.",
    },
  },

  // Shown on the home page (short) and the services page (with "from" prices).
  serviceGroups: [
    {
      id: "websites",
      icon: "W",
      h: "Websites",
      p: "A clear, professional website that explains what you do and makes it easy for local customers to contact or book you.",
      items: ["New website or redesign", "Works well on phone and computer", "Small updates you can make yourself"],
      from: "€1,250",
    },
    {
      id: "crm",
      icon: "C",
      h: "Customer management (CRM)",
      p: "Customer details, conversations and follow-ups in one place, instead of spread across inboxes, notes and spreadsheets.",
      items: ["A CRM that fits your business", "Customer history and follow-ups", "Connections with tools you already use"],
      from: "€850",
    },
    {
      id: "sales",
      icon: "S",
      h: "Sales",
      p: "See every opportunity in one overview, from first enquiry to signed quote, and know what needs to happen next.",
      items: ["A simple sales pipeline", "Quotes and reminders", "Useful overviews without the fuss"],
      from: "€850",
    },
    {
      id: "invoicing",
      icon: "€",
      h: "Invoicing and admin",
      p: "Less double work and fewer mistakes by connecting your sales to quotes, invoices and payments.",
      items: ["From sale to invoice", "Payment and follow-up reminders", "A clear view of your numbers"],
      from: "€850",
    },
    {
      id: "ai",
      icon: "AI",
      h: "AI for everyday work",
      p: "Use AI where it genuinely helps, without turning your business upside down or putting sensitive information at risk.",
      items: ["Drafting and summarising", "Knowledge assistants and chatbots", "Practical advice and setup"],
      from: "€650 per workflow",
    },
    {
      id: "automation",
      icon: "↻",
      h: "Smart automation",
      p: "Let routine work happen by itself across the applications you already use. You stay in control.",
      items: ["Forms, emails and notifications", "Moving data between systems automatically", "Approvals and recurring tasks"],
      from: "€650 per workflow",
    },
  ],

  // Website packages on the pricing page. "intro: true" uses the intro-offer counter from site.config.mjs.
  packages: [
    {
      id: "onepage",
      intro: true,
      featured: false,
      tag: "First step",
      h: "One-page website",
      fromPrice: false,
      price: "€1,250",
      introPrice: "€950",
      p: "A professional one-page website. A smaller first step for your business.",
      items: ["Mobile-friendly design", "Up to 6 sections", "Two revision rounds"],
      button: "Book a free assessment",
    },
    {
      id: "business",
      intro: false,
      featured: true,
      tag: "Most popular",
      h: "Business website",
      fromPrice: true,
      price: "€2,500",
      introPrice: "",
      p: "A complete website that gives each important service room to be understood.",
      items: [
        "Four to six tailored pages",
        "Clear navigation and page structure",
        "Mobile-friendly design",
        "Forms, booking or Calendly",
        "Basic SEO and privacy-friendly statistics",
        "Domain connection and launch",
      ],
      button: "Book a free assessment",
    },
    {
      id: "automation",
      intro: false,
      featured: false,
      tag: "Connected business",
      h: "Website + automation",
      fromPrice: true,
      price: "€3,950",
      introPrice: "",
      p: "A website connected to the tools and processes that keep your business moving.",
      items: [
        "Everything in the business website",
        "CRM or customer follow-up setup",
        "Booking or enquiry automation",
        "Sales or invoicing connection",
        "AI in your workflow where it helps",
        "Training and handover",
      ],
      button: "Explore the possibilities",
    },
  ],

  pricingPage: {
    eyebrow: "Clear pricing",
    h1: "Start small.<br><em>Know the cost.</em>",
    lead: "Every business is different, but the price should never be a mystery. These packages cover the needs we see most often. After your free assessment, you receive a clear proposal and a fixed price before any work begins.",
    trust: ["Prices excl. VAT", "No hidden costs", "Two revision rounds included"],
    packagesLabel: "Website packages",
    introOffer: {
      label: "Introductory offer",
      text: "The first {total} clients get a one-page website for {price} excl. VAT.",
      regular: "Regular price",
      left: "{left} of {total} places left",
      booked: "{n} booked",
      available: "{n} available",
    },
    other: {
      eyebrow: "Other services",
      h: "Support beyond the website.",
      p: "Sometimes you do not need a new website. You need one part of your daily work to become simpler, faster or more reliable.",
      note: "The final price depends on the tools involved and how complex your process is. You always approve the price before we begin.",
      rows: [
        { label: "Business and process assessment", price: "First hour free" },
        { label: "Customer management or CRM setup", price: "From €850" },
        { label: "Sales or invoicing process improvement", price: "From €850" },
        { label: "AI and automation setup", price: "From €650 per workflow" },
        { label: "Additional consulting or development", price: "€100 per hour" },
        { label: "Website care and small updates", price: "From €69 per month" },
      ],
      disclaimer: "All prices are excl. VAT and exclude licences for off-the-shelf software.",
    },
    included: {
      h: "Included in every website",
      p: "We take care of everything needed to get your website live and working properly.",
      items: [
        "Free one-hour assessment",
        "A clear proposal and agreed scope",
        "Design for phone and computer",
        "Two revision rounds",
        "Launch support and a simple handover",
      ],
    },
    separate: {
      h: "Priced separately when you need it",
      p: "This keeps your base price fair when you do not need these extras.",
      items: [
        "Logo and full brand identity",
        "Professional photography or paid images",
        "Extensive copywriting or translations",
        "Webshops and online payments",
        "Software licences, domain and email fees",
      ],
    },
    cta: {
      h: "Not sure which option fits?",
      p: "Let's look at your business together over coffee. The first hour is free, practical and without obligation.",
      button: "Choose a time",
    },
  },

  // Client cases. Only real stories, with the client's permission.
  cases: [
    {
      placeholder: false,
      client: "Open Work Culture",
      url: "https://www.openworkculture.com/",
      tag: "Web application",
      h: "From website to an AI platform about workplace culture",
      situation: "Open Work Culture already had a website and wanted to use AI to show people what the culture at a company is really like. But how, and what was needed? Building an API and a database was hard to get to grips with.",
      did: "Ioana coached Open Work Culture and built the platform together with them, from design to launch. Visitors can now look up a company's culture score, fill in a short survey about their workplace experience or take a Career Fit Check.",
      result: "Live since August 2026.",
      quote: "I had a website and wanted to use AI, but wasn’t sure how or what I needed. Even after a chat with an AI assistant, building an API and a database was hard to get my head around. Prehn Consulting coached me and built the platform with me.",
      by: "Open Work Culture",
    },
    {
      placeholder: false,
      client: "Oracle of Nine",
      url: "https://oracleofnine.com/",
      tag: "Web application",
      h: "From idea to an online test that explains your choices",
      situation: "Oracle of Nine had an idea of what they wanted to build: a test that shows which archetype shapes your choices, based on the nine Enneagram types.",
      did: "Ioana did everything, from design and build to launch. A 27-question test that takes about 6 minutes, pages on the nine archetypes, conversations with a mentor, accounts and a pricing page.",
      result: "Live since October 2026.",
      quote: "I came to Prehn Consulting with nothing more than an idea. Within weeks it was real. They think along with you, they’re flexible and they’re genuinely easy to work with.",
      by: "Oracle of Nine",
    },
  ],

  casesPage: {
    eyebrow: "Cases",
    h1: "What we do for business owners.",
    lead: "We only share real stories here, with our clients' permission. Curious what we could do for a business like yours? Just ask us.",
    labels: { situation: "The situation", did: "What we did", result: "The result" },
    empty: "The first client stories will appear here soon.",
    testimonialsH: "What clients say",
  },

  // Testimonials. Only real ones, with permission. name and role may be empty.
  testimonials: [
    {
      placeholder: false,
      quote: "I had a website and wanted to use AI, but wasn’t sure how or what I needed. Even after a chat with an AI assistant, building an API and a database was hard to get my head around. Prehn Consulting coached me and built the platform with me.",
      name: "",
      role: "",
      business: "Open Work Culture",
    },
    {
      placeholder: false,
      quote: "I came to Prehn Consulting with nothing more than an idea. Within weeks it was real. They think along with you, they’re flexible and they’re genuinely easy to work with.",
      name: "",
      role: "",
      business: "Oracle of Nine",
    },
  ],

  team: [
    {
      id: "ioana",
      name: "Ioana Vitu",
      initials: "IV",
      role: "Business and technical consultant",
      bio: "I turn complicated business needs into practical solutions people actually use. My experience spans business analysis, process improvement, solution architecture, websites, AI and hands-on delivery. I have worked with the European Medicines Agency, Nissan and Sonova, in sales, finance and regulated sectors. Today, I help small businesses work better through technology, without unnecessary complexity.",
      chips: ["Websites", "Business processes", "AI and automation", "Digital solutions"],
      photo: "",
      linkedin: "ioana",
    },
    {
      id: "thomas",
      name: "Thomas Prehn",
      initials: "TP",
      role: "Technical architect and developer",
      bio: "I am a senior technical architect, consultant and developer with more than 20 years of experience. I have designed and delivered business-critical digital solutions for organisations including Eneco, APG, De Nederlandsche Bank and the European Medicines Agency. My strengths are software development, cloud technology, automation and connecting systems.",
      chips: ["Technical architecture", "Software development", "Automation", "Cloud and integrations"],
      photo: "",
      linkedin: "thomas",
    },
  ],

  about: {
    eyebrow: "About us",
    h1: "Two people from Lisse who make technology understandable.",
    lead: "Two experienced technology professionals based in Lisse. We combine practical business advice with the technical depth to build solutions that last.",
    teamH: "Who we are",
    linkedinLabel: "LinkedIn profile of {name}",
    how: {
      h: "How we work",
      items: [
        { h: "Your business first", p: "We start with how you work, not with a particular system." },
        { h: "Plain language", p: "No jargon. We explain what we do and why." },
        { h: "Honest advice", p: "We also tell you what not to spend money on." },
        { h: "Close by", p: "We are based in Lisse. Meeting for coffee is easy to arrange." },
      ],
    },
  },

  contact: {
    eyebrow: "Contact",
    h1: "Let's get to know each other.",
    lead: "Book a free assessment straight away, send a message, call or WhatsApp us. Whatever is easiest for you.",
    form: {
      h: "Send a message",
      name: "Name",
      email: "Email address",
      phone: "Phone number (optional)",
      business: "Business (optional)",
      message: "How can we help?",
      required: "required",
      send: "Send message",
      mailSubject: "Question via the website",
      mailNote: "Your email program opens with your message ready to send.",
      privacy: "We only use your details to answer your question. See also our {link}.",
      privacyLink: "privacy statement",
      sending: "Sending...",
      success: "Thank you! We have received your message.",
      error: "Something went wrong. Please try again or email us directly.",
    },
    direct: {
      h: "Direct contact",
      book: "Book a free assessment",
      bookP: "Pick a time for a one-hour conversation. Free and without obligation.",
      phone: "Call",
      whatsapp: "WhatsApp",
      email: "Email",
      address: "Address",
      area: "Area",
    },
  },

  privacy: {
    h1: "Privacy statement",
    updated: "Last updated: 18 November 2026",
    sections: [
      {
        h: "Who we are",
        p: [
          "This website belongs to {legalName}, trading as Prehn Consulting, located at {address}. KvK: {kvk}. We are responsible for processing your personal data as described in this statement.",
          "Questions about privacy? Email {email} or call {phone}.",
        ],
      },
      {
        h: "What data we use and why",
        p: [
          "When you contact us through the form, email, phone or WhatsApp, we use your name, contact details and message to answer your question and, if you want, to prepare a quote. The legal basis is your request and our legitimate interest in replying.",
          "If you become a client, we use your details to carry out the agreed work and to invoice it. The legal basis is the contract and our legal obligation to keep business records.",
        ],
      },
      {
        h: "Cookies and statistics",
        p: [
          "This website sets no tracking cookies and uses no advertising pixels. That is why you see no cookie banner.",
          "If you book a meeting through Calendly, we only load Calendly after you click the button. Calendly may then set its own cookies. Calendly's privacy statement applies to those.",
          "If we use visitor statistics, we only use a privacy-friendly service without cookies that cannot recognise you.",
        ],
      },
      {
        h: "Who we share data with",
        p: [
          "We never sell your data. We use a few services that process data for us: our website host (Cloudflare), our email provider, Calendly for meetings if you choose it, WhatsApp if you message us there, and our accounting software for invoices. Where needed, we have agreements with them about protecting your data.",
        ],
      },
      {
        h: "How long we keep data",
        p: [
          "We keep messages and contact details as long as needed to handle your question and continue any work together. Invoices and the related records are kept for 7 years, because Dutch law requires it.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You may view, correct or delete your data, and object to its use. Send a message to {email}. We reply within one month.",
          "Not happy with how we handle your data? You can file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).",
        ],
      },
      {
        h: "Security",
        p: [
          "This website uses a secure connection (https). We handle your data with care and only give access to people who need it.",
        ],
      },
    ],
  },

  notFound: {
    h1: "This page does not exist (any more).",
    p: "The link may be out of date. Go back to the home page or get in touch.",
    home: "Go to the home page",
    contact: "Get in touch",
  },
};
