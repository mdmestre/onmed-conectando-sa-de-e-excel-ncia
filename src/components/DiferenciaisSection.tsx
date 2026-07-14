import { useState } from "react";
import { MapPin, Wallet, Armchair, BarChart3, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const items = [
  { icon: MapPin, title: "Localização hospitalar", desc: "Dentro do Hospital Referência de Uberlândia, com fluxo natural de pacientes e credibilidade institucional." },
  { icon: Armchair, title: "Estrutura completa", desc: "Consultórios equipados, recepção profissional e ambientes projetados para atendimento clínico." },
  { icon: Wallet, title: "Gestão financeira integrada", desc: "Sistema de pagamento automatizado com repasse transparente e controle em tempo real." },
  { icon: ShieldCheck, title: "Particular e convênios", desc: "Infraestrutura pronta para atender qualquer modalidade, sem burocracia adicional." },
  { icon: BarChart3, title: "Controle e transparência", desc: "Dashboard financeiro completo com visibilidade total sobre agendamentos e recebimentos." },
  { icon: Clock, title: "Modelo flexível", desc: "Utilização por hora, turno ou período mensal — adaptável à demanda de cada profissional." },
];

const DiferenciaisSection = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-secondary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10.5px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Por que a <span className="onmedic-gradient-text">Onmedic</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group p-7 rounded-2xl border border-border bg-white hover:border-primary/25 hover:shadow-[0_12px_40px_-8px_hsl(207_79%_38%/0.14)] transition-all duration-400 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-[14px] font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mini-CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground text-sm mb-5">
            Pronto para simplificar sua prática médica?
          </p>
          <button
            id="btn-agendar-diferenciais"
            onClick={() => setAgendarOpen(true)}
            className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-[11.5px] font-bold tracking-[0.12em] uppercase hover:bg-primary/90 transition-all duration-300 shadow-[0_4px_20px_-4px_hsl(207_79%_38%/0.35)] hover:shadow-[0_8px_28px_-4px_hsl(207_79%_38%/0.45)] hover:-translate-y-0.5"
          >
            Agendar visita à estrutura
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </section>
  );
};

export default DiferenciaisSection;
