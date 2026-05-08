import { seasonalCards } from "@/app/lib/site-content";
import { RoundedImage } from "./rounded-image";

export function SeasonalSection() {
  return (
    <section
      id="seasonal"
      className="border-t border-white/40 bg-black px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-[1680px] overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
          <div className="flex flex-col">
            <h2 className="font-serif text-4xl leading-tight md:text-[52px]">Saisonale Gerichte</h2>
            <p className="mt-3 text-xl md:text-[35px] md:leading-[46px]">
              Frisch, saisonal und immer etwas Besonderes
            </p>
            <p className="mt-6 max-w-[240px] text-sm leading-7 md:text-[15px]">
              Je nach Jahreszeit erwarten Sie uns wechselnde Spezialitäten, die mit frischen und
              ausgewählten Zutaten zubereitet werden. Unsere saisonalen Gerichte bringen
              Abwechslung auf den Teller und spiegeln die Vielfalt der norddeutschen Küche wider.
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
                <p className="mt-2 max-w-[320px] text-sm leading-6 md:text-[14px]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
