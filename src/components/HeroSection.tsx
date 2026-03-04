import { useState } from "react";
import { MapPin } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-primary-foreground/80" />
            <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
              Dentro do Hospital Referência · Uberlândia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-primary-foreground mb-5">
            Consultório equipado dentro de hospital.{" "}
            <span className="text-primary-foreground/65">
              Você atende. A OnMed cuida do resto.
            </span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-xl">
            Estrutura hospitalar completa, recepção profissional, gestão
            financeira automatizada e tecnologia integrada — sem a burocracia
            de manter um consultório próprio.
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

