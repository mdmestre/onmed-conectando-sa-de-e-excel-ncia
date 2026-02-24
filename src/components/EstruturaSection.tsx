import recepcaoImg from "@/assets/recepcao.jpg";
import consultorioImg from "@/assets/consultorio.jpg";
import heroImg from "@/assets/hero-clinic.jpg";

const spaces = [
  { img: heroImg, title: "Recepção Moderna", desc: "Ambiente acolhedor e profissional para recepcionar seus pacientes." },
  { img: recepcaoImg, title: "Espaço de Espera", desc: "Sala de espera confortável com design contemporâneo." },
  { img: consultorioImg, title: "Consultórios Equipados", desc: "Salas com equipamentos de alta qualidade e biossegurança." },
];

const EstruturaSection = () => {
  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Estrutura Física
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Padrão hospitalar, conforto de alto nível
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ambiente projetado com biossegurança, acessibilidade e conforto para
            profissionais e pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <div key={space.title} className="group rounded-2xl overflow-hidden onmed-shadow hover:onmed-shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={space.img}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-lg font-bold text-foreground mb-2">{space.title}</h3>
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
