import { motion } from "framer-motion";
import consultorioImg from "@/assets/consultorio3.png";
import recepcaoImg from "@/assets/recepcao.png";
import heroImg from "@/assets/hero-clinic.png";
import ecosystemImg from "@/assets/consultorio.png";
import { mobileColors, EASE } from "./mobileTheme";

const ambientes = [
  {
    title: "Consultórios",
    description: "Salas premium equipadas, prontas para receber seus pacientes desde o primeiro dia.",
    image: consultorioImg,
    position: "center",
  },
  {
    title: "Recepção",
    description: "Ambiente sofisticado que já entra em contato com o paciente antes mesmo da consulta.",
    image: heroImg,
    position: "center",
  },
  {
    title: "Espaços comuns",
    description: "Áreas compartilhadas com acabamento premium, pensadas para conforto e circulação.",
    image: recepcaoImg,
    position: "center",
  },
  {
    title: "Área de exame",
    description: "Aréa de exame com equipamentos modernos e confortáveis.",
    image: ecosystemImg,
    position: "center",
  },
];

const MobileAmbientes = () => {
  return (
    <section id="ambientes" className="relative py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="px-6 mb-8"
      >
        <span
          className="block mb-3 font-semibold tracking-[0.18em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
        >
          Conheça nossos ambientes
        </span>
      </motion.div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {ambientes.map((amb, i) => (
          <motion.div
            key={amb.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            className="snap-center flex-shrink-0 w-[88vw] max-w-[360px] h-[74vh] max-h-[600px] rounded-[28px] overflow-hidden relative shadow-[0_24px_60px_-16px_rgba(8,58,109,0.22)]"
          >
            <img
              src={amb.image}
              alt={amb.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: amb.position }}
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(8,58,109,0) 45%, rgba(8,58,109,0.8) 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem" }}>
                {amb.title}
              </h3>
              <p className="text-white/75 leading-relaxed max-w-[270px]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem" }}>
                {amb.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileAmbientes;
