import { useEffect, useState } from 'react';
import '../assets/fonts/fonts.css';
import logoImg from '../assets/images/nebulaiLogo.png';
import { IconArrowRight, IconSun, IconMoon } from './icons';

const LINKS = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Servicios', id: 'servicios' },
  { name: 'Nosotros', id: 'nosotros' },
  { name: 'Contacto', id: 'contacto' },
];

type Theme = 'light' | 'dark';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    () => (typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('theme', next); } catch { /* ignore */ }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const ThemeToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      className={`relative w-10 h-10 rounded-full border border-line text-ink flex items-center justify-center hover:bg-paper-2 hover:border-green/40 transition-all duration-300 ${className}`}
    >
      <span className="relative w-5 h-5">
        <IconSun
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
        />
        <IconMoon
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'dark' ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
        />
      </span>
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-xl border-b border-line shadow-[0_1px_20px_rgba(19,28,26,0.05)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo + wordmark */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2.5 group"
            aria-label="Ir al inicio"
          >
            <img
              src={logoImg}
              alt="NebulAI"
              className="logo-mark h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-6"
            />
            <span className="text-xl sm:text-2xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>
              NebulAi
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-muted hover:text-ink transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </button>
            ))}
          </div>

          {/* Cluster derecho */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <button
              onClick={() => scrollToSection('contacto')}
              className="hidden md:inline-flex items-center gap-2 bg-green text-paper text-sm font-medium pl-5 pr-4 py-2.5 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green/20 hover:-translate-y-0.5"
            >
              Hablemos
              <IconArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Abrir menú"
            >
              <span className={`w-6 h-[2px] bg-ink rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-[2px] bg-ink rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-ink rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-paper/95 backdrop-blur-xl border-b border-line ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 space-y-1">
          {LINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-ink hover:bg-paper-2 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contacto')}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-green text-paper font-medium px-5 py-3.5 rounded-full"
          >
            Hablemos
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
