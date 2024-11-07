import Image from "next/image";

interface TitleCardHeaderProps {
  title: string;
  subTitle: string;
  titleColor: string;
  subTitleColor: string;
  titleBgColor: string;
}

export default function TitleCardHeader({
  title,
  subTitle,
  titleColor,
  subTitleColor,
  titleBgColor,
}: TitleCardHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h4 className={`text-lg font-medium ${subTitleColor} block pb-4`}>
        {subTitle}
      </h4>
      <div className="relative mx-auto inline-block rounded-lg">
        <Image
          src={"/contagionPage/virus-icon.png"}
          alt="Virus icon"
          width={50}
          height={30}
          className="w-16 absolute -top-6 -left-6 z-20"
        />
        <h2
          className={`relative z-10 mx-auto rounded-xl  px-8 py-4 text-3xl font-bold  sm:text-3xl md:text-4xl ${titleColor} ${titleBgColor}`}
        >
          {title}
        </h2>
        <Image
          src={"/contagionPage/virus-icon.png"}
          alt="Virus icon"
          width={50}
          height={30}
          className="w-16 absolute -bottom-6 -right-7 z-20"
        />
      </div>
    </div>
  );
}
