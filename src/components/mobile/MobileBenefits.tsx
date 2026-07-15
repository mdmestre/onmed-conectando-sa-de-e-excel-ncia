import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { mobileColors, EASE } from "./mobileTheme";

const benefits = [
  "Infraestrutura completa e premium",
  "Gestão administrativa e financeira",
  "Recepção e atendimento ao paciente",
  "Marketing e posicionamento de marca",
  "Tecnologia integrada de ponta a ponta",
  "Suporte contínuo e dedicado",
  "Comunidade de especialistas",
  "Liberdade para focar nos pacientes",
];

const MobileBenefits = () => {
  return (
    <section className="bg-white px-6 py-16">
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
      >
        Benefícios de ser membro
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="leading-[1.2] mb-8"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
      >
        Tudo que você ganha ao entrar para o ecossistema.
      </motion.h2>

      <div className="grid grid-cols-1 gap-3">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
            className="flex items-center gap-3.5 p-4 rounded-2xl"
            style={{ background: `${mobileColors.gray}70` }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: mobileColors.green }}
            >
              <Check className="w-4 h-4 text-white" strokeWidth={2.4} />
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: mobileColors.text }}>
              {benefit}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileBenefits;
