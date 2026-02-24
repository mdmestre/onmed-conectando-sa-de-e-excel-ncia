import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ambiente moderno da OnMed"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6 animate-fade-up">
            Dentro do Hospital Referência de Uberlândia
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Um novo padrão em estrutura médica{" "}
            <span className="onmed-gradient-text">compartilhada.</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Espaços modernos, tecnologia integrada e gestão inteligente para
            profissionais da saúde.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#estrutura"
              className="onmed-gradient text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Quero conhecer a estrutura
            </a>
            <a
              href="https://wa.me/5534999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background/60 backdrop-blur-sm text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-muted transition-colors text-center"
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
