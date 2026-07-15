import { motion } from "framer-motion";
import { LayoutDashboard, BarChart3, CalendarClock, Headset, Workflow } from "lucide-react";
import { mobileColors, EASE } from "./mobileTheme";

const items = [
  { icon: LayoutDashboard, title: "Gestão", text: "Painel centralizado da sua operação." },
  { icon: BarChart3, title: "Relatórios", text: "Indicadores claros da sua prática." },
  { icon: CalendarClock, title: "Agenda", text: "Agendamento inteligente e automático." },
  { icon: Headset, title: "Suporte", text: "Time dedicado sempre disponível." },
  { icon: Workflow, title: "Processos", text: "Rotinas simplificadas, ponta a ponta." },
];

const MobileTechnology = () => {
  return (
    <section id="tecnologia" className="relative py-20 px-6 overflow-hidden" style={{ background: mobileColors.blueDeep }}>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-[70px]" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full" style={{ background: `${mobileColors.green}22`, filter: "blur(70px)" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative z-10 mb-9"
      >
        <span
          className="block mb-3 font-semibold tracking-[0.18em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
        >
          Tecnologia invisível
        </span>
        <h2 className="leading-[1.2] text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem" }}>
          Tudo funciona, sem você precisar operar nada.
        </h2>
      </motion.div>

      <div className="relative z-10 flex flex-col gap-3.5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06]"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/10">
              <item.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", fontWeight: 700 }}>
                {item.title}
              </h3>
              <p className="text-white/60 mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileTechnology;
