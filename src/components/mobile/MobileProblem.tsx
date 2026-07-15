import { motion } from "framer-motion";
import { Users, Wallet, ShoppingCart, Calendar, Megaphone, Building2, Wrench, Laptop, HeartHandshake } from "lucide-react";
import { mobileColors, EASE } from "./mobileTheme";

const burdens = [
  { icon: Users, label: "Equipe" },
  { icon: Wallet, label: "Financeiro" },
  { icon: ShoppingCart, label: "Compras" },
  { icon: Calendar, label: "Agenda" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Building2, label: "Infraestrutura" },
  { icon: Wrench, label: "Manutenção" },
  { icon: Laptop, label: "Tecnologia" },
  { icon: HeartHandshake, label: "Relacionamento" },
];

const MobileProblem = () => {
  return (
    <section className="bg-[#EDEDED]/60 px-6 py-16">
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: `${mobileColors.text}70` }}
      >
        O que consome sua rotina
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="leading-[1.2] mb-9"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: mobileColors.text }}
      >
        O sucesso profissional não deveria custar sua liberdade.
      </motion.h2>

      <div className="flex flex-wrap gap-2.5">
        {burdens.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
            className="flex items-center gap-2 pl-3 pr-4 h-11 rounded-full bg-white/80"
          >
            <b.icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.8} style={{ color: `${mobileColors.text}60` }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: `${mobileColors.text}90` }}>
              {b.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="mt-8"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.35rem", color: `${mobileColors.text}80` }}
      >
        Tudo isso, sozinho.
      </motion.p>
    </section>
  );
};

export default MobileProblem;
