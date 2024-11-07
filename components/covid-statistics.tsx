import Image from "next/image";
import SubTitle from "./sub-title";
import Title from "./titel";
import { Card } from "./ui/card";

export default function CovidStatistics() {
  return (
    <section className="py-24 bg-gray-50 bg-[url('/statistics/stat-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="container max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <SubTitle title="COVID-19" color="text-[#0e6dc5]" />
          <Title title="Recent Statistics" color="text-[#ef4d27]" />
        </div>
        <div className="grid grid-cols-1  justify-items-center   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <StatCard
            icon={
              <Image
                src="/statistics/cases.png"
                alt="Covid-19"
                width={40}
                height={40}
                className="w-24 h-24"
              />
            }
            number="141 M+"
            label="Total Cases"
            border={"bg-white"}
            color="bg-blue-600"
          />
          <StatCard
            icon={
              <Image
                src="/statistics/death.png"
                alt="Covid-19"
                width={40}
                height={40}
                className="w-24 h-24"
              />
            }
            number="3 M+"
            label="Total Deaths"
            border={"bg-blue-600"}
          />
          <StatCard
            icon={
              <Image
                src="/statistics/recovery.png"
                alt="Covid-19"
                width={40}
                height={40}
                className="w-24 h-24"
              />
            }
            number="80 M+"
            label="Total Recovery"
            color="bg-blue-600"
            border={"bg-white"}
          />
          <StatCard
            icon={
              <Image
                src="/statistics/critical.png"
                alt="Covid-19"
                width={40}
                height={40}
                className="w-24 h-24"
              />
            }
            number="10 M+"
            label="Critical Cases"
            border={"bg-blue-600"}
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  color?: string;
  border?: string;
}

function StatCard({
  icon,
  number,
  label,
  color = "bg-white",
  border,
}: StatCardProps) {
  return (
    <Card
      className={`${color} text-white p-6 rounded-lg w-full max-w-[400px]  shadow-lg ${
        color === "bg-white" ? "text-gray-900" : ""
      }`}
    >
      <div className="flex flex-col items-center space-y-1 ">
        {icon}
        <span className="text-3xl font-bold pt-4">{number}</span>
        <span className="text-[16px]">{label}</span>
      </div>
      <div className={`h-1 ${border} w-full mt-6  mb-2`}></div>
    </Card>
  );
}
