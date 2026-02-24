import { MapPin, Headphones, Armchair, CreditCard, FileCheck, Clock } from "lucide-react";

const items = [
  { icon: MapPin, title: "Localização estratégica", desc: "Dentro do Hospital Referência de Uberlândia" },
  { icon: Headphones, title: "Recepção e apoio administrativo", desc: "Equipe dedicada para recepcionar seus pacientes" },
  { icon: Armchair, title: "Salas equipadas", desc: "Consultórios prontos com equipamentos de qualidade" },
  { icon: CreditCard, title: "Integração com pagamentos", desc: "Sistema integrado para particular e convênios" },
  { icon: FileCheck, title: "Estrutura pronta", desc: "Para atendimento particular e convênios" },
  { icon: Clock, title: "Modelo flexível", desc: "Por hora, turno ou mensal — você escolhe" },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tudo que você precisa, em um só lugar
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 onmed-shadow hover:onmed-shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:onmed-gradient transition-all duration-300">
                <item.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
