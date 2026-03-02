import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-onmed.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="OnMed" className="h-7 brightness-0 invert mb-4" />
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Centro Integrado de Saúde com estrutura hospitalar
              completa dentro do Hospital Referência de Uberlândia.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground text-xs font-semibold uppercase tracking-wide mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <a href="https://wa.me/5534999999999" className="hover:text-primary-foreground transition-colors">
                  (34) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:contato@onmed.com.br" className="hover:text-primary-foreground transition-colors">
                  contato@onmed.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5" />
                <a href="https://instagram.com/onmed" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  @onmed
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground text-xs font-semibold uppercase tracking-wide mb-4">Localização</h4>
            <p className="text-sm text-primary-foreground/50 leading-relaxed flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <span>Hospital Referência de Uberlândia<br />Uberlândia – MG</span>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <span>© {new Date().getFullYear()} OnMed – Centro Integrado de Saúde</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
