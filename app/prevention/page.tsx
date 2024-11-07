import PreventionHeaderHero from "@/components/prevention/hero-section";
import { ImmunizationSection } from "@/components/prevention/immunization-section";
import PreventionContact from "@/components/prevention/prevention-contact";
import { ProtectionGuidelines } from "@/components/prevention/protection-guidelines";

export default function Prevention() {
  return (
    <div>
      <PreventionHeaderHero />
      <ProtectionGuidelines />
      <ImmunizationSection />
      <PreventionContact />
    </div>
  );
}
