import { Stethoscope, Brain, Activity, Apple, HeartPulse } from "lucide-react";

const profiles = [
  { icon: Stethoscope, label: "Médicos Especialistas", desc: "Cardiologistas, dermatologistas, ortopedistas e demais especialidades." },
  { icon: Brain, label: "Psicólogos", desc: "Salas com isolamento acústico e ambiente adequado para sessões." },
  { icon: Activity, label: "Fisioterapeutas", desc: "Espaço adaptado para avaliações e atendimentos clínicos." },
  { icon: Apple, label: "Nutricionistas", desc: "Consultórios com equipamentos de avaliação disponíveis." },
  { icon: HeartPulse, label: "Demais Profissionais", desc: "Fonoaudiólogos, terapeutas ocupacionais e outros profissionais da saúde." },
];

const ParaQuemSection = () => {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Para profissionais da saúde
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A OnMed atende profissionais de diversas áreas da saúde que buscam
            estrutura de qualidade para seus atendimentos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profiles.map((p) => (
            <div
              key={p.label}
              className="flex items-start gap-4 bg-card border border-border rounded-lg px-6 py-5"
            >
              <p.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-foreground text-sm block mb-1">{p.label}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
