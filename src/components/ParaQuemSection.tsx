import { Stethoscope, Brain, Activity, Apple, HeartPulse } from "lucide-react";

const profiles = [
  { icon: Stethoscope, label: "Médicos Especialistas", desc: "Cardiologistas, dermatologistas, ortopedistas e mais de 15 especialidades." },
  { icon: Brain, label: "Psicólogos", desc: "Salas com isolamento acústico e ambiente acolhedor para sessões." },
  { icon: Activity, label: "Fisioterapeutas", desc: "Espaço adaptado para avaliações e atendimentos clínicos." },
  { icon: Apple, label: "Nutricionistas", desc: "Consultórios com balança e bioimpedância disponíveis." },
  { icon: HeartPulse, label: "Outros Profissionais", desc: "Fonoaudiólogos, terapeutas ocupacionais e mais." },
];

const ParaQuemSection = () => {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Para quem é
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profissionais que querem crescer sem risco
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você quer atender com estrutura premium, controle financeiro e
            zero burocracia, a OnMed foi feita para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <div
              key={p.label}
              className="flex items-start gap-4 bg-card rounded-2xl px-8 py-6 onmed-shadow hover:onmed-shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl onmed-gradient flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-foreground text-sm block mb-1">{p.label}</span>
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
