import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EstruturaSection from "@/components/EstruturaSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import ModeloSection from "@/components/ModeloSection";
import ComparativoSection from "@/components/ComparativoSection";
import ProvasSociaisSection from "@/components/ProvasSociaisSection";
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
        <EstruturaSection />
        <DiferenciaisSection />
        <ParaQuemSection />
        <ModeloSection />
        <ComparativoSection />
        <ProvasSociaisSection />
        <EmocionalSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
