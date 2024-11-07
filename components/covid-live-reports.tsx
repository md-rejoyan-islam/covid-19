"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import SubTitle from "./sub-title";
import Title from "./titel";

interface CountryData {
  name: string;
  flag: JSX.Element;
  cases: string;
  trending: "up" | "down";
}

export function CovidLiveReports() {
  const countries: CountryData[] = [
    {
      name: "France",
      flag: (
        <Image src="/country/fr.png" alt="France flag" width={30} height={30} />
      ),
      cases: "101,32,220",
      trending: "up",
    },
    {
      name: "Australia",
      flag: (
        <Image src="/country/au.png" alt="France flag" width={30} height={30} />
      ),
      cases: "51,32,220",
      trending: "up",
    },
    {
      name: "USA",
      flag: (
        <Image src="/country/us.png" alt="France flag" width={30} height={30} />
      ),
      cases: "612,32,220",
      trending: "down",
    },
    {
      name: "Palestine",
      flag: (
        <Image src="/country/pk.png" alt="France flag" width={30} height={30} />
      ),
      cases: "192,32,220",
      trending: "up",
    },
    {
      name: "UK",
      flag: (
        <Image src="/country/uk.png" alt="France flag" width={30} height={30} />
      ),
      cases: "110,32,220",
      trending: "up",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="  mx-auto ">
        <div className=" gap-8 md:flex">
          {/* Map Section */}
          <div className=" md:w-1/2 relative bg-blue-600 py-24  text-white flex flex-col px-20 items-center justify-center min-h-[400px]">
            <Image
              src="/country/map.png"
              alt="World Map"
              width={800}
              height={800}
            />
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-2">150+</h2>
              <p className="text-xl md:text-2xl opacity-90">
                Country Effected Worldwide
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="md:w-1/2 flex flex-col py-16 px-4 sm:px-16 ">
            <div className="mb-6">
              <SubTitle title="COVID-19" color="text-[#319ae1] text-center" />
              <Title title="Live Reports" color="text-[#ef4d27]" />
            </div>
            <div className="space-y-4">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label={`${country.name} flag`}
                    >
                      {country.flag}
                    </span>
                    <span className="font-medium">{country.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">{country.cases}</span>
                    <span
                      className={`flex items-center ${
                        country.trending === "up"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {country.trending === "up" ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
