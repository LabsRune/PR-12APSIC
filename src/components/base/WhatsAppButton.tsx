
const WhatsAppButton = () => {
const handleWhatsAppClick = () => {
  const phoneNumber = "5554667208";
  const message = "Hola, me gustaría obtener más información sobre los servicios de terapia psicológica.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}&lang=es`;
  window.open(whatsappUrl, '_blank');
};

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-md transition-all duration-300 hover:scale-110 z-50"
      style={{
        border: '1.5px solid white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
      aria-label="Contactar por WhatsApp"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <i className="ri-whatsapp-fill text-xl text-white"></i>
      </div>
    </button>
  );
};

export default WhatsAppButton;
