import { MapPin, Wallet, Armchair, BarChart3, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: MapPin, title: "Localização hospitalar", desc: "Dentro do Hospital Referência de Uberlândia, com fluxo natural de pacientes e credibilidade institucional." },
  { icon: Armchair, title: "Estrutura completa", desc: "Consultórios equipados, recepção profissional e ambientes projetados para atendimento clínico." },
  { icon: Wallet, title: "Gestão financeira integrada", desc: "Sistema de pagamento automatizado com repasse transparente e controle em tempo real." },
  { icon: ShieldCheck, title: "Particular e convênios", desc: "Infraestrutura pronta para atender qualquer modalidade, sem burocracia adicional." },
  { icon: BarChart3, title: "Controle e transparência", desc: "Dashboard financeiro completo com visibilidade total sobre agendamentos e recebimentos." },
  { icon: Clock, title: "Modelo flexível", desc: "Utilização por hora, turno ou período mensal — adaptável à demanda de cada profissional." },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Por que a OnMed
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-lg border border-border bg-card hover:onmed-shadow transition-shadow duration-300"
            >
              <item.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
