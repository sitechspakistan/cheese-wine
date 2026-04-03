import Image from "next/image";
import BookButton from "./BookButton";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <span key={star} className="text-yellow-400 text-lg">
            {filled ? "★" : half ? "⯨" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default function ReviewCard({
  rating = 5,
  date = "",
  title = "",
  body = "",
  author = "",
  href = "#",
}) {
  return (
    <div className="bg-white p-6 flex flex-col gap-4 mx-3">
      {/* Top: rating + date */}
      <div className="flex items-center justify-between mb-[30px]">
        <div className="flex items-center gap-3">
          <span className="border border-gray-800 text-sm font-bold px-2 py-0.5">
            {rating.toFixed(1)}
          </span>
          <StarRating rating={rating} />
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold leading-snug">{title}</h3>

      {/* Body */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-[30px]">
        {body}
      </p>

      {/* Author */}
      <p className="font-bold text-sm">{author}</p>

      {/* Read More */}
      <BookButton
        label="Read More"
        href={href}
        className="bg-white text-[#1e2d4a] border-[#1e2d4a] px-0 py-0 w-fit u"
        url="/assets/svg-icons/arrow-right.svg"
      />
    </div>
  );
}
