import { motion } from "framer-motion";
import facaparteImg from "@/assets/facaparte.png";
import { mobileColors, EASE } from "./mobileTheme";

const tags = ["Networking", "Eventos", "Parcerias", "Troca de experiências"];

const MobileCommunity = () => {
  return (
    <section id="comunidade" className="bg-[#FAF9F7] px-6 py-16">
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
      >
        Comunidade
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="leading-[1.2] mb-7"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
      >
        Você passa a fazer parte de um ecossistema, não apenas de um espaço.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="rounded-[28px] overflow-hidden mb-6"
      >
        <img src={facaparteImg} alt="Comunidade Onmedic" className="w-full h-[260px] object-cover" loading="lazy" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="leading-relaxed mb-6"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: `${mobileColors.text}90` }}
      >
        Profissionais que compartilham o mesmo padrão de excelência, trocam
        experiências e crescem juntos dentro do ecossistema Onmedic.
      </motion.p>

      <div className="flex flex-wrap gap-2.5">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
            className="px-4 h-10 rounded-full flex items-center"
            style={{
              background: `${mobileColors.green}15`,
              color: mobileColors.blueDeep,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default MobileCommunity;
