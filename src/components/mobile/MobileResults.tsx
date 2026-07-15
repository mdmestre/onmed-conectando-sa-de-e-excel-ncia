import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { mobileColors, EASE } from "./mobileTheme";

const stats = [
  { value: 4, prefix: "+", label: "Profissionais no ecossistema" },
  { value: 13, prefix: "", label: "Ecossistema completo" },
  { value: 100, suffix: "%", label: "Estrutura pronta desde o dia para iniciar" },
  { value: 0, prefix: "", label: "Preocupações com a operação" },
];

const MobileResults = () => {
  return (
    <section className="py-20 bg-[#FAF9F7] px-6">
      <span
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
      >
        Resultados
      </span>
      <h2
        className="leading-[1.2] mb-10"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
      >
        Liberdade, tempo e produtividade — em números.
      </h2>

      <div className="flex flex-col gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65, delay: i * 0.06, ease: EASE }}
            className="flex items-baseline gap-5 pb-8 border-b border-black/[0.06] last:border-0 last:pb-0"
          >
            <span
              className="leading-none flex-shrink-0"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.6rem", color: mobileColors.blueDeep }}
            >
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </span>
            <span
              className="leading-snug"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: `${mobileColors.text}80` }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileResults;
