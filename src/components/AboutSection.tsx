import { ShieldCheck, TrendingUp, Building, Settings } from "lucide-react";

const pillars = [
  { icon: Building, label: "Estrutura hospitalar", desc: "Ambientes projetados dentro de um hospital ativo e regulamentado." },
  { icon: ShieldCheck, label: "Segurança clínica", desc: "Biossegurança, normas hospitalares e ambiente controlado." },
  { icon: Settings, label: "Gestão integrada", desc: "Sistema de agendamento, pagamento e controle financeiro." },
  { icon: TrendingUp, label: "Crescimento sustentável", desc: "Modelo flexível que acompanha o ritmo do profissional." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              Sobre a OnMed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Elevando o padrão da prática médica independente
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A OnMed nasce com o propósito de oferecer aos profissionais da saúde
                uma estrutura hospitalar completa, com gestão integrada e tecnologia
                de ponta — sem a complexidade de manter um consultório próprio.
              </p>
              <p>
                Localizada dentro do Hospital Referência de Uberlândia, a OnMed reúne
                ambiente clínico regulamentado, recepção profissional, sistema de
                gestão inteligente e infraestrutura pronta para atendimento de alto padrão.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <span className="text-2xl font-bold text-foreground block">12</span>
                  <span className="text-xs text-muted-foreground">Consultórios</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground block">15+</span>
                  <span className="text-xs text-muted-foreground">Especialidades</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground block">30+</span>
                  <span className="text-xs text-muted-foreground">Profissionais</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="p-6 rounded-lg bg-muted/50 border border-border"
              >
                <p.icon className="w-5 h-5 text-primary mb-4" />
                <span className="text-sm font-semibold text-foreground block mb-1">{p.label}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
