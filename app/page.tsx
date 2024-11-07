import { ContactForm } from "@/components/contact-form";
import { CoronavirusExperts } from "@/components/coronavirus-experts";
import { CovidLiveReports } from "@/components/covid-live-reports";
import { CovidPrecautions } from "@/components/covid-precautions";
import { CovidPreventions } from "@/components/covid-preventions";
import CovidStatistics from "@/components/covid-statistics";
import DiseaseInfo from "@/components/disease-info";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { SymptomsSection } from "@/components/symptoms-section";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <CovidStatistics />

      {/* Disease Info Section */}
      <DiseaseInfo />

      <CovidPrecautions />
      <SymptomsSection />
      <CovidPreventions />
      <CovidLiveReports />
      <ContactForm />
      <CoronavirusExperts />
      <Footer />
    </div>
  );
}
