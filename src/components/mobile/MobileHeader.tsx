import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-onmedic.svg";

const EASE = [0.22, 1, 0.36, 1] as const;

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Consultórios", href: "#consultorios" },
  { label: "Contato", href: "#contato" },
];

interface MobileHeaderProps {
  onAgendar: () => void;
}

const MobileHeader = ({ onAgendar }: MobileHeaderProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-5 pt-5">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Onmedic" className="h-9 w-auto object-contain" />
        </Link>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(10,46,93,0.18)]"
              : "bg-white/70 backdrop-blur-md shadow-[0_4px_16px_-4px_rgba(10,46,93,0.12)]"
          }`}
        >
          <Menu className="w-5 h-5 text-[#0A2E5D]" strokeWidth={2} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[70] bg-[#0A2E5D] flex flex-col"
          >
            <div className="flex items-center justify-between px-5 pt-5">
              <img src={logo} alt="Onmedic" className="h-9 w-auto object-contain brightness-0 invert" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10"
              >
                <X className="w-5 h-5 text-white" strokeWidth={2} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: EASE }}
                  className="group flex items-center justify-between py-4 border-b border-white/10"
                >
                  <span className="text-[1.7rem] font-['DM_Serif_Display'] text-white">
                    {item.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-10 flex flex-col gap-5">
              <button
                onClick={() => {
                  setOpen(false);
                  onAgendar();
                }}
                className="w-full py-4 rounded-full bg-white text-[#0A2E5D] text-[11px] font-bold tracking-[0.14em] uppercase"
              >
                Agendar conversa
              </button>
              <div className="flex items-center justify-center gap-6 text-white/60">
                <a href="tel:+5534984230201" aria-label="Telefone"><Phone className="w-5 h-5" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
