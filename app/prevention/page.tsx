import { ImmunizationSection } from "@/components/prevention/immunization-section";
import PreventionContact from "@/components/prevention/prevention-contact";
import { ProtectionGuidelines } from "@/components/prevention/protection-guidelines";
import HeaderHero from "@/components/shared/header-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kvirus-19 | Prevention",
  description:
    "Kvirus-19 is a website that provides information about COVID-19.",
  keywords: ["covid-19", "coronavirus", "pandemic"],
  openGraph: {
    title: "Kvirus-19 | Prevention",
    description:
      "Kvirus-19 is a website that provides information about COVID-19.",
    type: "website",
  },
};

export default function Prevention() {
  return (
    <>
      <HeaderHero page="Prevention" />;
      <ProtectionGuidelines />
      <ImmunizationSection />
      <PreventionContact />
    </>
  );
}
