import '../assets/fonts/fonts.css'
import logoImg from '../assets/images/nebulaiLogo.png'

function Mainpage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden pt-20" id='inicio' style={{ backgroundColor: '#0f1419' }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(203, 196, 188, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(203, 196, 188, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Círculos decorativos con tus colores */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #163737 0%, transparent 70%)',
            top: '-10%',
            right: '0%',
            animation: 'float 25s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ 
            background: 'radial-gradient(circle, #CBC4BC 0%, transparent 70%)',
            bottom: '-5%',
            left: '-5%',
            animation: 'float 30s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #163737 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Hero Section */}
      <main className="relative px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Main Heading mejorado con tus colores */}
              <div className="space-y-4">
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05]"
                  style={{ color: '#CBC4BC' }}
                >
                  PARA VISIONARIOS,
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 bg-clip-text text-transparent">
                      POR INNOVADORES
                    </span>
                    <div 
                      className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                      style={{ 
                        backgroundColor: '#163737',
                        opacity: 0.7
                      }}
                    />
                  </span>
                </h1>
              </div>

              {/* Description mejorada */}
              <div className="space-y-5 max-w-xl">
                <p 
                  className="text-xl md:text-2xl leading-relaxed font-medium"
                  style={{ color: '#CBC4BC' }}
                >
                  Transformamos ideas en{' '}
                  <span className="font-bold" style={{ color: '#163737' }}>
                    soluciones tecnológicas inteligentes
                  </span>
                  {' '}que impulsan tu negocio
                </p>
                <p 
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: '#CBC4BC', opacity: 0.7 }}
                >
                  Expertos en inteligencia artificial, desarrollo web y aplicaciones cloud. 
                  Diseñamos estratégicamente cada proyecto para garantizar tu éxito digital.
                </p>
              </div>

              {/* Services tags con tus colores */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: '🤖', label: 'Inteligencia Artificial' },
                  { icon: '💻', label: 'Desarrollo Web' },
                  { icon: '☁️', label: 'Cloud Computing' },
                  // { icon: '📱', label: 'Apps Móviles' }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
                    style={{ 
                      borderColor: 'rgba(22, 55, 55, 0.4)',
                      backgroundColor: 'rgba(22, 55, 55, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(22, 55, 55, 0.4)';
                      e.currentTarget.style.borderColor = '#163737';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(22, 55, 55, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(22, 55, 55, 0.4)';
                    }}
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span className="text-sm font-medium" style={{ color: '#CBC4BC' }}>
                      {service.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons con tus colores */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="group relative px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 overflow-hidden shadow-xl"
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
                  <button onClick={() => scrollToSection('contacto')} className="relative z-10 flex items-center justify-center gap-2">
                    Iniciar Proyecto
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </button>

                <button
                  className="group px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 backdrop-blur-sm"
                  style={{ 
                    borderColor: '#CBC4BC',
                    color: '#CBC4BC',
                    backgroundColor: 'rgba(203, 196, 188, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#CBC4BC';
                    e.currentTarget.style.color = '#163737';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(203, 196, 188, 0.05)';
                    e.currentTarget.style.color = '#CBC4BC';
                  }}
                >
                  <button onClick={() => scrollToSection('nosotros')} className="flex items-center justify-center gap-2">
                    Sobre la empresa
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button >
                </button>
              </div>
            </div>

            {/* Right Content - Mockup con tus colores */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Phone Mockup */}
              <div className="relative">
                {/* Glow effect con tus colores */}
                <div 
                  className="absolute inset-0 rounded-[3rem] blur-3xl opacity-40"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(22, 55, 55, 0.6) 0%, rgba(203, 196, 188, 0.3) 50%, transparent 100%)'
                  }}
                />
                
                {/* Phone frame */}
                <div 
                  className="relative w-[300px] md:w-[340px] lg:w-[380px] rounded-[2.5rem] p-3 shadow-2xl backdrop-blur-xl"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(22, 55, 55, 0.4), rgba(15, 20, 25, 0.8))',
                    border: '1px solid rgba(203, 196, 188, 0.2)'
                  }}
                >
                  {/* Phone screen */}
                  <div 
                    className="rounded-[2rem] overflow-hidden"
                    style={{ backgroundColor: '#0f1419' }}
                  >
                    {/* Notch */}
                    <div className="h-7 flex justify-center items-center relative">
                      <div className="w-36 h-5 rounded-b-3xl flex items-center justify-center gap-2" style={{ backgroundColor: '#1a1f25' }}>
                        <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#2d3748' }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2d3748' }} />
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="p-6 space-y-6">
                      {/* Header con logo */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#163737' }}>
                            {/* <span className="font-bold text-sm" style={{ color: '#CBC4BC' }}>N</span> */}
                            <img src={logoImg} alt="LogoN" className="max-w-15" />
                          </div>
                          <div>
                            <div className="text-xs font-bold" style={{ color: '#CBC4BC' }}>
                              NebulAI
                            </div>
                            <div className="text-[8px] opacity-60" style={{ color: '#CBC4BC' }}>
                              Dashboard
                            </div>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(203, 196, 188, 0.1)' }}>
                          <svg className="w-4 h-4" style={{ color: '#CBC4BC' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>

                      {/* Metric cards con tus colores */}
                      <div className="space-y-4">
                        {[
                          { 
                            label: 'Proyectos Activos', 
                            value: '12', 
                            change: '+23%',
                            icon: '📊'
                          },
                          { 
                            label: 'Modelos IA Entrenados', 
                            value: '47', 
                            change: '+18%',
                            icon: '🤖'
                          },
                          { 
                            label: 'Clientes Satisfechos', 
                            value: '99%', 
                            change: '+5%',
                            icon: '⭐'
                          }
                        ].map((metric, index) => (
                          <div 
                            key={index}
                            className="group rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                            style={{ 
                              background: 'linear-gradient(135deg, rgba(22, 55, 55, 0.3), rgba(22, 55, 55, 0.1))',
                              border: '1px solid rgba(22, 55, 55, 0.5)'
                            }}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm">{metric.icon}</span>
                                  <div className="text-[10px] opacity-70 uppercase tracking-wider font-medium" style={{ color: '#CBC4BC' }}>
                                    {metric.label}
                                  </div>
                                </div>
                                <div className="text-2xl font-bold" style={{ color: '#CBC4BC' }}>
                                  {metric.value}
                                </div>
                              </div>
                              <div 
                                className="px-2 py-1 rounded-lg text-[9px] font-semibold"
                                style={{ 
                                  backgroundColor: 'rgba(22, 55, 55, 0.4)',
                                  color: '#CBC4BC'
                                }}
                              >
                                {metric.change}
                              </div>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(203, 196, 188, 0.1)' }}>
                              <div 
                                className="h-full rounded-full transition-all duration-500"
                                style={{ 
                                  width: `${60 + index * 15}%`,
                                  backgroundColor: '#163737'
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom navigation */}
                      <div className="flex justify-around pt-4 border-t" style={{ borderColor: 'rgba(203, 196, 188, 0.1)' }}>
                        {[
                          { icon: '🏠', active: true },
                          { icon: '📈', active: false },
                          { icon: '💼', active: false },
                          { icon: '⚙️', active: false }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className="relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                            style={{ 
                              backgroundColor: item.active ? '#163737' : 'rgba(203, 196, 188, 0.05)'
                            }}
                          >
                            <span className="text-lg">{item.icon}</span>
                            {item.active && (
                              <div className="absolute -bottom-1 w-8 h-1 rounded-full" style={{ backgroundColor: '#163737' }} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements con tus colores */}
                <div 
                  className="absolute -right-6 top-16 w-32 h-28 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(22, 55, 55, 0.4), rgba(22, 55, 55, 0.2))',
                    border: '1px solid rgba(22, 55, 55, 0.6)',
                    animation: 'float 6s ease-in-out infinite'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#163737' }} />
                    <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: '#163737' }}>
                      IA Activa
                    </span>
                  </div>
                  <div className="text-xl font-bold mb-1" style={{ color: '#CBC4BC' }}>
                    85%
                  </div>
                  <div className="text-[10px] opacity-70" style={{ color: '#CBC4BC' }}>
                    Precisión del modelo
                  </div>
                  <div className="mt-2 w-full h-1.5 rounded-full" style={{ backgroundColor: 'rgba(203, 196, 188, 0.2)' }}>
                    <div className="h-full w-[85%] rounded-full" style={{ backgroundColor: '#163737' }} />
                  </div>
                </div>

                <div 
                  className="absolute -left-6 bottom-24 w-36 h-24 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(22, 55, 55, 0.4), rgba(22, 55, 55, 0.2))',
                    border: '1px solid rgba(22, 55, 55, 0.6)',
                    animation: 'float 8s ease-in-out infinite reverse'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg">🚀</span>
                    <div className="px-2 py-0.5 rounded-full text-[8px] font-bold" style={{ backgroundColor: 'rgba(22, 55, 55, 0.5)', color: '#CBC4BC' }}>
                      LIVE
                    </div>
                  </div>
                  <div className="text-xs font-semibold mb-1" style={{ color: '#CBC4BC' }}>
                    Deploy en curso
                  </div>
                  <div className="text-[10px] opacity-60" style={{ color: '#CBC4BC' }}>
                    Proyecto NebulAI v2.0
                  </div>
                </div>

                <div 
                  className="absolute -right-8 bottom-32 w-20 h-20 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center justify-center"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(203, 196, 188, 0.2), rgba(22, 55, 55, 0.2))',
                    border: '1px solid rgba(203, 196, 188, 0.3)',
                    animation: 'float 7s ease-in-out infinite'
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">⚡</div>
                    <div className="text-[9px] font-bold" style={{ color: '#CBC4BC' }}>
                      FAST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(2deg); }
          66% { transform: translate(-10px, 10px) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
}

export default Mainpage;