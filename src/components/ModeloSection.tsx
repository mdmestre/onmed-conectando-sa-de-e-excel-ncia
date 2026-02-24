const steps = [
  { num: "01", title: "Profissional agenda", desc: "Escolha o horário e a sala pelo sistema." },
  { num: "02", title: "Paciente realiza pagamento", desc: "Pagamento integrado com particular e convênios." },
  { num: "03", title: "Repasse automático", desc: "Sistema direciona o repasse automaticamente." },
  { num: "04", title: "Transparência total", desc: "Controle financeiro completo em tempo real." },
];

const ModeloSection = () => {
  return (
    <section id="modelo" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simples, transparente e eficiente
          </h2>
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
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModeloSection;
