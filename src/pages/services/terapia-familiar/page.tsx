import { useNavigate } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const TerapiaFamiliarPage = () => {
  const navigate = useNavigate();

  const scrollToCalendar = () => {
    const element = document.getElementById('calendario-reserva');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative"
        style={{
          backgroundImage: `url(https://readdy.ai/api/search-image?query=Happy%20multigenerational%20family%20sitting%20together%20in%20a%20bright%20comfortable%20living%20room%20having%20a%20meaningful%20conversation%2C%20warm%20natural%20lighting%2C%20modern%20home%20interior%2C%20peaceful%20atmosphere%2C%20family%20bonding%2C%20therapeutic%20setting%2C%20professional%20counseling%20environment%2C%20diverse%20family%20members%20smiling%20and%20connecting&width=1200&height=500&seq=familia1&orientation=landscape)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#678E2A]/80"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Terapia Familiar
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto font-medium">
              Fortalece los lazos que unen a tu familia y construye un hogar más armonioso
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    <div className="">
      {/* Service Description */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿En qué consiste la Terapia Familiar?
        </h2>
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
          <p>
            Durante las sesiones se identifican los patrones que generan conflicto como dificultades de comunicación, uso de sustancias, problemas de salud mental, procesos de duelo y los cambios propios del desarrollo biológico, como la adolescencia para así diseñar estrategias efectivas que favorezcan un ambiente familiar saludable y armonioso.
          </p>
          <p>
            Es necesario entender la forma como se relacionan los miembros de la familia y de qué manera esos vínculos impactan en cada individuo
          </p>
        </div>
      </div>

      {/* Calendar Section */}
      <div id="calendario-reserva" className="w-full  mt-12">
        {/* Calendar Form */}
        <div className="tidycal-wrapper">
          <iframe
            className="tidycal-embed"
            data-path="dr87152/sesion-de-terapia-familiar"
            src="https://tidycal.com/dr87152/sesion-de-terapia-familiar?embed=true"
            style={{border: 'none', width: '1px', minWidth: '100%', height: '81px', overflow: 'hidden', minHeight: '500px'}}

          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Treatment Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Información Relevante sobre el Tratamiento
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Duración</h3>
              <p className="text-gray-600">
                Cada sesión tiene una duración de 60 minutos. El tratamiento completo 
                puede variar entre 8-16 sesiones dependiendo de las necesidades familiares.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-group-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Participantes</h3>
              <p className="text-gray-600">
                Pueden participar todos los miembros de la familia o grupos específicos 
                según las necesidades. Se adapta a familias de cualquier tamaño y estructura.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Beneficios</h3>
              <p className="text-gray-600">
                Mejora la comunicación, fortalece vínculos, resuelve conflictos y 
                crea un ambiente familiar más saludable y armonioso.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Confidencialidad</h3>
              <p className="text-gray-600">
                Todas las sesiones se manejan con estricta confidencialidad profesional, 
                creando un espacio seguro para la expresión familiar.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-calendar-check-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexibilidad</h3>
              <p className="text-gray-600">
                Ofrecemos horarios flexibles y modalidades presencial u online 
                para adaptarnos a las necesidades de tu familia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-star-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Resultados</h3>
              <p className="text-gray-600">
                Familias más unidas, mejor comunicación y herramientas efectivas 
                para manejar futuros desafíos de manera constructiva.
              </p>
            </div>
          </div>

          {/* Back to Calendar Button */}
          <div className="text-center mt-12">
            <button
              onClick={scrollToCalendar}
              className="bg-[#678E2A] text-white px-8 py-3 rounded-lg hover:bg-[#5a7a24] transition-colors font-semibold whitespace-nowrap"
            >
              Volver al Calendario de Reservas
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerapiaFamiliarPage;
