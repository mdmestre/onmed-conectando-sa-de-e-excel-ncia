import { X, Check } from "lucide-react";

const tradicional = [
  "Aluguel fixo mensal alto",
  "Funcionária para recepcionar",
  "Contas de água, luz, internet",
  "Sistema de gestão por sua conta",
  "Taxas e impostos do espaço",
  "Risco financeiro constante",
  "Baixa previsibilidade",
];

const onmed = [
  "Sem custo fixo — pague pelo uso",
  "Recepção profissional inclusa",
  "Infraestrutura completa pronta",
  "Sistema de gestão inteligente",
  "Pagamento automatizado",
  "Zero risco operacional",
  "Totalmente escalável",
];

const ComparativoSection = () => {
  return (
    <section id="comparativo" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Comparativo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que manter um consultório próprio{" "}
            <span className="onmed-gradient-text">não é mais necessário?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja lado a lado o que você está carregando — e o que poderia eliminar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tradicional */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </span>
              Consultório Tradicional
            </h3>
            <ul className="space-y-4">
              {tradicional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* OnMed */}
          <div className="rounded-2xl border border-secondary/30 bg-accent p-8 onmed-shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full onmed-gradient flex items-center justify-center">
                <Check className="w-4 h-4 text-primary-foreground" />
              </span>
              OnMed
            </h3>
            <ul className="space-y-4">
              {onmed.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground text-sm font-medium">
                  <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparativoSection;
