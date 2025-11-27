
import { useNavigate } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const DepresionPost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=person%20looking%20hopeful%20through%20window%20with%20sunlight%20streaming%20in%2C%20mental%20health%20recovery%20concept%2C%20soft%20natural%20lighting%2C%20therapeutic%20atmosphere%2C%20warm%20colors&width=1200&height=400&seq=2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-[#678E2A]/80"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Salud Mental
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Depresión: Cómo Identificarla y Buscar Ayuda
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Reconoce los signos y encuentra el camino hacia la recuperación
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
              12 Enero 2024
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line"></i>
              </div>
              10 min lectura
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
              La depresión es más que sentirse triste ocasionalmente. Es un trastorno del estado de ánimo que afecta cómo te sientes, piensas y manejas las actividades diarias.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">¿Qué es la Depresión?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La depresión es un trastorno mental común que se caracteriza por una tristeza persistente y una pérdida de interés en actividades que normalmente se disfrutan. Puede afectar a personas de todas las edades y trasfondos.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Señales de Alerta</h2>
            <div className="bg-[#678E2A]/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#678E2A] mb-4">Síntomas Emocionales:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Tristeza persistente o estado de ánimo vacío
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Pérdida de interés en actividades placenteras
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Sentimientos de desesperanza o pesimismo
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Sentimientos de culpa o inutilidad
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Irritabilidad o inquietud
                </li>
              </ul>
            </div>

            <div className="bg-[#AFAA2C]/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#678E2A] mb-4">Síntomas Físicos:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Fatiga o pérdida de energía
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Cambios en el apetito o peso
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Problemas de sueño (insomnio o dormir demasiado)
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Dificultad para concentrarse
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-[#678E2A]"></i>
                  </div>
                  Dolores físicos sin causa aparente
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Tipos de Depresión</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Depresión Mayor</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Episodios de depresión severa que duran al menos dos semanas, interfiriendo significativamente con la vida diaria.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Distimia</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Forma crónica de depresión con síntomas menos severos pero que persisten durante años.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Depresión Estacional</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Relacionada con cambios estacionales, típicamente durante los meses de invierno.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Depresión Posparto</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ocurre después del parto y puede afectar tanto a madres como a padres.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Factores de Riesgo</h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Historia familiar:</strong> Antecedentes de depresión en la familia
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Eventos traumáticos:</strong> Pérdidas, abuso, trauma
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Condiciones médicas:</strong> Enfermedades crónicas, dolor persistente
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                  <i className="ri-arrow-right-s-line text-[#678E2A]"></i>
                </div>
                <strong>Abuso de sustancias:</strong> Alcohol o drogas
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Opciones de Tratamiento</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Psicoterapia</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              La terapia cognitivo-conductual, la terapia interpersonal y otras formas de psicoterapia han demostrado ser muy efectivas para tratar la depresión.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Cambios en el Estilo de Vida</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              El ejercicio regular, una dieta saludable, un sueño adecuado y técnicas de manejo del estrés pueden complementar el tratamiento profesional.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Apoyo Social</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mantener conexiones sociales y buscar apoyo de familiares y amigos es crucial en el proceso de recuperación.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Medicación (cuando es necesaria)</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              En algunos casos, los antidepresivos pueden ser recomendados por un profesional de la salud mental como parte del plan de tratamiento.
            </p>

            <div className="bg-gradient-to-r from-[#678E2A]/10 to-[#AFAA2C]/10 p-8 rounded-xl mt-12">
              <h3 className="text-xl font-bold text-[#678E2A] mb-4">La Recuperación es Posible</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La depresión es tratable. Con el apoyo adecuado y el tratamiento apropiado, las personas pueden recuperarse y llevar vidas plenas y satisfactorias.
              </p>
              <button 
                onClick={() => navigate('/agenda-cita')}
                className="bg-[#678E2A] text-white px-6 py-3 rounded-full hover:bg-[#5a7a24] transition-colors cursor-pointer whitespace-nowrap"
              >
                Busca Ayuda Profesional
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
            <button 
              onClick={() => navigate('/blog/ansiedad-sintomas-tratamiento')}
              className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Artículo Anterior
            </button>
            <button 
              onClick={() => navigate('/blog/estres-laboral-manejo')}
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

export default DepresionPost;
