import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const TerapiaParejaPage = () => {

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
    <div className="">
      {/* Service Description */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿En qué consiste la Terapia en Pareja?
        </h2>
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
<p>
  Este abordaje brinda un espacio seguro y neutral diseñado para hablar de temas difíciles y, desde una nueva perspectiva, encontrar soluciones sanas y funcionales para la pareja generando nuevos mecanismos para manejar sus diferencias y transformar patrones de comportamiento que generan conflicto.
  </p>
<p>Dejar en claro que dentro de una pareja todos tienen el mismo valor, las mismas oportunidades y entender que aunque tengan un proyecto de vida en común, también cuentan con un proyecto de vida como individuo.
</p>
        </div>
      </div>

      {/* Calendar Section */}
      <div id="calendario-reserva" className="w-full  mt-12">
        {/* Calendar Form */}
        <div className="tidycal-wrapper">
          <iframe
            className="tidycal-embed"
            title='Calendario de disponibilidad de Yalimar para las consultas'

            data-path="dr87152/sesion-en-pareja"
            src="https://tidycal.com/dr87152/sesion-en-pareja?embed=true"
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
