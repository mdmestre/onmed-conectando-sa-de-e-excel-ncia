import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-onmed.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="OnMed – Centro Integrado de Saúde" className="h-8" />
        </Link>

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

          {/* Dropdown: Consultórios e Profissionais */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
            >
              Ecossistema
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-52 bg-background border border-border rounded-lg shadow-lg py-2">
                <Link
                  to="/consultorios"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Consultórios
                </Link>
                <Link
                  to="/profissionais"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Profissionais
                </Link>
              </div>
            )}
          </div>
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
          <div className="border-t border-border mt-2 pt-2">
            <span className="block py-2 text-xs font-semibold text-foreground uppercase tracking-wide">Ecossistema</span>
            <Link
              to="/consultorios"
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 pl-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Consultórios
            </Link>
            <Link
              to="/profissionais"
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 pl-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Profissionais
            </Link>
          </div>
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
