import '../assets/fonts/fonts.css'

function AboutUs() {
  const values = [
    {
      number: '1',
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de optimizar procesos y ofrecer soluciones creativas que impulsen a nuestros clientes.'
    },
    {
      number: '2',
      title: 'Vanguardia',
      description: 'Nos mantenemos actualizados con las tendencias y tecnologías más recientes para brindar siempre lo más avanzado.'
    },
    {
      number: '3',
      title: 'Privacidad de datos',
      description: 'Garantizamos la protección y confidencialidad de la información de cada cliente.'
    },
    {
      number: '4',
      title: 'Enfoque en el usuario',
      description: 'Diseñamos y optimizamos pensando siempre en la experiencia de quien utiliza la tecnología.'
    },
    {
      number: '5',
      title: 'Confiabilidad',
      description: 'Entregamos soluciones estables, seguras y transparentes que generan confianza a largo plazo.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-20" id="nosotros" style={{ backgroundColor: '#0f1419' }}>
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
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #163737 0%, transparent 70%)',
            top: '20%',
            right: '0%',
            animation: 'float 25s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #163737 0%, transparent 70%)',
            bottom: '20%',
            left: '0%',
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
              Sobre Nosotros
            </span>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#CBC4BC' }}
          >
            Conoce{' '}
            <span style={{ color: '#163737' }}>NebulAI</span>
          </h2>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Misión */}
          <div 
            className="group rounded-2xl p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ 
              background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.15), rgba(15, 20, 25, 0.8))',
              border: '1px solid rgba(22, 55, 55, 0.3)'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#163737' }}
              >
                <svg className="w-6 h-6" style={{ color: '#CBC4BC' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#CBC4BC' }}>
                Misión
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#CBC4BC', opacity: 0.8 }}>
              Impulsar la transformación digital de negocios y empresas mediante soluciones tecnológicas innovadoras y accesibles, 
              potenciando sus procesos con inteligencia artificial para lograr eficiencia, crecimiento y éxito sostenible.
            </p>
          </div>

          {/* Visión */}
          <div 
            className="group rounded-2xl p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ 
              background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.15), rgba(15, 20, 25, 0.8))',
              border: '1px solid rgba(22, 55, 55, 0.3)'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#163737' }}
              >
                <svg className="w-6 h-6" style={{ color: '#CBC4BC' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#CBC4BC' }}>
                Visión
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#CBC4BC', opacity: 0.8 }}>
              Convertirnos en una empresa reconocida nacional e internacionalmente por democratizar la tecnología, 
              ofreciendo servicios accesibles y confiables que fortalezcan la productividad, la innovación y la 
              competitividad de negocios de todos los tamaños.
            </p>
          </div>
        </div>

        {/* Valores Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#CBC4BC' }}>
              Nuestros{' '}
              <span style={{ color: '#163737' }}>Valores</span>
            </h3>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#CBC4BC', opacity: 0.7 }}>
              Los principios que guían cada proyecto y decisión en NebulAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.15), rgba(15, 20, 25, 0.8))',
                  border: '1px solid rgba(22, 55, 55, 0.3)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl"
                    style={{ backgroundColor: '#163737', color: '#CBC4BC' }}
                  >
                    {value.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#CBC4BC' }}>
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#CBC4BC', opacity: 0.7 }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        {/* <div className="text-center">
          <div 
            className="inline-block rounded-2xl p-8 md:p-12 backdrop-blur-sm max-w-4xl"
            style={{ 
              background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.25), rgba(15, 20, 25, 0.9))',
              border: '1px solid rgba(22, 55, 55, 0.5)'
            }}
          >
            <h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: '#CBC4BC' }}
            >
              ¿Listo para transformar tu negocio?
            </h3>
            <p 
              className="text-base md:text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: '#CBC4BC', opacity: 0.7 }}
            >
              Únete a las empresas que ya están innovando con NebulAI
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
                Iniciar tu Proyecto
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

export default AboutUs;