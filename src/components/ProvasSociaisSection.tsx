import { Users, Building2, Calendar, Stethoscope } from "lucide-react";

const stats = [
  { icon: Users, value: "30+", label: "Profissionais ativos" },
  { icon: Building2, value: "13", label: "Consultórios" },
  { icon: Stethoscope, value: "15+", label: "Especialidades" },
  { icon: Calendar, value: "2.000+", label: "Consultas por mês" },
];

const ProvasSociaisSection = () => {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10.5px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
            A Onmedic em números
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Dados que refletem nossa estrutura
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group text-center p-8 bg-white border border-border rounded-2xl hover:border-primary/25 hover:shadow-[0_12px_36px_-8px_hsl(207_79%_38%/0.14)] transition-all duration-400 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-extrabold text-foreground mb-1.5 tracking-tight">
                {s.value}
              </div>
              <span className="text-[11.5px] text-muted-foreground/80 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvasSociaisSection;
