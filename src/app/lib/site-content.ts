export const assets = {
  hero: "/figma-assets/hero-slide-1.png",
  badgeNav: "/figma-assets/badge-nav-custom.png",
  galleryMain: "/figma-assets/gallery-main.png",
  galleryLeft: "/figma-assets/gallery-left.png",
  galleryRight: "/figma-assets/gallery-right.png",
  galleryFarRight: "/figma-assets/gallery-far-right.png",
  menuOne: "/figma-assets/menu-one.png",
  menuTwo: "/figma-assets/menu-two.png",
  menuThree: "/figma-assets/menu-three.png",
  seasonalOne: "/figma-assets/seasonal-one.png",
  seasonalTwo: "/figma-assets/seasonal-two.png",
  seasonalThree: "/figma-assets/seasonal-three.png",
  eventOne: "/figma-assets/event-one.png",
  eventTwo: "/figma-assets/event-two.png",
  contact: "/figma-assets/contact.png",
  footerBadge: "/figma-assets/footer-badge.png",
} as const;

export const navItems = [
  ["Home", "#home"],
  ["Über uns", "#about"],
  ["Galerie", "#gallery"],
  ["Speisekarte", "#menu"],
  ["Saisonale Gerichte", "#seasonal"],
  ["Events & Veranstaltungen", "#events"],
  ["Öffnungszeiten", "#hours"],
  ["Partner & Lieferanten", "#partners"],
] as const;

export const menuCards = [
  ["Product 1", assets.menuOne],
  ["Product 2", assets.menuTwo],
  ["Product 3", assets.menuThree],
] as const;

export const aboutSlides = [
  { src: assets.galleryLeft, alt: "Restaurant fish plate close-up" },
  { src: assets.galleryMain, alt: "Featured plated seafood assortment" },
  { src: assets.galleryRight, alt: "Seafood dish detail" },
  { src: assets.galleryFarRight, alt: "Seafood plate by table edge" },
  { src: assets.galleryLeft, alt: "Chef special fish plate" },
] as const;

export const seasonalCards = [
  [
    "Lorem Ipsum",
    "Sed eget purus urna. Proin nec nulla volutpat, condimentum mi a, tempor metus.",
    assets.seasonalOne,
  ],
  [
    "Lorem Ipsum",
    "Sed eget purus urna. Proin nec nulla volutpat, condimentum mi a, tempor metus.",
    assets.seasonalTwo,
  ],
  [
    "Lorem Ipsum",
    "Sed eget purus urna. Proin nec nulla volutpat, condimentum mi a, tempor metus.",
    assets.seasonalThree,
  ],
] as const;

export const hours = [
  "Montag: Ruhetag",
  "Dienstag: 17:00 - 22:00 Uhr",
  "Mittwoch: 17:00 - 22:00 Uhr",
  "Donnerstag: 17:00 - 22:00 Uhr",
  "Freitag: 17:00 - 22:00 Uhr",
  "Samstag: 17:00 - 22:00 Uhr",
  "Sonntag: 12:00 - 21:00 Uhr",
] as const;

export const eventTypes = [
  "Weihnachtsfeiern",
  "Jubiläumsfeiern",
  "Firmenfeiern",
  "Geburtstage",
  "Private Veranstaltungen",
] as const;

export const menuCategories = [
  "Vorspeisen",
  "Fischgerichte",
  "Hauptgerichte",
  "Saisonale Spezialitäten",
  "Getränke",
] as const;

export const partnerPlaceholders = [
  "Fresh Fish",
  "Nordsee",
  "Local Farm",
  "Market",
  "Winehaus",
] as const;
