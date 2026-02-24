import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-onmed.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="OnMed" className="h-8 brightness-0 invert mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Centro Integrado de Saúde. Estrutura de alto padrão para
              profissionais da saúde dentro do Hospital Referência de Uberlândia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/5534999999999" className="hover:text-primary-foreground transition-colors">
                  (34) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@onmed.com.br" className="hover:text-primary-foreground transition-colors">
                  contato@onmed.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a href="https://instagram.com/onmed" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  @onmed
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Localização</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hospital Referência de Uberlândia<br />
              Uberlândia – MG
            </p>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} OnMed – Centro Integrado de Saúde. Todos os direitos reservados.</span>
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
