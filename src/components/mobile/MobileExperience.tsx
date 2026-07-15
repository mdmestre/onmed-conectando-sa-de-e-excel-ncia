import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import MobileHero from "./MobileHero";
import MobileDiferenciais from "./MobileDiferenciais";
import MobileProblem from "./MobileProblem";
import MobileSolution from "./MobileSolution";
import MobileInfraGallery from "./MobileInfraGallery";
import MobileAmbientes from "./MobileAmbientes";
import MobileTechnology from "./MobileTechnology";
import MobileCommunity from "./MobileCommunity";
import MobileBenefits from "./MobileBenefits";
import MobileResults from "./MobileResults";
import MobileTestimonials from "./MobileTestimonials";
import MobileProcess from "./MobileProcess";
import MobileCtaVisita from "./MobileCtaVisita";
import MobileFAQ from "./MobileFAQ";
import MobileCTAFinal from "./MobileCTAFinal";
import MobileFooter from "./MobileFooter";
import MobileAgendarSheet from "./MobileAgendarSheet";
import WhatsAppButton from "@/components/WhatsAppButton";

const MobileExperience = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);
  const openAgendar = () => setAgendarOpen(true);

  return (
    <div className="bg-[#FAF9F7]">
      <MobileNavbar onSejaMembro={openAgendar} />
      <MobileHero onSejaMembro={openAgendar} />
      <MobileDiferenciais />
      <MobileProblem />
      <MobileSolution />
      <MobileInfraGallery />
      <MobileAmbientes />
      <MobileTechnology />
      <MobileCommunity />
      <MobileBenefits />
      <MobileResults />
      <MobileTestimonials />
      <MobileProcess />
      <MobileCtaVisita onAgendar={openAgendar} />
      <MobileFAQ />
      <MobileCTAFinal onSejaMembro={openAgendar} />
      <MobileFooter />
      <WhatsAppButton />
      <MobileAgendarSheet open={agendarOpen} onOpenChange={setAgendarOpen} />
    </div>
  );
};

export default MobileExperience;
