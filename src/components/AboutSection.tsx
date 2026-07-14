import { ShieldCheck, TrendingUp, Building, Settings } from "lucide-react";

const pillars = [
  { icon: Building, label: "Estrutura hospitalar", desc: "Ambientes projetados dentro de um hospital ativo e regulamentado." },
  { icon: ShieldCheck, label: "Segurança clínica", desc: "Biossegurança, normas hospitalares e ambiente controlado." },
  { icon: Settings, label: "Gestão integrada", desc: "Sistema de agendamento, pagamento e controle financeiro." },
  { icon: TrendingUp, label: "Crescimento sustentável", desc: "Modelo flexível que acompanha o ritmo do profissional." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[10.5px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-primary/40 rounded-full" />
              Sobre a Onmedic
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Elevando o padrão da prática<br />
              <span className="onmedic-gradient-text">médica independente</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.97rem]">
              <p>
                A Onmedic nasce com o propósito de oferecer aos profissionais da saúde
                uma estrutura hospitalar completa, com gestão integrada e tecnologia
                de ponta — sem a complexidade de manter um consultório próprio.
              </p>
              <p>
                Localizada dentro do Hospital Referência de Uberlândia, a Onmedic reúne
                ambiente clínico regulamentado, recepção profissional, sistema de
                gestão inteligente e infraestrutura pronta para atendimento de alto padrão.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { val: "12", label: "Consultórios" },
                  { val: "15+", label: "Especialidades" },
                  { val: "30+", label: "Profissionais" },
                ].map((s) => (
                  <div key={s.label} className="group">
                    <span className="text-2xl font-extrabold text-foreground block tracking-tight group-hover:text-primary transition-colors duration-300">{s.val}</span>
                    <span className="text-[11px] text-muted-foreground/70 uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/25 hover:shadow-[0_8px_32px_-8px_hsl(207_79%_38%/0.15)] transition-all duration-400"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground block mb-1.5">{p.label}</span>
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
