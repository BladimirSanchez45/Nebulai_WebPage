import logoImg from '../assets/images/nebulaiLogo.png';
import { IconWhatsapp, IconInstagram, IconMail } from './icons';

const NAV = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Servicios', id: 'servicios' },
  { name: 'Nosotros', id: 'nosotros' },
  { name: 'Contacto', id: 'contacto' },
];

const SOCIAL = [
  { Icon: IconWhatsapp, link: 'https://wa.me/523329676309', label: 'WhatsApp' },
  { Icon: IconInstagram, link: 'https://instagram.com/nebulai.dev', label: 'Instagram' },
  { Icon: IconMail, link: 'mailto:nebulai.dev@outlook.com', label: 'Email' },
];

function Footer() {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-deep text-on-deep">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-14 md:py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="NebulAI"
                className="h-9 w-9 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>NebulAi</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-deep/70">
              Optimiza tu presente, impulsa tu futuro. Automatización, inteligencia
              artificial y desarrollo a la medida para negocios que quieren crecer.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-on-deep/20 flex items-center justify-center text-on-deep/80 hover:bg-on-deep hover:text-deep transition-all duration-300"
                >
                  <s.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-on-deep/60 mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToSection(n.id)}
                    className="text-sm text-on-deep/80 hover:text-on-deep transition-colors duration-200"
                  >
                    {n.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-on-deep/60 mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-on-deep/80">
              <li>+52 332 967 6309</li>
              <li>nebulai.dev@outlook.com</li>
              <li>Lun – Vie · 8:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-on-deep/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-on-deep/60">
            © {new Date().getFullYear()} NebulAi. Todos los derechos reservados.
          </p>
          <p className="text-xs text-on-deep/60 italic" style={{ fontFamily: 'var(--font-serif)' }}>
            «Innovación que trabaja por ti.»
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
