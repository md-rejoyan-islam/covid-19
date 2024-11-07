// metadata
export const metadata = {
  title: "Kvirus-19 | Symptoms",
  description:
    "Kvirus-19 is a website that provides information about COVID-19.",
  keywords: ["covid-19", "coronavirus", "pandemic"],
  openGraph: {
    title: "Kvirus-19 | Symptoms",
    description:
      "Kvirus-19 is a website that provides information about COVID-19.",
    keywords: ["covid-19", "coronavirus", "pandemic"],
    type: "website",
  },
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
