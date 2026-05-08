import Image from "next/image";
import { assets, eventTypes, eventsIntro } from "@/app/lib/site-content";
import { ButtonLink } from "./button-link";
import { SectionTitle } from "./section-title";

function ListArrowIcon() {
  return (
    <span
      className="mt-[1px] inline-block min-w-[0.85em] font-sans text-[17px] font-semibold leading-none text-[#94173d] md:text-lg"
      aria-hidden
    >
      &gt;
    </span>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="bg-black px-5 py-16 text-white md:px-10 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_520px]">
        <div className="max-w-xl lg:max-w-none">
          <SectionTitle
            title="Events & Veranstaltungen"
            eyebrow="Feiern in maritimer Atmosphäre"
          />
          <p className="mt-6 max-w-2xl font-sans text-[15px] leading-7 text-white md:text-base md:leading-relaxed">
            {eventsIntro}
          </p>
          <ul className="mt-8 space-y-2.5 font-sans md:space-y-3">
            {eventTypes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[17px] font-medium leading-snug md:text-lg">
                <ListArrowIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <ButtonLink href="#contact">Event anfragen</ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Jetzt reservieren
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-[5/6] w-full max-w-[440px] sm:aspect-[6/7] lg:mx-0 lg:max-w-none">
          {/* Top/right — nautical wall */}
          <div className="absolute top-0 right-0 z-0 aspect-[3/4] w-[72%] border border-black bg-black shadow-sm">
            <Image
              src={assets.eventOne}
              alt="Restaurant mit maritimer Dekoration: Schiffslenkrad und Laterne"
              fill
              sizes="(min-width: 1024px) 360px, 70vw"
              className="object-cover"
            />
          </div>
          {/* Bottom/left — dining room, overlaps & sits forward */}
          <div className="absolute bottom-[2%] left-0 z-10 aspect-[16/11] w-[78%] border border-black bg-black shadow-sm">
            <Image
              src={assets.eventTwo}
              alt="Gastraum mit rot gepolsterten Stühlen und gedeckten Tischen"
              fill
              sizes="(min-width: 1024px) 400px, 75vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
