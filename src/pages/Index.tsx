import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import EstruturaSection from "@/components/EstruturaSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import ModeloSection from "@/components/ModeloSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DiferenciaisSection />
        <EstruturaSection />
        <ParaQuemSection />
        <ModeloSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
