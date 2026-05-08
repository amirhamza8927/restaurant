"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { seasonalCards } from "@/app/lib/site-content";
import { RoundedImage } from "./rounded-image";

function ThinChevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M15 18 9 12 15 6" />
      ) : (
        <path d="M9 18 15 12 9 6" />
      )}
    </svg>
  );
}

function useCarouselScroll(scrollRef: RefObject<HTMLDivElement | null>) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncScrollEdges = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    // Avoid subpixel rounding marking the track as "non-scrollable" or stuck at an edge
    const sl = Math.round(scrollLeft);
    const max = Math.round(maxScroll);
    setAtStart(sl <= 1);
    setAtEnd(max <= 1 || sl >= max - 1);
  }, [scrollRef]);

  useLayoutEffect(() => {
    syncScrollEdges();
  }, [syncScrollEdges]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    syncScrollEdges();

    el.addEventListener("scroll", syncScrollEdges, { passive: true });
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(syncScrollEdges);
    });
    ro.observe(el);

    const img = el.querySelectorAll("img");
    const onImg = () => requestAnimationFrame(syncScrollEdges);
    img.forEach((node) => node.addEventListener("load", onImg));

    window.addEventListener("resize", syncScrollEdges);

    return () => {
      el.removeEventListener("scroll", syncScrollEdges);
      ro.disconnect();
      img.forEach((node) => node.removeEventListener("load", onImg));
      window.removeEventListener("resize", syncScrollEdges);
    };
  }, [scrollRef, syncScrollEdges]);

  const scrollByDirection = useCallback(
    (dir: -1 | 1) => {
      const el = scrollRef.current;
      if (!el) return;

      const articles = Array.from(el.querySelectorAll("article")) as HTMLElement[];
      if (articles.length === 0) return;

      if (Math.round(el.scrollWidth - el.clientWidth) <= 1) {
        return;
      }

      const targetScrollFor = (article: HTMLElement) => {
        const cr = el.getBoundingClientRect();
        const ar = article.getBoundingClientRect();
        return Math.max(0, el.scrollLeft + (ar.left - cr.left));
      };

      const positions = articles.map((a) => targetScrollFor(a));

      let current = 0;
      for (let i = 0; i < positions.length; i++) {
        if (positions[i] <= el.scrollLeft + 12) {
          current = i;
        }
      }

      const next = Math.max(0, Math.min(articles.length - 1, current + dir));
      el.scrollTo({ left: positions[next], behavior: "smooth" });

      requestAnimationFrame(() => requestAnimationFrame(syncScrollEdges));
    },
    [scrollRef, syncScrollEdges]
  );

  return { atStart, atEnd, scrollByDirection, syncScrollEdges };
}

export function SeasonalSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { atStart, atEnd, scrollByDirection } = useCarouselScroll(scrollRef);

  return (
    <section
      id="seasonal"
      className="border-t border-white/20 bg-[#000000] px-5 py-16 text-white md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-[1680px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,32%)_minmax(0,1fr)] lg:gap-10 lg:items-stretch">
          <div className="flex h-full min-h-0 flex-col">
            <div className="space-y-3">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight tracking-tight text-[#FFFFFF] md:text-[2.25rem] md:leading-[1.15] lg:text-[2.5rem]">
                Saisonale Gerichte
              </h2>
              <p className="max-w-full font-sans text-[0.95rem] font-normal leading-snug text-[#FFFFFF] md:text-[1.0625rem] md:leading-6">
                Frisch, saisonal und immer etwas Besonderes
              </p>
              <p className="max-w-[70%] text-[0.75rem] leading-[1.65] text-[#FFFFFF]/80 md:max-w-[68%] md:text-[0.8125rem] md:leading-[1.7]">
                Je nach Jahreszeit erwarten Sie uns wechselnde Spezialitäten, die mit frischen und
                ausgewählten Zutaten zubereitet werden. Unsere saisonalen Gerichte bringen
                Abwechslung auf den Teller und spiegeln die Vielfalt der norddeutschen Küche wider.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 lg:mt-auto lg:pt-10">
              <button
                type="button"
                aria-label="Zurück"
                aria-disabled={atStart}
                onClick={() => scrollByDirection(-1)}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#FFFFFF] text-[#FFFFFF] transition-colors hover:bg-white/5 ${
                  atStart ? "opacity-35" : "opacity-100"
                }`}
              >
                <ThinChevron direction="left" />
              </button>
              <button
                type="button"
                aria-label="Weiter"
                aria-disabled={atEnd}
                onClick={() => scrollByDirection(1)}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#FFFFFF] text-[#FFFFFF] transition-colors hover:bg-white/5 ${
                  atEnd ? "opacity-35" : "opacity-100"
                }`}
              >
                <ThinChevron direction="right" />
              </button>
            </div>
          </div>

          <div className="min-w-0 lg:-mr-10 lg:pl-0">
            <div
              ref={scrollRef}
              className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible overscroll-x-contain px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 [&::-webkit-scrollbar]:hidden"
            >
              {seasonalCards.map(([title, text, image]) => (
                <article
                  key={`${title}-${image}`}
                  className="w-[min(100%,260px)] shrink-0 snap-start sm:w-[min(100%,280px)] md:w-[min(100%,300px)] lg:w-[380px]"
                >
                  <RoundedImage
                    src={image}
                    alt={title}
                    className="aspect-[4/3] w-full"
                    sizes="(min-width: 1024px) 380px, min(85vw, 300px)"
                  />
                  <h3 className="mt-3 font-serif text-lg leading-tight text-[#FFFFFF] md:text-[1.25rem]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[0.6875rem] leading-[1.5] text-[#FFFFFF]/90 md:text-[0.75rem] md:leading-[1.55]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
