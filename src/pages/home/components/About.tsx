
const About = () => {
  return (
    <section id="sobre-psicologa" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            Conoce a tu Psicóloga
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen de la psicóloga */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20psychologist%20in%20her%20office%2C%20warm%20smile%2C%20professional%20attire%2C%20confident%20and%20approachable%20appearance%2C%20sitting%20at%20desk%20with%20books%20and%20diploma%20in%20background%2C%20natural%20lighting%2C%20welcoming%20therapeutic%20environment%2C%20Latin%20American%20woman%20professional%20therapist&width=600&height=700&seq=psychologist1&orientation=portrait"
                alt="Dra. Yalimar Ruiz - Psicóloga Clínica"
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-700 text-white p-6 rounded-2xl shadow-xl" style={{backgroundColor: '#678E2A'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-sm">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la psicóloga */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                Dra. Yalimar Ruiz
              </h4>
              <p className="text-xl font-medium mb-6" style={{color: '#678E2A'}}>
                Psicóloga Clínica Colegiada
              </p>
              
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Soy una psicóloga clínica especializada en terapia cognitivo-conductual con más de 8 años de experiencia 
                  ayudando a individuos, parejas y familias a superar sus desafíos emocionales y mejorar su calidad de vida.
                </p>
                
                <p className="mb-6">
                  Mi enfoque terapéutico se basa en crear un ambiente seguro y empático donde mis pacientes puedan 
                  explorar sus emociones, desarrollar herramientas de afrontamiento efectivas y alcanzar sus objetivos 
                  de bienestar mental.
                </p>
              </div>
            </div>

            {/* Educación y certificaciones */}
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Formación Académica</h5>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-graduation-cap-line" style={{color: '#678E2A'}}></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Doctorado en Psicología Clínica</p>
                      <p className="text-sm text-gray-600">Universidad Nacional de Psicología</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-award-line" style={{color: '#678E2A'}}></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Especialización en Terapia de Pareja y Familiar</p>
                      <p className="text-sm text-gray-600">Instituto de Terapia Sistémica</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-certificate-line" style={{color: '#678E2A'}}></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Certificación en Terapia Cognitivo-Conductual</p>
                      <p className="text-sm text-gray-600">Asociación Internacional de TCC</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Especialidades */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Especialidades</h5>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Ansiedad y Depresión',
                    'Terapia de Pareja',
                    'Conflictos Familiares', 
                    'Autoestima',
                    'Gestión del Estrés',
                    'Duelo y Pérdida'
                  ].map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium text-white"
                      style={{backgroundColor: '#AFAA2C'}}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{borderLeftColor: '#678E2A'}}>
              <p className="text-gray-700 italic text-lg mb-4">
                "Creo firmemente que cada persona tiene la capacidad de sanar y crecer. Mi rol es acompañarte 
                en ese proceso, proporcionándote las herramientas y el apoyo necesario para que puedas alcanzar 
                tu máximo potencial emocional."
              </p>
              <p className="font-semibold" style={{color: '#678E2A'}}>- Dra. Yalimar Ruiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
