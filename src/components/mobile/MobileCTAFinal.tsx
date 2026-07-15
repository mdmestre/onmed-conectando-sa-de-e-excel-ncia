import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import recepcaoImg from "@/assets/recepcao.png";
import { mobileColors, EASE } from "./mobileTheme";

interface MobileCTAFinalProps {
  onSejaMembro: () => void;
}

const MobileCTAFinal = ({ onSejaMembro }: MobileCTAFinalProps) => {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden flex items-end">
      <img src={recepcaoImg} alt="Onmedic" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to top, ${mobileColors.blueDeep} 5%, rgba(8,58,109,0.55) 45%, rgba(8,58,109,0.15) 75%)` }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative z-10 px-6 pb-14 w-full"
      >
        <h2 className="text-white leading-[1.15] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem" }}>
          Sua próxima fase profissional começa aqui.
        </h2>
        <p className="text-white/70 leading-relaxed mb-8 max-w-[300px]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem" }}>
          Estrutura, gestão e comunidade para você crescer sem carregar a operação sozinho.
        </p>
        <button
          onClick={onSejaMembro}
          className="w-full py-4.5 rounded-full text-white font-semibold flex items-center justify-center gap-2.5 active:scale-[0.98] transition-transform"
          style={{ background: `linear-gradient(135deg, ${mobileColors.green} 0%, #4F9D89 100%)`, fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
        >
          Seja Membro
          <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
        </button>
      </motion.div>
    </section>
  );
};

export default MobileCTAFinal;
