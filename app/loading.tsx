import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image
        src={"/loading.gif"}
        alt="loading"
        width={100}
        height={100}
        className="object-contain w-full max-w-[400px] "
      />
    </div>
  );
}
