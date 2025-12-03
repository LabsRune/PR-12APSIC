
const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('agenda-cita');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="sobre-mi" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/sala.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#678E2A]/80 to-[#678E2A]/80"></div>
      
      <div className="relative z-10 w-full px-6 lg:px-12 items-center">
        <div className="max-w-6xl mx-auto items-center flex flex-col gap-12 lg:gap-24 py-20">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h2 
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Cuidar de ti es el inicio de todo
            </h2>
            
            <p 
              className="text-xl text-white mb-8 leading-relaxed"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              Pensando en tu ritmo de vida, brindo sesiones online y consultas presenciales adaptadas a tus necesidades.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="flex items-center text-white">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-computer-line text-lg"></i>
                </div>
                <span 
                  className="font-medium"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}
                >
                  Sesiones Online
                </span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span 
                  className="font-medium"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}
                >
                  Consultas Presenciales
                </span>
              </div>
            </div>
            
            <button 
              onClick={scrollToAppointment}
              className="bg-white text-[#678E2A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
            >
              Agenda tu Primera Cita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
