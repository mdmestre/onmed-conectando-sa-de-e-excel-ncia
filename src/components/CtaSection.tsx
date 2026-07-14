import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const CtaSection = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);

  return (
    <section id="contato" className="py-24 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Gradiente decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-secondary/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <span className="text-[10.5px] font-bold text-primary-foreground/40 uppercase tracking-[0.2em] mb-5 block">
          Próximo passo
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 tracking-tight text-balance leading-tight">
          Conheça a Onmedic<br className="hidden md:block" /> pessoalmente
        </h2>
        <p className="text-primary-foreground/55 mb-12 max-w-lg mx-auto leading-relaxed">
          Agende uma visita institucional e conheça nossa estrutura dentro do
          Hospital Referência de Uberlândia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            id="btn-agendar-cta"
            onClick={() => setAgendarOpen(true)}
            className="group inline-flex items-center justify-center gap-2.5 bg-white text-foreground px-9 py-4 rounded-full text-[11.5px] font-bold hover:bg-white/90 transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 tracking-[0.12em] uppercase"
          >
            Agendar visita
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="mailto:gerencia@onmedicbrasil.com.br"
            className="group inline-flex items-center justify-center gap-2.5 border-2 border-primary-foreground/20 text-primary-foreground/80 px-9 py-4 rounded-full text-[11.5px] font-bold hover:bg-primary-foreground/8 hover:border-primary-foreground/40 hover:text-primary-foreground transition-all duration-300 tracking-[0.12em] uppercase"
          >
            <Phone className="w-3.5 h-3.5" />
            Solicitar apresentação
          </a>
        </div>
      </div>
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </section>
  );
};

export default CtaSection;
