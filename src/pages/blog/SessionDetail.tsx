import { useEffect, useState, ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/base/WhatsAppButton';
import sessionsData from '../../data/sessions.json';

interface Session {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  contentFile: string;
}

const CustomH2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-bold text-[#678E2A] mt-12 mb-6 border-l-4 border-[#AFAA2C] pl-4">
    {children}
  </h2>
);

const CustomH3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-2xl font-bold text-[#678E2A] mt-8 mb-4">
    {children}
  </h3>
);

const CustomP = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
    {children}
  </p>
);

const CustomUl = ({ children }: { children: ReactNode }) => (
  <ul className="list-none my-6 space-y-3">
    {children}
  </ul>
);

const CustomLi = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start">
    <span className="flex-shrink-0 w-6 h-6 bg-[#678E2A] text-white rounded-full flex items-center justify-center mr-4 mt-1">
      <i className="ri-check-line"></i>
    </span>
    <span className="text-gray-700">{children}</span>
  </li>
);

const CustomBlockquote = ({ children }: { children: ReactNode }) => (
  <blockquote className="my-8 p-6 bg-gradient-to-br from-[#678E2A]/10 to-[#AFAA2C]/10 border-l-4 border-[#AFAA2C] rounded-r-lg italic">
    <p className="text-gray-600 text-lg font-medium">{children}</p>
  </blockquote>
);

const CustomStrong = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-[#678E2A]">
    {children}
  </strong>
);

const SessionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const session = sessionsData.find((s: Session) => s.slug === slug);

  useEffect(() => {
    if (!session) {
      navigate('/blog');
      return;
    }

    const loadContent = async () => {
      try {
        const response = await fetch(`/content/sessions/${session.contentFile}`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading content:', error);
        setContent('# Error al cargar el contenido\n\nPor favor, intenta de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [session, navigate]);

  if (!session) return null;

  const formattedDate = new Date(session.date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const currentIndex = sessionsData.findIndex((s: Session) => s.slug === slug);
  const previousSession = currentIndex > 0 ? sessionsData[currentIndex - 1] : null;
  const nextSession = currentIndex < sessionsData.length - 1 ? sessionsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('${session.image}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#678E2A]/90 to-[#678E2A]/80"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            {session.category}
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            {session.title}
          </h1>
          <p className="text-xl opacity-95 leading-relaxed max-w-3xl mx-auto">
            {session.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Article Meta */}
          <div className="flex items-center justify-center gap-6 text-gray-500 mb-12 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-2">
              <i className="ri-calendar-line text-[#678E2A]"></i>
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <i className="ri-time-line text-[#678E2A]"></i>
              {session.readTime}
            </span>
            <span className="flex items-center gap-2">
              <i className="ri-user-heart-line text-[#678E2A]"></i>
              Yalimar Ruiz
            </span>
          </div>

          {/* Markdown Content */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#678E2A]"></div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: CustomH2,
                  h3: CustomH3,
                  p: CustomP,
                  ul: CustomUl,
                  li: CustomLi,
                  blockquote: CustomBlockquote,
                  strong: CustomStrong,
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-[#678E2A]/10 to-[#AFAA2C]/10 p-8 lg:p-10 rounded-2xl mt-16 border-2 border-[#678E2A]/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#678E2A] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-heart-pulse-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#678E2A] mb-3">
                  ¿Te identificaste con este tema?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Si algo de lo que leíste resonó contigo, recuerda que buscar apoyo profesional 
                  es un acto de valentía y amor propio. Estoy aquí para acompañarte en tu proceso 
                  de sanación y crecimiento.
                </p>
                <button 
                  onClick={() => navigate('/agenda-cita')}
                  className="bg-[#678E2A] text-white px-8 py-4 rounded-full hover:bg-[#5a7a24] hover:shadow-lg transition-all duration-300 cursor-pointer inline-flex items-center gap-2 font-semibold"
                >
                  <i className="ri-calendar-check-line text-xl"></i>
                  Agenda tu Primera Sesión
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-gray-200">
            {previousSession ? (
              <button 
                onClick={() => navigate(`/blog/${previousSession.slug}`)}
                className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer group"
              >
                <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Tema anterior</div>
                  <div className="font-semibold">{previousSession.title}</div>
                </div>
              </button>
            ) : (
              <div></div>
            )}
            
            <button 
              onClick={() => navigate('/blog')}
              className="text-gray-600 hover:text-[#678E2A] transition-colors cursor-pointer font-medium"
            >
              Ver todos los temas
            </button>

            {nextSession ? (
              <button 
                onClick={() => navigate(`/blog/${nextSession.slug}`)}
                className="flex items-center gap-2 text-[#678E2A] hover:text-[#5a7a24] transition-colors cursor-pointer group"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-500">Siguiente tema</div>
                  <div className="font-semibold">{nextSession.title}</div>
                </div>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SessionDetail;
