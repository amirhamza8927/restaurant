import Image from "next/image";
import { assets, navItems } from "@/app/lib/site-content";
import { ButtonLink } from "./button-link";

export function HeroSection() {
  return (
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
          <ButtonLink href="#contact">Reservieren</ButtonLink>
          <ButtonLink href="#events" variant="outline">
            Event anfragen
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
