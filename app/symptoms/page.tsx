import SymptomHeaderHero from "@/components/symptom/hero-section";
import SymptomContact from "@/components/symptom/symptom-contact";
import SymptomHero from "@/components/symptom/symptomHero";

export default function Symptoms() {
  return (
    <div>
      <SymptomHeaderHero />
      <SymptomHero />
      <SymptomContact />
    </div>
  );
}
