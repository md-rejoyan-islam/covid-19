import { Check } from "lucide-react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SubTitle from "./sub-title";
import Title from "./title";

export default function DiseaseInfo() {
  return (
    <section className="py-16 bg-blue-600 ">
      <div className="container max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <SubTitle title="COVID-19" color="text-white" />
          <Title title="Coronavirus Disease" color="text-[#2eff3a]" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex w-full justify-center md:justify-end">
            <Image
              src="/disease/disease.png"
              alt="Covid prevention illustration"
              width={520}
              height={300}
              className=" max-w-[430px] md:max-w-[550px] w-full animate-bounce "
            />
          </div>
          <div className=" rounded-lg p-6 ">
            <Tabs defaultValue="overview" className="w-fit">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:text-red-600 data-[state=active]:bg-[#2564eb35] text-blue-500"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="treatment"
                  className="data-[state=active]:text-red-600 data-[state=active]:bg-[#2564eb35] text-blue-500"
                >
                  Treatment
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <div className="space-y-4 text-white">
                  <p className="">
                    Coronavirus is a type of virus that has created a pandemic
                    of respiratory illness. It is known as COVID-19.
                  </p>
                  <p className="">
                    This virus already caused millions of deaths around the
                    world. It can be spread from person to person. As any strong
                    covid vaccine hasn&apos;t found yet, so we must focused on
                    precautions more than preventions. Precautions involve:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Social Distancing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Mask Wearing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Hand Sanitizing</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="treatment"
                className="mt-4 text-white space-y-4 w-fit"
              >
                <p className="">
                  As we already know the contagious behavior of coronavirus, the
                  scientist and health specialist try their level best to fight
                  this virus.
                </p>
                <p className="">
                  Treatment for COVID-19 depends on the infected person&apos;s
                  signs & symptoms. For mild cases, it is recommended to isolate
                  himself from other people and follow the given medications.
                </p>
                <p className="">
                  More Serious cases may require hospital care. However many
                  covid vaccines have been invented to boost up human immunity.
                </p>
                <p className="">
                  However many covid vaccines have been invented to boost up
                  human immunity.More Serious cases may require hospital care.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
