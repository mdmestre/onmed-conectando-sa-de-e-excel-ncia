const CtaSection = () => {
  return (
    <section className="py-24 lg:py-32 onmed-gradient">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
          Pare de pagar por estrutura que você não usa.
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Junte-se aos profissionais que já reduziram custos, aumentaram a margem
          e elevaram o padrão do atendimento com a OnMed.
        </p>
        <a
          href="https://wa.me/5534999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-background text-foreground px-10 py-4 rounded-lg text-base font-bold hover:bg-muted transition-colors"
        >
          Quero fazer parte da OnMed
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
