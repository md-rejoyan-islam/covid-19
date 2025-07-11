import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative  overflow-hidden 
      bg-[url('/banner/background.png')] min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center bg-opacity-50
     "
    >
      {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-800 rounded-bl-full" /> */}
      <div className="container mx-auto px-4  py-28 lg:py-24 relative max-w-[1300px]">
        <div className="absolute top-28 lg:top-0 left-40 ">
          <Image
            src="/banner/mv-viros.png"
            alt="Virus illustration"
            width={400}
            height={400}
            className=" delay-0 ease-linear w-[50px]  animate-bounce mx-auto"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-6 text-white relative">
            <div>
              <Image
                src="/banner/virus.png"
                alt="Virus icon"
                width={50}
                height={30}
                className="w-11"
              />
            </div>
            <div className="flex items-center space-x-2 text-orange-500">
              <div className="absolute top-10 lg:-top-20 right-0 lg:-right-24 ">
                <Image
                  src="/banner/mv-viros.png"
                  alt="Virus illustration"
                  width={400}
                  height={400}
                  className=" delay-0 ease-linear w-[100px]  animate-[spin_25s_infinite] mx-auto"
                />
              </div>
              <span className="font-medium text-2xl">COVID-19 Alert</span>
              <Image
                src="/banner/hero-icon.png"
                alt="Virus icon"
                width={50}
                height={30}
                className="w-11"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#431a7c]">
              Stay At Home Quarantine To Stop Corona Virus
            </h1>
            <p className="text-[#5b636a] text-xl">
              There is no specific medicine to prevent Coronavirus Disease
              (COVID-19). Protect yourself and others by following the necessary
              protocols.
            </p>
            <Button className="bg-[#ef4d27] rounded-full text-[17px] px-6 hover:bg-orange-600">
              Let Us Help
            </Button>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 right-0 ">
              <Image
                src="/banner/mv-viros.png"
                alt="Virus illustration"
                width={400}
                height={400}
                className=" delay-0 ease-linear w-[100px]  animate-[spin_25s_infinite] mx-auto"
              />
            </div>
            <div className="absolute bottom-0 left-0 ">
              <Image
                src="/banner/mv-viros.png"
                alt="Virus illustration"
                width={400}
                height={400}
                className=" delay-0 ease-linear w-[250px]  animate-[spin_25s_infinite] mx-auto"
              />
            </div>
            <Image
              src="/banner/banner.png"
              alt="Stay at home illustration"
              width={400}
              height={400}
              className="w-full max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
