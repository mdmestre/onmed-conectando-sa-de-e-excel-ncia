import { Stethoscope, Brain, Activity, Apple, HeartPulse } from "lucide-react";

const profiles = [
  { icon: Stethoscope, label: "Médicos Especialistas" },
  { icon: Brain, label: "Psicólogos" },
  { icon: Activity, label: "Fisioterapeutas" },
  { icon: Apple, label: "Nutricionistas" },
  { icon: HeartPulse, label: "Outros Profissionais da Saúde" },
];

const ParaQuemSection = () => {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Para quem é
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Profissionais que buscam excelência
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-4 bg-card rounded-2xl px-8 py-6 onmed-shadow hover:onmed-shadow-lg transition-shadow duration-300 min-w-[240px]"
            >
              <div className="w-12 h-12 rounded-xl onmed-gradient flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
