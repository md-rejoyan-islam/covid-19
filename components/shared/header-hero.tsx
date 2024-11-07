"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeaderHero({ page }: { page: string }) {
  return (
    <div className="relative  overflow-hidden bg-white bg-[url('/contagionPage/contagion-bg.png')]  bg-cover bg-center bg-no-repeat">
      {/* Main Content */}
      <div className=" relative mx-auto  pt-28 px-4">
        {/* Navigation */}

        {/* Hero Content */}
        <div className="grid gap-20 lg:grid-cols-2 ">
          <div className="flex justify-center items-center w-full flex-col relative">
            {/* animated virus */}
            <div className="absolute top-10 lg:top-0 left-0 lg:right-4 ">
              <Image
                src="/mv-virus-2.png"
                alt="Virus illustration"
                width={400}
                height={400}
                className=" delay-0 ease-linear w-[40px]  animate-[bounce_.7s_infinite] mx-auto"
              />
            </div>
            {/* animated virus  */}
            <div className="absolute -top-20 lg:top-20 right-0   ">
              <Image
                src="/mv-virus-1.png"
                alt="Virus illustration"
                width={400}
                height={400}
                className=" delay-0 ease-linear w-[120px]  animate-[spin_25s_infinite] mx-auto"
              />
            </div>
            <div className="pt-8 w-full">
              <h1 className="mb-4 text-5xl text-center font-bold text-purple-900 md:text-6xl lg:text-7xl w-full">
                Coronavirus
              </h1>
              <h3 className=" text-center  md:text-6xl lg:text-7xl w-full mt-2 block rounded-r-2xl bg-purple-900 px-8 py-2 text-white">
                {page}
              </h3>
            </div>
            <nav className="mb-8 flex justify-center pt-6 w-full ">
              <div className="flex items-center justify-start gap-2 text-sm">
                <Link
                  href="/"
                  className="rounded-sm bg-purple-900 px-4 py-1 text-white transition-colors hover:bg-purple-800"
                >
                  Home
                </Link>
                <span className="text-purple-900">▶</span>
                <span className="rounded-sm border border-purple-200 bg-white px-4 py-1">
                  {page}
                </span>
              </div>
            </nav>
          </div>

          {/* Illustration */}
          <div className="relative">
            {/* Person Illustration */}
            <div className="relative ">
              <Image
                src="/contagionPage/CatagionHero.png"
                alt="Person wearing mask"
                width={600}
                height={400}
                className="relative z-10 w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style> */}
    </div>
  );
}
