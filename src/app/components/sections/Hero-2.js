import Image from "next/image";
import Link from "next/link";

export default function HeroSub({
  breadcrumb = "",
  heading = "",
  imageUrl = "/assets/images/hero-bg2.jpg",
  className = "",
  overlay = false,
}) {
  return (
    <section
      className={`relative flex items-center justify-center bg-cover h-[500px] bg-center  ${className}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {overlay && <div className="absolute inset-0 bg-black/40 "></div>}
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col  items-center gap-8">
        {breadcrumb && (
          <nav className="text-sm text-gray-300">
            <Link href="/" className="hover:underline">
              {"Home > Bulletin > "}
            </Link>
            <span>{breadcrumb}</span>
          </nav>
        )}
        <h1 className="text-white text-5xl  text-center font-extrabold max-w-3xl">
          {heading}
        </h1>
      </div>
    </section>
  );
}
