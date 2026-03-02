const CtaSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Conheça a OnMed pessoalmente
        </h2>
        <p className="text-primary-foreground/60 mb-10 max-w-lg mx-auto">
          Agende uma visita institucional e conheça nossa estrutura dentro do
          Hospital Referência de Uberlândia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5534999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-foreground px-8 py-3.5 rounded text-sm font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Agendar visita
          </a>
          <a
            href="mailto:contato@onmed.com.br"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Solicitar apresentação
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
