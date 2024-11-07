"use client";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { ArrowIcon } from "../svg";

export function StickyNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuList = [
    {
      id: 1,
      name: "Home",
      href: "/",
      key: "home",
    },
    {
      id: 2,
      name: "Contagion",
      href: "/contagion",
      key: "contagion",
    },
    {
      id: 3,
      name: "Symptoms",
      href: "/symptoms",
      key: "symptoms",
    },
    {
      id: 4,
      name: "Prevention",
      href: "/prevention",
      key: "prevention",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="">
      <header
        className={cn(
          ` top-0 z-[1000] fixed  h-fit left-0   delay-100 duration-500  w-full  transition-all`,
          isScrolled
            ? "bg-[#0e6dc5] shadow-md mt-0 text-white"
            : ` md:-mt-[1px]  md:bg-transparent bg-[#0e6dc5]  ${
                pathname === "/"
                  ? "text-white hover:text-white"
                  : "text-[#431a7c]"
              }`
        )}
      >
        <div
          className={`container max-w-[1300px] z-[1000] mx-auto flex h-20 sm:h-24 items-center px-4 md:px-6 relative md:bg-transparent bg-[#0e6dc5]  `}
        >
          <Link
            className="flex h-full w-full items-center gap-2 text-white"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Covid-19"
              width={100}
              className="w-full max-w-[130px]"
              height={80}
            />
          </Link>
          <NavigationMenu className="hidden md:ml-auto md:flex text-[17px] font-semibold">
            <NavigationMenuList className="">
              {menuList.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle({
                      className: `bg-transparent  `,
                    })}
                  >
                    <div
                      className={`flex gap-1  justify-center group/link   relative duration-700 transition-all  items-center ${
                        pathname === item.href
                          ? ""
                          : "hover:mr-[0px]  hover:ml-[4px]  ml-[2px] mr-[2px]"
                      }`}
                    >
                      <ArrowIcon
                        style={`${
                          pathname === item.href
                            ? ""
                            : "group-hover/link:visible invisible"
                        } h-4 w-4   `}
                      />
                      <Link href={item.href}>{item.name}</Link>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            className={`ml-4 px-5 hidden md:block hover:bg-transparent  border-2 bg-transparent 
            variant="outline ${
              pathname === "/" || isScrolled
                ? "border-white"
                : "border-[#431a7c]"
            }  `}
            asChild
          >
            <Link href="#contact">Contact</Link>
          </Button>
          <Button
            className="ml-auto rounded-full bg-white px-3 text-blue-600 hover:bg-blue-50 md:hidden "
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 15 15"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                className=" h-5 w-5"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>

        <div
          className={`
             ${
               isMenuOpen
                 ? "translate-y-0  bg-[#0e6dc5]    "
                 : "  -translate-y-[400px]   overflow-hidden text-transparent   "
             }  transition-all h-[200px] md:hidden absolute  w-full  duration-500 flex justify-center   -z-[1000]
          
          `}
        >
          <NavigationMenu className="md:hidden  max-w-full pb-4 text-lg h-full">
            <NavigationMenuList className="gap-2 flex justify-center flex-col w-full">
              {menuList.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle({
                      className:
                        " bg-transparent block text-center   text-white hover:bg-transparent hover:text-white",
                    })}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="group/item">
                      <div className="flex gap-2 group-hover/item:gap-3 transition-all duration-500 items-center">
                        <ArrowIcon
                          style={`${
                            pathname === item.href
                              ? ""
                              : "group-hover/item:visible invisible"
                          } h-4 w-4  inline-block `}
                        />
                        <Link href={item.href}>{item.name}</Link>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </div>
  );
}
