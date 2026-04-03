import Image from "next/image";
import Link from "next/link";

export default function HeroSub() {
  return (
    <>
      <section
        className="flex items-center justify-center bg-cover h-[500px] bg-center pt-[75px]"
        style={{ backgroundImage: "url('/assets/images/hero-bg2.jpg')" }}
      >
        <div className="max-w-7xl mx-auto text-center flex flex-col justify-center items-center gap-8">
          <h1 className="text-white text-5xl  text-center font-extrabold max-w-3xl">
            About Us
          </h1>
        </div>
      </section>
    </>
  );
}
