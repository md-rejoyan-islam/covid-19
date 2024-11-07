"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import TitleCardHeader from "../shared/title-card-header";

export function ProtectionGuidelines() {
  const guidelines = {
    shouldDo: [
      {
        title: "Frequently Wash Your Hand",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it1.png",
      },
      {
        title: "Stop Touching Your Face",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it2.png",
      },
      {
        title: "Wear A Mask Going Outside",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it3.png",
      },
      {
        title: "Use Tissue To Sneeze",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it4.png",
      },
    ],
    shouldntDo: [
      {
        title: "Avoid Crowded Places",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it5.png",
      },
      {
        title: "Avoid Contact With Animals",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it6.png",
      },
      {
        title: "Stay Away From Sick People",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it7.png",
      },
      {
        title: "Avoid Public Transport",
        description:
          "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero, commodi odio molestiae alias debitis.",
        icon: "/preventionPage/it8.png",
      },
    ],
  };

  return (
    <div className=" bg-[url('/preventionPage/prevention-inner.png')]  bg-cover bg-center bg-no-repeat px-4 py-16">
      {/* Header Section */}

      <TitleCardHeader
        title="How To Protect Yourself"
        subTitle="COVID-19"
        titleBgColor="bg-[#431a7c]"
        subTitleColor="text-[#f05027]"
        titleColor="text-white"
      />

      {/* Guidelines Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Things You Should Do */}
          <div>
            <div className="mb-6 rounded-lg bg-blue-900 py-4 text-center">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Things You Should Do
              </h3>
            </div>
            <div className="space-y-4">
              {guidelines.shouldDo.map((item, index) => (
                <Card
                  key={index}
                  className="transition-transform hover:-translate-y-1 bg-transparent"
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex-shrink-0">
                      <div className="overflow-hidden rounded-full bg-purple-100 p-1">
                        <Image
                          src={item.icon}
                          alt=""
                          width={64}
                          height={64}
                          className="h-16 w-16"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-blue-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Things You Shouldn't Do */}
          <div>
            <div className="mb-6 rounded-lg bg-blue-900 py-4 text-center">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Things You Shouldn&apos;t Do
              </h3>
            </div>
            <div className="space-y-4">
              {guidelines.shouldntDo.map((item, index) => (
                <Card
                  key={index}
                  className="transition-transform hover:-translate-y-1 bg-transparent"
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex-shrink-0">
                      <div className="overflow-hidden rounded-full bg-red-100 p-1">
                        <Image
                          src={item.icon}
                          alt=""
                          width={64}
                          height={64}
                          className="h-16 w-16"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-purple-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
