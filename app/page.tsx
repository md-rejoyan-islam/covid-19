import { CoronavirusExperts } from "@/components/home/coronavirus-experts";
import { CovidLiveReports } from "@/components/home/covid-live-reports";
import { CovidPrecautions } from "@/components/home/covid-precautions";
import { CovidPreventions } from "@/components/home/covid-preventions";
import CovidStatistics from "@/components/home/covid-statistics";
import DiseaseInfo from "@/components/home/disease-info";
import HeroSection from "@/components/home/hero-section";
import HomeContact from "@/components/home/home-contact";
import { SymptomsSection } from "@/components/home/symptoms-section";

export default function Home() {
  return (
    <div className="relative">
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
      <HomeContact />
      <CoronavirusExperts />
    </div>
  );
}
