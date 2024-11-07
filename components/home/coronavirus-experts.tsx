"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SubTitle from "./sub-title";
import Title from "./title";

export function CoronavirusExperts() {
  const experts = [
    {
      name: "Dr. Ruby",
      role: "Radiologist",
      image: "/exports/expert1.png",
    },
    {
      name: "Dr. Robert",
      role: "Medicine Specialist",
      image: "/exports/expert2.png",
    },
    {
      name: "Dr. Alina",
      role: "Throat Specialist",
      image: "/exports/expert3.png",
    },
    {
      name: "Dr. Ackles",
      role: "Senior Expert",
      image: "/exports/expert4.png",
    },
  ];

  return (
    <div className="w-full bg-blue-600 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SubTitle title="COVID-19" color="text-[#2eff3a]" />
          <Title title="Coronavirus Experts" color="text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transition-transform "
            >
              <div className="aspect-[3.3/4] relative bg-blue-50">
                {/* Expert Image */}
                <div className="relative h-full flex items-center justify-center p-4">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={200}
                    height={250}
                    className="object-contain"
                  />
                </div>

                {/* Info Footer */}

                <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{expert.name}</h3>
                  <p className="text-blue-100 text-sm">{expert.role}</p>
                </div>
                <div className=" absolute translate-y-32 group-hover:translate-y-0 transition-all duration-300  bottom-0 w-full bg-[#ef4d27] text-[#ef4d27] z-10 py-[26px]">
                  <ul className="flex items-center justify-center gap-4">
                    <li
                      className="border h-8 w-8  bg-white  rounded-full flex items-center justify-center cursor-pointer 
                    hover:animate-[spin_.5s]"
                    >
                      <Link
                        href="https://www.facebook.com/md.rej0yan.islam"
                        target="_black"
                      >
                        <Facebook className="p-[3px]" />
                      </Link>
                    </li>
                    <li
                      className="border h-8 w-8  bg-white  rounded-full flex items-center justify-center cursor-pointer 
                    hover:animate-[spin_.5s]"
                    >
                      <Link
                        href={"https://www.instagram.com/md.rejoyan.islam"}
                        target="_black"
                      >
                        <Instagram className="p-[3px]" />
                      </Link>
                    </li>
                    <li
                      className="border h-8 w-8  bg-white  rounded-full flex items-center justify-center cursor-pointer 
                    hover:animate-[spin_.5s]"
                    >
                      <Link
                        href={"https://x.com/md_rejoyanislam"}
                        target="_black"
                      >
                        <Twitter className="p-[3px]" />
                      </Link>
                    </li>
                    <li
                      className="border h-8 w-8  bg-white  rounded-full flex items-center justify-center cursor-pointer 
                    hover:animate-[spin_.5s]"
                    >
                      <Link
                        href="https://www.linkedin.com/in/md-rejoyan-islam"
                        target="_black"
                      >
                        <Linkedin className="p-[3px]" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
