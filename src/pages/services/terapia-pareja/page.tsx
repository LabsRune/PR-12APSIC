import { useNavigate } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const TerapiaParejaPage = () => {
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
          backgroundImage: `url(https://readdy.ai/api/search-image?query=Loving%20couple%20sitting%20together%20in%20a%20comfortable%20therapy%20office%2C%20holding%20hands%2C%20looking%20at%20each%20other%20with%20understanding%20and%20affection%2C%20soft%20natural%20lighting%2C%20professional%20counseling%20setting%2C%20relationship%20healing%2C%20emotional%20connection%2C%20warm%20atmosphere%2C%20modern%20interior&width=1200&height=500&seq=pareja1&orientation=landscape)`,
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
              Terapia de Pareja
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto font-medium">
              Reconstruye la conexión y fortalece el amor en tu relación
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Service Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿En qué consiste la Terapia en Pareja?
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  La terapia en pareja es un proceso terapéutico diseñado para ayudar a las parejas a mejorar 
                  su relación, resolver conflictos y fortalecer su vínculo emocional. Trabajamos juntos para 
                  identificar patrones de comunicación disfuncionales y desarrollar herramientas efectivas.
                </p>
                <p>
                  Durante las sesiones, exploramos las dinámicas de la relación, abordamos temas como la 
                  comunicación, la intimidad, la confianza y la resolución de conflictos. El objetivo es 
                  crear un espacio seguro donde ambos miembros puedan expresarse y trabajar hacia objetivos comunes.
                </p>
                <p>
                  Esta terapia es beneficiosa para parejas que enfrentan crisis, problemas de comunicación, 
                  infidelidad, diferencias en objetivos de vida, o simplemente desean fortalecer su relación 
                  y prevenir futuros conflictos.
                </p>
              </div>
            </div>

            {/* Calendar Section */}
            <div id="calendario-reserva" className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#678E2A] mb-6">
                Reserva tu Sesión
              </h3>
              <p className="text-gray-600 mb-6">
                Agenda tu primera consulta de pareja y comienza a reconstruir vuestra relación.
              </p>
              
              {/* Calendar Form */}
              <form 
                action="https://readdy.ai/api/form/d4aijdr6dpbkhrueeqig" 
                method="POST" 
                data-readdy-form
                className="space-y-4"
              >
                <input type="hidden" name="servicio" value="Terapia en Pareja" />
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombres de la Pareja *
                  </label>
                  <input
                    type="text"
                    name="nombres_pareja"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#678E2A] focus:outline-none text-sm"
                    placeholder="Nombre de ambos miembros"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#678E2A] focus:outline-none text-sm"
                    placeholder="Número de teléfono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#678E2A] focus:outline-none text-sm"
                    placeholder="email@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#678E2A] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Modalidad *
                  </label>
                  <select
                    name="modalidad"
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:border-[#678E2A] focus:outline-none text-sm appearance-none"
                  >
                    <option value="">Selecciona una modalidad</option>
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tiempo de Relación
                  </label>
                  <input
                    type="text"
                    name="tiempo_relacion"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#678E2A] focus:outline-none text-sm"
                    placeholder="Ej: 3 años, 6 meses..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Motivo de Consulta
                  </label>
                  <textarea
                    name="motivo_consulta"
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#678E2A] focus:outline-none text-sm resize-none"
                    placeholder="Cuéntanos brevemente qué los motiva a buscar terapia de pareja..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#678E2A] text-white py-3 px-6 rounded-lg hover:bg-[#5a7a24] transition-colors font-semibold whitespace-nowrap"
                >
                  Agendar Cita
                </button>
              </form>
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
                Sesiones de 60 minutos. El proceso terapéutico típicamente requiere 
                entre 10-20 sesiones, dependiendo de los objetivos y complejidad de la situación.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compromiso</h3>
              <p className="text-gray-600">
                Es importante que ambos miembros de la pareja estén comprometidos 
                con el proceso terapéutico para obtener los mejores resultados.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-chat-3-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Comunicación</h3>
              <p className="text-gray-600">
                Trabajamos técnicas de comunicación asertiva, escucha activa y 
                expresión emocional saludable para mejorar la conexión de pareja.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Espacio Seguro</h3>
              <p className="text-gray-600">
                Creamos un ambiente neutral y seguro donde ambos pueden expresar 
                sus sentimientos sin juicio y con total confidencialidad.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-tools-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Herramientas</h3>
              <p className="text-gray-600">
                Proporcionamos técnicas y ejercicios prácticos que pueden aplicar 
                en casa para fortalecer su relación día a día.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-refresh-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Renovación</h3>
              <p className="text-gray-600">
                El objetivo es renovar y fortalecer el vínculo amoroso, 
                redescubriendo la conexión y construyendo un futuro juntos.
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

export default TerapiaParejaPage;
