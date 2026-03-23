import EnterpriseHeroSection from '@/components/EnterpriseHeroSection';
import StatsSection from '@/components/StatsSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import ResultsShowcaseSection from '@/components/ResultsShowcaseSection';
import MethodologySection from '@/components/MethodologySection';
import SocialProofSection from '@/components/SocialProofSection';
import FounderSection from '@/components/FounderSection';
import EnterpriseTeamSection from '@/components/EnterpriseTeamSection';
import FinalCTASection from '@/components/FinalCTASection';
import '@/styles/enterprise-design-system.css';
import '@/styles/premium-ui-enhancements.css';

export default function Home() {
  return (
    <main>
      <EnterpriseHeroSection />
      <StatsSection />
      <ValuePropositionSection />
      <LeadMagnetSection />
      <ResultsShowcaseSection />
      <MethodologySection />
      <SocialProofSection />
      <FounderSection />
      <EnterpriseTeamSection />
      <FinalCTASection />
    </main>
  );
}
