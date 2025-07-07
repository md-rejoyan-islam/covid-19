interface SubTitleProps {
  title: string;
  color: string;
}

export default function SubTitle({ title, color }: SubTitleProps) {
  return <h2 className={`text-lg font-semibold ${color}`}>{title}</h2>;
}
