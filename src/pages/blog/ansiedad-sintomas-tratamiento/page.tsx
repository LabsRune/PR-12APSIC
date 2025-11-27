
import { useNavigate } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const AnsiedadPost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=peaceful%20woman%20meditating%20in%20serene%20natural%20environment%20with%20soft%20lighting%2C%20mental%20health%20wellness%20concept%2C%20calming%20atmosphere%2C%20professional%20photography%20style%2C%20warm%20tones&width=1200&height=400&seq=1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-[#678E2A]/80"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Salud Mental
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Ansiedad: Síntomas, Causas y Tratamiento
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Una guía completa para entender y manejar la ansiedad de manera efectiva
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Article Meta */}
          <div className="flex items-center gap-6 text-gray-500 mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-calendar-line"></i>
              </div>
              15 Enero 2024
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line"></i>
              </div>
              8 min lectura
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-user-line"></i>
              </div>
              Yalimar Ruiz
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés o peligro. Sin embargo, cuando se vuelve excesiva o persistente, puede interferir significativamente con nuestra vida diaria.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">¿Qué es la Ansiedad?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La ansiedad es una emoción caracterizada por sentimientos de tensión, pensamientos preocupantes y cambios físicos como aumento de la presión arterial. Es importante distinguir entre la ansiedad normal y los trastornos de ansiedad.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Síntomas Principales</h2>
            <div className="bg-[#678E2A]/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#678E2A] mb-4">Síntomas Físicos:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Palpitaciones o ritmo cardíaco acelerado
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Sudoración excesiva
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Temblores o sacudidas
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Dificultad para respirar
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Tensión muscular
                </li>
              </ul>
            </div>

            <div className="bg-[#AFAA2C]/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#678E2A] mb-4">Síntomas Emocionales:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Preocupación excesiva
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Sensación de peligro inminente
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Irritabilidad
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Dificultad para concentrarse
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Causas Comunes</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La ansiedad puede tener múltiples causas, incluyendo factores genéticos, ambientales, psicológicos y médicos. Algunas de las causas más comunes incluyen:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Estrés laboral o académico:</strong> Presión excesiva en el trabajo o estudios
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Problemas de salud:</strong> Enfermedades crónicas o condiciones médicas
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Cambios importantes:</strong> Mudanzas, pérdidas, cambios de trabajo
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Factores genéticos:</strong> Antecedentes familiares de trastornos de ansiedad
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Estrategias de Tratamiento</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Técnicas de Respiración</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              La respiración profunda y controlada puede ayudar a reducir los síntomas de ansiedad de manera inmediata. Practica la respiración diafragmática durante 5-10 minutos diarios.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Mindfulness y Meditación</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              La práctica regular de mindfulness puede ayudar a reducir la ansiedad al enfocarse en el momento presente y reducir los pensamientos preocupantes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Ejercicio Regular</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              La actividad física regular libera endorfinas y reduce los niveles de cortisol, ayudando a manejar la ansiedad de manera natural.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Terapia Profesional</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              La terapia cognitivo-conductual (TCC) ha demostrado ser muy efectiva para tratar los trastornos de ansiedad, ayudando a identificar y cambiar patrones de pensamiento negativos.
            </p>

            <div className="bg-gradient-to-r from-[#678E2A]/10 to-[#AFAA2C]/10 p-8 rounded-xl mt-12">
              <h3 className="text-xl font-bold text-[#678E2A] mb-4">¿Cuándo Buscar Ayuda Profesional?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Es importante buscar ayuda profesional cuando la ansiedad interfiere significativamente con tu vida diaria, trabajo, relaciones o bienestar general.
              </p>
              <button 
                onClick={() => navigate('/agenda-cita')}
                className="bg-[#678E2A] text-white px-6 py-3 rounded-full hover:bg-[#5a7a24] transition-colors cursor-pointer whitespace-nowrap"
              >
                Agenda tu Consulta
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Volver al Blog
            </button>
            <button 
              onClick={() => navigate('/blog/depresion-como-identificarla')}
              className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer"
            >
              Siguiente Artículo
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-right-line"></i>
              </div>
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AnsiedadPost;
