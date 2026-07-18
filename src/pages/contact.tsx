import { useState } from 'react';
import '../assets/fonts/fonts.css';
import Reveal from '../components/Reveal';
import {
  IconWhatsapp, IconInstagram, IconMail, IconClock, IconArrowUpRight, IconArrowRight,
} from '../components/icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola! Soy ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AEmpresa: ${formData.company}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/523329676309?text=${whatsappMessage}`, '_blank');
  };

  const contactMethods = [
    { Icon: IconWhatsapp, title: 'WhatsApp', value: '+52 332 967 6309', link: 'https://wa.me/523329676309', description: 'Respuesta inmediata' },
    { Icon: IconInstagram, title: 'Instagram', value: '@nebulai.dev', link: 'https://instagram.com/nebulai.dev', description: 'Síguenos para contenido' },
    { Icon: IconMail, title: 'Email', value: 'nebulai.dev@outlook.com', link: 'mailto:nebulai.dev@outlook.com', description: 'Consultas formales' },
  ];

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-paper border border-line text-ink placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10';

  return (
    <section id="contacto" className="relative overflow-hidden bg-paper-2 py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Encabezado */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <Reveal>
            <span className="text-sm font-medium tracking-widest uppercase text-green">Contacto</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-ink">
              Hablemos de tu proyecto.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Estamos listos para transformar tus ideas en soluciones tecnológicas reales.
              Elige el canal que prefieras o déjanos un mensaje.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8">
          {/* Canales */}
          <Reveal>
            <div className="space-y-4">
              {contactMethods.map((m) => (
                <a
                  key={m.title}
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-500 hover:border-green/40 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-paper-2 text-green flex items-center justify-center transition-colors duration-500 group-hover:bg-green group-hover:text-paper">
                    <m.Icon className="w-6 h-6" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-ink">{m.title}</div>
                    <div className="text-sm text-ink/80 truncate">{m.value}</div>
                    <div className="text-xs text-muted">{m.description}</div>
                  </div>
                  <IconArrowUpRight className="w-5 h-5 text-taupe transition-all duration-500 group-hover:text-green" />
                </a>
              ))}

              {/* Horario */}
              <div className="rounded-2xl border border-line bg-surface p-5">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                  <IconClock className="w-5 h-5 text-green" />
                  Horario de atención
                </div>
                <p className="mt-2 text-sm text-muted">
                  <span className="text-ink/80 font-medium">Lunes a viernes</span> · 8:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-surface p-7 md:p-9"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre completo *">
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" className={inputClass} />
                </Field>
                <Field label="Email *">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" className={inputClass} />
                </Field>
                <Field label="Teléfono">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(Opcional)" className={inputClass} />
                </Field>
                <Field label="Empresa">
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="(Opcional)" className={inputClass} />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Mensaje *">
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Cuéntanos sobre tu proyecto..." className={`${inputClass} resize-none`} />
                </Field>
              </div>

              <button
                type="submit"
                className="group mt-6 w-full inline-flex items-center justify-center gap-2 bg-green text-paper text-base font-medium px-6 py-4 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:shadow-green/25"
              >
                Enviar por WhatsApp
                <IconArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                Te responderemos lo antes posible. Sin compromiso.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-2">{label}</span>
      {children}
    </label>
  );
}

export default Contact;
