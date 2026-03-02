import { Users, Building2, Calendar, Stethoscope } from "lucide-react";

const stats = [
  { icon: Users, value: "30+", label: "Profissionais ativos" },
  { icon: Building2, value: "12", label: "Consultórios" },
  { icon: Stethoscope, value: "15+", label: "Especialidades" },
  { icon: Calendar, value: "2.000+", label: "Consultas por mês" },
];

const ProvasSociaisSection = () => {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            A OnMed em números
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dados que refletem nossa estrutura
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-8 bg-card border border-border rounded-lg">
              <s.icon className="w-5 h-5 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-1">
                {s.value}
              </div>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvasSociaisSection;
