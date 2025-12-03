
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 'terapia-familiar',
      title: 'Terapia Familiar',
      image: '/Familia.jpg',
      description: 'Fortalece los vínculos familiares y mejora la comunicación entre todos los miembros de la familia.',
      route: '/servicios/terapia-familiar'
    },
    {
      id: 'terapia-pareja',
      title: 'Terapia de Pareja',
      image: '/pareja.jpg',
      description: 'Reconstruye y fortalece la relación de pareja a través de técnicas especializadas.',
      route: '/servicios/terapia-pareja'
    },
    {
      id: 'terapia-individual',
      title: 'Terapia Individual',
      image: '/individual.jpg',
      description: 'Crecimiento personal y bienestar emocional a través de un proceso terapéutico personalizado.',
      route: '/servicios/terapia-individual'
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Terapia Psicológica Personalizada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios especializados adaptados a tus necesidades específicas, 
            con un enfoque profesional y humano para tu bienestar emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{boxShadow: '0 10px 25px rgba(175, 170, 44, 0.15)'}}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.route)}
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Overlay on hover */}
                {hoveredService === service.id && (
                  <div className="absolute inset-0 bg-[#678E2A]/90 flex items-center justify-center p-6 transition-all duration-300">
                    <div className="text-center text-white">
                      <p className="text-lg mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <button 
                        className="px-6 py-2 rounded-full font-semibold transition-colors whitespace-nowrap"
                        style={{backgroundColor: '#AFAA2C', color: 'white'}}
                      >
                        Más Información
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
