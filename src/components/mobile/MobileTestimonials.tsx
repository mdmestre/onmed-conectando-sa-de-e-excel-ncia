import { motion } from "framer-motion";
import { mobileColors, EASE } from "./mobileTheme";

/**
 * Depoimentos ilustrativos — substituir por relatos reais de membros antes de publicar.
 */
const testimonials = [
  {
    initials: "A.M.",
    specialty: "Cardiologista",
    quote:
      "Hoje eu só preciso pensar nos meus pacientes. Toda a operação — recepção, financeiro, agenda — é a Onmedic quem cuida.",
  },
  {
    initials: "R.T.",
    specialty: "Psicóloga",
    quote:
      "A estrutura é impecável e a gestão é realmente completa. Ganhei tempo de vida, não só produtividade.",
  },
  {
    initials: "F.C.",
    specialty: "Fisioterapeuta",
    quote:
      "Entrar no ecossistema Onmedic foi o que me permitiu focar em crescer profissionalmente sem carregar a operação sozinho.",
  },
];

const MobileTestimonials = () => {
  return (
    <section id="depoimentos" className="bg-white py-20">
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
          Depoimentos
        </span>
        <h2 className="leading-[1.2]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}>
          Quem já faz parte do ecossistema.
        </h2>
      </motion.div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.initials}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="snap-center flex-shrink-0 w-[82vw] max-w-[340px] rounded-[28px] p-7 flex flex-col gap-6"
            style={{ background: `${mobileColors.gray}70` }}
          >
            <p
              className="leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.2rem", color: mobileColors.text }}
            >
              “{t.quote}”
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: mobileColors.blue, fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "white" }}
              >
                {t.initials}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: `${mobileColors.text}80` }}>
                {t.specialty} · Membro Onmedic
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileTestimonials;
