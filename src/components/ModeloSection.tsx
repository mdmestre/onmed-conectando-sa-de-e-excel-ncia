const steps = [
  { num: "01", title: "Agende pelo sistema", desc: "Escolha o horário e a sala em segundos. Sem burocracia, sem intermediários." },
  { num: "02", title: "Paciente paga integrado", desc: "Pagamento automatizado — particular ou convênio. Sem cobranças manuais." },
  { num: "03", title: "Repasse automático", desc: "O sistema direciona o valor para você automaticamente. Como uma fintech médica." },
  { num: "04", title: "Controle total em tempo real", desc: "Dashboard financeiro completo. Saiba exatamente quanto entrou e quanto é seu." },
];

const ModeloSection = () => {
  return (
    <section id="modelo" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gestão financeira que trabalha por você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparência total e repasse automático — tecnologia de fintech aplicada à saúde.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full onmed-gradient text-primary-foreground text-xl font-bold mb-6 relative z-10">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModeloSection;
