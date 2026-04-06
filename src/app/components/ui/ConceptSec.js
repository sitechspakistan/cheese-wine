import Image from "next/image";
import BookButton from "./BookButton";
import Link from "next/link";

export default function ConceptSec({
  reverse = false,
  imageSrc = "",
  playIcon = "",
  videoHref = "#",
  watchLabel = "",
  heading = "The Concept",
  paragraph = "Have a seat, enjoy a glass of wine, a slice of cheese, and get ready to embark on a journey through Lisbon. Cheese & Wine is a different and unique concept to visit and enjoy Lisbon. We want you to feel at home and to love this city as much as we do. You will experience handmade hospitality, coupled with beautiful decorated units and scenarios.",
  buttonLabel = "",
  buttonHref = "/#",
  imageWidth = "45",
  imageHeight = "480px",
  textWidth = "55",
}) {
  return (
    <div
      className={`bg-white my-[80px] max-w-7xl mx-auto flex items-center justify-between gap-5 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Image Side */}
      <div
        className={`bg-cover bg-center flex flex-col justify-center items-center`}
        style={{
          backgroundImage: `url('${imageSrc}')`,
          width: `${imageWidth}%`,
          height: `${imageHeight}`,
        }}
      >
        {playIcon && (
          <Link href={videoHref}>
            <Image
              src={playIcon}
              alt="Play Button"
              width={100}
              height={100}
              className="mb-8"
            />
          </Link>
        )}
        <h2 className="text-white text-4xl uppercase text-center font-semibold max-w-3xl">
          {watchLabel}
        </h2>
      </div>

      {/* Text Side */}
      <div style={{ width: `${textWidth}%` }}>
        <h2 className="text-4xl font-semibold mb-6">{heading}</h2>
        <div className="text-base text-gray-700">{paragraph}</div>
        {buttonLabel && (
          <BookButton
            label={buttonLabel}
            href={buttonHref}
            className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white mt-6"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        )}
      </div>
    </div>
  );
}
