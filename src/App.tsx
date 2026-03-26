import { useEffect, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ThemeProvider } from './ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import DefinitionBlock from './sections/DefinitionBlock';
import Footer from './components/Footer';
import ScrollCar from './components/ScrollCar';

// Lazy-load below-fold sections for faster initial paint
const FeaturesSection = lazy(() => import('./sections/FeaturesSection'));
const OrbitalModulesSection = lazy(() => import('./sections/OrbitalModulesSection'));
const PaymentConstellationSection = lazy(() => import('./sections/PaymentConstellationSection'));
const InspectionVisualizerSection = lazy(() => import('./sections/InspectionVisualizerSection'));
const ReservationTimelineSection = lazy(() => import('./sections/ReservationTimelineSection'));
const FormBuilderSection = lazy(() => import('./sections/FormBuilderSection'));
const LoyaltyProgramSection = lazy(() => import('./sections/LoyaltyProgramSection'));
const CollaborationsSection = lazy(() => import('./sections/CollaborationsSection'));
const FAQSection = lazy(() => import('./sections/FAQSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

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
          <DefinitionBlock />
          <Suspense fallback={null}>
            <FeaturesSection />
            <OrbitalModulesSection />
            <PaymentConstellationSection />
            <InspectionVisualizerSection />
            <ReservationTimelineSection />
            <FormBuilderSection />
            <LoyaltyProgramSection />
            <CollaborationsSection />
            <FAQSection />
            <ContactSection />
          </Suspense>
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
