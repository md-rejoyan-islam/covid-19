import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import TitleCardHeader from "../shared/title-card-header";

export function ContagionSection() {
  const contagionMethods = [
    {
      step: "01/03",
      title: "Close Contact With An Infected Person",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde, adipisci quas ipsum voluptates quos.",
      icon: "/contagionPage/hand.png",
      accentColor: "border-blue-500",
    },
    {
      step: "02/03",
      title: "Infected Person's Cough Or Sneeze",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde, adipisci quas ipsum voluptates quos.",
      // icon: Cough,
      icon: "/contagionPage/infected.png",
      accentColor: "border-red-500",
    },
    {
      step: "03/03",
      title: "Touching Contaminated Objects",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde, adipisci quas ipsum voluptates quos.",
      // icon: Virus,
      icon: "/contagionPage/object.png",
      accentColor: "border-purple-500",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 max-w-[1300px]">
      {/* Header Section */}
      <TitleCardHeader
        title="Coronavirus Contagion"
        subTitle="COVID-19"
        titleBgColor="bg-[#726cf4]"
        subTitleColor="text-[#ef4d27]"
        titleColor="text-white"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contagionMethods.map((method, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden border-b-4 transition-transform hover:-translate-y-1 ${method.accentColor}`}
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <Image
                  src={method.icon}
                  alt={`${method.title} illustration`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <span className="text-xl font-medium text-gray-400">
                  {method.step}
                </span>
              </div>
              <h4 className="mb-4 text-xl font-bold">{method.title}</h4>
              <p className="text-gray-600">{method.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
