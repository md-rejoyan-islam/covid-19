import PreventionHeaderHero from "@/components/prevention/hero-section";
import PreventionContact from "@/components/prevention/prevention-contact";
import { ProtectionGuidelines } from "@/components/prevention/protection-guidelines";

export default function Prevention() {
  return (
    <div>
      <PreventionHeaderHero />
      <ProtectionGuidelines />
      <PreventionContact />
    </div>
  );
}
