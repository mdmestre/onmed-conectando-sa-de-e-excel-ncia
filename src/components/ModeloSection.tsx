const steps = [
  { num: "01", title: "Agendamento", desc: "O profissional reserva a sala pelo sistema de forma simples e imediata." },
  { num: "02", title: "Atendimento", desc: "Paciente é recebido pela equipe de recepção e direcionado ao consultório." },
  { num: "03", title: "Pagamento integrado", desc: "O sistema processa o pagamento — particular ou convênio — de forma automatizada." },
  { num: "04", title: "Controle financeiro", desc: "Repasse automático com dashboard completo para acompanhamento em tempo real." },
];

const ModeloSection = () => {
  return (
    <section id="modelo" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gestão e tecnologia integradas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Da reserva ao repasse financeiro, todo o processo é automatizado
            para garantir transparência e eficiência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary text-sm font-bold mb-5">
                {step.num}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModeloSection;
