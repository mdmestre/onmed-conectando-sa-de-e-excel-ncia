import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-onmed.png";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agendarOpen, setAgendarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Especialidades", href: "#para-quem" },
    { label: "Como funciona", href: "#modelo" },
    { label: "Contatos", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-lg shadow-md border-b border-border"
          : "bg-background backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block border-b border-border/50 bg-muted/30">
        <div className="container mx-auto flex items-center justify-end gap-6 px-6 py-1.5 text-xs text-muted-foreground">
          <a href="tel:+5534984253885" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Phone className="w-3 h-3" />
            (34) 98425-3885
          </a>
          <span>Seg–Sex • 8h às 18h</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-between h-[72px] px-6">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="OnMed – Centro Integrado de Saúde" className="h-9" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              Ecossistema
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-48 bg-background border border-border rounded-lg shadow-lg py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  to="/consultorios"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  Consultórios
                </Link>
                <Link
                  to="/profissionais"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  Profissionais
                </Link>
              </div>
            )}
          </div>
        </nav>

        <button
          onClick={() => setAgendarOpen(true)}
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Agendar visita
        </button>

        <button
          className="lg:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-background border-t border-border px-6 py-5 animate-in slide-in-from-top-2 duration-200">
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
          <div className="border-t border-border mt-3 pt-3">
            <span className="block py-2 text-xs font-semibold text-foreground uppercase tracking-wider">Ecossistema</span>
            <Link
              to="/consultorios"
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 pl-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Consultórios
            </Link>
            <Link
              to="/profissionais"
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 pl-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Profissionais
            </Link>
          </div>
          <button
            onClick={() => { setMenuOpen(false); setAgendarOpen(true); }}
            className="block w-full mt-4 bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center"
          >
            Agendar visita
          </button>
        </nav>
      )}
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </header>
  );
};

export default Header;
