import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ThemeProvider } from './ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import OrbitalModulesSection from './sections/OrbitalModulesSection';
import PaymentConstellationSection from './sections/PaymentConstellationSection';
import InspectionVisualizerSection from './sections/InspectionVisualizerSection';
import ReservationTimelineSection from './sections/ReservationTimelineSection';
import FormBuilderSection from './sections/FormBuilderSection';
import CollaborationsSection from './sections/CollaborationsSection';
import ContactSection from './sections/ContactSection';
import ScrollCar from './components/ScrollCar';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        {/* Fixed Background */}
        <div className="fixed-background" />

        {/* Navigation */}
        <Navigation />

        {/* Scroll-driven car */}
        <ScrollCar />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <FeaturesSection />
          <OrbitalModulesSection />
          <PaymentConstellationSection />
          <InspectionVisualizerSection />
          <ReservationTimelineSection />
          <FormBuilderSection />
          <CollaborationsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
