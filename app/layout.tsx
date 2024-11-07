import { Footer } from "@/components/shared/footer";
import { StickyNavbar } from "@/components/shared/sticky-navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StickyNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
