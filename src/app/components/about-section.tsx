import AboutSlider from "./about-slider";
import { SectionTitle } from "./section-title";
import { aboutSlides } from "@/app/lib/site-content";

export function AboutSection() {
  return (
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
            Willkommen im Seute Deern - Ihrem maritimen Fischrestaurant in Cuxhaven-Döse. Wir
            freuen uns, Sie bei uns begrüßen zu dürfen - ganz gleich, ob Sie auf ein entspanntes
            Getränk vorbeischauen oder die frischen Gerichte unseres Hauses in aller Ruhe genießen
            möchten.
          </p>
          <p>
            Unser Restaurant steht bewusst für Qualität statt Schnelligkeit. Bei uns erwartet Sie
            keine schnelle Küche, sondern liebevoll zubereitete Speisen, die mit Zeit, Sorgfalt und
            frischen Zutaten entstehen.
          </p>
        </div>
      </div>

      <div id="gallery" className="relative">
        <AboutSlider slides={[...aboutSlides]} />
      </div>
    </section>
  );
}
