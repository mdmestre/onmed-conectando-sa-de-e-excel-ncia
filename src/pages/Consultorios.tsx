import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcossistemaHero from "@/components/EcossistemaHero";
import EcossistemaCard from "@/components/EcossistemaCard";

const consultorios = [
  {
    name: "Consultório 1",
    description: "Espaço destinado a atendimento clínico geral com estrutura completa e equipamentos modernos.",
  },
  {
    name: "Consultório 2",
    description: "Sala preparada para procedimentos ambulatoriais e consultas especializadas.",
  },
  {
    name: "Consultório 3",
    description: "Ambiente equipado para avaliações e acompanhamentos de saúde com conforto e privacidade.",
  },
  {
    name: "Consultório 4",
    description: "Consultório versátil, ideal para diversas especialidades médicas.",
  },
  {
    name: "Consultório 5",
    description: "Espaço amplo com infraestrutura para atendimentos de alta complexidade.",
  },
  {
    name: "Consultório 6",
    description: "Sala moderna com design pensado para proporcionar bem-estar ao paciente.",
  },
];

const Consultorios = () => {
  return (
    <>
      <Header />
      <main>
        <EcossistemaHero
          title="Consultórios Onmedic"
          subtitle="Confira abaixo os consultórios que fazem parte do nosso ecossistema e clique para conhecer cada especialidade."
        />
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultorios.map((item) => (
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

export default Consultorios;
