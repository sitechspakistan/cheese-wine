import Image from "next/image";
import Link from "next/link";

export default function HeroSub({
  heading = "",
  imageUrl = "/assets/images/hero-bg2.jpg",
}) {
  return (
    <section
      className="flex items-center justify-center bg-cover h-[500px] bg-center pt-[75px]"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col justify-center items-center gap-8">
        <h1 className="text-white text-5xl  text-center font-extrabold max-w-3xl">
          {heading}
        </h1>
      </div>
    </section>
  );
}
