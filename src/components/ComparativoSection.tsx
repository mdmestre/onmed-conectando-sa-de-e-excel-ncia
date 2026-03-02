import { Check } from "lucide-react";

const features = [
  { label: "Consultórios equipados", included: true },
  { label: "Recepção e atendimento ao paciente", included: true },
  { label: "Sistema de agendamento", included: true },
  { label: "Gestão financeira automatizada", included: true },
  { label: "Biossegurança hospitalar", included: true },
  { label: "Atendimento particular e convênios", included: true },
  { label: "Localização dentro de hospital", included: true },
  { label: "Modelo flexível de utilização", included: true },
];

const ComparativoSection = () => {
  return (
    <section id="comparativo" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              O que está incluso
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo que o profissional precisa, em um só lugar
            </h2>
          </div>

          <div className="bg-card border border-border rounded-lg divide-y divide-border">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-4 px-6 py-4">
                <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparativoSection;
