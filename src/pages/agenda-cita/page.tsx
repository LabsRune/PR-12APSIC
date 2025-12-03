
import { useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/base/WhatsAppButton';

const AgendaCitaPage = () => {
  const [currentReview, setCurrentReview] = useState(0);


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
                  <p className="text-gray-600"> Ciudad de México </p>
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
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#678E2A] mb-6">
              Agenda tu Primera Sesión
            </h2>
            <p className="text-lg text-gray-700">
              Completa el formulario y nos pondremos en contacto contigo para confirmar 
              tu cita y resolver cualquier duda que tengas.
            </p>
          </div>
                  <div className="tidycal-wrapper">
          <iframe
            className="tidycal-embed"
            title='Calendario de disponibilidad de Yalimar para las consultas'
            data-path="dr87152/sesion-individua"
            src="https://tidycal.com/dr87152/sesion-individua?embed=true"
            style={{border: 'none', width: '1px', minWidth: '100%', height: '399px', overflow: 'hidden', minHeight: '500px'}}

          ></iframe>
        </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgendaCitaPage;
