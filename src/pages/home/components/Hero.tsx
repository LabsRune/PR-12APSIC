
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
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20psychology%20therapy%20office%20with%20warm%20ambient%20lighting%2C%20comfortable%20seating%20area%2C%20soft%20natural%20colors%2C%20modern%20and%20welcoming%20interior%20design%2C%20plants%20and%20natural%20elements%2C%20peaceful%20atmosphere%20for%20mental%20health%20consultation%2C%20clean%20minimalist%20aesthetic%20with%20therapeutic%20ambiance&width=1920&height=1080&seq=hero1&orientation=landscape')`,
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
              Cuidarte es el inicio de todo
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
