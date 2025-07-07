"use client";

import { Eye } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-navy-900 px-4 pt-36  pb-16 bg-[#21234d]">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2000&width=2000')] opacity-5" />

      {/* Decorative Elements */}
      <div className="absolute left-8 top-8 rounded-full bg-blue-200 p-4 md:left-12 md:top-12">
        <Eye className="h-6 w-6 text-blue-950 md:h-8 md:w-8" />
      </div>
      <div className="absolute right-12 top-12 h-16 w-16 rounded-full bg-blue-400" />
      <div className="absolute left-24 top-32 h-12 w-12 rotate-45 transform bg-coral-500" />
      <div className="absolute right-24 bottom-24 h-24 w-24 bg-teal-400" />

      {/* Geometric Platforms */}
      <div className="absolute bottom-0 left-12 h-24 w-48 bg-white/10" />
      <div className="absolute bottom-0 right-12 h-32 w-48 bg-white/10" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-2xl text-center">
        <h1 className="mb-2 text-4xl font-bold text-blue-400 md:text-5xl">
          ERROR
        </h1>
        <div className="mb-4 text-7xl font-bold text-white md:mb-6 md:text-9xl">
          404
        </div>
        <h2 className="mb-4 text-xl text-blue-300 md:text-2xl">
          This page is outside of the universe
        </h2>
        <p className="mb-8 text-blue-200">
          The page you are trying to access doesn&apos;t exist or has been
          moved. Try going back to our homepage.
        </p>
        <Button
          asChild
          className="bg-blue-600 px-8 text-white hover:bg-blue-700"
        >
          <Link href="/">Go to homepage</Link>
        </Button>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute -left-4 bottom-32 h-24 w-32 rotate-12 transform bg-blue-600/20" />
      <div className="absolute -right-4 top-48 h-24 w-32 -rotate-12 transform bg-coral-500/20" />
    </div>
  );
}
