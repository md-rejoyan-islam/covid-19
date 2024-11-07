"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeaderHero({ page }: { page: string }) {
  return (
    <div className="relative  overflow-hidden bg-white bg-[url('/contagionPage/contagion-bg.png')]  bg-cover bg-center bg-no-repeat">
      {/* Main Content */}
      <div className="container relative mx-auto px-4 pt-28">
        {/* Navigation */}

        {/* Hero Content */}
        <div className="grid gap-20 lg:grid-cols-2 ">
          <div className="flex justify-center items-center w-full flex-col">
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
            {/* Plant Decoration */}
            {/* <div className="absolute bottom-0 right-12 h-32 w-24">
              <div className="relative h-full w-full">
                <div className="absolute bottom-0 left-1/2 h-24 w-4 -translate-x-1/2 bg-green-500 transform-gpu" />
                <div className="absolute bottom-12 left-1/2 h-16 w-8 -translate-x-1/2 rotate-45 bg-green-400 transform-gpu" />
                <div className="absolute bottom-8 left-1/2 h-16 w-8 -translate-x-1/2 -rotate-45 bg-green-300 transform-gpu" />
              </div>
            </div> */}

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
