"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type AboutSliderProps = {
  slides: Slide[];
};

const positions = [-2, -1, 0, 1, 2] as const;

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export default function AboutSlider({ slides }: AboutSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleSlides = useMemo(
    () =>
      positions.map((position) => {
        const slideIndex = wrapIndex(activeIndex + position, slides.length);
        return { ...slides[slideIndex], position };
      }),
    [activeIndex, slides],
  );

  const goPrev = () => setActiveIndex((current) => wrapIndex(current - 1, slides.length));
  const goNext = () => setActiveIndex((current) => wrapIndex(current + 1, slides.length));

  return (
    <div className="mx-auto mt-16 w-full max-w-[1380px]">
      <div className="overflow-hidden">
        <div className="flex items-end justify-center gap-3 md:gap-4">
          {visibleSlides.map((slide) => {
            const isActive = slide.position === 0;
            const baseClass =
              "relative block overflow-hidden rounded-bl-[36px] rounded-tr-[36px] transition-all duration-300";

            const sizeClass =
              slide.position === 0
                ? "h-[420px] w-[300px] opacity-100 md:h-[560px] md:w-[420px]"
                : Math.abs(slide.position) === 1
                  ? "h-[340px] w-[235px] opacity-55 md:h-[500px] md:w-[360px]"
                  : "h-[300px] w-[190px] opacity-35 md:h-[430px] md:w-[290px]";

            return (
              <div key={`${slide.src}-${slide.position}`} className={`${baseClass} ${sizeClass}`}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 70vw"
                  className="object-cover"
                />
                {slide.position === -1 ? (
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute right-10 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/35 text-white"
                    aria-label="Previous slide"
                  >
                    &#8592;
                  </button>
                ) : null}
                {slide.position === 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute left-10 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/35 text-white"
                    aria-label="Next slide"
                  >
                    &#8594;
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-[300px] items-center gap-1 md:w-[420px]">
        {slides.map((slide, index) => (
          <button
            key={`${slide.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-px flex-1 transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/35"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
