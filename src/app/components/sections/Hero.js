import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url('/assets/images/hero-bg2.jpg')" }}
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col justify-center items-center gap-8">
        <Link href="#">
          <Image
            src="/assets/svg-icons/play-btn.svg"
            alt="Arrow Right"
            width={100}
            height={100}
            className="mb-[20px] "
          />
        </Link>

        <h1 className="text-white text-4xl  text-center font-semibold max-w-3xl">
          We believe in handmade hospitality, where the uniqueness of every
          guest is truly acknowledged and valued.
        </h1>
      </div>
    </section>
  );
}
