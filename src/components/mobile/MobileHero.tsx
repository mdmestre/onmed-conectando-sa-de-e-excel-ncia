import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-clinic.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const GREEN_GRADIENT = "linear-gradient(135deg, #7CC0B0 0%, #4F9D89 55%, #2E7F73 100%)";

interface MobileHeroProps {
  onAgendar: () => void;
}

const MobileHero = ({ onAgendar }: MobileHeroProps) => {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col">
      {/* Fundo cinematográfico */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ambiente premium Onmedic"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 18%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0.62) 60%, rgba(255,255,255,0.94) 88%, rgba(255,255,255,1) 100%)",
          }}
        />
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-7 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="font-['DM_Serif_Display'] font-normal text-[2.6rem] leading-[1.12] text-[#0A2E5D]"
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
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="mt-6 text-[0.95rem] text-[#0A2E5D]/65 leading-relaxed max-w-[300px]"
        >
          Um ecossistema completo para profissionais que desejam crescer sem
          carregar toda a operação nas costas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="mt-9 w-full max-w-[320px] flex flex-col items-center gap-3.5"
        >
          <button
            onClick={onAgendar}
            className="group w-full py-4.5 rounded-full bg-[#0F5FAE] text-white text-[12px] font-bold tracking-[0.12em] uppercase shadow-[0_10px_30px_-8px_rgba(15,95,174,0.5)] active:scale-[0.97] transition-transform duration-200 flex items-center justify-center gap-2.5"
          >
            Agendar conversa
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-active:translate-x-1" />
          </button>
          <a
            href="#sobre"
            className="w-full py-4.5 rounded-full border border-[#0A2E5D]/15 text-[#0A2E5D] text-[12px] font-bold tracking-[0.12em] uppercase flex items-center justify-center"
          >
            Conheça a Onmedic
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ height: [8, 22, 8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] rounded-full bg-[#0A2E5D]/30"
        />
      </motion.div>
    </section>
  );
};

export default MobileHero;
