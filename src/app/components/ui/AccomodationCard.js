import Image from "next/image";
import BookButton from "./BookButton";

export default function AccommodationCard({
  imageSrc = "",
  title = "",
  paragraph = "",
  href = "#",
  buttonLabel = "Book Now",
}) {
  return (
    <div className="bg-white flex flex-col">
      {/* Image */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="pt-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-3xl font-bold mb-[22px]">{title}</h3>

        {/* Paragraph */}
        <p className="text-base text-gray-600 leading-relaxed flex-1">
          {paragraph}
        </p>

        {/* Button */}
        <div className="mt-[70px]">
          <BookButton
            label={buttonLabel}
            href={href}
            className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white w-fit"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
      </div>
    </div>
  );
}
