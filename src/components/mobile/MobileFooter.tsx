import { Phone, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo-onmedic.svg";

const MobileFooter = () => {
  return (
    <footer className="bg-white px-7 py-14 flex flex-col items-center gap-8">
      <img src={logo} alt="Onmedic" className="h-8 w-auto object-contain opacity-80" />

      <div className="flex items-center gap-5">
        <a
          href="https://wa.me/5534984230201"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-12 h-12 rounded-full bg-[#F7F4F1] flex items-center justify-center text-[#0A2E5D]/60"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="mailto:gerencia@onmedicbrasil.com.br"
          aria-label="Email"
          className="w-12 h-12 rounded-full bg-[#F7F4F1] flex items-center justify-center text-[#0A2E5D]/60"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 rounded-full bg-[#F7F4F1] flex items-center justify-center text-[#0A2E5D]/60"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>

      <p className="text-[0.75rem] text-[#0A2E5D]/35 tracking-wide text-center">
        © {new Date().getFullYear()} Onmedic — Centro Integrado de Saúde
      </p>
    </footer>
  );
};

export default MobileFooter;
