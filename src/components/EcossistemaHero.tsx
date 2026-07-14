interface EcossistemaHeroProps {
  title: string;
  subtitle: string;
}

const EcossistemaHero = ({ title, subtitle }: EcossistemaHeroProps) => {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
          Ecossistema de Saúde Onmedic
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight max-w-3xl">
          {title}
        </h1>
        <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            A Onmedic oferece uma estrutura moderna de consultórios médicos dentro de um ambiente
            pensado para integrar atendimento, gestão e experiência.
          </p>
          <p>
            Com localização estratégica, segurança, recepção profissional e estacionamento amplo,
            proporcionamos aos pacientes conforto e praticidade, enquanto os profissionais contam
            com uma estrutura sofisticada, tecnológica e totalmente preparada para elevar o padrão
            do atendimento.
          </p>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default EcossistemaHero;
