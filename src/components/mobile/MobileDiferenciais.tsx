import { motion } from "framer-motion";
import { Building2, Settings2, Users, Layers } from "lucide-react";
import { mobileColors, EASE } from "./mobileTheme";

const items = [
  { icon: Building2, title: "Infraestrutura Premium" },
  { icon: Settings2, title: "Gestão Completa" },
  { icon: Users, title: "Comunidade" },
  { icon: Layers, title: "Ecossistema" },
];

const MobileDiferenciais = () => {
  return (
    <section id="diferenciais" className="bg-[#FAF9F7] px-6 py-16">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            className="bg-white rounded-[28px] p-6 flex flex-col gap-4 shadow-[0_8px_28px_-14px_rgba(8,58,109,0.18)]"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: `${mobileColors.blue}0D` }}
            >
              <item.icon className="w-6 h-6" strokeWidth={1.8} style={{ color: mobileColors.blue }} />
            </div>
            <span
              className="leading-snug"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.92rem", color: mobileColors.text }}
            >
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileDiferenciais;
