"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import SubTitle from "./sub-title";
import Title from "./titel";

interface SymptomProps {
  icon: string;
  title: string;
  description: string;
}

function SymptomCard({ icon, title, description }: SymptomProps) {
  return (
    <Card className="flex items-center overflow-hidden group gap-4 p-4 relative rounded-md   backdrop-blur-sm border-[#2689e8] bg-transparent">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full  flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={85}
            height={85}
            className="w-20 h-20  "
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-blue-100 text-sm">{description}</p>
      </div>
      <div className="w-full -translate-x-full group-hover:translate-x-0 transition-all duration-500  h-full bg-[#1c0055] -z-10 left-0 absolute top-0  rounded-md"></div>
    </Card>
  );
}

export function SymptomsSection() {
  const symptoms = [
    {
      icon: "/symptoms/fever.png",
      title: "HIGH FEVER",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "/symptoms/nose.png",
      title: "RUNNY NOSE",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "/symptoms/headace.png",
      title: "HEADACHE",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "/symptoms/coughing.png",
      title: "COUGHING",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "/symptoms/breath.png",
      title: "SHORTEST BREATH",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "/symptoms/throat.png",
      title: "SORE THROAT",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="bg-[#0e6dc5] min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <SubTitle title="COVID-19" color="text-[#2eff3a]" />
        <Title title="symptoms" color="text-white" />
      </div>

      {/* Main content */}
      <div className="container mx-auto  max-w-[1300px] ">
        <div className="relative pb-6  max-w-[350px] mx-auto lg:hidden">
          <Image
            src="/symptoms/symptoms.png"
            alt="COVID-19 Symptoms Illustration"
            width={400}
            height={400}
            className="w-full h-auto  animate-bounce"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {/* Left column */}
          <div className="space-y-6">
            {symptoms.slice(0, 3).map((symptom, index) => (
              <SymptomCard key={index} {...symptom} />
            ))}
          </div>

          {/* Center illustration */}
          <div className="relative py-8 hidden lg:block">
            <Image
              src="/symptoms/symptoms.png"
              alt="COVID-19 Symptoms Illustration"
              width={400}
              height={400}
              className="w-full h-auto  animate-[bounce_3s_infinite]"
            />
          </div>
          {/* Right column */}
          <div className="space-y-6 ">
            {symptoms.slice(3, 6).map((symptom, index) => (
              <SymptomCard key={index} {...symptom} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
      </div>
    </section>
  );
}
