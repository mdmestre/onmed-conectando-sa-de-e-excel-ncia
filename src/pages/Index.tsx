import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ComparativoSection from "@/components/ComparativoSection";
import EstruturaSection from "@/components/EstruturaSection";
import ProvasSociaisSection from "@/components/ProvasSociaisSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import ModeloSection from "@/components/ModeloSection";
import EmocionalSection from "@/components/EmocionalSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ComparativoSection />
        <DiferenciaisSection />
        <EstruturaSection />
        <ProvasSociaisSection />
        <ParaQuemSection />
        <ModeloSection />
        <EmocionalSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
