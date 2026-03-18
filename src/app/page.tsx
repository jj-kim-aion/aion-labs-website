import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import ResultsShowcaseSection from '@/components/ResultsShowcaseSection';
import MethodologySection from '@/components/MethodologySection';
import SocialProofSection from '@/components/SocialProofSection';
import FounderSection from '@/components/FounderSection';
import TeamSection from '@/components/TeamSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection
        title="The AI Agency of the Future"
        subtitle="Enterprise AI implementation without the enterprise headaches. We deploy breakthrough AI research into market-leading platforms that drive measurable ROI while your competition is still planning pilots."
        ctaText="Get Your AI Readiness Assessment"
      />
      <StatsSection />
      <ValuePropositionSection />
      <LeadMagnetSection />
      <ResultsShowcaseSection />
      <MethodologySection />
      <SocialProofSection />
      <FounderSection />
      <TeamSection />
      <FinalCTASection />
    </main>
  );
}
