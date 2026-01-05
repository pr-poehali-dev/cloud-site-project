import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { FeaturesSection, PricingSection, DocsSection, CTASection } from '@/components/MainSections';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <DocsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
