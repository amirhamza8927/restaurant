import { hours } from "@/app/lib/site-content";
import { SectionTitle } from "./section-title";

export function HoursSection() {
  return (
    <section id="hours" className="bg-black px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[1fr_1.2fr]">
        <SectionTitle title="Öffnungszeiten" />
        <div>
          {hours.map((item) => (
            <p key={item} className="border-b border-white/40 py-5 text-xl md:text-2xl">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
