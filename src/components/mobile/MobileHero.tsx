import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-clinic.png";
import { mobileColors, EASE } from "./mobileTheme";

interface MobileHeroProps {
  onSejaMembro: () => void;
}

const MobileHero = ({ onSejaMembro }: MobileHeroProps) => {
  return (
    <section className="relative bg-[#FAF9F7] pt-[88px]">
      {/* Imagem — recepção Onmedic, ~50% da tela */}
      <div className="relative h-[52vh] min-h-[340px] overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Recepção premium da Onmedic"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
        />
      </div>

      {/* Bloco branco sobreposto */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
        className="relative -mt-8 bg-[#FAF9F7] rounded-t-[28px] px-6 pt-9 pb-10"
      >
        <h1
          className="leading-[1.18]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.15rem", color: mobileColors.text }}
        >
          O espaço ideal para você focar no que realmente importa:{" "}
          <span style={{ color: mobileColors.green }}>seus pacientes.</span>
        </h1>

        <p
          className="mt-5 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: `${mobileColors.text}99` }}
        >
          Infraestrutura premium. Gestão profissional. Ecossistema completo
          para profissionais da saúde.
        </p>

        <div className="mt-8 flex flex-col gap-3.5">
          <button
            onClick={onSejaMembro}
            className="w-full py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            style={{ background: mobileColors.blue, fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
          >
            Seja Membro
            <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
          </button>
          <a
            href="#diferenciais"
            className="w-full py-4 rounded-full flex items-center justify-center border-2 active:scale-[0.98] transition-transform"
            style={{
              borderColor: mobileColors.blue,
              color: mobileColors.blue,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            Conheça o Espaço
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default MobileHero;
