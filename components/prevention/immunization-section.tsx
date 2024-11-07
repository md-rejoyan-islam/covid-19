"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TitleCardHeader from "../shared/title-card-header";

export function ImmunizationSection() {
  const features = [
    {
      title: "Safe & Effective",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, modi?",

      image: "/preventionPage/immunization01.png",
      position: "left",
    },
    {
      title: "Personal Protection",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, modi?",
      image: "/preventionPage/immunization01.png",
      position: "left",
    },
    {
      title: "Immunity Passport",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, modi?",
      image: "/preventionPage/immunization01.png",
      position: "right",
    },
    {
      title: "Antibody Testing",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, modi?",
      image: "/preventionPage/immunization01.png",
      position: "right",
    },
  ];

  const steps = [
    {
      number: "1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, amet.",
      buttonColor: "bg-orange-500",
    },
    {
      number: "2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, amet.",
      buttonColor: "bg-red-600",
    },
    {
      number: "3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, amet.",
      buttonColor: "bg-orange-500",
    },
    {
      number: "4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, amet.",
      buttonColor: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-950 px-4 ">
      <div className="mx-auto max-w-6xl bg-[#f0f6fc] rounded-full py-16 px-4">
        <TitleCardHeader
          title="Immunization Tips"
          subTitle="COVID-19"
          titleBgColor="bg-[#be173c]"
          subTitleColor="text-[#511a7c]"
          titleColor="text-white"
        />

        {/* Main Content */}
        <div className="relative pt-6 md:pt-20 ">
          {/* Center Image */}

          {/* Features */}
          <div className="grid    md:grid-cols-3 items-center gap-3 pb-4">
            <div className="space-y-5">
              {features.slice(0, 2).map((feature, index) => (
                <div
                  key={index}
                  className={`flex  justify-center   ${
                    index === 0 ? " -mr-5 " : ""
                  }`}
                >
                  <div className="text-center flex justify-center items-center">
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[#0e6dc5]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={82}
                      height={82}
                      className="rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="relative  mx-auto mb-8 flex h-full w-full items-center justify-center md:mb-0 lg:h-96 lg:w-96">
              <Image
                src="/preventionPage/immunization.png"
                alt="Medical professional"
                width={384}
                height={384}
                className="relative z-10"
              />
            </div>
            <div className="space-y-5 z-[100]">
              {features.slice(2, 4).map((feature, index) => (
                <div
                  key={index}
                  className={`flex  justify-center ${
                    index === 0 ? " -ml-5 " : ""
                  }`}
                >
                  <div className="text-center flex justify-center items-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={82}
                      height={82}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[#0e6dc5]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-0 z-[100] relative grid  md:grid-cols-2 lg:grid-cols-4 ">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={` rounded-none max-w-[430px] md:max-w-full mx-auto border-none  ${
                index % 2 == 0
                  ? "bg-[#be173c] text-white"
                  : "bg-white text-gray-600"
              } `}
            >
              <CardContent className="p-6">
                <div className="flex gap-3 items-center h-full">
                  <p className="mb-4 text-4xl font-bold text-[#3a99f1] ">
                    {step.number}
                  </p>

                  <p className="mb-4  border-l  pl-3 border-black ">
                    {step.description}
                  </p>
                </div>
                <Button
                  className={`w-full ${step.buttonColor} hover:bg-none hover:text-white text-white `}
                >
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
