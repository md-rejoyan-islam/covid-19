import { ContagionSection } from "@/components/contagion/contagion-section";
import ContagionContact from "@/components/contagion/contagionContact";
import { CovidSpreadSection } from "@/components/contagion/covid-spread-section";
import HeaderHero from "@/components/shared/header-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kvirus-19 | Contagion",
  description:
    "Kvirus-19 is a website that provides information about COVID-19.",
  keywords: ["covid-19", "coronavirus", "pandemic"],
  openGraph: {
    title: "Kvirus-19 | Contagion",
    description:
      "Kvirus-19 is a website that provides information about COVID-19.",
    type: "website",
  },
};

export default function Contagion() {
  return (
    <>
      <HeaderHero page="Contagion" />;
      <ContagionSection />
      <CovidSpreadSection />
      <ContagionContact />
    </>
  );
}
