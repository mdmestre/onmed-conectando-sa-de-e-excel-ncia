import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { mobileColors, EASE } from "./mobileTheme";

interface MobileCtaVisitaProps {
  onAgendar: () => void;
}

const MobileCtaVisita = ({ onAgendar }: MobileCtaVisitaProps) => {
  return (
    <section id="visita" className="bg-[#FAF9F7] px-6 py-4 pb-16">
      <motion.button
        onClick={onAgendar}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="w-full text-left rounded-[28px] p-7 flex flex-col gap-5 active:scale-[0.99] transition-transform"
        style={{ background: `linear-gradient(160deg, ${mobileColors.blue} 0%, ${mobileColors.blueDeep} 100%)` }}
      >
        <div className="w-12 h-12 rounded-2xl bg-white/12 flex items-center justify-center">
          <CalendarDays className="w-6 h-6 text-white" strokeWidth={1.8} />
        </div>

        <div>
          <h3
            className="text-white mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem" }}
          >
            Agende uma visita
          </h3>
          <p
            className="text-white/70 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
          >
            Conheça de perto a estrutura que pode transformar sua carreira.
          </p>
        </div>

        <div className="flex items-center gap-2 text-white font-semibold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
          Marcar horário
          <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
        </div>
      </motion.button>
    </section>
  );
};

export default MobileCtaVisita;
