import Hero from "@/components/sections/Hero";
import Identity from "@/components/sections/Identity";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Identity />
      <Testimonials />
      <Services />
      <Gallery />
      <Process />
      <FAQ />
      <FinalCTA />
      <FloatingWhatsApp />
    </main>
  );
}
