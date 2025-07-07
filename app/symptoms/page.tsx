import HeaderHero from "@/components/shared/header-hero";
import SymptomContact from "@/components/symptom/symptom-contact";
import SymptomHero from "@/components/symptom/symptomHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kvirus-19 | Symptoms",
  description:
    "Kvirus-19 is a website that provides information about COVID-19.",
  keywords: ["covid-19", "coronavirus", "pandemic"],
  openGraph: {
    title: "Kvirus-19 | Symptoms",
    description:
      "Kvirus-19 is a website that provides information about COVID-19.",
    type: "website",
  },
};

export default function Symptoms() {
  return (
    <>
      <HeaderHero page="Symptoms" />;
      <SymptomHero />
      <SymptomContact />
    </>
  );
}
