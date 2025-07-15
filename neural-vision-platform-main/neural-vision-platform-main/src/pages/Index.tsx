
import NeuroBackground from '../components/NeuroBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#181025' }}>
      <NeuroBackground />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
