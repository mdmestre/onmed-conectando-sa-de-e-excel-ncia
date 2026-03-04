import { useState } from "react";
import { MapPin } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const stats = [
  { value: "30+", label: "Profissionais" },
  { value: "12", label: "Consultórios" },
  { value: "15+", label: "Especialidades" },
];

const HeroSection = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Estrutura moderna da OnMed"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-primary-foreground/8 border border-primary-foreground/15 rounded-full px-5 py-2 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-primary-foreground/70" />
            <span className="text-[11px] font-semibold text-primary-foreground/70 uppercase tracking-[0.15em]">
              Dentro do Hospital Referência · Uberlândia
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-primary-foreground">
            Consultório equipado dentro de hospital.{" "}
            <span className="text-primary-foreground/55 font-medium">
              Você atende. A OnMed cuida do resto.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed max-w-lg">
            Estrutura hospitalar completa, recepção profissional, gestão
            financeira automatizada e tecnologia integrada — sem a burocracia
            de manter um consultório próprio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setAgendarOpen(true)}
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 text-center"
            >
              Agendar visita gratuita
            </button>
            <a
              href="#estrutura"
              className="border border-primary-foreground/20 text-primary-foreground/80 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-primary-foreground/5 transition-all text-center backdrop-blur-sm"
            >
              Conheça a estrutura
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-10 bg-primary-foreground/12" />}
                <div>
                  <span className="text-3xl font-bold text-primary-foreground block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-primary-foreground/45 uppercase tracking-wider mt-1 block">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </section>
  );
};

export default HeroSection;

