import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-onmedic.svg";
import { mobileColors, EASE } from "./mobileTheme";
import WhatsAppIcon from "./WhatsAppIcon";

const navItems = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Infraestrutura", href: "#infraestrutura" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas frequentes", href: "#faq" },
];

interface MobileNavbarProps {
  onSejaMembro: () => void;
}

const MobileNavbar = ({ onSejaMembro }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] bg-[#FAF9F7]/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_20px_-6px_rgba(8,58,109,0.12)]" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[88px]">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Onmedic" className="h-16 w-auto object-contain" />
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-[#EDEDED]/70 active:scale-95 transition-transform"
          >
            <Menu className="w-5 h-5" strokeWidth={1.8} style={{ color: mobileColors.text }} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col"
            style={{ background: mobileColors.offWhite }}
          >
            <div className="flex items-center justify-between px-6 h-[88px] flex-shrink-0">
              <img src={logo} alt="Onmedic" className="h-12 w-auto object-contain" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#EDEDED]"
              >
                <X className="w-5 h-5" strokeWidth={1.8} style={{ color: mobileColors.text }} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.06, ease: EASE }}
                  className="py-4 border-b border-black/[0.06]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", color: mobileColors.text }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-10 flex flex-col gap-5 flex-shrink-0">
              <button
                onClick={() => {
                  setOpen(false);
                  onSejaMembro();
                }}
                className="w-full py-4 rounded-full text-white font-semibold tracking-wide"
                style={{ background: mobileColors.blue, fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              >
                Seja Membro
              </button>
              <div className="flex items-center justify-center gap-6" style={{ color: `${mobileColors.text}99` }}>
                <a href="tel:+5534984230201" aria-label="Telefone"><Phone className="w-5 h-5" strokeWidth={1.8} /></a>
                <a href="https://wa.me/5534984230201" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon className="w-5 h-5" /></a>
                <a href="mailto:gerencia@onmedicbrasil.com.br" aria-label="Email"><Mail className="w-5 h-5" strokeWidth={1.8} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-5 h-5" strokeWidth={1.8} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
