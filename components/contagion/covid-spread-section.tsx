import Image from "next/image";
import TitleCardHeader from "../shared/title-card-header";

export function CovidSpreadSection() {
  const transmissionMethods = [
    {
      title: "AIR TRANSMISSION",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Sit, impedit.",
      image: "/contagionPage/transmission.png",
    },
    {
      title: "HUMAN CONTACT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Sit, impedit.",
      image: "/contagionPage/contact.png",
    },
    {
      title: "CONTAMINATED OBJECT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Sit, impedit.",
      image: "/contagionPage/containted.png",
    },
  ];

  return (
    <section className="bg-[url('/contagionPage/spread-1.png')]  bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 py-16 max-w-[1300px] ">
        {/* Header Section */}
        <TitleCardHeader
          title="How Covid-19 Spreads"
          subTitle="COVID-19"
          titleBgColor="bg-[#431a7c]"
          subTitleColor="text-[#0e6dc5]"
          titleColor="text-white"
        />

        {/* Main Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ">
          {/* Left Side - Illustration */}
          <div className="relative flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-xl">
              <Image
                src="/contagionPage/spread.png"
                alt="Person coughing illustration"
                className="relative z-10"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Right Side - Transmission Methods */}
          <div className="flex flex-1 flex-col gap-10">
            {transmissionMethods.map((method, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-4  text-sm rounded-xl bg-gradient-to-r from-[#726cf4] to-[#b683f9]  transition-transform hover:-translate-x-2"
              >
                <div className="flex-1 px-4 py-1">
                  <h3 className="mb-2 font-bold text-white">{method.title}</h3>
                  <p className="text-white/90">{method.description}</p>
                </div>
                <div className=" flex justify-center items-center w-[80px] h-[80px] relative">
                  <div className=" absolute top-0 right-0 rounded-full bg-purple-900 p-1 w-[80px] scale-125">
                    <Image
                      src={method.image}
                      alt={`${method.title} illustration`}
                      width={80}
                      height={80}
                      className="rounded-full w-[200px] h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
