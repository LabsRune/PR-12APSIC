
import { useNavigate } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const EstresLaboralPost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20person%20practicing%20mindfulness%20at%20modern%20office%20desk%2C%20work-life%20balance%20concept%2C%20clean%20workspace%2C%20natural%20lighting%2C%20stress%20relief%20atmosphere&width=1200&height=400&seq=3&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-[#678E2A]/80"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bienestar
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Estrés Laboral: Estrategias para Manejarlo
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Encuentra el equilibrio entre tu vida personal y profesional
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
              10 Enero 2024
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line"></i>
              </div>
              7 min lectura
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
              El estrés laboral es una respuesta física y emocional que ocurre cuando las demandas del trabajo superan las capacidades, recursos o necesidades del trabajador.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">¿Qué es el Estrés Laboral?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              El estrés laboral surge cuando hay un desequilibrio entre las demandas del trabajo y los recursos disponibles para enfrentarlas. Aunque cierto nivel de estrés puede ser motivador, el estrés crónico puede tener efectos negativos en la salud física y mental.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Causas Principales</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#678E2A]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Factores Organizacionales</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Carga de trabajo excesiva
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Plazos irreales
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Falta de control sobre el trabajo
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Ambiente de trabajo tóxico
                  </li>
                </ul>
              </div>
              <div className="bg-[#AFAA2C]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Factores Personales</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Perfeccionismo excesivo
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Dificultad para decir "no"
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Falta de habilidades de manejo del tiempo
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Problemas personales
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Síntomas del Estrés Laboral</h2>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Físicos</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Dolores de cabeza</li>
                    <li>• Tensión muscular</li>
                    <li>• Fatiga crónica</li>
                    <li>• Problemas digestivos</li>
                    <li>• Insomnio</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Emocionales</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Irritabilidad</li>
                    <li>• Ansiedad</li>
                    <li>• Depresión</li>
                    <li>• Frustración</li>
                    <li>• Agotamiento emocional</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Conductuales</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Procrastinación</li>
                    <li>• Aislamiento social</li>
                    <li>• Cambios en el apetito</li>
                    <li>• Uso de sustancias</li>
                    <li>• Ausentismo laboral</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Estrategias de Manejo</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Gestión del Tiempo</h3>
            <div className="bg-[#678E2A]/5 p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/20 rounded-full">
                    <i className="ri-time-line text-[#678E2A] text-sm"></i>
                  </div>
                  <strong>Prioriza tareas:</strong> Usa la matriz de Eisenhower para clasificar tareas por urgencia e importancia
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/20 rounded-full">
                    <i className="ri-calendar-line text-[#678E2A] text-sm"></i>
                  </div>
                  <strong>Planifica tu día:</strong> Dedica 10 minutos cada mañana a planificar tus actividades
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/20 rounded-full">
                    <i className="ri-pause-line text-[#678E2A] text-sm"></i>
                  </div>
                  <strong>Toma descansos:</strong> Programa pausas regulares de 5-10 minutos cada hora
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Técnicas de Relajación</h3>
            <div className="bg-[#AFAA2C]/5 p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#AFAA2C]/20 rounded-full">
                    <i className="ri-lungs-line text-[#678E2A] text-sm"></i>
                  </div>
                  <strong>Respiración profunda:</strong> Practica la respiración 4-7-8 durante momentos de estrés
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#AFAA2C]/20 rounded-full">
                    <i className="ri-meditation-line text-[#678E2A] text-sm"></i>
                  </div>
                  <strong>Meditación:</strong> Dedica 10 minutos diarios a la meditación mindfulness
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#AFAA2C]/20 rounded-full">
                    <i className="ri-body-scan-line text-[#678E2A] text-sm"></i>
                  </div>
                  <strong>Relajación muscular:</strong> Practica la relajación progresiva de músculos
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Establecimiento de Límites</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aprende a decir "no" a tareas adicionales cuando ya tienes una carga completa. Establece horarios claros de trabajo y respétalos. Comunica tus límites de manera asertiva pero respetuosa.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Cuidado Personal</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-[#678E2A] mb-3">Actividad Física</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  El ejercicio regular libera endorfinas y reduce el cortisol. Incluso una caminata de 15 minutos puede hacer la diferencia.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-[#678E2A] mb-3">Alimentación Saludable</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mantén una dieta equilibrada, evita el exceso de cafeína y azúcar, y mantente hidratado durante el día.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-[#678E2A] mb-3">Sueño de Calidad</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Establece una rutina de sueño consistente y crea un ambiente propicio para el descanso.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-[#678E2A] mb-3">Conexiones Sociales</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mantén relaciones saludables con colegas, familiares y amigos. El apoyo social es crucial.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Cuándo Buscar Ayuda Profesional</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Si el estrés laboral está afectando significativamente tu salud, relaciones o calidad de vida, es importante buscar ayuda profesional. Un psicólogo puede ayudarte a desarrollar estrategias personalizadas de manejo del estrés.
            </p>

            <div className="bg-gradient-to-r from-[#678E2A]/10 to-[#AFAA2C]/10 p-8 rounded-xl mt-12">
              <h3 className="text-xl font-bold text-[#678E2A] mb-4">Tu Bienestar es Prioritario</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recuerda que cuidar tu salud mental no es un lujo, es una necesidad. Invertir en tu bienestar te hará más productivo y feliz tanto en el trabajo como en tu vida personal.
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
              onClick={() => navigate('/blog/depresion-como-identificarla')}
              className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Artículo Anterior
            </button>
            <button 
              onClick={() => navigate('/blog/autoestima-fortalecimiento')}
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

export default EstresLaboralPost;
