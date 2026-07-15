import { motion } from "framer-motion";
import consultorioImg from "@/assets/consultorio.png";
import { mobileColors, EASE } from "./mobileTheme";

const MobileEcosystem = () => {
  return (
    <section id="ecossistema" className="bg-white px-6 py-16">
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
      >
        Mais que um espaço
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="leading-[1.2] mb-7"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
      >
        Um ecossistema feito para impulsionar sua prática.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="rounded-[28px] overflow-hidden mb-6"
      >
        <img
          src={consultorioImg}
          alt="Consultório premium Onmedic"
          className="w-full h-[280px] object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: `${mobileColors.text}99` }}
      >
        Consultórios equipados, recepção profissional, tecnologia integrada e
        uma comunidade de especialistas — tudo pensado para que você cresça
        sem carregar a operação sozinho.
      </motion.p>
    </section>
  );
};

export default MobileEcosystem;
