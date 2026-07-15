import { motion } from "framer-motion";
import { mobileColors, EASE } from "./mobileTheme";

const steps = [
  { number: "01", title: "Agende uma conversa", text: "Converse com nosso time e entenda como funciona o ecossistema." },
  { number: "02", title: "Conheça o espaço", text: "Visite pessoalmente os ambientes e a estrutura Onmedic." },
  { number: "03", title: "Defina seu modelo", text: "Escolha como sua prática vai funcionar dentro do ecossistema." },
  { number: "04", title: "Comece a atender", text: "Operação pronta — você foca exclusivamente nos seus pacientes." },
];

const MobileProcess = () => {
  return (
    <section className="bg-[#FAF9F7] px-6 py-20">
      <span
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
      >
        Como se tornar membro
      </span>
      <h2
        className="leading-[1.2] mb-11"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
      >
        Quatro passos até sua nova rotina.
      </h2>

      <div className="flex flex-col gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, delay: i * 0.07, ease: EASE }}
            className="flex gap-5"
          >
            <span
              className="leading-none flex-shrink-0"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", color: `${mobileColors.blue}30` }}
            >
              {step.number}
            </span>
            <div className="pt-1.5">
              <h3 className="mb-1.5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: mobileColors.text }}>
                {step.title}
              </h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: `${mobileColors.text}80` }}>
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileProcess;
