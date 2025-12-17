import { useState } from 'react';
import OpeningAnimation from './components/OpeningAnimation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AISection from './components/AISection';
import DemoSection from './components/DemoSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && (
        <OpeningAnimation onComplete={() => setShowContent(true)} />
      )}

      {showContent && (
        <main className="overflow-x-hidden">
          <HeroSection />
          <DemoSection />
          <AISection />
          <FeaturesSection />
          <PricingSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
