
import { useNavigate } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/base/WhatsAppButton';

const BlogPage = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 'ansiedad-sintomas-tratamiento',
      title: 'Ansiedad: Síntomas, Causas y Tratamiento',
      excerpt: 'Descubre todo sobre la ansiedad, sus manifestaciones y cómo puedes manejarla de manera efectiva para mejorar tu calidad de vida.',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20woman%20meditating%20in%20serene%20natural%20environment%20with%20soft%20lighting%2C%20mental%20health%20wellness%20concept%2C%20calming%20atmosphere%2C%20professional%20photography%20style%2C%20warm%20tones&width=400&height=250&seq=1&orientation=landscape',
      date: '15 Enero 2024',
      readTime: '8 min lectura',
      category: 'Salud Mental'
    },
    {
      id: 'depresion-como-identificarla',
      title: 'Depresión: Cómo Identificarla y Buscar Ayuda',
      excerpt: 'Aprende a reconocer los signos de la depresión y conoce las opciones de tratamiento disponibles para recuperar tu bienestar emocional.',
      image: 'https://readdy.ai/api/search-image?query=person%20looking%20hopeful%20through%20window%20with%20sunlight%20streaming%20in%2C%20mental%20health%20recovery%20concept%2C%20soft%20natural%20lighting%2C%20therapeutic%20atmosphere%2C%20warm%20colors&width=400&height=250&seq=2&orientation=landscape',
      date: '12 Enero 2024',
      readTime: '10 min lectura',
      category: 'Salud Mental'
    },
    {
      id: 'estres-laboral-manejo',
      title: 'Estrés Laboral: Estrategias para Manejarlo',
      excerpt: 'Técnicas efectivas para manejar el estrés en el trabajo y mantener un equilibrio saludable entre vida personal y profesional.',
      image: 'https://readdy.ai/api/search-image?query=professional%20person%20practicing%20mindfulness%20at%20modern%20office%20desk%2C%20work-life%20balance%20concept%2C%20clean%20workspace%2C%20natural%20lighting%2C%20stress%20relief%20atmosphere&width=400&height=250&seq=3&orientation=landscape',
      date: '10 Enero 2024',
      readTime: '7 min lectura',
      category: 'Bienestar'
    },
    {
      id: 'autoestima-fortalecimiento',
      title: 'Fortaleciendo la Autoestima: Guía Práctica',
      excerpt: 'Descubre cómo desarrollar una autoestima sólida y saludable a través de ejercicios prácticos y cambios de perspectiva.',
      image: 'https://readdy.ai/api/search-image?query=confident%20person%20looking%20at%20mirror%20reflection%20with%20positive%20expression%2C%20self-love%20concept%2C%20bright%20natural%20lighting%2C%20empowering%20atmosphere%2C%20warm%20tones&width=400&height=250&seq=4&orientation=landscape',
      date: '8 Enero 2024',
      readTime: '9 min lectura',
      category: 'Desarrollo Personal'
    },
    {
      id: 'relaciones-saludables-comunicacion',
      title: 'Relaciones Saludables: La Importancia de la Comunicación',
      excerpt: 'Aprende las claves para construir relaciones sólidas y duraderas a través de una comunicación efectiva y empática.',
      image: 'https://readdy.ai/api/search-image?query=two%20people%20having%20meaningful%20conversation%20in%20comfortable%20setting%2C%20healthy%20relationship%20communication%2C%20warm%20lighting%2C%20connection%20concept%2C%20peaceful%20atmosphere&width=400&height=250&seq=5&orientation=landscape',
      date: '5 Enero 2024',
      readTime: '6 min lectura',
      category: 'Relaciones'
    }
  ];

  const handlePostClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#678E2A]/10 to-[#AFAA2C]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#678E2A] mb-6">
              Blog de Salud Mental
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Artículos informativos y recursos para tu bienestar emocional. 
              Descubre consejos prácticos, estrategias y conocimientos sobre salud mental.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#678E2A] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-calendar-line"></i>
                      </div>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-time-line"></i>
                      </div>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#678E2A] transition-colors">
                    {post.title}
                  </h2>
                  
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#678E2A]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#678E2A] mb-6">
            ¿Necesitas Apoyo Profesional?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Si sientes que necesitas ayuda profesional, no dudes en contactarme. 
            Estoy aquí para acompañarte en tu proceso de bienestar emocional.
          </p>
          <button 
            onClick={() => navigate('/agenda-cita')}
            className="bg-[#678E2A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5a7a24] transition-colors cursor-pointer whitespace-nowrap"
          >
            Agenda tu Consulta
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
