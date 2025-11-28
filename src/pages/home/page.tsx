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


export default HomePage;
