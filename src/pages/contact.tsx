import { useState } from 'react';
import '../assets/fonts/fonts.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    // Por ejemplo, enviar por WhatsApp
    const whatsappMessage = `Hola! Soy ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AEmpresa: ${formData.company}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/523329676309?text=${whatsappMessage}`, '_blank');
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      title: 'WhatsApp',
      value: '+52 332 967 6309',
      link: 'https://wa.me/523329676309',
      description: 'Respuesta inmediata'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: 'Instagram',
      value: '@nebulai.dev',
      link: 'https://instagram.com/nebulai.dev',
      description: 'Síguenos para contenido'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'nebulai.dev@outlook.com',
      link: 'mailto:nebulai.dev@outlook.com',
      description: 'Consultas formales'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-20" id='contacto' style={{ backgroundColor: '#0f1419' }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(22, 55, 55, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(22, 55, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #163737 0%, transparent 70%)',
            top: '10%',
            right: '-10%',
            animation: 'float 25s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #163737 0%, transparent 70%)',
            bottom: '10%',
            left: '-10%',
            animation: 'float 30s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" 
            style={{ 
              borderColor: 'rgba(22, 55, 55, 0.4)',
              backgroundColor: 'rgba(22, 55, 55, 0.1)'
            }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#163737' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#CBC4BC' }}>
              Contáctanos
            </span>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#CBC4BC' }}
          >
            Hablemos de tu{' '}
            <span style={{ color: '#163737' }}>Proyecto</span>
          </h2>

          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#CBC4BC', opacity: 0.7 }}
          >
            Estamos listos para transformar tus ideas en soluciones tecnológicas reales. 
            Elige tu método de contacto preferido
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#CBC4BC' }}>
              Canales de Contacto
            </h3>

            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.15), rgba(15, 20, 25, 0.8))',
                  border: '1px solid rgba(22, 55, 55, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(22, 55, 55, 0.6)';
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(22, 55, 55, 0.25), rgba(15, 20, 25, 0.9))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(22, 55, 55, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(22, 55, 55, 0.15), rgba(15, 20, 25, 0.8))';
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#163737', color: '#CBC4BC' }}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-bold" style={{ color: '#CBC4BC' }}>
                        {method.title}
                      </h4>
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        style={{ color: '#163737' }}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium mb-1" style={{ color: '#ffffff' }}>
                      {method.value}
                    </p>
                    <p className="text-xs" style={{ color: '#CBC4BC', opacity: 0.6 }}>
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Horario */}
            <div 
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.2), rgba(15, 20, 25, 0.8))',
                border: '1px solid rgba(22, 55, 55, 0.4)'
              }}
            >
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#CBC4BC' }}>
                <svg className="w-5 h-5" style={{ color: '#163737' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horario de Atención
              </h4>
              <p className="text-sm mb-2" style={{ color: '#CBC4BC', opacity: 0.8 }}>
                <strong>Lunes - Viernes:</strong> 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="rounded-2xl p-8 md:p-10 backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.15), rgba(15, 20, 25, 0.8))',
              border: '1px solid rgba(22, 55, 55, 0.3)'
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#CBC4BC' }}>
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#CBC4BC' }}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(22, 55, 55, 0.2)',
                    border: '1px solid rgba(22, 55, 55, 0.3)',
                    color: '#CBC4BC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#163737';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(22, 55, 55, 0.3)';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.2)';
                  }}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#CBC4BC' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(22, 55, 55, 0.2)',
                    border: '1px solid rgba(22, 55, 55, 0.3)',
                    color: '#CBC4BC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#163737';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(22, 55, 55, 0.3)';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.2)';
                  }}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#CBC4BC' }}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(22, 55, 55, 0.2)',
                    border: '1px solid rgba(22, 55, 55, 0.3)',
                    color: '#CBC4BC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#163737';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(22, 55, 55, 0.3)';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.2)';
                  }}
                  placeholder="(Opcional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#CBC4BC' }}>
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(22, 55, 55, 0.2)',
                    border: '1px solid rgba(22, 55, 55, 0.3)',
                    color: '#CBC4BC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#163737';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(22, 55, 55, 0.3)';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.2)';
                  }}
                  placeholder="Nombre de tu empresa (Opcional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#CBC4BC' }}>
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                  style={{ 
                    backgroundColor: 'rgba(22, 55, 55, 0.2)',
                    border: '1px solid rgba(22, 55, 55, 0.3)',
                    color: '#CBC4BC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#163737';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(22, 55, 55, 0.3)';
                    e.target.style.backgroundColor = 'rgba(22, 55, 55, 0.2)';
                  }}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full group px-6 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-xl"
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
                <span className="flex items-center justify-center gap-2">
                  Enviar Mensaje
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ o Info adicional */}
        {/* <div className="text-center">
          <div 
            className="inline-block rounded-2xl p-8 md:p-10 backdrop-blur-sm max-w-4xl"
            style={{ 
              background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.2), rgba(15, 20, 25, 0.8))',
              border: '1px solid rgba(22, 55, 55, 0.4)'
            }}
          >
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#CBC4BC' }}
            >
              ¿Prefieres una llamada?
            </h3>
            <p 
              className="text-base md:text-lg mb-6"
              style={{ color: '#CBC4BC', opacity: 0.7 }}
            >
              Agenda una videollamada gratuita de 30 minutos para discutir tu proyecto en detalle
            </p>
            <button
              className="group px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 border-2"
              style={{ 
                borderColor: '#163737',
                color: '#CBC4BC',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#163737';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agendar Videollamada
              </span>
            </button>
          </div>
        </div> */}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(3deg); }
          66% { transform: translate(-20px, 20px) rotate(-3deg); }
        }
      `}</style>
    </div>
  );
}

export default Contact;