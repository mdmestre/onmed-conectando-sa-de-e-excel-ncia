import { useState } from "react";
import heroImg from "@/assets/hero-clinic.jpg";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const HeroSection = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Estrutura moderna da OnMed"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-primary-foreground mb-5">
            Consultório equipado{" "}
            <br className="hidden md:block" />
            dentro de hospital.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 font-light leading-relaxed mb-10 max-w-lg">
            Você atende. A OnMed cuida do resto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setAgendarOpen(true)}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-center"
            >
              Agendar visita gratuita
            </button>
            <a
              href="#estrutura"
              className="border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-lg text-sm font-medium hover:bg-primary-foreground/10 transition-all backdrop-blur-sm text-center"
            >
              Conheça a estrutura
            </a>
          </div>
        </div>
      </div>
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </section>
  );
};

export default HeroSection;

