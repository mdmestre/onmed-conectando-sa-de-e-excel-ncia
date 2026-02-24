import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-onmed.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Para quem", href: "#para-quem" },
    { label: "Como funciona", href: "#modelo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="OnMed – Centro Integrado de Saúde" className="h-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5534999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="onmed-gradient text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar visita
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5534999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 onmed-gradient text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Agendar visita
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
