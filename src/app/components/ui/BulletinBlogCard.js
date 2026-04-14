import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookButton from "./BookButton";

const BulletinBlogCard = ({
  tag,
  date,
  title,
  description,
  imageUrl,
  href = "#",
}) => {
  return (
    <div className="flex gap-4 overflow-hidden bg-white ">
      {/* Image */}
      <div className="relative w-[400px] h-[400px] flex-shrink-0">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-2 py-4 pr-5">
        {/* Meta */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[12px]    ">{tag}</span>
          <span className="text-[12px] text-gray-400">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mt-2">{title}</h3>

        {/* Description */}
        <p className="text-base text-gray-500 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Button */}

        <BookButton
          className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white w-fit mt-8"
          url="/assets/svg-icons/round-arrow-white.svg"
          label="Read More"
          href={href}
        />
      </div>
    </div>
  );
};

export default BulletinBlogCard;
