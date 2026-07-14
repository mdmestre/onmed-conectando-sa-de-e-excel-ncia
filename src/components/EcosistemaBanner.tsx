import { Link } from "react-router-dom";
import { Building2, Users, Stethoscope } from "lucide-react";
import doctorImg from "@/assets/doctor-ecosystem.jpg";

const EcosistemaBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={doctorImg}
          alt="Profissional de saúde Onmedic"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-2xl ml-auto text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Faça parte do nosso ecossistema
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Oferecemos uma estrutura completa com diversos benefícios integrados.
            Faça parte do ecossistema Onmedic.
          </p>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-10">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-primary-foreground/90" />
              <span className="text-sm font-semibold">Consultórios</span>
            </div>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
            <div className="flex items-center gap-2.5">
              <Stethoscope className="w-5 h-5 text-primary-foreground/90" />
              <span className="text-sm font-semibold">Clínicas</span>
            </div>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-primary-foreground/90" />
              <span className="text-sm font-semibold">Profissionais</span>
            </div>
          </div>

          <Link
            to="/consultorios"
            className="inline-block bg-primary-foreground text-primary px-8 py-3.5 rounded text-sm font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Clique aqui e saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcosistemaBanner;
