import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import recepcaoImg from "@/assets/recepcao.png";
import consultorioImg from "@/assets/consultorio.png";
import heroImg from "@/assets/hero-clinic.png";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const spaces = [
  { img: heroImg, title: "Recepção", desc: "Ambiente acolhedor com atendimento profissional para recepcionar pacientes." },
  { img: recepcaoImg, title: "Sala de Espera", desc: "Espaço confortável projetado para oferecer bem-estar aos pacientes." },
  { img: consultorioImg, title: "Consultórios", desc: "Salas equipadas com padrão hospitalar, biossegurança e climatização." },
];

const EstruturaSection = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            Estrutura Física
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Infraestrutura hospitalar de alto padrão
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ambiente projetado com biossegurança, acessibilidade e conforto para
            profissionais e pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div key={space.title} className="group rounded-lg overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={space.img}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground mb-1">{space.title}</h3>
                <p className="text-muted-foreground text-sm">{space.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tour em vídeo */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Conheça a clínica em vídeo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Faça um tour em vídeo pelos nossos ambientes antes mesmo de agendar sua visita.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden border border-border bg-card max-w-3xl mx-auto aspect-video">
            {videoPlaying ? (
              <video
                src="/videos/clinica-onmedic-tour.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <button
                onClick={() => setVideoPlaying(true)}
                aria-label="Reproduzir vídeo da clínica"
                className="group absolute inset-0 w-full h-full"
              >
                <img
                  src={heroImg}
                  alt="Tour em vídeo da Onmedic"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Mini-CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground text-sm mb-5">
            Quer conhecer pessoalmente? Agende uma visita sem compromisso.
          </p>
          <button
            onClick={() => setAgendarOpen(true)}
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Ver a estrutura ao vivo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </section>
  );
};

export default EstruturaSection;

