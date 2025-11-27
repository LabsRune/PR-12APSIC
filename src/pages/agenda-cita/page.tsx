
import { useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/base/WhatsAppButton';

const AgendaCitaPage = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoTerapia: '',
    modalidad: '',
    fechaPreferida: '',
    horaPreferida: '',
    mensaje: ''
  });

  const reviews = [
    {
      id: 1,
      name: "María González",
      location: "Ciudad de México, México",
      rating: 5,
      text: "Yalimar me ayudó a superar una etapa muy difícil en mi vida. Su enfoque profesional y empático me dio las herramientas necesarias para encontrar mi equilibrio emocional. Totalmente recomendada.",
      service: "Terapia Individual"
    },
    {
      id: 2,
      name: "Carlos y Ana Rodríguez",
      location: "Caracas, Venezuela",
      rating: 5,
      text: "Las sesiones online con Yalimar salvaron nuestro matrimonio. A pesar de la distancia, sentimos su apoyo constante. Su metodología nos ayudó a comunicarnos mejor y fortalecer nuestra relación.",
      service: "Terapia de Pareja"
    },
    {
      id: 3,
      name: "Familia Martínez",
      location: "Miami, Estados Unidos",
      rating: 5,
      text: "Yalimar nos ayudó a navegar los desafíos de la adolescencia de nuestro hijo. Su paciencia y experiencia fueron fundamentales para mejorar la comunicación familiar. Excelente profesional.",
      service: "Terapia Familiar"
    },
    {
      id: 4,
      name: "Laura Pérez",
      location: "Barcelona, España",
      rating: 5,
      text: "Encontré en Yalimar no solo una excelente terapeuta, sino también una guía que me ayudó a redescubrir mi autoestima. Las sesiones online fueron muy efectivas y cómodas desde casa.",
      service: "Terapia Individual"
    },
    {
      id: 5,
      name: "Roberto Silva",
      location: "São Paulo, Brasil",
      rating: 5,
      text: "La terapia con Yalimar me cambió la vida. Su enfoque profesional y su calidez humana crearon un espacio seguro donde pude trabajar mis traumas. Infinitamente agradecido.",
      service: "Terapia Individual"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4aiul2p4k429g8lb740', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('¡Cita agendada exitosamente! Te contactaremos pronto para confirmar los detalles.');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          tipoTerapia: '',
          modalidad: '',
          fechaPreferida: '',
          horaPreferida: '',
          mensaje: ''
        });
      } else {
        alert('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      alert('Error de conexión. Por favor, verifica tu internet e intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section - Call to Action */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#678E2A]/10 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#678E2A] mb-6">
              Tu Bienestar Emocional es Nuestra Prioridad
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              En un espacio seguro, confidencial y libre de juicios, encontrarás el apoyo profesional 
              que necesitas para superar los desafíos de la vida. Tu proceso de sanación comienza aquí.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg shadow-[#AFAA2C]/20">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-shield-check-line text-[#678E2A] text-xl"></i>
                </div>
                <span className="text-gray-700 font-medium">100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg shadow-[#AFAA2C]/20">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-heart-line text-[#678E2A] text-xl"></i>
                </div>
                <span className="text-gray-700 font-medium">Espacio Seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg shadow-[#AFAA2C]/20">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-user-heart-line text-[#678E2A] text-xl"></i>
                </div>
                <span className="text-gray-700 font-medium">Atención Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#678E2A] mb-6">
              Terapia Psicológica Sin Fronteras
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ofrecemos servicios de terapia psicológica adaptados a tus necesidades, 
              sin importar dónde te encuentres en el mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Presencial México */}
            <div className="bg-gradient-to-br from-[#678E2A]/5 to-white p-8 rounded-2xl shadow-lg shadow-[#AFAA2C]/10 border border-[#AFAA2C]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#678E2A] rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#678E2A]">Terapia Presencial</h3>
                  <p className="text-gray-600">México</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Para quienes se encuentran en México, ofrecemos sesiones presenciales en un 
                consultorio cómodo y privado, diseñado para brindarte la máxima comodidad 
                durante tu proceso terapéutico.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-check-line text-[#678E2A] text-lg"></i>
                  </div>
                  <span className="text-gray-700">Consulta en persona</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-check-line text-[#678E2A] text-lg"></i>
                  </div>
                  <span className="text-gray-700">Ambiente profesional y acogedor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-check-line text-[#678E2A] text-lg"></i>
                  </div>
                  <span className="text-gray-700">Ubicación accesible</span>
                </div>
              </div>
            </div>

            {/* Online Mundial */}
            <div className="bg-gradient-to-br from-[#AFAA2C]/5 to-white p-8 rounded-2xl shadow-lg shadow-[#AFAA2C]/10 border border-[#AFAA2C]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#AFAA2C] rounded-full flex items-center justify-center">
                  <i className="ri-global-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#678E2A]">Terapia Online</h3>
                  <p className="text-gray-600">Mundial</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Conectamos contigo desde cualquier parte del mundo. Ya sea que estés en México, 
                Venezuela, Estados Unidos o cualquier otro país, puedes acceder a nuestros 
                servicios de terapia online.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-check-line text-[#678E2A] text-lg"></i>
                  </div>
                  <span className="text-gray-700">Sesiones por videollamada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-check-line text-[#678E2A] text-lg"></i>
                  </div>
                  <span className="text-gray-700">Flexibilidad de horarios</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-check-line text-[#678E2A] text-lg"></i>
                  </div>
                  <span className="text-gray-700">Desde la comodidad de tu hogar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#678E2A]/10 px-6 py-3 rounded-full">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-time-line text-[#678E2A] text-xl"></i>
              </div>
              <span className="text-[#678E2A] font-semibold">
                Horarios flexibles adaptados a tu zona horaria
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#678E2A] mb-6">
              Agenda tu Primera Sesión
            </h2>
            <p className="text-lg text-gray-700">
              Completa el formulario y nos pondremos en contacto contigo para confirmar 
              tu cita y resolver cualquier duda que tengas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl shadow-[#AFAA2C]/10" data-readdy-form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors"
                  placeholder="+52 123 456 7890"
                />
              </div>
              <div>
                <label htmlFor="tipoTerapia" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Terapia *
                </label>
                <select
                  id="tipoTerapia"
                  name="tipoTerapia"
                  value={formData.tipoTerapia}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors appearance-none bg-white"
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="individual">Terapia Individual</option>
                  <option value="pareja">Terapia de Pareja</option>
                  <option value="familiar">Terapia Familiar</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="modalidad" className="block text-sm font-medium text-gray-700 mb-2">
                  Modalidad Preferida *
                </label>
                <select
                  id="modalidad"
                  name="modalidad"
                  value={formData.modalidad}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors appearance-none bg-white"
                >
                  <option value="">Selecciona modalidad</option>
                  <option value="presencial">Presencial (México)</option>
                  <option value="online">Online</option>
                </select>
              </div>
              <div>
                <label htmlFor="fechaPreferida" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha Preferida
                </label>
                <input
                  type="date"
                  id="fechaPreferida"
                  name="fechaPreferida"
                  value={formData.fechaPreferida}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="horaPreferida" className="block text-sm font-medium text-gray-700 mb-2">
                Hora Preferida
              </label>
              <select
                id="horaPreferida"
                name="horaPreferida"
                value={formData.horaPreferida}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors appearance-none bg-white"
              >
                <option value="">Selecciona una hora</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje Adicional
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#678E2A] focus:border-[#678E2A] transition-colors resize-none"
                placeholder="Cuéntanos brevemente qué te gustaría trabajar en terapia o cualquier pregunta que tengas..."
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Máximo 500 caracteres</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#678E2A] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-[#5a7a24] transition-colors cursor-pointer whitespace-nowrap"
            >
              Agendar Mi Cita
            </button>
          </form>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#678E2A] mb-6">
              Lo Que Dicen Nuestros Pacientes
            </h2>
            <p className="text-lg text-gray-700">
              Testimonios reales de personas que han transformado sus vidas a través de la terapia
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl shadow-xl shadow-[#AFAA2C]/10 border border-[#AFAA2C]/20">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-star-fill text-[#AFAA2C] text-xl"></i>
                    </div>
                  ))}
                </div>
                <blockquote className="text-lg lg:text-xl text-gray-700 italic leading-relaxed mb-6">
                  "{reviews[currentReview].text}"
                </blockquote>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-bold text-[#678E2A] mb-2">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-gray-600 mb-2">{reviews[currentReview].location}</p>
                  <span className="inline-block bg-[#678E2A]/10 text-[#678E2A] px-4 py-2 rounded-full text-sm font-medium">
                    {reviews[currentReview].service}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg shadow-[#AFAA2C]/20 rounded-full flex items-center justify-center hover:bg-[#678E2A] hover:text-white transition-colors cursor-pointer group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-left-line text-xl"></i>
              </div>
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg shadow-[#AFAA2C]/20 rounded-full flex items-center justify-center hover:bg-[#678E2A] hover:text-white transition-colors cursor-pointer group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-right-line text-xl"></i>
              </div>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentReview ? 'bg-[#678E2A]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgendaCitaPage;
