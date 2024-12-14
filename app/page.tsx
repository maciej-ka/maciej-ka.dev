import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-[430] mx-auto">
      <Image
        className="mb-16"
        src="/maciej-kasprzyk.png"
        alt="Maciej Kasprzyk"
        width={430}
        height={518}
        priority
      />
      <h1 className="text-[48px] mb-5 font-medium">Maciej Kasprzyk</h1>
      <ol className="text-[36px]">
        <li>Fullstack web developer</li>
        <li>19 years of experience</li>
        <li>Open Source contributor</li>
      </ol>
    </div>
  );
}
