import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-clinic.png";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const HeroSection = () => {
  const [agendarOpen, setAgendarOpen] = useState(false);

  return (
    <section className="relative overflow-hidden lg:min-h-screen lg:flex lg:items-center">
      {/* ── IMAGEM DE FUNDO FULL-WIDTH ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Recepção Onmedic"
          className="w-full h-full object-cover object-[68%_center] lg:object-center scale-[1.02] animate-fade-in"
          loading="eager"
        />

        {/* Overlay gradiente: branco sólido à esquerda → transparente à direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(250,249,247,1) 0%, rgba(250,249,247,0.97) 28%, rgba(250,249,247,0.82) 45%, rgba(250,249,247,0.30) 68%, rgba(250,249,247,0) 100%)",
          }}
        />

        {/* Overlay vertical sutil no topo para suavizar com o header */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,249,247,0.6) 0%, transparent 15%, transparent 80%, rgba(250,249,247,0.5) 100%)",
          }}
        />
      </div>

      {/* ── CONTEÚDO SOBREPOSTO ── */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="pt-[112px] pb-14 lg:pt-[72px] lg:min-h-screen lg:flex lg:items-center">
          <div className="max-w-[600px] animate-fade-up">

            {/* Eyebrow */}
            <span className="text-secondary font-bold text-[10.5px] tracking-[0.22em] uppercase mb-7 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-secondary rounded-full flex-shrink-0" />
              Um novo modelo de crescimento para profissionais da saúde
            </span>

            {/* Headline */}
            <h1
              className="font-['DM_Serif_Display'] font-normal text-[2.75rem] md:text-[3.1rem] lg:text-[3.6rem] leading-[1.06] lg:leading-[1.08] text-foreground mb-7"
              style={{ letterSpacing: "-0.01em" }}
            >
              {/* Mobile: headline curta */}
              <span className="lg:hidden">
                Mais tempo para o que{" "}
                <span style={{ color: "hsl(161 42% 34%)" }}>
                  realmente importa.
                </span>
              </span>
              {/* Desktop: headline completa */}
              <span className="hidden lg:inline">
                Infraestrutura, gestão e crescimento para você focar no{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, hsl(161 42% 32%), hsl(207 79% 38%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  que realmente importa.
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[1rem] text-muted-foreground/85 leading-relaxed mb-12 max-w-[460px]">
              {/* Mobile */}
              <span className="lg:hidden">
                Um novo modelo de estrutura, gestão e crescimento para
                profissionais da saúde que querem liberdade para exercer o que faz
                sentido: cuidar de pessoas.
              </span>
              {/* Desktop */}
              <span className="hidden lg:inline">
                Na Onmedic, cuidamos de toda a estrutura, gestão e processos para
                que você tenha mais tempo, segurança e liberdade para exercer o que
                te move: cuidar de pessoas.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Botão primário — azul sólido */}
              <button
                id="btn-agendar-hero"
                onClick={() => setAgendarOpen(true)}
                className="group inline-flex w-full sm:w-auto items-center justify-between gap-4 bg-primary text-white px-7 py-3.5 rounded-full text-[11px] font-medium tracking-wide hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
              >
                Agende uma conversa
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Link secundário */}
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 text-[11px] font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-200 border-b-2 border-secondary/60 hover:border-secondary pb-1 whitespace-nowrap self-start sm:self-auto"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 opacity-50">
        <ChevronDown className="w-4 h-4 text-foreground/60 animate-bounce" />
      </div>

      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </section>
  );
};

export default HeroSection;
