import recepcaoImg from "@/assets/recepcao.jpg";
import consultorioImg from "@/assets/consultorio.jpg";
import heroImg from "@/assets/hero-clinic.jpg";

const spaces = [
  { img: heroImg, title: "Recepção", desc: "Ambiente acolhedor com atendimento profissional para recepcionar pacientes." },
  { img: recepcaoImg, title: "Sala de Espera", desc: "Espaço confortável projetado para oferecer bem-estar aos pacientes." },
  { img: consultorioImg, title: "Consultórios", desc: "Salas equipadas com padrão hospitalar, biossegurança e climatização." },
];

const EstruturaSection = () => {
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
      </div>
    </section>
  );
};

export default EstruturaSection;
