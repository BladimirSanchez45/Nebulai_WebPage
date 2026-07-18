import '../assets/fonts/fonts.css';
import logoImg from '../assets/images/nebulaiLogo.png';
import Reveal from '../components/Reveal';
import { IconWhatsapp, IconArrowRight } from '../components/icons';

function Mainpage() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-paper pt-28 md:pt-44 lg:pt-48 pb-20 md:pb-28"
    >
      {/* Marca de agua: logo grande, muy sutil, recortado por el borde derecho */}
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-6rem] lg:right-[-3rem] top-1/2 -translate-y-1/2 w-[30rem] lg:w-[36rem] hidden md:block"
        style={{ opacity: 0.32, filter: 'grayscale(1)' }}
      />

      {/* Halo cálido muy tenue */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, var(--color-brown) 0%, transparent 70%)' }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <Reveal>
            <p className="text-[0.7rem] md:text-[0.8rem] font-semibold tracking-[0.16em] sm:tracking-[0.24em] uppercase text-brown/75">
              Desarrollo de software · IA · Automatización
            </p>
          </Reveal>

          {/* Titular editorial */}
          <Reveal delay={80}>
            <h1 className="mt-6 text-green text-[2.9rem] leading-[1.06] sm:text-6xl sm:leading-[1.04] lg:text-[4.6rem] lg:leading-[1.02] text-balance">
              Tecnología pensada para{' '}
              <span className="italic text-brown" style={{ paddingRight: '0.12em' }}>crecer</span>{' '}
              contigo.
            </h1>
          </Reveal>

          {/* Descripción */}
          <Reveal delay={160}>
            <p className="mt-7 max-w-lg text-lg md:text-xl leading-relaxed text-muted">
              Diseñamos, automatizamos e integramos inteligencia artificial en negocios
              reales — con procesos claros, reportes constantes y cero letra chica.
            </p>
          </Reveal>

          {/* Botones */}
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="https://wa.me/523329676309?text=Hola!%20Me%20interesa%20una%20soluci%C3%B3n%20con%20NebulAi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-green text-paper text-base font-medium pl-7 pr-6 py-4 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:shadow-green/25 hover:-translate-y-0.5"
              >
                <IconWhatsapp className="w-5 h-5 " />
                Hablemos por WhatsApp
              </a>

              <button
                onClick={() => scrollToSection('servicios')}
                className="group inline-flex items-center gap-2 text-ink font-medium"
              >
                <span className="border-b border-ink/30 group-hover:border-green group-hover:text-green transition-colors duration-300 pb-0.5">
                  Ver qué hacemos
                </span>
                <IconArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green" />
              </button>
            </div>
          </Reveal>

          {/* Franja de confianza inferior */}
          <Reveal delay={340}>
            <div className="mt-14 pt-7 border-t border-line grid grid-cols-2 sm:flex sm:flex-wrap gap-x-10 gap-y-5">
              {[
                { k: 'Apps', v: 'a la medida' },
                { k: 'IA', v: 'aplicada a procesos' },
                { k: 'CRM', v: '& WhatsApp' },
                { k: 'Soporte', v: 'cercano y real' },
              ].map((s) => (
                <div key={s.k} className="flex items-baseline gap-2">
                  <span className="text-lg text-ink" style={{ fontFamily: 'var(--font-serif)' }}>{s.k}</span>
                  <span className="text-sm text-muted">{s.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Mainpage;
