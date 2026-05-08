import Image from "next/image";
<<<<<<< Updated upstream
import { assets, contactEyebrow } from "@/app/lib/site-content";
=======
>>>>>>> Stashed changes
import { SectionTitle } from "./section-title";

const CONTACT_BACKGROUND_SRC = "https://placehold.co/1920x669";

export function ContactSection() {
  return (
<<<<<<< Updated upstream
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 pb-24 pt-10 md:px-10 md:pb-28 md:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 min-h-[760px]">
        <Image
          src={assets.contact}
          alt="Gastraum mit langem Holztisch und roten Stühlen"
=======
    <section id="contact" className="relative overflow-hidden bg-black px-5 pb-20 pt-4 md:px-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 aspect-[1920/669] w-full">
        <Image
          src={CONTACT_BACKGROUND_SRC}
          alt=""
>>>>>>> Stashed changes
          fill
          priority={false}
          sizes="100vw"
<<<<<<< Updated upstream
          className="object-cover object-[center_bottom]"
          priority={false}
        />
        {/* Solid black top → readable hero; soften so the room shows toward the bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/80 via-40% to-black/45"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[640px]">
        <SectionTitle centered title="Kontakt" eyebrow={contactEyebrow} />

        <form className="mt-10 rounded-sm border border-white/15 bg-black/35 px-6 py-9 shadow-2xl backdrop-blur-xl md:mt-14 md:px-10 md:py-11">
          <div className="space-y-9 md:space-y-10">
            <div className="font-sans">
              <label htmlFor="contact-subject" className="block text-sm font-normal text-white">
                Anliegen
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                autoComplete="off"
                className="contact-input"
              />
            </div>

            <div className="grid gap-9 font-sans md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-normal text-white">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" autoComplete="name" className="contact-input" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-normal text-white">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="contact-input"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-normal text-white">
                  Telefon
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="contact-input"
                />
              </div>
              <div>
                <label htmlFor="contact-datetime" className="block text-sm font-normal text-white">
                  Datum / Uhrzeit
                </label>
                <input id="contact-datetime" name="datetime" type="text" className="contact-input" />
              </div>
            </div>

            <div className="font-sans">
              <label htmlFor="contact-party" className="block text-sm font-normal text-white">
                Personenanzahl
              </label>
              <input id="contact-party" name="partySize" type="text" autoComplete="off" className="contact-input" />
            </div>

            <div className="font-sans">
              <label htmlFor="contact-message" className="block text-sm font-normal text-white">
                Nachricht
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="contact-input resize-none pt-2 md:min-h-[132px]"
              />
            </div>
=======
          className="object-cover object-center"
        />
        {/* Top → center: dark overlay that eases out by mid-height */}
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0)_0%,rgb(0_0_0/0.85)_22%,rgb(0_0_0/0.4)_45%,transparent_50%)]"
          aria-hidden
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[800px]">
        <SectionTitle
          centered
          title="Kontakt"
          eyebrow="Reservieren oder Anfrage stellen - wir freuen uns auf Sie"
        />
        <form className="mt-12 bg-[#35333380] p-8 shadow-2xl backdrop-blur-2xl">
          <input className="contact-input" placeholder="Anliegen" />
          <div className="grid gap-5 md:grid-cols-2">
            <input className="contact-input" placeholder="Name" />
            <input className="contact-input" placeholder="Email" />
            <input className="contact-input" placeholder="Telefon" />
            <input className="contact-input" placeholder="Datum / Uhrzeit" />
>>>>>>> Stashed changes
          </div>

          <label className="mt-10 flex cursor-pointer gap-3 text-left text-xs leading-snug tracking-tight text-white/95 md:mt-12 md:text-[13px] md:leading-relaxed">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-white bg-transparent text-[#9b1b3b] accent-[#94173d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            />
            <span>
              Ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden,
              dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden.
            </span>
          </label>

          <button
            type="submit"
            className="mt-8 bg-[#9b1b3b] px-10 py-[11px] text-[15px] font-medium tracking-wide text-white transition-colors hover:bg-[#831633] md:mt-10"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
