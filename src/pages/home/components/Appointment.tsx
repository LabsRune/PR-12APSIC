
import { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    modalidad: 'online',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4aiddb6dpbkhrueeqgg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
      });

      if (response.ok) {
        setSubmitMessage('¡Tu cita ha sido agendada exitosamente! Te contactaré pronto para confirmar los detalles.');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          fecha: '',
          hora: '',
          modalidad: 'online',
          mensaje: ''
        });
      } else {
        setSubmitMessage('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setSubmitMessage('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
    }
    
    setIsSubmitting(false);
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

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
                    Una breve conversación para conocernos y que puedas entender mi enfoque terapéutico.
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
            
      <div id="calendario-reserva" className="w-full  ">
        {/* Calendar Form */}
        <div className="tidycal-wrapper">
          <iframe
            className="tidycal-embed"
            data-path="dr87152/sesion-individua"
            src="https://tidycal.com/dr87152/sesion-individua?embed=true"
            style={{border: 'none', width: '1px', minWidth: '100%', height: '399px', overflow: 'hidden', minHeight: '500px'}}

          ></iframe>
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
