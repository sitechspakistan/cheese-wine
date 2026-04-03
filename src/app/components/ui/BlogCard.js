import Image from "next/image";
import BookButton from "./BookButton";

export default function BlogCard({
  imageSrc = "",
  category = "",
  date = "",
  title = "",
  href = "",
}) {
  return (
    <div className="bg-white flex flex-col">
      {/* Image */}
      <div className="w-full h-[300px] relative overflow-hidden">
        <Image
          src={`/assets/images/blog/${imageSrc}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category & Date */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-[10px]">
          <span>{category}</span>
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold leading-snug flex-1">{title}</h3>

        {/* Button */}
        <div className="mt-[20px]">
          <BookButton
            label="Discover"
            href={href}
            className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white w-fit"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
      </div>
    </div>
  );
}
