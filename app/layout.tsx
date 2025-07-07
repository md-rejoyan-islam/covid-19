import { Footer } from "@/components/shared/footer";
import { StickyNavbar } from "@/components/shared/sticky-navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kvirus-19 | Home",
  description:
    "Kvirus-19 is a website that provides information about COVID-19.",
  keywords: ["covid-19", "coronavirus", "pandemic"],
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StickyNavbar />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
