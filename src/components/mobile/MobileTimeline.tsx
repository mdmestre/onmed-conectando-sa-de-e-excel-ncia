import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  "Você atende",
  "Nós organizamos",
  "Você cresce",
  "Seu consultório evolui",
];

const MobileTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-24 bg-white px-7">
      <span className="text-[#4F9D89] font-bold text-[10.5px] tracking-[0.22em] uppercase mb-10 block">
        Como funciona
      </span>

      <div className="relative pl-10">
        {/* Linha base */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#0A2E5D]/10 rounded-full" />
        {/* Linha animada */}
        <motion.div
          style={{
            height: lineHeight,
            background: "linear-gradient(180deg, #7CC0B0 0%, #4F9D89 50%, #2E7F73 100%)",
          }}
          className="absolute left-[7px] top-2 w-[2px] rounded-full"
        />

        <div className="flex flex-col gap-14">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
              className="relative"
            >
              <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-white border-2 border-[#4F9D89]" />
              <span className="text-[0.75rem] font-bold tracking-[0.14em] uppercase text-[#0A2E5D]/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-['DM_Serif_Display'] text-[1.9rem] leading-tight text-[#0A2E5D] mt-1">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileTimeline;
