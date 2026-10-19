// Central place for the agency's brand and contact details.
// Prince: fill in your REAL details below — they appear on the
// contact page, footer, and the WhatsApp enquiry button.

export const site = {
  // Brand name shown across the site.
  // NOTE: kept as "Rathore" (matches current site content). If your
  // brand is spelled "Rathor", change it here — the whole site updates.
  name: "Rathore Digital Marketing Agency",
  shortName: "Rathore Agency",

  // Website URL (used for sitemap, robots.txt and SEO tags).
  // Replace with the real domain once the site is deployed.
  url: "https://rathoredigital.com",

  // Contact details — REPLACE the placeholders with real ones.
  email: "hello@rathoreagency.com",
  phone: "+91 98765 43210",
  // WhatsApp number in international format WITHOUT "+" or spaces.
  // Example: "919876543210". Enquiries open a WhatsApp chat to this number.
  whatsapp: "919876543210",
  addressLines: ["India"],
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
