interface SvgProps {
  style?: string;
}

export const ArrowIcon = ({ style }: SvgProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    className={`inline-block rotate-90 ${style}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" />
  </svg>
);
