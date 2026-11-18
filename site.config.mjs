// Company facts used on every page (footer, contact, JSON-LD, legal pages).
// Values starting with "TODO" are flagged by the build and must be filled in before launch.
export default {
  siteUrl: "https://www.prehnconsulting.nl",
  brand: "Prehn Consulting",
  legalName: "Thomas Prehn Consulting B.V.",
  street: "Heereweg 305",          // registered address - update after the move if it changes
  postcode: "2161 BJ",
  city: "Lisse",
  country: "NL",
  kvk: "77010183",                  // KvK number (required in the footer)
  email: "info@prehnconsulting.nl",
  phoneDisplay: "06 5188 5824",
  phoneHref: "+31651885824",
  whatsapp: "https://wa.me/31651885824",
  calendly: "https://calendly.com/ioana-vitu/coffee-and-discovery",
  linkedin: {
    company: "",                    // add once the LinkedIn company page exists
    ioana: "https://www.linkedin.com/in/ioana-vitu",
    thomas: "https://www.linkedin.com/in/thomasprehn",
  },
  // Contact form: leave empty to fall back to a pre-filled email.
  // Fill with a form endpoint (e.g. Formspree, Basin, or a Cloudflare Pages Function) to post directly.
  formAction: "",
  // Introductory offer counter on the pricing page. Set to 0 to hide the offer.
  introSpotsTotal: 5,
  introSpotsLeft: 3,
  areaServed: ["Lisse", "Hillegom", "Sassenheim", "Noordwijk", "Voorhout", "Leiden", "Den Haag", "Amsterdam"],
};
