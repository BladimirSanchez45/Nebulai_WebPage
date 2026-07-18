import '../assets/fonts/fonts.css';
import Reveal from '../components/Reveal';
import {
  IconApp, IconAI, IconGear, IconChat, IconBulb, IconCloud, IconArrowUpRight,
} from '../components/icons';
import type { SVGProps } from 'react';

type Service = {
  Icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    Icon: IconApp,
    title: 'Aplicaciones a medida',
    description: 'Desarrollamos aplicaciones web y móviles hechas para tu operación, no plantillas genéricas.',
    features: ['Web', 'Móvil', 'Multiplataforma', 'UX/UI'],
  },
  {
    Icon: IconAI,
    title: 'Inteligencia Artificial',
    description: 'Integramos IA que entiende, clasifica y responde para automatizar decisiones reales.',
    features: ['Chatbots', 'NLP', 'Modelos a medida', 'Análisis'],
  },
  {
    Icon: IconGear,
    title: 'Automatización de procesos',
    description: 'Bots, sistemas internos e inventarios que eliminan tareas repetitivas y errores manuales.',
    features: ['Bots', 'Inventarios', 'Workflows', 'APIs'],
  },
  {
    Icon: IconChat,
    title: 'Comunicación con clientes',
    description: 'Ordenamos tu atención con WhatsApp, CRM y flujos automáticos que no dejan mensajes sin responder.',
    features: ['WhatsApp', 'CRM', 'Email', 'Seguimiento'],
  },
  {
    Icon: IconBulb,
    title: 'Consultoría tecnológica',
    description: 'Acompañamiento estratégico para empresas en crecimiento que quieren digitalizarse con orden.',
    features: ['Auditoría', 'Estrategia', 'Escalabilidad', 'Roadmap'],
  },
  {
    Icon: IconCloud,
    title: 'Infraestructura en la nube',
    description: 'Montamos infraestructura escalable y segura para que tus soluciones funcionen siempre.',
    features: ['Cloud', 'Seguridad', 'DevOps', 'Monitoreo'],
  },
];

function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-paper-2 py-24 md:py-32">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Encabezado */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <Reveal>
            <span className="text-sm font-medium tracking-widest uppercase text-green">
              Arquitectura de servicios
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-ink">
              Todo lo que tu negocio necesita, en un solo aliado.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Desde una idea hasta la solución funcionando. Combinamos desarrollo,
              inteligencia artificial y automatización para que cada proceso trabaje por ti.
            </p>
          </Reveal>
        </div>

        {/* Grid de servicios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <article className="group relative h-full rounded-3xl border border-line bg-surface p-7 md:p-8 transition-all duration-500 hover:border-green/40 hover:shadow-[0_24px_60px_-30px_rgba(19,28,26,0.35)] hover:-translate-y-1">
                {/* Icono */}
                <div className="w-14 h-14 rounded-2xl bg-paper-2 text-green flex items-center justify-center transition-all duration-500 group-hover:bg-green group-hover:text-paper">
                  <s.Icon className="w-7 h-7" />
                </div>

                {/* Título + flecha */}
                <div className="mt-6 flex items-start justify-between gap-3">
                  <h3 className="text-xl md:text-[1.4rem] text-ink leading-snug">{s.title}</h3>
                  <IconArrowUpRight className="w-5 h-5 text-taupe transition-all duration-500 group-hover:text-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.description}</p>

                {/* Features */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium text-ink/70 bg-paper-2 border border-line px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
