import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const GREEN_GRADIENT = "linear-gradient(135deg, #7CC0B0 0%, #4F9D89 55%, #2E7F73 100%)";

interface MobileCTAProps {
  onAgendar: () => void;
}

const MobileCTA = ({ onAgendar }: MobileCTAProps) => {
  return (
    <section className="relative min-h-[90vh] bg-[#0A2E5D] flex flex-col items-center justify-center px-7 py-24 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#4F9D89]/10 blur-[80px]" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#0F5FAE]/20 blur-[80px]" />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative z-10 font-['DM_Serif_Display'] font-normal text-[2.6rem] leading-[1.12] text-white text-center"
      >
        Você cuida
        <br />
        das pessoas.
        <br />
        <span className="block mt-2">Nós cuidamos</span>
        <span
          style={{
            background: GREEN_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          do restante.
        </span>
      </motion.h2>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        onClick={onAgendar}
        className="relative z-10 mt-11 w-full max-w-[320px] py-4.5 rounded-full text-white text-[12px] font-bold tracking-[0.12em] uppercase shadow-[0_16px_40px_-10px_rgba(79,157,137,0.5)] active:scale-[0.97] transition-transform duration-200 flex items-center justify-center gap-2.5"
        style={{ background: GREEN_GRADIENT }}
      >
        Agendar conversa
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </section>
  );
};

export default MobileCTA;
