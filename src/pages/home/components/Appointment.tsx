

const Appointment = () => {

  return (
    <section id="agenda-cita" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            Agenda tu Primera Cita
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comienza tu proceso de bienestar emocional con una primera sesión de contacto
          </p>
        </div>

        <div className="grid grid-cols-1  gap-12 items-center">
          {/* Información de la primera sesión */}
          <div className="rounded-2xl p-8" style={{backgroundColor: '#f8f9fa', border: '2px solid #AFAA2C'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#678E2A'}}>
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-time-line text-white text-lg"></i>
                </div>
              </div>
              <h4 className="text-2xl font-bold" style={{color: '#678E2A'}}>
                Primera Sesión de Contacto
              </h4>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-clock-line" style={{color: '#678E2A'}}></i>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">15 minutos gratuitos</h5>
                  <p className="text-gray-600 text-sm">
                    Una breve conversación para conocernos y que puedas entender mi enfoque terapéutico. Definir el tipo de sesión que necesitas (presencial u online).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-heart-line" style={{color: '#678E2A'}}></i>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Conoce mi metodología</h5>
                  <p className="text-gray-600 text-sm">
                    Te explico cómo trabajo y los diferentes enfoques terapéuticos que utilizo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-user-heart-line" style={{color: '#678E2A'}}></i>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Evaluación inicial</h5>
                  <p className="text-gray-600 text-sm">
                    Conversamos sobre tus necesidades y objetivos para diseñar el mejor plan terapéutico.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6" style={{border: '1px solid #AFAA2C'}}>
                <p className="font-medium text-center" style={{color: '#678E2A'}}>
                  "Mi objetivo es crear un espacio seguro donde te sientas cómodo/a para comenzar tu proceso de crecimiento personal."
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de cita */}
          <div className="bg-white rounded-2xl ">
            
<div id="calendario-reserva" className="w-full">
  <div className="tidycal-wrapper flex flex-col md:flex-row w-full justify-center space-y-8 md:space-y-0 md:space-x-8">

    {/* Sesión Presencial */}
    <div className="w-full md:w-1/2 flex flex-col items-center">
      <div className="mb-2 px-4 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full text-sm">
        Sesión Presencial
      </div>

      <iframe
        className="tidycal-embed w-full"
        title="Calendario sesión presencial"
        data-path="psicologaclinicayalimar/15-minute-meeting"
        src="https://tidycal.com/psicologaclinicayalimar/15-minute-meeting?embed=true"
        style={{
          border: 'none',
          height: '399px',
          overflow: 'hidden',
          minHeight: '500px'
        }}
      ></iframe>
    </div>

    {/* Sesión Online */}
    <div className="w-full md:w-1/2 flex flex-col items-center">
      <div className="mb-2 px-4 py-1 bg-green-100 text-green-800 font-semibold rounded-full text-sm">
        Sesión Online
      </div>

      <iframe
        className="tidycal-embed w-full"
        title="Calendario sesión online"
        data-path="psicologaclinicayalimar/15-minute-meeting"
        src="https://tidycal.com/psicologaclinicayalimar/15-minute-meeting?embed=true"
        style={{
          border: 'none',
          height: '399px',
          overflow: 'hidden',
          minHeight: '500px'
        }}
      ></iframe>
    </div>

  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
