import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcossistemaHero from "@/components/EcossistemaHero";
import EcossistemaCard from "@/components/EcossistemaCard";

const profissionais = [
  {
    name: "Dr. João Silva",
    description: "Cardiologista com mais de 15 anos de experiência em diagnóstico e tratamento de doenças cardiovasculares.",
  },
  {
    name: "Dra. Maria Santos",
    description: "Dermatologista especializada em tratamentos estéticos e clínicos de alta complexidade.",
  },
  {
    name: "Dr. Carlos Oliveira",
    description: "Ortopedista e traumatologista, referência em cirurgias minimamente invasivas.",
  },
  {
    name: "Dra. Ana Costa",
    description: "Nutricionista clínica com foco em acompanhamento nutricional personalizado.",
  },
  {
    name: "Dr. Ricardo Mendes",
    description: "Psicólogo especialista em terapia cognitivo-comportamental e saúde mental.",
  },
  {
    name: "Dra. Fernanda Lima",
    description: "Fisioterapeuta com expertise em reabilitação funcional e esportiva.",
  },
];

const Profissionais = () => {
  return (
    <>
      <Header />
      <main>
        <EcossistemaHero
          title="Profissionais OnMed"
          subtitle="Conheça os profissionais que atuam no nosso ecossistema de saúde e suas especialidades."
        />
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profissionais.map((item) => (
                <EcossistemaCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profissionais;
