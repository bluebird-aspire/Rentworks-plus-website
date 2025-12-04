// HomePage - ALL EXISTING SECTIONS PRESERVED
import { NewHero } from '../components/home/NewHero';
import { TrustedBy } from '../components/TrustedBy';
import { BigTestimonial } from '../components/home/BigTestimonial';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ValueProposition } from '../components/home/ValueProposition';
import { WhyChooseBenefits } from '../components/home/WhyChooseBenefits';
import { EasyLearnAccessible } from '../components/EasyLearnAccessible';
import { DailyOperationsTabs } from '../components/DailyOperationsTabs';
import { RevenueIntelligence } from '../components/home/RevenueIntelligence';
import { FleetTypes } from '../components/home/FleetTypes';
import { CustomerStories } from '../components/home/CustomerStories';
import { ExpertSupport } from '../components/home/ExpertSupport';
import { OnboardingSteps } from '../components/OnboardingSteps';
import { Integrations } from '../components/home/Integrations';
import { GlobalSupport } from '../components/home/GlobalSupport';

export function HomePage() {
  return (
    <>
      {/* ALL EXISTING SECTIONS - UNTOUCHED */}
      <NewHero />
      <TrustedBy />
      <BigTestimonial />
      <WhyChooseUs />
      <ValueProposition />
      <WhyChooseBenefits />
      <EasyLearnAccessible />
      <DailyOperationsTabs />
      <RevenueIntelligence />
      <FleetTypes />
      <CustomerStories />
      <ExpertSupport />
      <OnboardingSteps />
      <Integrations />
      <GlobalSupport />
    </>
  );
}
