
import { useNavigate } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/base/WhatsAppButton';

const AutoestimaPost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=confident%20person%20looking%20at%20mirror%20reflection%20with%20positive%20expression%2C%20self-love%20concept%2C%20bright%20natural%20lighting%2C%20empowering%20atmosphere%2C%20warm%20tones&width=1200&height=400&seq=4&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-[#678E2A]/80"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Desarrollo Personal
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Fortaleciendo la Autoestima: Guía Práctica
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Desarrolla una relación saludable contigo mismo
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
              8 Enero 2024
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line"></i>
              </div>
              9 min lectura
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
              La autoestima es la valoración que tenemos de nosotros mismos. Una autoestima saludable es fundamental para nuestro bienestar emocional y nuestras relaciones interpersonales.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">¿Qué es la Autoestima?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La autoestima se refiere a la percepción y valoración que tenemos de nosotros mismos. Incluye nuestros pensamientos, sentimientos y opiniones sobre nuestras capacidades, valor personal y dignidad. Una autoestima saludable no significa pensar que somos perfectos, sino aceptarnos con nuestras fortalezas y debilidades.
            </p>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Señales de Autoestima Baja</h2>
            <div className="bg-[#678E2A]/5 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Pensamientos</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Autocrítica excesiva
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Comparación constante con otros
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Pensamientos de "no soy suficiente"
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Miedo al fracaso
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Comportamientos</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Evitar desafíos
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Buscar aprobación constante
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Dificultad para decir "no"
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-close-line text-red-500"></i>
                      </div>
                      Aislamiento social
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Características de una Autoestima Saludable</h2>
            <div className="bg-[#AFAA2C]/5 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Actitudes Positivas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Autoaceptación
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Confianza en las propias capacidades
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Respeto por uno mismo
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Capacidad de aprender de errores
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Comportamientos Saludables</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Establecer límites saludables
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Tomar decisiones independientes
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Expresar opiniones con confianza
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Aceptar cumplidos genuinamente
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Ejercicios Prácticos para Fortalecer la Autoestima</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Diario de Gratitud y Logros</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cada día, escribe tres cosas por las que te sientes agradecido y tres logros, por pequeños que sean.
              </p>
              <div className="bg-[#678E2A]/5 p-4 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  Ejemplo: "Hoy agradezco mi salud, la llamada de un amigo y el sol. Mis logros: terminé un proyecto, ayudé a un compañero y cociné una comida saludable."
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Técnica del Mejor Amigo</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando te critiques, pregúntate: "¿Le diría esto a mi mejor amigo?" Si la respuesta es no, reformula el mensaje con compasión.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">Autocrítica destructiva:</h4>
                  <p className="text-sm text-red-600">"Soy un fracaso, nunca hago nada bien."</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Autocompasión constructiva:</h4>
                  <p className="text-sm text-green-600">"Cometí un error, pero puedo aprender de esto y mejorar."</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Lista de Fortalezas Personales</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Crea una lista de tus fortalezas, habilidades y cualidades positivas. Pide a personas cercanas que contribuyan a esta lista.
              </p>
              <div className="bg-[#AFAA2C]/5 p-4 rounded-lg">
                <h4 className="font-semibold text-[#678E2A] mb-2">Categorías a considerar:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Habilidades profesionales</li>
                  <li>• Cualidades personales</li>
                  <li>• Talentos creativos</li>
                  <li>• Fortalezas en relaciones</li>
                  <li>• Logros pasados</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Desafío de Pensamientos Negativos</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando tengas un pensamiento negativo sobre ti mismo, cuestiónalo:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                    <i className="ri-question-line text-[#678E2A] text-sm"></i>
                  </div>
                  ¿Es este pensamiento realmente cierto?
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                    <i className="ri-question-line text-[#678E2A] text-sm"></i>
                  </div>
                  ¿Qué evidencia tengo a favor y en contra?
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                    <i className="ri-question-line text-[#678E2A] text-sm"></i>
                  </div>
                  ¿Cómo vería esta situación un observador neutral?
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 bg-[#678E2A]/10 rounded-full">
                    <i className="ri-question-line text-[#678E2A] text-sm"></i>
                  </div>
                  ¿Qué pensamiento más equilibrado podría tener?
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">Hábitos Diarios para Fortalecer la Autoestima</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#678E2A]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Mañana</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Afirmaciones positivas frente al espejo</li>
                  <li>• Establecer una intención positiva para el día</li>
                  <li>• Vestirse de manera que te haga sentir bien</li>
                  <li>• Practicar gratitud por 5 minutos</li>
                </ul>
              </div>
              <div className="bg-[#AFAA2C]/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#678E2A] mb-3">Noche</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Reflexionar sobre logros del día</li>
                  <li>• Escribir en el diario de gratitud</li>
                  <li>• Practicar autocompasión</li>
                  <li>• Planificar algo positivo para mañana</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#678E2A] mt-12 mb-6">El Papel del Autocuidado</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              El autocuidado no es egoísmo, es una necesidad. Cuando cuidas tu bienestar físico, emocional y mental, estás enviando un mensaje a tu subconsciente de que eres valioso y mereces cuidado.
            </p>

            <div className="bg-gradient-to-r from-[#678E2A]/10 to-[#AFAA2C]/10 p-8 rounded-xl mt-12">
              <h3 className="text-xl font-bold text-[#678E2A] mb-4">Recuerda: El Cambio Toma Tiempo</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fortalecer la autoestima es un proceso gradual. Sé paciente contigo mismo y celebra cada pequeño progreso. Si sientes que necesitas apoyo adicional, no dudes en buscar ayuda profesional.
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
              onClick={() => navigate('/blog/estres-laboral-manejo')}
              className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Artículo Anterior
            </button>
            <button 
              onClick={() => navigate('/blog/relaciones-saludables-comunicacion')}
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

export default AutoestimaPost;
