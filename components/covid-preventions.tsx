"use client";

import Image from "next/image";
import SubTitle from "./sub-title";
import Title from "./titel";

export function CovidPreventions() {
  const preventions = [
    {
      title: "WASH HANDS",
      description: "Frequently wash your hands",
      icon: (
        <Image
          src="/preventions/wash.png"
          alt="wash hands"
          width={220}
          height={220}
        />
      ),
      bgColor: "bg-blue-600",
    },
    {
      title: "STAY AT HOME",
      description: "Avoid crowds & stay at home",
      icon: (
        <Image
          src="/preventions/home.png"
          alt="wash hands"
          width={220}
          height={220}
        />
      ),
      bgColor: "bg-blue-600",
    },
    {
      title: "WEAR MASK",
      description: "Wear masks before going out",
      icon: (
        <Image
          src="/preventions/mask.png"
          alt="wash hands"
          width={220}
          height={220}
        />
      ),
      bgColor: "bg-blue-600",
    },
    {
      title: "EAT HEALTHY",
      description: "Eat healthy to stay healthy",
      icon: (
        <Image
          src="/preventions/health.png"
          alt="wash hands"
          width={220}
          height={220}
        />
      ),
      bgColor: "bg-blue-600",
    },
    {
      title: "CLEAN SURFACE",
      description: "Clean surface to destroy germs",
      icon: (
        <Image
          src="/preventions/clean.png"
          alt="wash hands"
          width={220}
          height={220}
        />
      ),
      bgColor: "bg-blue-600",
    },
    {
      title: "SLEEP WELL",
      description: "Sleep minimum 6 hours/day",
      icon: (
        <Image
          src="/preventions/well.png"
          alt="wash hands"
          width={220}
          height={220}
        />
      ),
      bgColor: "bg-gray-800",
    },
  ];

  return (
    <div className="w-full px-4 py-12 bg-[url('/preventions/prevention.png')]  bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SubTitle title="COVID-19" color="text-[#ef4d27]" />
          <Title title="Preventions" color="text-[#0e6dc5]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preventions.map((prevention, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 border-b-4 border-blue-600"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`rounded-full p-6 mb-4`}>{prevention.icon}</div>
                <h3 className="text-purple-700 font-bold text-lg mb-2">
                  {prevention.title}
                </h3>
                <p className="text-gray-600">{prevention.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
