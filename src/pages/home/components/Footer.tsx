
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#678E2A]">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line text-gray-300"></i>
                </div>
                <span className="text-gray-300">+52 1 55 5466 7208</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-gray-300"></i>
                </div>
                <span className="text-gray-300">psicologaclinicayalimar@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-map-pin-line text-gray-300"></i>
                </div>
                <span className="text-gray-300">Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#678E2A]">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#sobre-mi" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Sobre Mí
              </a>
              <a href="/servicios" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Servicios
              </a>
              <a href="#agenda-cita" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Agenda tu Cita
              </a>
              <a href="#blog" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Blog
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#678E2A]">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#035BA1] rounded-full flex items-center justify-center hover:bg-[#024a8a] transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#035BA1] rounded-full flex items-center justify-center hover:bg-[#024a8a] transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#035BA1] rounded-full flex items-center justify-center hover:bg-[#024a8a] transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#035BA1] rounded-full flex items-center justify-center hover:bg-[#024a8a] transition-colors cursor-pointer"
                aria-label="WhatsApp"
              >
                <i className="ri-whatsapp-line text-white"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Yalimar Ruiz - Psicóloga Clínica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
