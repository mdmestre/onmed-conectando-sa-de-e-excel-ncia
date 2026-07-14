import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-onmedic.svg";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground">
      {/* Linha decorativa topo */}
      <div className="h-[3px] bg-gradient-to-r from-secondary via-primary to-secondary/60" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <img src={logo} alt="Onmedic" className="h-16 brightness-0 invert mb-5 opacity-90" />
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-[260px]">
              Centro Integrado de Saúde com estrutura hospitalar completa dentro
              do Hospital Referência de Uberlândia.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/5534984230201"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com/onmedic.saude"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:gerencia@onmedicbrasil.com.br"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-200"
                aria-label="E-mail"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground text-[10.5px] font-bold uppercase tracking-[0.18em] mb-5">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://wa.me/5534984230201"
                  className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200 group"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="group-hover:underline underline-offset-2">(34) 98423-0201</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gerencia@onmedicbrasil.com.br"
                  className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200 group"
                  title="Clique para enviar um e-mail"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="group-hover:underline underline-offset-2">gerencia@onmedicbrasil.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/onmedic.saude"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200 group"
                >
                  <Instagram className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="group-hover:underline underline-offset-2">@onmedic.saude</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground text-[10.5px] font-bold uppercase tracking-[0.18em] mb-5">Localização</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Rafael+Marino+Neto+600+Uberlandia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/50 leading-relaxed flex items-start gap-3 hover:text-primary-foreground transition-colors duration-200 group"
            >
              <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <span>
                Unidade UMC<br />
                Rua Rafael Marino Neto, 600<br />
                1º andar, Sala 182<br />
                Jardim Karaíba, Uberlândia – MG
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-primary-foreground/35">
          <span>© {new Date().getFullYear()} Onmedic – Centro Integrado de Saúde</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors duration-200">Termos de Uso</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors duration-200">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
