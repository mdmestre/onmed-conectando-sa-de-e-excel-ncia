import { Star, Users, Building2, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: "30+", label: "Profissionais ativos" },
  { icon: Building2, value: "12", label: "Consultórios equipados" },
  { icon: Calendar, value: "2.000+", label: "Consultas realizadas/mês" },
  { icon: Star, value: "4.9", label: "Avaliação dos profissionais" },
];

const testimonials = [
  {
    name: "Dra. Mariana Costa",
    role: "Dermatologista",
    text: "Saí de um consultório com aluguel de R$5.000 e hoje pago apenas pelo que uso. Minha margem triplicou e meus pacientes elogiam o ambiente.",
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Ortopedista",
    text: "Estar dentro do Hospital Referência mudou completamente a percepção dos meus pacientes. A credibilidade é outra. E o sistema de repasse automático é impecável.",
  },
  {
    name: "Dra. Camila Rocha",
    role: "Psicóloga",
    text: "Comecei com 2 turnos por semana. Hoje atendo 5 dias. A flexibilidade da OnMed me permitiu crescer sem risco nenhum.",
  },
];

const ProvasSociaisSection = () => {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-card rounded-2xl onmed-shadow">
              <div className="w-12 h-12 rounded-xl onmed-gradient flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold onmed-gradient-text mb-1">
                {s.value}
              </div>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Quem já faz parte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Profissionais que escolheram crescer com a OnMed
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 onmed-shadow hover:onmed-shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <span className="font-bold text-foreground text-sm block">{t.name}</span>
                <span className="text-xs text-muted-foreground">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvasSociaisSection;
