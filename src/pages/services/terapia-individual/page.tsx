
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const TerapiaIndividualPage = () => {

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
          backgroundImage: `url('/libertad.jpg')`,
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
              Terapia Individual
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto font-medium">
              Descubre tu potencial y construye la vida que realmente deseas
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
          ¿En qué consiste la Terapia Individual?
        </h2>
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-justify">
          <p>
            Es un proceso personalizado que permite explorar tus pensamientos, emociones y comportamientos, fomentando el autoconocimiento y el desarrollo de habilidades para gestionar situaciones difíciles y toma de decisiones de manera más asertiva.
            </p>
          <p className="text-justify">
Es importante entender que no estás sólo en tu proceso y se establecerá un vínculo de confianza, aceptación y confidencialidad. Con la finalidad de mejorar tu calidad de vida y el que logres alcanzar tus objetivos personales.  

          </p>

        </div>
      </div>

      {/* Calendar Section */}
      <div id="calendario-reserva" className="w-full mt-12">
        {/* Calendar Form */}
        <div className="tidycal-wrapper">
          <iframe
            className="tidycal-embed"
            title='Calendario de disponibilidad de Yalimar para las consultas'

            data-path="psicologaclinicayalimar/45-minute-meeting"
            src="https://tidycal.com/psicologaclinicayalimar/45-minute-meeting?embed=true"
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
              <p className="text-gray-600 text-justify">
                Sesiones de 50 minutos. La duración del tratamiento varía según 
                objetivos personales, típicamente entre 8-24 sesiones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-user-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalizado</h3>
              <p className="text-gray-600 text-justify">
                Cada proceso es único y se adapta a tus necesidades específicas, 
                ritmo personal y objetivos de crecimiento.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bienestar</h3>
              <p className="text-gray-600 text-justify">
                Mejora tu autoestima, manejo del estrés, relaciones interpersonales 
                y calidad de vida general.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Confidencialidad</h3>
              <p className="text-gray-600 text-justify">
                Espacio completamente confidencial y seguro donde puedes expresarte 
                libremente sin temor al juicio.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-lightbulb-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Autoconocimiento</h3>
              <p className="text-gray-600 text-justify">
                Desarrolla mayor conciencia sobre tus patrones, fortalezas y 
                áreas de crecimiento personal.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center mb-4">
                <i className="ri-trophy-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Resultados</h3>
              <p className="text-gray-600 text-justify">
                Mayor claridad mental, herramientas de afrontamiento efectivas y 
                una vida más plena y satisfactoria.
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

export default TerapiaIndividualPage;
