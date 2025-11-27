
import { useNavigate } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const RelacionesPost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=two%20people%20having%20meaningful%20conversation%20in%20comfortable%20setting%2C%20healthy%20relationship%20communication%2C%20warm%20lighting%2C%20connection%20concept%2C%20peaceful%20atmosphere&width=1200&height=400&seq=5&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-[#678E2A]/80"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Relaciones
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Relaciones Saludables: La Importancia de la Comunicación
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Construye vínculos sólidos a través de una comunicación efectiva
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
              5 Enero 2024
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line"></i>
              </div>
              6 min lectura
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
              Las relaciones saludables son fundamentales para nuestro bienestar emocional. La comunicación efectiva es la base sobre la cual se construyen vínculos sólidos, duraderos y satisfactorios.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">¿Qué Define una Relación Saludable?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Una relación saludable se caracteriza por el respeto mutuo, la confianza, la comunicación abierta y el apoyo emocional. En estas relaciones, ambas personas se sienten valoradas, escuchadas y libres de ser auténticas.
            </p>

            <div className="bg-[#678E2A]/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#678E2A] mb-4">Características de Relaciones Saludables:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Comunicación abierta y honesta
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Respeto mutuo y límites claros
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Confianza y lealtad
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Apoyo emocional mutuo
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Independencia personal
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Resolución constructiva de conflictos
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Crecimiento personal conjunto
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-[#678E2A]"></i>
                    </div>
                    Diversión y disfrute compartido
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Los Pilares de la Comunicación Efectiva</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Escucha Activa</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                La escucha activa va más allá de simplemente oír las palabras. Implica prestar atención completa a lo que la otra persona está comunicando, tanto verbal como no verbalmente.
              </p>
              <div className="bg-[#678E2A]/5 p-4 rounded-lg">
                <h4 className="font-semibold text-[#678E2A] mb-2">Técnicas de escucha activa:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mantén contacto visual apropiado</li>
                  <li>• Evita interrumpir o juzgar</li>
                  <li>• Haz preguntas clarificadoras</li>
                  <li>• Parafrasea lo que escuchaste</li>
                  <li>• Muestra empatía y comprensión</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Expresión Asertiva</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                La comunicación asertiva permite expresar tus pensamientos, sentimientos y necesidades de manera clara y respetuosa, sin agredir ni someterte.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">Agresivo</h4>
                  <p className="text-sm text-red-600">"Siempre haces todo mal, nunca me escuchas."</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">Pasivo</h4>
                  <p className="text-sm text-yellow-600">"No importa, está bien..." (cuando no lo está)</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Asertivo</h4>
                  <p className="text-sm text-green-600">"Me siento frustrado cuando no me escuchas. ¿Podemos hablar?"</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Comunicación No Verbal</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Más del 50% de nuestra comunicación es no verbal. El lenguaje corporal, el tono de voz y las expresiones faciales pueden reforzar o contradecir nuestras palabras.
              </p>
              <div className="bg-[#AFAA2C]/5 p-4 rounded-lg">
                <h4 className="font-semibold text-[#678E2A] mb-2">Elementos clave:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Postura corporal abierta y relajada</li>
                  <li>• Tono de voz calmado y apropiado</li>
                  <li>• Expresiones faciales congruentes</li>
                  <li>• Gestos que apoyen el mensaje</li>
                  <li>• Proximidad física respetuosa</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Estrategias para Mejorar la Comunicación</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#678E2A]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Técnica del "Yo" vs "Tú"</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Usa declaraciones que comiencen con "yo" en lugar de "tú" para evitar que la otra persona se sienta atacada.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="bg-red-100 p-2 rounded">
                    <strong className="text-red-700">Evita:</strong> "Tú nunca me ayudas"
                  </div>
                  <div className="bg-green-100 p-2 rounded">
                    <strong className="text-green-700">Mejor:</strong> "Yo me siento abrumado y necesito ayuda"
                  </div>
                </div>
              </div>
              
              <div className="bg-[#AFAA2C]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Tiempo y Lugar Apropiados</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Elige momentos y lugares adecuados para conversaciones importantes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Evita discutir cuando estés enojado</li>
                  <li>• Busca privacidad para temas sensibles</li>
                  <li>• Asegúrate de tener tiempo suficiente</li>
                  <li>• Elimina distracciones (teléfonos, TV)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Manejo Constructivo de Conflictos</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Los conflictos son normales en cualquier relación. Lo importante no es evitarlos, sino manejarlos de manera constructiva que fortalezca la relación en lugar de dañarla.
            </p>

            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-[#678E2A] mb-4">Pasos para Resolver Conflictos:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#678E2A] text-white rounded-full text-sm font-bold">
                    1
                  </div>
                  <div>
                    <strong>Pausa y respira:</strong> Tómate un momento para calmarte antes de responder
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#678E2A] text-white rounded-full text-sm font-bold">
                    2
                  </div>
                  <div>
                    <strong>Identifica el problema real:</strong> Distingue entre el problema y los síntomas
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#678E2A] text-white rounded-full text-sm font-bold">
                    3
                  </div>
                  <div>
                    <strong>Escucha activamente:</strong> Comprende la perspectiva de la otra persona
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#678E2A] text-white rounded-full text-sm font-bold">
                    4
                  </div>
                  <div>
                    <strong>Busca soluciones juntos:</strong> Enfócate en resolver, no en ganar
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#678E2A] text-white rounded-full text-sm font-bold">
                    5
                  </div>
                  <div>
                    <strong>Acuerda un plan:</strong> Establece pasos concretos y comprométanse ambos
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Señales de Alerta en las Relaciones</h2>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Comportamientos que requieren atención:</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-alert-line"></i>
                  </div>
                  Control excesivo o manipulación
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-alert-line"></i>
                  </div>
                  Falta de respeto o desprecio
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-alert-line"></i>
                  </div>
                  Comunicación agresiva o abusiva
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-alert-line"></i>
                  </div>
                  Aislamiento de familiares y amigos
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-alert-line"></i>
                  </div>
                  Violación constante de límites
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Cultivando Relaciones Duraderas</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Las relaciones saludables requieren esfuerzo continuo de ambas partes. Es importante invertir tiempo y energía en nutrir estos vínculos importantes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#678E2A]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Actividades que Fortalecen</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Tiempo de calidad sin distracciones</li>
                  <li>• Expresar gratitud y aprecio regularmente</li>
                  <li>• Crear nuevas experiencias juntos</li>
                  <li>• Apoyarse mutuamente en metas personales</li>
                  <li>• Practicar el perdón y la comprensión</li>
                </ul>
              </div>
              <div className="bg-[#AFAA2C]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Mantenimiento Regular</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Check-ins emocionales regulares</li>
                  <li>• Celebrar logros y momentos especiales</li>
                  <li>• Abordar problemas antes de que crezcan</li>
                  <li>• Mantener la intimidad emocional</li>
                  <li>• Respetar el espacio personal</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#678E2A]/10 to-[#AFAA2C]/10 p-8 rounded-xl mt-12">
              <h3 className="text-xl font-bold text-[#678E2A] mb-4">Invierte en tus Relaciones</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las relaciones saludables son una de las fuentes más importantes de felicidad y bienestar. Si sientes que necesitas ayuda para mejorar tus habilidades de comunicación o resolver conflictos en tus relaciones, la terapia puede ser muy beneficiosa.
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
              onClick={() => navigate('/blog/autoestima-fortalecimiento')}
              className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Artículo Anterior
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer"
            >
              Volver al Blog
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-home-line"></i>
              </div>
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default RelacionesPost;
