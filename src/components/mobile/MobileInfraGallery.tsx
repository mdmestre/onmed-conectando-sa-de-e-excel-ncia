import { motion } from "framer-motion";
import heroImg from "@/assets/hero-clinic.png";
import consultorio2Img from "@/assets/circulacao.png";
import consultorio3Img from "@/assets/consultorio3.png";
import recepcaoImg from "@/assets/recepcao.png";
import { mobileColors, EASE } from "./mobileTheme";

const slides = [
  { image: recepcaoImg, position: "center", label: "Recepção" },
  { image: consultorio3Img, position: "center", label: "Consultorios" },
  { image: consultorio2Img, position: "center", label: "Circulação" },
  { image: heroImg, position: "80% center", label: "Acabamentos" },
];

const MobileInfraGallery = () => {
  return (
    <section id="infraestrutura" className="relative py-20 bg-[#FAF9F7] overflow-hidden">
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
          Nossa infraestrutura
        </span>
        <h2
          className="leading-[1.2]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
        >
          Um tour pelo espaço que pode receber você.
        </h2>
      </motion.div>

      <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((slide, i) => (
          <motion.div
            key={`${slide.label}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
            className="snap-center flex-shrink-0 w-[74vw] max-w-[300px] h-[400px] rounded-[28px] overflow-hidden relative"
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: slide.position }}
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,58,109,0.55) 0%, rgba(8,58,109,0) 45%)" }}
            />
            <span
              className="absolute bottom-5 left-5 text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem" }}
            >
              {slide.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileInfraGallery;
