
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { id: 'terapia-familiar', title: 'Terapia Familiar', route: '/servicios/terapia-familiar' },
    { id: 'terapia-pareja', title: 'Terapia de Pareja', route: '/servicios/terapia-pareja' },
    { id: 'terapia-individual', title: 'Terapia Individual', route: '/servicios/terapia-individual' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleServiceClick = (route: string) => {
    navigate(route);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const handleAgendaClick = () => {
    navigate('/agenda-cita');
    setIsMenuOpen(false);
  };

  const handleBlogClick = () => {
    navigate('/blog');
    setIsMenuOpen(false);
  };
  const handleHomeClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-1xl font-medium text-[#678E2A]  cursor-pointer flex items-center gap-2" onClick={() => navigate('/')}>
                      <img src='/YalimarLogo.png' alt="LogoYalimarRuiz" className="h-10 cursor-pointer w-35" onClick={() => navigate('/')} />

            Yalimar Ruiz
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleHomeClick()}
              className="text-gray-700 hover:text-[#678E2A] font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Sobre Mí
            </button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-[#678E2A] font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1"
              >
                Servicios
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`ri-arrow-down-s-line text-lg transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.route)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-[#678E2A]/10 hover:text-[#678E2A] transition-colors cursor-pointer"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={handleBlogClick}
              className="text-gray-700 hover:text-[#678E2A] font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Blog
            </button>
            <button 
              onClick={handleAgendaClick}
              className="bg-[#678E2A] text-white px-6 py-2 rounded-full hover:bg-[#5a7a24] transition-colors cursor-pointer whitespace-nowrap"
            >
              Agenda tu Cita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="block w-full text-left text-gray-700 hover:text-[#678E2A] font-medium transition-colors cursor-pointer"
              >
                Sobre Mí
              </button>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-[#678E2A] font-medium transition-colors cursor-pointer"
                >
                  Servicios
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`ri-arrow-down-s-line text-lg transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                  </div>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.route)}
                        className="block w-full text-left text-gray-600 hover:text-[#678E2A] py-2 transition-colors cursor-pointer"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleBlogClick}
                className="block w-full text-left text-gray-700 hover:text-[#678E2A] font-medium transition-colors cursor-pointer"
              >
                Blog
              </button>
              <button 
                onClick={handleAgendaClick}
                className="block w-full text-left bg-[#678E2A] text-white px-6 py-2 rounded-full hover:bg-[#5a7a24] transition-colors cursor-pointer"
              >
                Agenda tu Cita
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
