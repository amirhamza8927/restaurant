import Image from "next/image";
import { assets } from "@/app/lib/site-content";
import { FooterColumn } from "./footer-column";

export function SiteFooter() {
  return (
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
  );
}
