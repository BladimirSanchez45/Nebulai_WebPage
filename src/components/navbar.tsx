import { useState } from 'react';
import '../assets/fonts/fonts.css';
import logoImg from '../assets/images/nebulaiLogo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300"
      style={{ 
        backgroundColor: 'rgba(15, 20, 25, 0.8)',
        borderBottom: '1px solid rgba(22, 55, 55, 0.3)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-3 transition-all duration-300 hover:opacity-80 group"
            >
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ backgroundColor: '#163737' }}
                />
                <img 
                  src={logoImg} 
                  alt="NebulAI Logo" 
                  className="relative h-10 md:h-20 w-auto object-contain"
                />
              </div>
              <span 
                className="text-xl md:text-2xl font-bold tracking-tight"
                style={{ color: '#CBC4BC' }}
              >
                NebulAI
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Inicio', id: 'inicio' },
              { name: 'Servicios', id: 'servicios' },
              { name: 'Nosotros', id: 'nosotros' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-sm uppercase tracking-wider font-medium transition-all duration-300 relative group"
                style={{ color: '#CBC4BC' }}
              >
                <span className="relative z-10">{item.name}</span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                  style={{ backgroundColor: '#163737' }}
                />
                <span 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(22, 55, 55, 0.2)' }}
                />
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contacto')}
              className="relative px-6 py-2.5 rounded-xl text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden group"
              style={{ 
                backgroundColor: '#163737',
                color: '#CBC4BC'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a4444';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#163737';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contactar
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative group"
            aria-label="Toggle menu"
          >
            <div 
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: 'rgba(22, 55, 55, 0.2)' }}
            />
            <span 
              className={`relative z-10 w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: isMenuOpen ? '#163737' : '#CBC4BC' }}
            />
            <span 
              className={`relative z-10 w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: '#163737' }}
            />
            <span 
              className={`relative z-10 w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: isMenuOpen ? '#163737' : '#CBC4BC' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ 
          background: 'linear-gradient(180deg, rgba(15, 20, 25, 0.98) 0%, rgba(22, 55, 55, 0.98) 100%)',
          borderTop: '1px solid rgba(22, 55, 55, 0.3)'
        }}
      >
        <div className="px-6 py-6 space-y-4">
          {[
            { name: 'Inicio', id: 'inicio' },
            { name: 'Servicios', id: 'servicios' },
            { name: 'Nosotros', id: 'nosotros' },
            { name: 'Contacto', id: 'contacto' }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="w-full group text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:translate-x-2 py-2 px-4 rounded-lg text-left"
              style={{ color: '#CBC4BC' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(22, 55, 55, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span className="flex items-center gap-2">
                <span 
                  className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: '#163737' }}
                />
                {item.name}
              </span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contacto')}
            className="w-full mt-4 px-6 py-3 rounded-xl text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ 
              backgroundColor: '#163737',
              color: '#CBC4BC'
            }}
          >
            <span className="flex items-center justify-center gap-2">
              Contactar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;