
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
          <div className="bg-white rounded-2xl p-8 border border-gray-100" style={{boxShadow: '0 20px 40px rgba(175, 170, 44, 0.15)'}}>
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Solicita tu Cita
            </h4>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('exitosamente') 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} data-readdy-form id="appointment-form">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                    style={{
                      '--tw-ring-color': '#678E2A',
                      borderColor: formData.nombre ? '#678E2A' : undefined
                    } as React.CSSProperties}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                      style={{
                        '--tw-ring-color': '#678E2A',
                        borderColor: formData.email ? '#678E2A' : undefined
                      } as React.CSSProperties}
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                      style={{
                        '--tw-ring-color': '#678E2A',
                        borderColor: formData.telefono ? '#678E2A' : undefined
                      } as React.CSSProperties}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha preferida *
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                      style={{
                        '--tw-ring-color': '#678E2A',
                        borderColor: formData.fecha ? '#678E2A' : undefined
                      } as React.CSSProperties}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hora preferida *
                    </label>
                    <select
                      name="hora"
                      value={formData.hora}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg text-sm"
                      style={{
                        '--tw-ring-color': '#678E2A',
                        borderColor: formData.hora ? '#678E2A' : undefined
                      } as React.CSSProperties}
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modalidad de sesión *
                  </label>
                  <select
                    name="modalidad"
                    value={formData.modalidad}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg text-sm"
                    style={{
                      '--tw-ring-color': '#678E2A',
                      borderColor: '#678E2A'
                    } as React.CSSProperties}
                  >
                    <option value="online">Sesión Online</option>
                    <option value="presencial">Sesión Presencial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje adicional
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                    style={{
                      '--tw-ring-color': '#678E2A',
                      borderColor: formData.mensaje ? '#678E2A' : undefined
                    } as React.CSSProperties}
                    placeholder="Cuéntame brevemente el motivo de tu consulta (opcional)"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.mensaje.length}/500 caracteres
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  style={{
                    backgroundColor: '#678E2A',
                    ':hover': { backgroundColor: '#5a7a24' }
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a7a24'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#678E2A'}
                >
                  {isSubmitting ? 'Enviando...' : 'Agendar Primera Cita'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
