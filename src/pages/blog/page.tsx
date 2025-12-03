
import { useNavigate } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/base/WhatsAppButton';
import sessionsData from '../../data/sessions.json';

const BlogPage = () => {
  const navigate = useNavigate();

  // Cargar sesiones desde el archivo JSON
  const sessions = sessionsData.map(session => ({
    ...session,
    date: new Date(session.date).toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }));

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
              Reflexiones sobre Salud Mental
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explora temas profundos sobre bienestar emocional, relaciones y crecimiento personal.
              Cada sesión aborda aspectos importantes de la salud mental que a menudo quedan sin hablar.
            </p>
          </div>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {sessions.map((session) => (
              <article 
                key={session.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => handlePostClick(session.slug)}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={session.image} 
                    alt={session.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-[#678E2A] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                      {session.category}
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#AFAA2C] transition-colors">
                      {session.title}
                    </h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <i className="ri-calendar-line text-[#678E2A]"></i>
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="ri-time-line text-[#678E2A]"></i>
                      {session.readTime}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">
                    {session.excerpt}
                  </p>
                  
                  <div className="flex items-center text-[#678E2A] font-semibold group-hover:gap-2 transition-all">
                    Explorar tema
                    <i className="ri-arrow-right-line ml-1 group-hover:ml-0 group-hover:translate-x-1 transition-all"></i>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#678E2A]/10 via-[#AFAA2C]/5 to-[#678E2A]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="w-16 h-16 bg-[#678E2A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-pulse-line text-3xl text-[#678E2A]"></i>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#678E2A] mb-6">
              ¿Te identificas con algún tema?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Si algo de lo que leíste resonó contigo, recuerda que no estás solo. 
              Estoy aquí para acompañarte en tu proceso de sanación y crecimiento personal.
            </p>
            <button 
              onClick={() => navigate('/agenda-cita')}
              className="bg-[#678E2A] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#5a7a24] hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
            >
              <i className="ri-calendar-check-line text-xl"></i>
              Agenda tu Primera Sesión
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
