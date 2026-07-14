import { motion } from "framer-motion";
import ecosystemImg from "@/assets/doctor-ecosystem.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;
const GREEN_GRADIENT = "linear-gradient(135deg, #7CC0B0 0%, #4F9D89 55%, #2E7F73 100%)";

const MobilePhotoStatement = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img
        src={ecosystemImg}
        alt="Profissional Onmedic"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,46,93,0.05) 0%, rgba(10,46,93,0.1) 55%, rgba(10,46,93,0.75) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="absolute bottom-0 left-0 right-0 px-7 pb-14"
      >
        <h2 className="font-['DM_Serif_Display'] font-normal text-[2.4rem] leading-[1.12] text-white">
          Mais tempo.
          <br />
          <span
            style={{
              background: GREEN_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Menos burocracia.
          </span>
        </h2>
      </motion.div>
    </section>
  );
};

export default MobilePhotoStatement;
