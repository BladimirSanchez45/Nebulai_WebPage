import '../assets/fonts/fonts.css'

function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Desarrollo de Aplicaciones Personalizadas',
      description: 'Creamos aplicaciones web y móviles a medida que se adaptan perfectamente a las necesidades específicas de tu negocio.',
      features: ['Apps Web', 'Apps Móviles', 'Multiplataforma', 'UX/UI Design']
    },
    {
      icon: '🤖',
      title: 'Integración de Inteligencia Artificial',
      description: 'Implementamos soluciones de IA que automatizan procesos y mejoran la toma de decisiones en tu empresa.',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Modelos Personalizados']
    },
    {
      icon: '⚙️',
      title: 'Automatización de Procesos',
      description: 'Optimizamos tus operaciones mediante bots, sistemas internos e integración de inventarios inteligentes.',
      features: ['Chatbots', 'RPA', 'Workflows', 'Integración APIs']
    },
    {
      icon: '📱',
      title: 'Optimización de Comunicación con Clientes',
      description: 'Mejoramos la interacción con tus clientes a través de WhatsApp, CRM y otras plataformas de comunicación.',
      features: ['WhatsApp Business', 'CRM Integration', 'Email Marketing', 'Soporte 24/7']
    },
    {
      icon: '💡',
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para empresas en crecimiento que buscan transformarse digitalmente.',
      features: ['Auditoría Tech', 'Estrategia Digital', 'Escalabilidad', 'Mejores Prácticas']
    },
    {
      icon: '☁️',
      title: 'Soluciones Cloud',
      description: 'Infraestructura escalable y segura en la nube para garantizar el mejor rendimiento de tus aplicaciones.',
      features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-20" id='servicios' style={{ backgroundColor: '#0f1419' }}>
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" 
            style={{ 
              borderColor: 'rgba(22, 55, 55, 0.4)',
              backgroundColor: 'rgba(22, 55, 55, 0.1)'
            }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#163737' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#CBC4BC' }}>
              Nuestros Servicios
            </span>
          </div>

          {/* Title */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#CBC4BC' }}
          >
            Arquitectura de{' '}
            <span style={{ color: '#163737' }}>Servicios</span>
          </h2>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#CBC4BC', opacity: 0.7 }}
          >
            Soluciones tecnológicas completas diseñadas para impulsar el crecimiento y la innovación de tu empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
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
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ background: 'radial-gradient(circle at center, rgba(22, 55, 55, 0.2), transparent 70%)' }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: '#163737' }}
                >
                  <span className="text-3xl md:text-4xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: '#CBC4BC' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm md:text-base leading-relaxed mb-6"
                  style={{ color: '#CBC4BC', opacity: 0.7 }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ 
                        backgroundColor: 'rgba(22, 55, 55, 0.3)',
                        color: '#CBC4BC'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium" style={{ color: '#163737' }}>
                    Más información
                  </span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    style={{ color: '#163737' }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 md:mt-20 text-center">
          <div 
            className="inline-block rounded-2xl p-8 md:p-12 backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.2), rgba(15, 20, 25, 0.8))',
              border: '1px solid rgba(22, 55, 55, 0.4)'
            }}
          >
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#CBC4BC' }}
            >
              ¿Tienes un proyecto en mente?
            </h3>
            <p 
              className="text-base md:text-lg mb-6 max-w-2xl mx-auto"
              style={{ color: '#CBC4BC', opacity: 0.7 }}
            >
              Conversemos sobre cómo podemos ayudarte a transformar tu idea en realidad
            </p>
            <button
              className="group px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
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
              <span className="flex items-center gap-2">
                Agendar Consulta Gratuita
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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

export default Services;