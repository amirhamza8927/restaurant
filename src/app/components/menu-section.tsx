import { menuCards, menuCategories } from "@/app/lib/site-content";
import { RoundedImage } from "./rounded-image";
import { SectionTitle } from "./section-title";

export function MenuSection() {
  return (
    <section id="menu" className="bg-black px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1640px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionTitle title="Speisekarte" />
            <div className="mt-4 flex flex-wrap text-[10px] font-medium md:text-[11px]">
              {menuCategories.map((item, index) => (
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
              Entdecken Sie unsere Auswahl an frisch zubereiteten Fischgerichten und norddeutschen
              Spezialitäten. Unsere Küche legt großen Wert auf Qualität, Frische und saisonale
              Zutaten.
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
              <h3 className="mt-2 font-serif text-3xl md:text-[40px]">{title}</h3>
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
  );
}
