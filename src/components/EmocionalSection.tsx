const EmocionalSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
            Seu foco deve ser o paciente.{" "}
            <span className="onmed-gradient-text">O resto é nossa responsabilidade.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
            Você não se formou para lidar com aluguel, contas, funcionários e burocracia.
            Você se formou para transformar vidas. Na OnMed, a única coisa que você
            precisa se preocupar é com a excelência do seu atendimento.
          </p>
          <a
            href="https://wa.me/5534999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="onmed-gradient text-primary-foreground px-10 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity inline-block"
          >
            Quero conhecer a OnMed
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmocionalSection;
