import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import EstruturaSection from "@/components/EstruturaSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import ModeloSection from "@/components/ModeloSection";
import ComparativoSection from "@/components/ComparativoSection";
import ProvasSociaisSection from "@/components/ProvasSociaisSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmocionalSection from "@/components/EmocionalSection";
import EcosistemaBanner from "@/components/EcosistemaBanner";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileExperience from "@/components/mobile/MobileExperience";

const Index = () => {
  return (
    <>
      {/* Desktop — inalterado, visível apenas a partir de lg */}
      <div className="hidden lg:block">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <EstruturaSection />
          <DiferenciaisSection />
          <ParaQuemSection />
          <ModeloSection />
          <ComparativoSection />
          <ProvasSociaisSection />
          <TestimonialsSection />
          <EmocionalSection />
          <EcosistemaBanner />
          <CtaSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>

      {/* Mobile — experiência independente, tipo app */}
      <div className="lg:hidden">
        <MobileExperience />
      </div>
    </>
  );
};

export default Index;
