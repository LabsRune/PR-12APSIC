
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 'terapia-familiar',
      title: 'Terapia Familiar',
      image: 'https://readdy.ai/api/search-image?query=Happy%20family%20sitting%20together%20in%20a%20comfortable%20living%20room%20having%20a%20meaningful%20conversation%2C%20warm%20lighting%2C%20modern%20home%20interior%2C%20peaceful%20atmosphere%2C%20family%20bonding%2C%20therapeutic%20setting%2C%20professional%20counseling%20environment&width=400&height=300&seq=1&orientation=landscape',
      description: 'Fortalece los vínculos familiares y mejora la comunicación entre todos los miembros de la familia.',
      route: '/servicios/terapia-familiar'
    },
    {
      id: 'terapia-pareja',
      title: 'Terapia de Pareja',
      image: 'https://readdy.ai/api/search-image?query=Couple%20sitting%20together%20in%20a%20comfortable%20therapy%20office%2C%20holding%20hands%2C%20looking%20at%20each%20other%20with%20understanding%2C%20soft%20natural%20lighting%2C%20professional%20counseling%20setting%2C%20relationship%20healing%2C%20emotional%20connection&width=400&height=300&seq=2&orientation=landscape',
      description: 'Reconstruye y fortalece la relación de pareja a través de técnicas especializadas.',
      route: '/servicios/terapia-pareja'
    },
    {
      id: 'terapia-individual',
      title: 'Terapia Individual',
      image: 'https://readdy.ai/api/search-image?query=Person%20sitting%20comfortably%20in%20a%20peaceful%20therapy%20office%2C%20looking%20confident%20and%20relaxed%2C%20natural%20lighting%2C%20plants%20in%20background%2C%20professional%20counseling%20environment%2C%20personal%20growth%2C%20self-reflection%20setting&width=400&height=300&seq=3&orientation=landscape',
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
