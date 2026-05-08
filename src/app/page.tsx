import Image from "next/image";
import AboutSlider from "./components/about-slider";

const assets = {
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
};

const navItems = [
  ["Home", "#home"],
  ["Über uns", "#about"],
  ["Galerie", "#gallery"],
  ["Speisekarte", "#menu"],
  ["Saisonale Gerichte", "#seasonal"],
  ["Events & Veranstaltungen", "#events"],
  ["Öffnungszeiten", "#hours"],
  ["Partner & Lieferanten", "#partners"],
] as const;

const menuCards = [
  ["Product 1", assets.menuOne],
  ["Product 2", assets.menuTwo],
  ["Product 3", assets.menuThree],
];

const aboutSlides = [
  { src: assets.galleryLeft, alt: "Restaurant fish plate close-up" },
  { src: assets.galleryMain, alt: "Featured plated seafood assortment" },
  { src: assets.galleryRight, alt: "Seafood dish detail" },
  { src: assets.galleryFarRight, alt: "Seafood plate by table edge" },
  { src: assets.galleryLeft, alt: "Chef special fish plate" },
];

const seasonalCards = [
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
];

const hours = [
  "Montag: Ruhetag",
  "Dienstag: 17:00 - 22:00 Uhr",
  "Mittwoch: 17:00 - 22:00 Uhr",
  "Donnerstag: 17:00 - 22:00 Uhr",
  "Freitag: 17:00 - 22:00 Uhr",
  "Samstag: 17:00 - 22:00 Uhr",
  "Sonntag: 12:00 - 21:00 Uhr",
];

const eventTypes = [
  "Weihnachtsfeiern",
  "Jubiläumsfeiern",
  "Firmenfeiern",
  "Geburtstage",
  "Private Veranstaltungen",
];

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-8 py-[14px] text-[16px] font-medium leading-5 transition-colors ${
        variant === "primary"
          ? "bg-[#94173d] text-white hover:bg-[#7f1233]"
          : "border border-white text-white hover:bg-white/10"
      }`}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <h2 className="font-serif text-4xl leading-tight md:text-[58px]">
        {title}
      </h2>
      {eyebrow ? (
        <p className="mt-5 text-lg leading-8 md:text-2xl">{eyebrow}</p>
      ) : null}
    </div>
  );
}

function RoundedImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span
      className={`relative block overflow-hidden rounded-bl-[50px] rounded-tr-[50px] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section
        id="home"
        className="relative flex min-h-[760px] items-center justify-center px-5 py-8 md:min-h-[1020px] md:px-10"
      >
        <Image
          src={assets.hero}
          alt="Chef preparing fresh fish in restaurant kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <header className="absolute inset-x-0 top-0 z-20 px-4 md:px-[72px]">
          <div className="mx-auto flex w-full max-w-[1920px] items-center gap-6 md:gap-[140px]">
            <Image
              src={assets.badgeNav}
              alt="Seute Deern logo badge"
              width={154}
              height={154}
              className="h-[72px] w-[72px] shrink-0 md:h-[112px] md:w-[112px]"
            />
            <nav className="flex min-w-0 flex-1 items-center justify-between text-[10px] font-medium leading-normal text-white whitespace-nowrap md:text-[11px] lg:text-[12px]">
              <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                {navItems.map(([label, href]) => (
                  <a key={label} href={href} className="shrink-0 hover:text-white/80">
                    {label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="ml-2 shrink-0 bg-[#94173d] px-3 py-1.5 text-[10px] font-medium leading-normal text-white md:ml-3 md:px-4 md:py-2 md:text-[11px] lg:px-5 lg:text-[12px]"
              >
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <div className="relative z-10 flex max-w-[1010px] flex-col items-center gap-[33px] text-center md:mt-[340px]">
          <h1 className="font-serif text-4xl leading-tight md:text-[66px]">
            Seute Deern – Fischrestaurant in Cuxhaven-Döse
          </h1>
          <p className="text-[16px] leading-[26px]">
            Nordische Küche. Frischer Fisch. Besondere Momente.
          </p>
          <div className="flex flex-col gap-[10px] sm:flex-row">
            <Button href="#contact">Reservieren</Button>
            <Button href="#events" variant="outline">
              Event anfragen
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#121212] px-5 py-20 md:px-10 md:py-28">
        <p className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-b from-white to-transparent bg-clip-text text-center text-8xl font-medium uppercase text-transparent opacity-[0.06] md:text-[230px] lg:text-[361px]">
          Über uns
        </p>
        <div className="relative mx-auto max-w-[1254px]">
          <SectionTitle
            centered
            title="Über uns"
            eyebrow="Maritime Küche mit Herz - direkt aus Cuxhaven-Döse"
          />
          <div className="mx-auto mt-6 max-w-[1254px] space-y-6 text-center leading-[26px]">
            <p>
              Willkommen im Seute Deern - Ihrem maritimen Fischrestaurant in
              Cuxhaven-Döse. Wir freuen uns, Sie bei uns begrüßen zu dürfen -
              ganz gleich, ob Sie auf ein entspanntes Getränk vorbeischauen oder
              die frischen Gerichte unseres Hauses in aller Ruhe genießen
              möchten.
            </p>
            <p>
              Unser Restaurant steht bewusst für Qualität statt Schnelligkeit.
              Bei uns erwartet Sie keine schnelle Küche, sondern liebevoll
              zubereitete Speisen, die mit Zeit, Sorgfalt und frischen Zutaten
              entstehen.
            </p>
          </div>
        </div>

        <div id="gallery" className="relative">
          <AboutSlider slides={aboutSlides} />
        </div>
      </section>

      <section id="menu" className="bg-black px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1640px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionTitle title="Speisekarte" />
              <div className="mt-4 flex flex-wrap text-[10px] font-medium md:text-[11px]">
                {[
                  "Vorspeisen",
                  "Fischgerichte",
                  "Hauptgerichte",
                  "Saisonale Spezialitäten",
                  "Getränke",
                ].map((item, index) => (
                  <span
                    key={item}
                    className={`border border-white/30 px-3 py-1 ${
                      index === 0 ? "border-[#94173d] bg-[#94173d]" : ""
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="max-w-[640px] lg:justify-self-end">
              <p className="text-xl md:text-[34px] md:leading-tight">
                Frisch zubereitet. Saisonal inspiriert. Mit Liebe serviert.
              </p>
              <p className="mt-4 max-w-[620px] text-sm leading-6 md:text-[15px]">
                Entdecken Sie unsere Auswahl an frisch zubereiteten
                Fischgerichten und norddeutschen Spezialitäten. Unsere Küche
                legt großen Wert auf Qualität, Frische und saisonale Zutaten.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:gap-6 lg:grid-cols-3">
            {menuCards.map(([title, image]) => (
              <article key={title} className="text-center">
                <RoundedImage
                  src={image}
                  alt={`${title} from the menu`}
                  className="h-[330px] w-full rounded-[26px] md:h-[420px]"
                />
                <h3 className="mt-2 font-serif text-3xl md:text-[40px]">
                  {title}
                </h3>
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.08em]"
                >
                  Explore <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="seasonal" className="border-t border-white/40 bg-black px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1680px] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
            <div className="flex flex-col">
              <h2 className="font-serif text-4xl leading-tight md:text-[52px]">
                Saisonale Gerichte
              </h2>
              <p className="mt-3 text-xl md:text-[35px] md:leading-[46px]">
                Frisch, saisonal und immer etwas Besonderes
              </p>
              <p className="mt-6 max-w-[240px] text-sm leading-7 md:text-[15px]">
                Je nach Jahreszeit erwarten Sie uns wechselnde Spezialitäten,
                die mit frischen und ausgewählten Zutaten zubereitet werden.
                Unsere saisonalen Gerichte bringen Abwechslung auf den Teller
                und spiegeln die Vielfalt der norddeutschen Küche wider.
              </p>
              <div className="mt-14 flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous seasonal dishes"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 text-white/90"
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  aria-label="Next seasonal dishes"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 text-white/90"
                >
                  &#8594;
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {seasonalCards.map(([title, text, image], index) => (
                <article
                  key={`${title}-${image}`}
                  className={index === 2 ? "translate-x-8 md:translate-x-14" : ""}
                >
                  <RoundedImage
                    src={image}
                    alt={title}
                    className="h-[220px] w-full rounded-[26px] md:h-[260px]"
                  />
                  <h3 className="mt-3 font-serif text-3xl md:text-[42px]">{title}</h3>
                  <p className="mt-2 max-w-[320px] text-sm leading-6 md:text-[14px]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-[#121212] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[1fr_620px]">
          <div>
            <SectionTitle
              title="Events & Veranstaltungen"
              eyebrow="Feiern in maritimer Atmosphäre"
            />
            <p className="mt-6 max-w-3xl leading-[26px]">
              Ob private Feier oder geschäftlicher Anlass - im Seute Deern
              bieten wir den passenden Rahmen für unvergessliche Momente.
              Genießen Sie unsere frische Küche und die besondere Atmosphäre
              unseres Hauses.
            </p>
            <ul className="mt-8 space-y-3">
              {eventTypes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xl font-semibold">
                  <span className="h-3 w-3 bg-[#94173d]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Event anfragen</Button>
              <Button href="#contact" variant="outline">
                Jetzt reservieren
              </Button>
            </div>
          </div>
          <div className="relative min-h-[460px]">
            <RoundedImage
              src={assets.eventOne}
              alt="Restaurant event room"
              className="absolute right-0 top-0 h-[330px] w-[80%]"
            />
            <RoundedImage
              src={assets.eventTwo}
              alt="Dining room seating"
              className="absolute bottom-0 left-0 h-[300px] w-[78%] border-[13px] border-[#121212]"
            />
          </div>
        </div>
      </section>

      <section id="hours" className="bg-black px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionTitle title="Öffnungszeiten" />
          <div>
            {hours.map((item) => (
              <p
                key={item}
                className="border-b border-white/40 py-5 text-xl md:text-2xl"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="bg-black px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          <SectionTitle centered title="Partner & Lieferanten" />
          <p className="mt-6 leading-[26px]">
            Für unsere Küche setzen wir auf ausgewählte Partner und Lieferanten,
            die unsere Ansprüche an Frische, Qualität und Zuverlässigkeit
            teilen. So stellen wir sicher, dass jedes Gericht im Seute Deern mit
            besten Zutaten zubereitet wird.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 text-[#666] md:grid-cols-5">
            {["Fresh Fish", "Nordsee", "Local Farm", "Market", "Winehaus"].map(
              (partner) => (
                <div key={partner} className="border border-white/10 py-4">
                  {partner}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-black px-5 pb-20 pt-4 md:px-10">
        <div className="absolute bottom-0 left-0 right-0 h-[670px]">
          <Image
            src={assets.contact}
            alt="Restaurant tables prepared for guests"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/30" />
        </div>
        <div className="relative mx-auto max-w-[800px]">
          <SectionTitle
            centered
            title="Kontakt"
            eyebrow="Reservieren oder Anfrage stellen - wir freuen uns auf Sie"
          />
          <form className="mt-12 bg-[#35333380] p-8 shadow-2xl backdrop-blur-2xl">
            <input className="contact-input" placeholder="Anliegen" />
            <div className="grid gap-5 md:grid-cols-2">
              <input className="contact-input" placeholder="Name" />
              <input className="contact-input" placeholder="Email" />
              <input className="contact-input" placeholder="Telefon" />
              <input className="contact-input" placeholder="Datum / Uhrzeit" />
            </div>
            <input className="contact-input" placeholder="Personenanzahl" />
            <textarea className="contact-input min-h-24 resize-none" placeholder="Nachricht" />
            <label className="mt-4 flex gap-3 text-xs leading-5">
              <span className="mt-1 h-3.5 w-3.5 shrink-0 border border-white" />
              Ich habe die Datenschutzerklärung zur Kenntnis genommen und bin
              damit einverstanden, dass meine Angaben zur Bearbeitung meiner
              Anfrage gespeichert und verarbeitet werden.
            </label>
            <button className="mt-8 bg-[#94173d] px-8 py-3 font-medium text-white">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="relative bg-black px-5 pb-8 pt-16 md:px-10">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <Image
            src={assets.footerBadge}
            alt="Restaurant Seute Deern seal"
            width={210}
            height={210}
            className="h-[150px] w-[150px] md:h-[210px] md:w-[210px]"
          />
          <div className="grid gap-10 md:grid-cols-3">
            <FooterColumn title="Disclaimers" items={["Impressum", "Datenschutz"]} />
            <FooterColumn
              title="Useful Links"
              items={["Home", "Über uns", "Galerie", "Speisekarte", "Saisonale Gerichte"]}
            />
            <FooterColumn
              title="Quick Links"
              items={["Events & Veranstaltungen", "Öffnungszeiten", "Partner & Lieferanten", "Kontakt"]}
            />
          </div>
        </div>
        <p className="mt-16 bg-gradient-to-b from-white to-transparent bg-clip-text text-center text-5xl text-transparent opacity-20 md:text-[159px]">
          Restaurant Seute Deern
        </p>
        <p className="border-t border-white/30 py-5 text-center">
          Copyright © 2026 Restaurant Seute Deern
        </p>
      </footer>
    </main>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-[22px] font-bold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-[16px] font-medium leading-none whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
