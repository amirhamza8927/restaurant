import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { EventsSection } from "./components/events-section";
import { HeroSection } from "./components/hero-section";
import { HoursSection } from "./components/hours-section";
import { MenuSection } from "./components/menu-section";
import { PartnersSection } from "./components/partners-section";
import { SeasonalSection } from "./components/seasonal-section";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SeasonalSection />
      <EventsSection />
      <HoursSection />
      <PartnersSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
