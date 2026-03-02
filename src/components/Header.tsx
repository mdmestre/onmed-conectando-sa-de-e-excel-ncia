import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-onmed.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Especialidades", href: "#para-quem" },
    { label: "Como funciona", href: "#modelo" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="OnMed – Centro Integrado de Saúde" className="h-8" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5534999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-primary text-primary-foreground px-5 py-2 rounded text-xs font-semibold hover:bg-primary/90 transition-colors"
        >
          Agendar visita
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5534999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold text-center"
          >
            Agendar visita
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
