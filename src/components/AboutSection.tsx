import { ShieldCheck, TrendingUp, Building, Zap } from "lucide-react";

const pillars = [
  { icon: Building, label: "Ambiente hospitalar real", desc: "Credibilidade instantânea para seus pacientes" },
  { icon: ShieldCheck, label: "Segurança clínica completa", desc: "Biossegurança e regulamentação hospitalar" },
  { icon: TrendingUp, label: "Fluxo natural de pacientes", desc: "Visibilidade dentro de um hospital ativo" },
  { icon: Zap, label: "Operação automatizada", desc: "Agendamento, pagamento e repasse sem esforço" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Por que a OnMed
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            O único centro médico compartilhado{" "}
            <span className="onmed-gradient-text">dentro de um hospital</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estar dentro do Hospital Referência de Uberlândia não é apenas
            conveniência — é um ativo estratégico. Seus pacientes percebem
            mais segurança, mais credibilidade e mais confiança. Você ganha
            posicionamento premium sem investir em estrutura própria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 hover:onmed-shadow transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl onmed-gradient flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-bold text-foreground mb-1">{p.label}</span>
              <span className="text-xs text-muted-foreground">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
