import Image from "next/image";
import { assets } from "@/app/lib/site-content";
import { SectionTitle } from "./section-title";

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-black px-5 pb-20 pt-4 md:px-10">
      <div className="absolute bottom-0 left-0 right-0 h-[670px]">
        <Image
          src={assets.contact}
          alt="Restaurant tables prepared for guests"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/30" />
      </div>
      <div className="relative mx-auto max-w-[800px]">
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
          </div>
          <input className="contact-input" placeholder="Personenanzahl" />
          <textarea className="contact-input min-h-24 resize-none" placeholder="Nachricht" />
          <label className="mt-4 flex gap-3 text-xs leading-5">
            <span className="mt-1 h-3.5 w-3.5 shrink-0 border border-white" />
            Ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden,
            dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden.
          </label>
          <button className="mt-8 bg-[#94173d] px-8 py-3 font-medium text-white">Send</button>
        </form>
      </div>
    </section>
  );
}
