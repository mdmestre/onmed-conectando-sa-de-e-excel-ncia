import { useState } from "react";
import { MapPin } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const HeroSection = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Estrutura moderna da OnMed"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Badge de localização */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-primary-foreground/80" />
            <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
              Dentro do Hospital Referência · Uberlândia
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-primary-foreground mb-6">
            Consultório equipado dentro de hospital.{" "}
            <span className="text-primary-foreground/70">
              Você atende. A OnMed cuida do resto.
            </span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed mb-10 max-w-xl">
            Estrutura hospitalar completa, recepção profissional, gestão
            financeira automatizada e tecnologia integrada — sem a burocracia
            de manter um consultório próprio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setAgendarOpen(true)}
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Agendar visita gratuita
            </button>
            <a
              href="#estrutura"
              className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded text-sm font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Conheça a estrutura
            </a>
          </div>

          {/* Prova social inline */}
          <div className="mt-10 flex items-center gap-6">
            <div className="text-center">
              <span className="text-2xl font-bold text-primary-foreground block">30+</span>
              <span className="text-xs text-primary-foreground/60">Profissionais</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <span className="text-2xl font-bold text-primary-foreground block">12</span>
              <span className="text-xs text-primary-foreground/60">Consultórios</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <span className="text-2xl font-bold text-primary-foreground block">15+</span>
              <span className="text-xs text-primary-foreground/60">Especialidades</span>
            </div>
          </div>
        </div>
      </div>
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </section>
  );
};

export default HeroSection;

