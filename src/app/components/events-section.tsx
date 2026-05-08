import { assets, eventTypes } from "@/app/lib/site-content";
import { ButtonLink } from "./button-link";
import { RoundedImage } from "./rounded-image";
import { SectionTitle } from "./section-title";

export function EventsSection() {
  return (
    <section id="events" className="bg-[#121212] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[1fr_620px]">
        <div>
          <SectionTitle
            title="Events & Veranstaltungen"
            eyebrow="Feiern in maritimer Atmosphäre"
          />
          <p className="mt-6 max-w-3xl leading-[26px]">
            Ob private Feier oder geschäftlicher Anlass - im Seute Deern bieten wir den passenden
            Rahmen für unvergessliche Momente. Genießen Sie unsere frische Küche und die besondere
            Atmosphäre unseres Hauses.
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
            <ButtonLink href="#contact">Event anfragen</ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Jetzt reservieren
            </ButtonLink>
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
  );
}
