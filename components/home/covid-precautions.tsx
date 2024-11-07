"use client";

import Image from "next/image";
import SubTitle from "./sub-title";
import Title from "./title";

export function CovidPrecautions() {
  const precautions = [
    {
      title: "AVOID CONTACTS",
      description: "Maintain a social distancing",
      icon: (
        <Image
          src="/precautions/contact.png"
          alt="social distancing"
          width={220}
          height={220}
        />
      ),
    },
    {
      title: "AVOID TOUCHING",
      description: "Avoid touching your face",
      icon: (
        <Image
          src="/precautions/touch.png"
          alt="social distancing"
          width={220}
          height={220}
        />
      ),
    },
    {
      title: "AVOID CROWDS",
      description: "Avoid crowds & Stay at home",
      icon: (
        <Image
          src="/precautions/crowd.png"
          alt="social distancing"
          width={220}
          height={220}
        />
      ),
    },
  ];

  return (
    <div className="w-full px-4 py-28  bg-[url('/precautions/precautions.png')]  bg-cover bg-center bg-no-repeat">
      <div className=" mx-auto max-w-[1300px] ">
        <div className="text-center mb-12">
          <SubTitle title="COVID-19" color="text-[#ef4d27]" />
          <Title title="Precautions" color="text-[#0e6dc5]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center ">
          {precautions.map((precaution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg max-w-[450px] w-full  p-6 transform transition duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className=" rounded-full p-6 mb-4">{precaution.icon}</div>
                <h3 className="text-red-500 font-bold text-lg mb-2">
                  {precaution.title}
                </h3>
                <p className="text-gray-600">{precaution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
