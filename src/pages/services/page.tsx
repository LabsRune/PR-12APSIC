
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/base/WhatsAppButton';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 'terapia-familiar',
      title: 'Terapia Familiar',
      backgroundImage:'',
      description: 'Fortalece los vínculos familiares y mejora la comunicación entre todos los miembros de la familia.',
      route: '/servicios/terapia-familiar'
    },
    {
      id: 'terapia-pareja',
      title: 'Terapia de Pareja',
      backgroundImage:'',
      description: 'Reconstruye y fortalece la relación de pareja a través de técnicas especializadas.',
      route: '/servicios/terapia-pareja'
    },
    {
      id: 'terapia-individual',
      title: 'Terapia Individual',
      backgroundImage:'',
      description: 'Crecimiento personal y bienestar emocional a través de un proceso terapéutico personalizado.',
      route: '/servicios/terapia-individual'
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos servicios especializados adaptados a tus necesidades específicas, 
                con un enfoque profesional y humano para tu bienestar emocional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative h-80 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 10px 25px rgba(175, 170, 44, 0.15)'
                  }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service.route)}
                >
                  {/* Base overlay - más opaco */}
                  <div className="absolute inset-0 bg-[#678E2A]/60"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div></div>
                    
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Hover overlay with description */}
                      {hoveredService === service.id && (
                        <div className="absolute inset-0 bg-[#678E2A]/95 flex items-center justify-center p-6 transition-all duration-300">
                          <div className="text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">
                              {service.title}
                            </h3>
                            <p className="text-lg mb-6 leading-relaxed">
                              {service.description}
                            </p>
                            <button 
                              className="px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap"
                              style={{backgroundColor: '#AFAA2C', color: 'white'}}
                            >
                              Más Información
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
