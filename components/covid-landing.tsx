"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CovidStatistics from "./covid-statistics";
import DiseaseInfo from "./disease-info";
import HeroSection from "./hero-section";

export function CovidLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="relative z-20">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Covid-19"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-purple-800 font-semibold">COVID-19</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Contagion
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Symptoms
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Prevention
            </Link>
          </div>
          <Button className="bg-purple-800 hover:bg-purple-900">Contact</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <CovidStatistics />

      {/* Disease Info Section */}
      <DiseaseInfo />
    </div>
  );
}
