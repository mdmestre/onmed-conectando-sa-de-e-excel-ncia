import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-clinic.png";
import consultorioImg from "@/assets/consultorio.png";
import recepcaoImg from "@/assets/recepcao.png";
import ecosystemImg from "@/assets/doctor-ecosystem.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    emoji: "🏥",
    title: "Infraestrutura Premium",
    description: "Consultórios equipados e prontos para atender, dentro de um hospital de referência.",
    image: heroImg,
  },
  {
    emoji: "📈",
    title: "Crescimento",
    description: "Estratégia e dados para expandir sua prática de forma sustentável.",
    image: ecosystemImg,
  },
  {
    emoji: "⚙️",
    title: "Gestão",
    description: "Cuidamos da operação, equipe e rotinas administrativas para você.",
    image: recepcaoImg,
  },
  {
    emoji: "💻",
    title: "Tecnologia",
    description: "Sistemas inteligentes que otimizam tempo e experiência do paciente.",
    image: consultorioImg,
  },
];

const MobileBenefitsCarousel = () => {
  return (
    <section className="relative py-20 bg-[#F7F4F1] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="px-7 mb-8"
      >
        <span className="text-[#4F9D89] font-bold text-[10.5px] tracking-[0.22em] uppercase mb-3 block">
          Um ecossistema completo
        </span>
        <h2 className="font-['DM_Serif_Display'] text-[2rem] leading-[1.15] text-[#0A2E5D]">
          Tudo o que você precisa para crescer.
        </h2>
      </motion.div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-7 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="snap-center flex-shrink-0 w-[86vw] max-w-[360px] rounded-[32px] overflow-hidden bg-white shadow-[0_20px_50px_-16px_rgba(10,46,93,0.18)]"
          >
            <div className="h-[220px] relative">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xl">
                {card.emoji}
              </div>
            </div>
            <div className="p-6 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[1.15rem] font-bold text-[#0A2E5D] mb-1.5">{card.title}</h3>
                <p className="text-[0.88rem] text-[#0A2E5D]/60 leading-relaxed">{card.description}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#4F9D89] flex-shrink-0 mt-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-2">
        {cards.map((card) => (
          <span key={card.title} className="w-1.5 h-1.5 rounded-full bg-[#0A2E5D]/15" />
        ))}
      </div>
    </section>
  );
};

export default MobileBenefitsCarousel;
