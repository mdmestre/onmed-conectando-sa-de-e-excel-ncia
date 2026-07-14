import { motion } from "framer-motion";
import consultorioImg from "@/assets/consultorio.png";
import recepcaoImg from "@/assets/recepcao.png";
import heroImg from "@/assets/hero-clinic.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    title: "Consultórios",
    description: "Salas premium. Prontas para receber seus pacientes.",
    image: consultorioImg,
  },
  {
    title: "Recepção",
    description: "Ambiente acolhedor, com identidade visual da sua marca.",
    image: recepcaoImg,
  },
  {
    title: "Coworking médico",
    description: "Espaços compartilhados pensados para produtividade.",
    image: heroImg,
  },
];

const MobileGallery = () => {
  return (
    <section className="relative py-20 bg-[#F7F4F1]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="px-7 mb-8"
      >
        <span className="text-[#4F9D89] font-bold text-[10.5px] tracking-[0.22em] uppercase mb-3 block">
          Conheça o espaço
        </span>
      </motion.div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-7 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="snap-center flex-shrink-0 w-[90vw] max-w-[380px] h-[78vh] max-h-[640px] rounded-[32px] overflow-hidden relative shadow-[0_24px_60px_-16px_rgba(10,46,93,0.22)]"
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(10,46,93,0) 50%, rgba(10,46,93,0.75) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-['DM_Serif_Display'] text-[1.9rem] leading-tight text-white mb-2">
                {slide.title}
              </h3>
              <p className="text-[0.9rem] text-white/75 leading-relaxed max-w-[260px]">
                {slide.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileGallery;
