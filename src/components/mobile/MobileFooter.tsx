import { Phone, Mail, MapPin, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-onmedic.svg";
import WhatsAppIcon from "./WhatsAppIcon";
import { mobileColors } from "./mobileTheme";

const contactRows = [
  { icon: Phone, label: "(34) 98423-0201", href: "tel:+5534984230201" },
  { icon: WhatsAppIcon, label: "Fale pelo WhatsApp", href: "https://wa.me/5534984230201" },
  { icon: Mail, label: "gerencia@onmedicbrasil.com.br", href: "mailto:gerencia@onmedicbrasil.com.br" },
];

const usefulLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Infraestrutura", href: "#infraestrutura" },
  { label: "Dúvidas frequentes", href: "#faq" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const MobileFooter = () => {
  return (
    <footer className="bg-[#FAF9F7] px-6 pt-16 pb-10">
      <img src={logo} alt="Onmedic" className="h-11 w-auto object-contain opacity-90 mb-10" />

      {/* Localização */}
      <a
        href="https://maps.google.com/?q=Onmedic+Centro+Integrado+de+Saude+Uberlandia"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-[24px] bg-white mb-8"
      >
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${mobileColors.blue}0D` }}>
          <MapPin className="w-5 h-5" strokeWidth={1.8} style={{ color: mobileColors.blue }} />
        </div>
        <div className="flex-1">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: mobileColors.text }}>
            Uberlândia — MG
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: `${mobileColors.text}70` }}>
            Ver localização no mapa
          </p>
        </div>
        <ArrowUpRight className="w-4 h-4 flex-shrink-0" style={{ color: `${mobileColors.text}50` }} />
      </a>

      {/* Contato */}
      <div className="flex flex-col gap-3 mb-9">
        {contactRows.map((row) => (
          <a
            key={row.label}
            href={row.href}
            target={row.href.startsWith("http") ? "_blank" : undefined}
            rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0" style={{ color: mobileColors.text }}>
              <row.icon className="w-[17px] h-[17px]" strokeWidth={1.8} />
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: `${mobileColors.text}90` }}>
              {row.label}
            </span>
          </a>
        ))}
      </div>

      {/* Links úteis */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-9 pb-9 border-b border-black/[0.06]">
        {usefulLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: `${mobileColors.text}80` }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Sociais + copyright */}
      <div className="flex items-center justify-between">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: `${mobileColors.text}50` }}>
          © {new Date().getFullYear()} Onmedic
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
              style={{ color: mobileColors.text }}
            >
              <s.icon className="w-[17px] h-[17px]" strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
