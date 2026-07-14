import { useState } from "react";
import MobileHeader from "./MobileHeader";
import MobileHero from "./MobileHero";
import MobileBenefitsCarousel from "./MobileBenefitsCarousel";
import MobilePhotoStatement from "./MobilePhotoStatement";
import MobileTimeline from "./MobileTimeline";
import MobileGallery from "./MobileGallery";
import MobileStats from "./MobileStats";
import MobileCTA from "./MobileCTA";
import MobileFooter from "./MobileFooter";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";
import WhatsAppButton from "@/components/WhatsAppButton";

const MobileExperience = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);
  const openAgendar = () => setAgendarOpen(true);

  return (
    <div className="bg-white">
      <MobileHeader onAgendar={openAgendar} />
      <MobileHero onAgendar={openAgendar} />
      <MobileBenefitsCarousel />
      <MobilePhotoStatement />
      <MobileTimeline />
      <MobileGallery />
      <MobileStats />
      <MobileCTA onAgendar={openAgendar} />
      <MobileFooter />
      <WhatsAppButton />
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </div>
  );
};

export default MobileExperience;
