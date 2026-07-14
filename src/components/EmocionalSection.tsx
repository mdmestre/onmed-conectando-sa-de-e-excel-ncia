const EmocionalSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Seu foco no paciente. Nossa responsabilidade com todo o resto.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            A Onmedic cuida da estrutura, da recepção, da gestão financeira e da
            tecnologia para que o profissional possa se dedicar integralmente ao
            que mais importa: o atendimento de excelência.
          </p>
          <a
            href="https://wa.me/5534984253885"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary px-7 py-3.5 rounded text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmocionalSection;
