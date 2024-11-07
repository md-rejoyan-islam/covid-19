import { Circle, Hash } from "lucide-react";
import Image from "next/image";
import TitleCardHeader from "../shared/title-card-header";

const VirusIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <Circle className="h-full w-full" />
    <Hash className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 transform" />
  </div>
);

export default function SymptomHero() {
  const symptoms = [
    {
      title: "CHEST PAIN",
      description:
        "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Consectetur, doloribus?",
      color: "bg-blue-900",
      textColor: "text-blue-900",
      position: "left",
    },
    {
      title: "SHORTNESS OF BREATH",
      description:
        "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Consectetur, doloribus?",
      color: "bg-purple-800",
      position: "left",
      textColor: "text-purple-800",
    },
    {
      title: "SORE THROAT",
      description:
        "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Consectetur, doloribus?",
      color: "bg-blue-900",
      position: "left",
      textColor: "text-blue-900",
    },
    {
      title: "HIGH FEVER",
      description:
        "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Consectetur, doloribus?",
      color: "bg-purple-800",
      position: "right",
      textColor: "text-purple-800",
    },
    {
      title: "COUGH",
      description:
        "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Consectetur, doloribus?",
      color: "bg-blue-900",
      position: "right",
      textColor: "text-blue-900",
    },
    {
      title: "HEADACHE",
      description:
        "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Consectetur, doloribus?",
      color: "bg-purple-800",
      position: "right",
      textColor: "text-purple-800",
    },
  ];

  return (
    <div className="relative min-h-screen bg-purple-50/50 px-4 py-16">
      {/* Background World Map - Could be added as a background image */}

      {/* Header Section */}

      <TitleCardHeader
        title="Coronavirus Symptoms"
        subTitle="COVID-19"
        titleBgColor="bg-[#431a7c]"
        subTitleColor="text-[#ef4d27]"
        titleColor="text-white"
      />

      {/* Symptoms Section */}
      <div className="mx-auto max-w-7xl">
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Symptoms Cards */}
          <div className="space-y-5">
            {symptoms.slice(0, 3).map((symptom, index) => (
              <div
                key={index}
                className={`relative   text-black transition-transform hover:-translate-y-1`}
              >
                <h3 className={`mb-2 text-lg font-bold ${symptom.textColor}`}>
                  {symptom.title}
                </h3>
                <p className={`text-white/90 ${symptom.color}  p-6 rounded-lg`}>
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex h-full justify-center items-center">
            <Image
              src="/symptomPage/center.png"
              alt="Symptom illustration"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-5">
            {symptoms.slice(3, 6).map((symptom, index) => (
              <div
                key={index}
                className={`relative   text-black transition-transform hover:-translate-y-1`}
              >
                <h3 className={`mb-2 text-lg font-bold ${symptom.textColor}`}>
                  {symptom.title}
                </h3>
                <p className={`text-white/90 ${symptom.color}  p-6 rounded-lg`}>
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
