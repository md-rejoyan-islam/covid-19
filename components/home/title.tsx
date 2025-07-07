import { ArrowIcon } from "../svg";

interface TitleProps {
  title: string;
  color: string;
}

export default function Title({ title, color }: TitleProps) {
  return (
    <h2
      className={`text-3xl py-3 sm:text-[40px] font-semibold flex gap-2 items-center justify-center ${color} `}
    >
      <ArrowIcon style="w-6 h-6 " />
      {title}
    </h2>
  );
}
