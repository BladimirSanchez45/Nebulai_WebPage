import '../assets/fonts/fonts.css';
import Reveal from '../components/Reveal';
import {
  IconSpark, IconBulb, IconShield, IconChat, IconCheck, IconArrowRight,
} from '../components/icons';
import type { SVGProps } from 'react';

type Value = {
  n: string;
  Icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  description: string;
};

const values: Value[] = [
  { n: '01', Icon: IconBulb, title: 'Innovación', description: 'Buscamos constantemente nuevas formas de optimizar procesos y ofrecer soluciones creativas.' },
  { n: '02', Icon: IconSpark, title: 'Vanguardia', description: 'Nos mantenemos al día con las tecnologías más recientes para brindar siempre lo más avanzado.' },
  { n: '03', Icon: IconShield, title: 'Privacidad de datos', description: 'Garantizamos la protección y confidencialidad de la información de cada cliente.' },
  { n: '04', Icon: IconChat, title: 'Enfoque en el usuario', description: 'Diseñamos y optimizamos pensando siempre en la experiencia de quien usa la tecnología.' },
  { n: '05', Icon: IconCheck, title: 'Confiabilidad', description: 'Entregamos soluciones estables, seguras y transparentes que generan confianza a largo plazo.' },
];

const stats = [
  { value: '100%', label: 'Soluciones a medida' },
  { value: '24/7', label: 'Automatización activa' },
  { value: '+120 h', label: 'Ahorradas al mes' },
  { value: '5★', label: 'Trato cercano y real' },
];

function AboutUs() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Encabezado */}
        <div className="max-w-2xl mb-16">
          <Reveal>
            <span className="text-sm font-medium tracking-widest uppercase text-green">Sobre nosotros</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-ink">
              Tecnología con propósito, cercana y transparente.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              En NebulAi creemos que todo negocio, sin importar su tamaño, merece crecer con
              tecnología accesible y real. No vendemos promesas: entregamos soluciones que transforman.
            </p>
          </Reveal>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-6 lg:mb-6">
          {[
            {
              tag: 'Misión',
              text: 'Impulsar la transformación digital de negocios y empresas mediante soluciones tecnológicas innovadoras y accesibles, potenciando sus procesos con inteligencia artificial para lograr eficiencia, crecimiento y éxito sostenible.',
            },
            {
              tag: 'Visión',
              text: 'Convertirnos en una empresa reconocida nacional e internacionalmente por democratizar la tecnología, ofreciendo servicios accesibles y confiables que fortalezcan la productividad, la innovación y la competitividad.',
            },
          ].map((b, i) => (
            <Reveal key={b.tag} delay={i * 90}>
              <div className="h-full rounded-3xl border border-line bg-surface p-8 md:p-10">
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-8 h-px bg-green" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-green">{b.tag}</span>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-ink/85" style={{ fontFamily: 'var(--font-serif)' }}>
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Franja de estadísticas (verde profundo) */}
        <Reveal>
          <div className="my-16 rounded-3xl bg-deep text-on-deep overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(203,196,188,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(203,196,188,0.4) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-on-deep/10 lg:divide-y-0">
              {stats.map((s) => (
                <div key={s.label} className="p-8 md:p-10 text-center">
                  <div className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
                  <div className="mt-2 text-sm text-on-deep/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Valores */}
        <div className="mb-10">
          <Reveal>
            <h3 className="text-2xl md:text-3xl text-ink mb-8">Nuestros valores</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <div className="group h-full rounded-3xl border border-line bg-surface p-7 transition-all duration-500 hover:border-green/40 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-paper-2 text-green flex items-center justify-center transition-colors duration-500 group-hover:bg-green group-hover:text-paper">
                      <v.Icon className="w-6 h-6" />
                    </span>
                    <span className="text-2xl text-taupe" style={{ fontFamily: 'var(--font-serif)' }}>{v.n}</span>
                  </div>
                  <h4 className="mt-5 text-lg text-ink">{v.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
                </div>
              </Reveal>
            ))}

            {/* Tarjeta CTA dentro del grid de valores */}
            <Reveal delay={180}>
              <div className="h-full rounded-3xl border border-green/25 bg-green/[0.05] p-7 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg text-ink">¿Trabajamos juntos?</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Cuéntanos qué necesitas y te proponemos la solución más simple y efectiva.
                  </p>
                </div>
                <button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group mt-6 inline-flex items-center gap-2 text-green font-medium"
                >
                  Hablemos
                  <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
