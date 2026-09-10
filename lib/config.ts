export const siteConfig = {
  name: "ArambhHai",
  tagline: "A strong start for your website.",
  description:
    "ArambhHai designs and builds modern, responsive websites for businesses, professionals, schools, and growing brands — customized, not templated.",
  url: "https://www.arambhhai.me",
  email: "team@arambhhai.me",
  phone: "", // optional, replace if a public phone number is available

  // Replace with the live Fiverr profile URL once it is ready.
  // Referenced from a single place so it never needs to be hunted down
  // across components.
  fiverrUrl: "https://www.fiverr.com/", // TODO: replace with official ArambhHai Fiverr profile URL

  socialLinks: {
    instagram: "", // TODO: add once available
    linkedin: "", // TODO: add once available
  },

  nav: [
    { label: "Home", href: "/#top" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/#process" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
