import { Building2, ShieldCheck, Monitor, Users } from "lucide-react";

const pillars = [
  { icon: Building2, label: "Estrutura moderna" },
  { icon: Users, label: "Recepção profissional" },
  { icon: Monitor, label: "Sistema de gestão inteligente" },
  { icon: ShieldCheck, label: "Ambiente seguro e regulamentado" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Sobre a OnMed
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Excelência médica sem a complexidade de um consultório próprio
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A OnMed é um centro integrado de saúde que oferece estrutura de alto
            padrão para médicos e profissionais da saúde que desejam atender com
            excelência, sem os custos e complexidades de manter um consultório
            próprio. Localizada dentro do Hospital Referência de Uberlândia, a
            OnMed une o melhor da infraestrutura hospitalar com a liberdade do
            modelo compartilhado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 hover:onmed-shadow transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl onmed-gradient flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-foreground">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
