import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Estrutura moderna da OnMed"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-[0.2em] mb-6">
            Hospital Referência de Uberlândia
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-primary-foreground mb-6">
            Centro Médico Compartilhado com estrutura hospitalar completa
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed mb-10 max-w-xl">
            Ambientes modernos, tecnologia integrada e gestão inteligente para
            profissionais da saúde que buscam excelência no atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#estrutura"
              className="bg-primary-foreground text-foreground px-7 py-3.5 rounded text-sm font-semibold hover:bg-primary-foreground/90 transition-colors text-center"
            >
              Conheça a estrutura
            </a>
            <a
              href="https://wa.me/5534999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded text-sm font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Agendar visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
