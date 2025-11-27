import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Appointment from './components/Appointment';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from '../../components/base/WhatsAppButton';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <Header />
      <Hero />
      <Services />
      <Appointment />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      <Hero />
      <About />
      <Services />
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#678E2A] mb-6">
              Blog de Salud Mental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Artículos informativos y recursos para tu bienestar emocional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Ansiedad: Síntomas y Tratamiento",
                excerpt: "Descubre cómo identificar y manejar la ansiedad de manera efectiva.",
                image: "https://readdy.ai/api/search-image?query=peaceful%20woman%20meditating%20in%20serene%20natural%20environment%20with%20soft%20lighting%2C%20mental%20health%20wellness%20concept%2C%20calming%20atmosphere%2C%20professional%20photography%20style%2C%20warm%20tones&width=300&height=200&seq=1&orientation=landscape",
                link: "/blog/ansiedad-sintomas-tratamiento"
              },
              {
                title: "Depresión: Cómo Identificarla",
                excerpt: "Aprende a reconocer los signos y buscar ayuda profesional.",
                image: "https://readdy.ai/api/search-image?query=person%20looking%20hopeful%20through%20window%20with%20sunlight%20streaming%20in%2C%20mental%20health%20recovery%20concept%2C%20soft%20natural%20lighting%2C%20therapeutic%20atmosphere%2C%20warm%20colors&width=300&height=200&seq=2&orientation=landscape",
                link: "/blog/depresion-como-identificarla"
              },
              {
                title: "Manejo del Estrés Laboral",
                excerpt: "Estrategias efectivas para equilibrar vida personal y profesional.",
                image: "https://readdy.ai/api/search-image?query=professional%20person%20practicing%20mindfulness%20at%20modern%20office%20desk%2C%20work-life%20balance%20concept%2C%20clean%20workspace%2C%20natural%20lighting%2C%20stress%20relief%20atmosphere&width=300&height=200&seq=3&orientation=landscape",
                link: "/blog/estres-laboral-manejo"
              }
            ].map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => window.REACT_APP_NAVIGATE(post.link)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#678E2A] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#678E2A] font-medium group-hover:gap-2 transition-all">
                    Leer más
                    <div className="w-4 h-4 flex items-center justify-center ml-1 group-hover:ml-0 transition-all">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => window.REACT_APP_NAVIGATE('/blog')}
              className="bg-[#678E2A] text-white px-8 py-3 rounded-full hover:bg-[#5a7a24] transition-colors cursor-pointer whitespace-nowrap"
            >
              Ver Todos los Artículos
            </button>
          </div>
        </div>
      </section>
      <Appointment />
      <Footer />
    </div>
  );
};

export default HomePage;
