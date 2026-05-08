import { partnerPlaceholders } from "@/app/lib/site-content";
import { SectionTitle } from "./section-title";

export function PartnersSection() {
  return (
    <section id="partners" className="bg-black px-5 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto max-w-5xl text-center">
        <SectionTitle centered title="Partner & Lieferanten" />
        <p className="mt-6 leading-[26px]">
          Für unsere Küche setzen wir auf ausgewählte Partner und Lieferanten, die unsere
          Ansprüche an Frische, Qualität und Zuverlässigkeit teilen. So stellen wir sicher, dass
          jedes Gericht im Seute Deern mit besten Zutaten zubereitet wird.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 text-[#666] md:grid-cols-5">
          {partnerPlaceholders.map((partner) => (
            <div key={partner} className="border border-white/10 py-4">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
