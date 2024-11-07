import { ContagionSection } from "@/components/contagion/contagion-section";
import ContagionContact from "@/components/contagion/contagionContact";
import { CovidSpreadSection } from "@/components/contagion/covid-spread-section";
import CatagionHero from "@/components/contagion/hero-section";

export default function Contagion() {
  return (
    <div>
      <CatagionHero />
      <ContagionSection />
      <CovidSpreadSection />
      <ContagionContact />
    </div>
  );
}
