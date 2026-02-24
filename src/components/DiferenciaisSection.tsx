import { MapPin, Wallet, Armchair, BarChart3, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: MapPin, title: "Dentro de um hospital ativo", desc: "Credibilidade imediata e fluxo natural de pacientes — sem precisar construir reputação do zero." },
  { icon: Wallet, title: "Repasse financeiro automático", desc: "Controle em tempo real de tudo que entra. Transparência total como uma fintech médica." },
  { icon: Armchair, title: "Pronto para atender amanhã", desc: "Consultórios equipados, recepção profissional e sistema de gestão — é só chegar." },
  { icon: BarChart3, title: "Maximize sua margem", desc: "Pague apenas pelo tempo que usar. Sem aluguel fixo, sem funcionário, sem surpresas." },
  { icon: ShieldCheck, title: "Particular e convênios", desc: "Estrutura integrada para atender qualquer tipo de paciente, sem burocracia extra." },
  { icon: Clock, title: "Escale no seu ritmo", desc: "Por hora, turno ou mensal. Comece pequeno e cresça conforme sua demanda aumenta." },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Vantagens estratégicas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Não é só espaço. É infraestrutura para crescer.
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
