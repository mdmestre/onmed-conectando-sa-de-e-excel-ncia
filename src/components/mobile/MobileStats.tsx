import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 100, prefix: "+", label: "Profissionais" },
  { value: 1, prefix: "", label: "Ecossistema" },
  { value: 100, suffix: "%", label: "Estrutura pronta" },
];

const MobileStats = () => {
  return (
    <section className="py-24 bg-white px-7">
      <div className="flex flex-col gap-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
            className="flex items-baseline gap-5"
          >
            <span className="font-['DM_Serif_Display'] text-[4.2rem] leading-none text-[#0A2E5D]">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-wide text-[#0A2E5D]/50 uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileStats;
