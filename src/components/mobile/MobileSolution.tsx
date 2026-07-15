import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mobileColors, EASE } from "./mobileTheme";

const steps = [
  {
    title: "Recepção e atendimento",
    text: "Uma equipe dedicada cuida da recepção, agenda e relacionamento com seus pacientes.",
  },
  {
    title: "Gestão financeira",
    text: "Cuidamos do financeiro, compras e fornecedores — sem planilhas, sem dor de cabeça.",
  },
  {
    title: "Marketing e posicionamento",
    text: "Sua marca cresce com estratégia, sem esforço extra da sua parte.",
  },
  {
    title: "Infraestrutura sempre pronta",
    text: "Espaço, manutenção e acabamentos premium prontos para atender todos os dias.",
  },
  {
    title: "Tecnologia integrada",
    text: "Sistemas que simplificam cada processo — do agendamento ao prontuário.",
  },
];

const MobileSolution = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-20 bg-white px-6">
      <span
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
      >
        Como resolvemos
      </span>
      <h2
        className="leading-[1.2] mb-10"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
      >
        A Onmedic assume tudo isso por você.
      </h2>

      <div className="relative pl-9">
        <div className="absolute left-[6px] top-2 bottom-2 w-[2px] rounded-full" style={{ background: `${mobileColors.text}12` }} />
        <motion.div
          style={{
            height: lineHeight,
            background: `linear-gradient(180deg, ${mobileColors.green} 0%, ${mobileColors.blue} 100%)`,
          }}
          className="absolute left-[6px] top-2 w-[2px] rounded-full"
        />

        <div className="flex flex-col gap-11">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
              className="relative"
            >
              <div
                className="absolute -left-9 top-0.5 w-3.5 h-3.5 rounded-full bg-white border-2"
                style={{ borderColor: mobileColors.green }}
              />
              <h3
                className="mb-1.5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: mobileColors.text }}
              >
                {step.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: `${mobileColors.text}80` }}
              >
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileSolution;
