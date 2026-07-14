import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-onmedic.svg";
import AgendarVisitaDialog from "@/components/AgendarVisitaDialog";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agendarOpen, setAgendarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "Contatos", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_-4px_hsl(207_50%_30%/0.10)] border-b border-border/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[72px] px-6 lg:px-12">
        <Link to="/" className="flex-shrink-0 group">
          <img
            src={logo}
            alt="Onmedic"
            className="h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex items-center gap-7">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[11.5px] font-semibold text-muted-foreground/75 hover:text-primary transition-colors duration-200 tracking-[0.14em] uppercase after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}

            {/* Dropdown: Ecossistema */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-[11.5px] font-semibold text-muted-foreground/75 hover:text-primary transition-colors duration-200 tracking-[0.14em] uppercase"
              >
                Ecossistema
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-5 w-52 bg-white/98 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-[0_16px_48px_-8px_hsl(207_50%_30%/0.18)] py-2 animate-in fade-in slide-in-from-top-3 duration-200">
                  <Link
                    to="/consultorios"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 text-[12.5px] text-muted-foreground hover:text-primary hover:bg-primary/4 transition-colors duration-150 font-medium"
                  >
                    Consultórios
                  </Link>
                  <Link
                    to="/profissionais"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 text-[12.5px] text-muted-foreground hover:text-primary hover:bg-primary/4 transition-colors duration-150 font-medium"
                  >
                    Profissionais
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <button
            id="btn-agendar-header"
            onClick={() => setAgendarOpen(true)}
            className="relative bg-primary text-primary-foreground px-7 py-2.5 rounded-full text-[11px] font-bold hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-[0_4px_16px_-2px_hsl(207_79%_38%/0.35)] tracking-[0.12em] uppercase overflow-hidden group"
          >
            <span className="relative z-10">Agendar visita</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground/70 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-border/40 px-8 py-8 animate-in slide-in-from-top-4 duration-300 shadow-lg">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[12.5px] font-semibold text-muted-foreground hover:text-primary transition-colors duration-150 tracking-[0.14em] uppercase"
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-border/60 my-1" />
            <Link
              to="/consultorios"
              onClick={() => setMenuOpen(false)}
              className="text-[12.5px] font-semibold text-muted-foreground tracking-[0.14em] uppercase hover:text-primary transition-colors"
            >
              Consultórios
            </Link>
            <Link
              to="/profissionais"
              onClick={() => setMenuOpen(false)}
              className="text-[12.5px] font-semibold text-muted-foreground tracking-[0.14em] uppercase hover:text-primary transition-colors"
            >
              Profissionais
            </Link>
            <button
              id="btn-agendar-mobile"
              onClick={() => { setMenuOpen(false); setAgendarOpen(true); }}
              className="w-full mt-4 bg-primary text-primary-foreground py-4 rounded-2xl text-[11px] font-bold tracking-[0.14em] uppercase shadow-[0_4px_20px_-4px_hsl(207_79%_38%/0.40)]"
            >
              Agendar visita
            </button>
          </div>
        </nav>
      )}
      <AgendarVisitaDialog open={agendarOpen} onOpenChange={setAgendarOpen} />
    </header>
  );
};

export default Header;
