// All Dutch text. content/en.mjs mirrors this file key for key.
// Rules: "je/jij", no en or em dashes, no invented facts, prices excl. btw.
// {placeholders} in curly braces are filled in by src/build.mjs.
export default {
  lang: "nl",
  htmlLang: "nl-NL",
  locale: "nl_NL",

  slugs: {
    home: "",
    services: "diensten",
    pricing: "prijzen",
    cases: "cases",
    about: "over-ons",
    contact: "contact",
    privacy: "privacy",
  },

  // Pages shown in the main menu, in this order.
  nav: ["services", "pricing", "cases", "about", "contact"],
  navLabels: {
    home: "Home",
    services: "Diensten",
    pricing: "Prijzen",
    cases: "Cases",
    about: "Over ons",
    contact: "Contact",
    privacy: "Privacy",
  },

  ui: {
    skip: "Direct naar de inhoud",
    menu: "Menu",
    mainNav: "Hoofdmenu",
    homeAlt: "Prehn Consulting, naar de homepage",
    langShort: "EN",
    langAria: "Read this page in English",
    book: "Gratis kennismaking",
    whatsappLabel: "Vragen? Chat via WhatsApp",
    whatsappAria: "Chat met ons via WhatsApp",
    whatsappText: "Hallo Ioana, ik heb een vraag over Prehn Consulting.",
    example: "Voorbeeld",
    exclVat: "excl. btw",
    from: "Vanaf",
    readMore: "Lees meer",
    footer: {
      tagline: "Praktische IT-hulp voor kleine bedrijven in de Randstad.",
      area: "Gevestigd in Lisse, actief in de hele Randstad.",
      pages: "Pagina's",
      contact: "Contact",
      company: "Bedrijfsgegevens",
      kvk: "KvK",
      phone: "Bel",
      whatsapp: "WhatsApp",
      email: "E-mail",
      linkedin: "LinkedIn",
      rights: "Alle rechten voorbehouden.",
    },
  },

  meta: {
    home: {
      title: "Prehn Consulting | Praktische IT-hulp in de Bollenstreek",
      description: "Websites, klantbeheer, verkoop en facturatie, AI en automatisering voor kleine bedrijven in de Bollenstreek. Begin met een gratis kennismaking van een uur.",
    },
    services: {
      title: "Diensten | Prehn Consulting",
      description: "Websites, CRM, verkoop, facturatie, AI en automatisering voor kleine bedrijven in Lisse en de Bollenstreek. Eenvoudig, begrijpelijk en zonder vakjargon.",
    },
    pricing: {
      title: "Prijzen | Prehn Consulting",
      description: "Duidelijke prijzen voor websites, CRM, AI en automatisering voor kleine bedrijven in de Bollenstreek. Alle prijzen excl. btw, zonder verborgen kosten.",
    },
    cases: {
      title: "Cases | Prehn Consulting",
      description: "Wat Prehn Consulting doet voor ondernemers in de Bollenstreek. Echte verhalen, gedeeld met toestemming van onze klanten.",
    },
    about: {
      title: "Over ons | Prehn Consulting",
      description: "Maak kennis met Ioana Vitu en Thomas Prehn: twee ervaren technologen uit Lisse die kleine bedrijven helpen met praktische IT.",
    },
    contact: {
      title: "Contact | Prehn Consulting",
      description: "Plan een gratis kennismaking, stuur een bericht, bel of app Prehn Consulting in Lisse.",
    },
    privacy: {
      title: "Privacyverklaring | Prehn Consulting",
      description: "Hoe Prehn Consulting omgaat met je persoonsgegevens. Geen trackingcookies.",
    },
    notFound: {
      title: "Pagina niet gevonden | Prehn Consulting",
      description: "Deze pagina bestaat niet (meer).",
    },
  },

  home: {
    eyebrow: "Lokale IT-hulp in de Bollenstreek",
    h1: "Minder administratie.<br><em>Meer ondernemen.</em>",
    lead: "We helpen kleine bedrijven om losse tools en terugkerend werk te vervangen door een heldere website, systemen die met elkaar praten, nuttige AI en slimme automatisering.",
    ctaPrimary: "Plan een gratis koffie",
    ctaSecondary: "Bekijk wat we doen",
    trust: ["Eerste uur gratis", "Zonder vakjargon", "Gevestigd in Lisse"],
    assess: {
      label: "Je gratis kennismaking van 60 minuten",
      h: "Samen ontdekken wat je bedrijf ophoudt.",
      items: [
        { h: "Waar gaat je tijd naartoe?", p: "We kijken naar herhaalde taken, spreadsheets en dubbel werk." },
        { h: "Wat merken je klanten?", p: "Van je online vinden tot het ontvangen van een factuur." },
        { h: "Wat maakt het grootste verschil?", p: "Je gaat weg met eerlijke, praktische volgende stappen. Zonder verplichting." },
      ],
    },
    services: {
      eyebrow: "Wat we doen",
      h: "Technologie die je dagelijkse werk makkelijker maakt.",
      p: "We beginnen bij je bedrijf, niet bij een bepaald systeem. Samen kiezen we de eenvoudigste oplossing die echt tijd bespaart of je klanten beter helpt.",
      link: "Alle diensten en prijzen",
    },
    steps: {
      eyebrow: "Hoe het werkt",
      h: "Begin klein. Maak het bruikbaar.",
      p: "Je hoeft geen technisch plan mee te nemen. Neem het deel van je bedrijf mee dat rommelig, traag of frustrerend voelt.",
      items: [
        { h: "Koffie en kennismaking", p: "In een gratis gesprek van een uur leren we hoe je werkt en waar technologie kan helpen." },
        { h: "Een helder advies", p: "We vertellen wat de beste volgende stap is, wat het ongeveer kost en waar je geen geld aan hoeft uit te geven." },
        { h: "Bouwen en verbeteren", p: "Voelt het goed? Dan bouwen we de oplossing samen met je en houden we het begrijpelijk." },
      ],
    },
    team: {
      eyebrow: "Over ons",
      h: "Zakelijk inzicht en diepe technische ervaring.",
      p: "Twee ervaren technologen uit Lisse. We combineren praktisch zakelijk advies met de technische kennis om oplossingen te bouwen die blijven werken.",
      link: "Maak kennis met ons",
    },
    testimonials: {
      eyebrow: "Ervaringen",
      h: "Wat ondernemers zeggen",
    },
    local: {
      eyebrow: "Dichtbij en makkelijk bereikbaar",
      h: "IT-hulp met een lokaal gezicht.",
      p: "We werken voor ondernemers en kleine bedrijven in de hele Bollenstreek. Zo kunnen we samen koffie drinken, zien hoe je bedrijf echt werkt en dichtbij zijn als je ons nodig hebt.",
      serving: "Voor ondernemers in onder andere {areas}.",
      cta: "Neem contact op",
      alt: "Illustratie van bollenvelden met tulpen in de Bollenstreek",
    },
  },

  cta: {
    h: "Wat kost in jouw bedrijf te veel tijd?",
    p: "Laten we er samen naar kijken, bij een kop koffie. Het eerste uur is gratis en vrijblijvend.",
    button: "Kies een moment",
  },

  servicesPage: {
    eyebrow: "Diensten",
    h1: "Hulp bij alles wat je bedrijf digitaal laat draaien.",
    lead: "Van je website tot je facturen. We pakken eerst aan wat het meeste oplevert en houden het eenvoudig.",
    pricesLink: "Bekijk alle prijzen",
    notSure: {
      h: "Weet je niet waar je moet beginnen?",
      p: "Dat hoeft ook niet. In de gratis kennismaking zoeken we samen uit wat de grootste winst oplevert.",
    },
  },

  // Shown on the home page (short) and the services page (with "from" prices).
  serviceGroups: [
    {
      id: "websites",
      icon: "W",
      h: "Websites",
      p: "Een duidelijke, professionele website die uitlegt wat je doet en het lokale klanten makkelijk maakt om contact op te nemen of een afspraak te boeken.",
      items: ["Nieuwe website of vernieuwing", "Werkt goed op telefoon en computer", "Kleine aanpassingen doe je zelf"],
      from: "€1.250",
    },
    {
      id: "crm",
      icon: "C",
      h: "Klantbeheer (CRM)",
      p: "Klantgegevens, gesprekken en opvolging op één plek, in plaats van verspreid over je mailbox, briefjes en spreadsheets.",
      items: ["Een CRM dat bij je bedrijf past", "Klantgeschiedenis en opvolging", "Koppelingen met tools die je al gebruikt"],
      from: "€850",
    },
    {
      id: "sales",
      icon: "V",
      h: "Verkoop",
      p: "Zie elke kans in één overzicht, van eerste vraag tot getekende offerte, en weet wat er als volgende moet gebeuren.",
      items: ["Een eenvoudige verkooppijplijn", "Offertes en herinneringen", "Overzichten zonder gedoe"],
      from: "€850",
    },
    {
      id: "invoicing",
      icon: "€",
      h: "Facturatie en administratie",
      p: "Minder dubbel werk en minder fouten door je verkoop te koppelen aan offertes, facturen en betalingen.",
      items: ["Van verkoop naar factuur", "Betaal- en opvolgherinneringen", "Helder inzicht in je cijfers"],
      from: "€850",
    },
    {
      id: "ai",
      icon: "AI",
      h: "AI voor het dagelijkse werk",
      p: "AI gebruiken waar het echt helpt, zonder je bedrijf op zijn kop te zetten of gevoelige gegevens in gevaar te brengen.",
      items: ["Teksten opstellen en samenvatten", "Kennisassistenten en chatbots", "Praktisch advies en inrichting"],
      from: "€650 per workflow",
    },
    {
      id: "automation",
      icon: "↻",
      h: "Slimme automatisering",
      p: "Laat routinewerk vanzelf gaan tussen de programma's die je al gebruikt. Jij houdt de controle.",
      items: ["Formulieren, e-mails en meldingen", "Gegevens automatisch overzetten", "Goedkeuringen en terugkerende taken"],
      from: "€650 per workflow",
    },
  ],

  // Website packages on the pricing page. "intro: true" uses the intro-offer counter from site.config.mjs.
  packages: [
    {
      id: "onepage",
      intro: true,
      featured: false,
      tag: "Eerste stap",
      h: "Website van één pagina",
      fromPrice: false,
      price: "€1.250",
      introPrice: "€950",
      p: "Een professionele website op één pagina. Een kleinere eerste stap voor je bedrijf.",
      items: ["Mobielvriendelijk ontwerp", "Tot 6 secties", "Twee correctierondes"],
      button: "Boek een gratis kennismaking",
    },
    {
      id: "business",
      intro: false,
      featured: true,
      tag: "Meest gekozen",
      h: "Bedrijfswebsite",
      fromPrice: true,
      price: "€2.500",
      introPrice: "",
      p: "Een complete website waarin elke belangrijke dienst de ruimte krijgt.",
      items: [
        "Vier tot zes pagina's op maat",
        "Duidelijke navigatie en paginastructuur",
        "Mobielvriendelijk ontwerp",
        "Formulieren, afspraken of Calendly",
        "Basis SEO en privacyvriendelijke statistieken",
        "Domein koppelen en livegang",
      ],
      button: "Boek een gratis kennismaking",
    },
    {
      id: "automation",
      intro: false,
      featured: false,
      tag: "Verbonden bedrijf",
      h: "Website + automatisering",
      fromPrice: true,
      price: "€3.950",
      introPrice: "",
      p: "Een website die verbonden is met de tools en processen die je bedrijf draaiende houden.",
      items: [
        "Alles uit de bedrijfswebsite",
        "CRM of klantopvolging inrichten",
        "Automatische afspraken of aanvragen",
        "Koppeling met verkoop of facturatie",
        "AI in je werkproces waar het helpt",
        "Uitleg en overdracht",
      ],
      button: "Bekijk de mogelijkheden",
    },
  ],

  pricingPage: {
    eyebrow: "Duidelijke prijzen",
    h1: "Begin klein.<br><em>Weet wat het kost.</em>",
    lead: "Elk bedrijf is anders, maar de prijs mag nooit een raadsel zijn. Deze pakketten passen bij wat we het vaakst zien. Na de gratis kennismaking krijg je een helder voorstel met een vaste prijs, voordat we beginnen.",
    trust: ["Prijzen excl. btw", "Geen verborgen kosten", "Twee correctierondes inbegrepen"],
    packagesLabel: "Websitepakketten",
    introOffer: {
      label: "Introductieaanbod",
      text: "De eerste {total} klanten krijgen een website van één pagina voor {price} excl. btw.",
      regular: "Normale prijs",
      left: "Nog {left} van de {total} plekken beschikbaar",
      booked: "{n} geboekt",
      available: "{n} beschikbaar",
    },
    other: {
      eyebrow: "Andere diensten",
      h: "Ondersteuning naast je website.",
      p: "Soms heb je geen nieuwe website nodig, maar wil je één deel van je dagelijkse werk eenvoudiger, sneller of betrouwbaarder maken.",
      note: "De uiteindelijke prijs hangt af van de tools en hoe ingewikkeld je proces is. Je keurt de prijs altijd goed voordat we beginnen.",
      rows: [
        { label: "Bedrijfs- en procesanalyse", price: "Eerste uur gratis" },
        { label: "Klantbeheer of CRM inrichten", price: "Vanaf €850" },
        { label: "Verkoop- of facturatieproces verbeteren", price: "Vanaf €850" },
        { label: "AI en automatisering inrichten", price: "Vanaf €650 per workflow" },
        { label: "Extra advies of ontwikkeling", price: "€100 per uur" },
        { label: "Websiteonderhoud en kleine updates", price: "Vanaf €69 per maand" },
      ],
      disclaimer: "Alle prijzen zijn excl. btw en exclusief licenties voor standaardsoftware.",
    },
    included: {
      h: "Bij elke website inbegrepen",
      p: "We regelen alles wat nodig is om je website live te zetten en goed te laten werken.",
      items: [
        "Gratis kennismaking van een uur",
        "Een helder voorstel en afgesproken omvang",
        "Ontwerp voor telefoon en computer",
        "Twee correctierondes",
        "Hulp bij livegang en een eenvoudige overdracht",
      ],
    },
    separate: {
      h: "Apart geprijsd als je het nodig hebt",
      p: "Zo blijft je basisprijs eerlijk als je deze extra's niet nodig hebt.",
      items: [
        "Logo en volledige huisstijl",
        "Professionele fotografie of betaalde beelden",
        "Uitgebreide teksten of vertalingen",
        "Webshops en online betalen",
        "Softwarelicenties, domein- en e-mailkosten",
      ],
    },
    cta: {
      h: "Twijfel je welke optie past?",
      p: "Laten we samen naar je bedrijf kijken, bij een kop koffie. Het eerste uur is gratis, praktisch en vrijblijvend.",
      button: "Kies een moment",
    },
  },

  // Client cases. Only real stories, with the client's permission.
  cases: [
    {
      placeholder: false,
      client: "Open Work Culture",
      url: "https://www.openworkculture.com/",
      tag: "Webapplicatie",
      h: "Van website naar een AI-platform over werkcultuur",
      situation: "Open Work Culture had al een website en wilde AI gebruiken om mensen te laten zien hoe de werkcultuur bij een bedrijf echt is. Maar hoe, en wat was daarvoor nodig? Een API en een database bouwen bleef lastig te begrijpen.",
      did: "Ioana coachte Open Work Culture en bouwde het platform samen met hen, van ontwerp tot livegang. Bezoekers zoeken nu de cultuurscore van een bedrijf op, vullen in een paar minuten een vragenlijst over hun werkervaring in of doen een Career Fit Check.",
      result: "Live sinds augustus 2026.",
      quote: "Ik had een website en wilde AI gebruiken, maar wist niet hoe of wat ik nodig had. Zelfs na een gesprek met een AI-assistent bleef een API en database bouwen lastig te begrijpen. Prehn Consulting heeft me gecoacht en het platform samen met mij gebouwd.",
      by: "Open Work Culture",
    },
    {
      placeholder: false,
      client: "Oracle of Nine",
      url: "https://oracleofnine.com/",
      tag: "Webapplicatie",
      h: "Van idee naar een online test die je keuzes verklaart",
      situation: "Oracle of Nine had een idee van wat ze wilden maken: een test die laat zien welk archetype je keuzes stuurt, gebaseerd op de negen enneagramtypes.",
      did: "Ioana deed alles, van ontwerp en bouw tot livegang. Een test van 27 vragen die je in ongeveer 6 minuten invult, pagina's over de negen archetypen, gesprekken met een mentor, accounts en een prijzenpagina.",
      result: "Live sinds oktober 2026.",
      quote: "Ik kwam bij Prehn Consulting met alleen een idee. Binnen een paar weken stond het er echt. Ze denken mee, zijn flexibel en het samenwerken voelt heel makkelijk.",
      by: "Oracle of Nine",
    },
  ],

  casesPage: {
    eyebrow: "Cases",
    h1: "Wat we voor ondernemers doen.",
    lead: "We delen hier alleen echte verhalen, met toestemming van onze klanten. Benieuwd wat we voor een bedrijf zoals het jouwe kunnen doen? Vraag het ons gerust.",
    labels: { situation: "De situatie", did: "Wat we deden", result: "Het resultaat" },
    empty: "Binnenkort lees je hier de eerste klantverhalen.",
    testimonialsH: "Wat klanten zeggen",
  },

  // Testimonials. Only real ones, with permission. name and role may be empty.
  testimonials: [
    {
      placeholder: false,
      quote: "Ik had een website en wilde AI gebruiken, maar wist niet hoe of wat ik nodig had. Zelfs na een gesprek met een AI-assistent bleef een API en database bouwen lastig te begrijpen. Prehn Consulting heeft me gecoacht en het platform samen met mij gebouwd.",
      name: "",
      role: "",
      business: "Open Work Culture",
    },
    {
      placeholder: false,
      quote: "Ik kwam bij Prehn Consulting met alleen een idee. Binnen een paar weken stond het er echt. Ze denken mee, zijn flexibel en het samenwerken voelt heel makkelijk.",
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
      role: "Business- en technisch consultant",
      bio: "Ik vertaal ingewikkelde bedrijfsvragen naar praktische oplossingen die mensen echt gebruiken. Mijn ervaring ligt in bedrijfsanalyse, procesverbetering, solution architecture, websites, AI en het echt opleveren. Ik werkte onder meer voor het Europees Geneesmiddelenbureau (EMA), Nissan en Sonova, in sales, finance en gereguleerde sectoren. Nu help ik kleine bedrijven beter te werken met technologie, zonder onnodige ingewikkeldheid.",
      chips: ["Websites", "Bedrijfsprocessen", "AI en automatisering", "Digitale oplossingen"],
      photo: "",
      linkedin: "ioana",
    },
    {
      id: "thomas",
      name: "Thomas Prehn",
      initials: "TP",
      role: "Technisch architect en ontwikkelaar",
      bio: "Ik ben senior technisch architect, consultant en ontwikkelaar met meer dan 20 jaar ervaring. Ik ontwierp en bouwde bedrijfskritische digitale oplossingen voor onder meer Eneco, APG, De Nederlandsche Bank en het Europees Geneesmiddelenbureau (EMA). Mijn kracht ligt in softwareontwikkeling, cloudtechnologie, automatisering en het koppelen van systemen.",
      chips: ["Technische architectuur", "Softwareontwikkeling", "Automatisering", "Cloud en koppelingen"],
      photo: "",
      linkedin: "thomas",
    },
  ],

  about: {
    eyebrow: "Over ons",
    h1: "Twee mensen uit Lisse die techniek begrijpelijk maken.",
    lead: "Twee ervaren technologen uit Lisse. We combineren praktisch zakelijk advies met de technische kennis om oplossingen te bouwen die blijven werken.",
    teamH: "Wie we zijn",
    linkedinLabel: "LinkedIn-profiel van {name}",
    how: {
      h: "Zo werken we",
      items: [
        { h: "Je bedrijf eerst", p: "We beginnen bij hoe jij werkt, niet bij een bepaald systeem." },
        { h: "Gewone taal", p: "Geen vakjargon. We leggen uit wat we doen en waarom." },
        { h: "Eerlijk advies", p: "We vertellen ook waar je geen geld aan hoeft uit te geven." },
        { h: "Dichtbij", p: "We zitten in Lisse. Een kop koffie samen is zo geregeld." },
      ],
    },
  },

  contact: {
    eyebrow: "Contact",
    h1: "Laten we kennismaken.",
    lead: "Plan direct een gratis kennismaking, stuur een bericht, bel of app ons. Wat voor jou het makkelijkst is.",
    form: {
      h: "Stuur een bericht",
      name: "Naam",
      email: "E-mailadres",
      phone: "Telefoonnummer (optioneel)",
      business: "Bedrijf (optioneel)",
      message: "Waar kunnen we je mee helpen?",
      required: "verplicht",
      send: "Verstuur bericht",
      mailSubject: "Vraag via de website",
      mailNote: "Je e-mailprogramma opent met je bericht klaar om te versturen.",
      privacy: "We gebruiken je gegevens alleen om je vraag te beantwoorden. Lees ook onze {link}.",
      privacyLink: "privacyverklaring",
      sending: "Bezig met versturen...",
      success: "Bedankt! We hebben je bericht ontvangen.",
      error: "Er ging iets mis. Probeer het opnieuw of mail ons direct.",
    },
    direct: {
      h: "Direct contact",
      book: "Plan een gratis kennismaking",
      bookP: "Kies zelf een moment voor een gesprek van een uur. Gratis en vrijblijvend.",
      phone: "Bel",
      whatsapp: "WhatsApp",
      email: "E-mail",
      address: "Adres",
      area: "Werkgebied",
    },
  },

  privacy: {
    h1: "Privacyverklaring",
    updated: "Laatst bijgewerkt: 18 november 2026",
    sections: [
      {
        h: "Wie we zijn",
        p: [
          "Deze website is van {legalName}, handelend onder de naam Prehn Consulting, gevestigd aan {address}. KvK: {kvk}. Wij zijn verantwoordelijk voor de verwerking van je persoonsgegevens zoals beschreven in deze verklaring.",
          "Vragen over privacy? Mail naar {email} of bel {phone}.",
        ],
      },
      {
        h: "Welke gegevens we gebruiken en waarom",
        p: [
          "Als je contact met ons opneemt via het formulier, e-mail, telefoon of WhatsApp, gebruiken we je naam, contactgegevens en je bericht om je vraag te beantwoorden en, als je dat wilt, een offerte te maken. De grondslag is je verzoek en ons gerechtvaardigd belang om te reageren.",
          "Word je klant, dan gebruiken we je gegevens om de afgesproken opdracht uit te voeren en te factureren. De grondslag is de overeenkomst en onze wettelijke plicht om administratie te bewaren.",
        ],
      },
      {
        h: "Cookies en statistieken",
        p: [
          "Deze website plaatst geen trackingcookies en gebruikt geen advertentiepixels. Daarom zie je geen cookiemelding.",
          "Plan je een afspraak via Calendly, dan laden we Calendly pas nadat je op de knop klikt. Calendly kan dan eigen cookies plaatsen. Daarvoor geldt de privacyverklaring van Calendly.",
          "Gebruiken we bezoekersstatistieken, dan alleen een privacyvriendelijke dienst zonder cookies en zonder dat we je kunnen herkennen.",
        ],
      },
      {
        h: "Met wie we gegevens delen",
        p: [
          "We verkopen je gegevens nooit. We gebruiken een paar diensten die gegevens voor ons verwerken: onze websitehost (Cloudflare), onze e-maildienst, Calendly voor afspraken als je die kiest, WhatsApp als je ons daar een bericht stuurt, en onze boekhoudsoftware voor facturen. Waar nodig hebben we met hen afspraken gemaakt over de bescherming van je gegevens.",
        ],
      },
      {
        h: "Hoe lang we gegevens bewaren",
        p: [
          "Berichten en contactgegevens bewaren we zolang nodig is om je vraag af te handelen en een eventuele samenwerking voort te zetten. Facturen en de bijbehorende administratie bewaren we 7 jaar, omdat de wet dat verplicht.",
        ],
      },
      {
        h: "Je rechten",
        p: [
          "Je mag je gegevens inzien, laten aanpassen of laten verwijderen, en bezwaar maken tegen het gebruik ervan. Stuur daarvoor een bericht naar {email}. We reageren binnen een maand.",
          "Ben je niet tevreden over hoe we met je gegevens omgaan? Dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.",
        ],
      },
      {
        h: "Beveiliging",
        p: [
          "Deze website werkt via een beveiligde verbinding (https). We gaan zorgvuldig om met je gegevens en geven alleen toegang aan wie dat nodig heeft.",
        ],
      },
    ],
  },

  notFound: {
    h1: "Deze pagina bestaat niet (meer).",
    p: "Misschien is de link verouderd. Ga terug naar de homepage of neem contact met ons op.",
    home: "Naar de homepage",
    contact: "Neem contact op",
  },
};
