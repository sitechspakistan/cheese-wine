import Image from "next/image";
import BookButton from "./BookButton";

export default function AccommodationCard({
  imageSrc = "",
  title = "",
  paragraph = "",
  href = "#",
  buttonLabel = "Book Now",
  showRoomTypes = false,
  showReviews = false,
  roomTypes = [],
  rating = "",
  reviewCount = 0,
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
        {showRoomTypes && roomTypes.length > 0 && (
          <div className="mt-6 border-t border-gray-100 pt-4">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Room Types
            </p>
            <div className="flex flex-col gap-2">
              {roomTypes.map((room) => (
                <div
                  key={room.name}
                  className="flex justify-between items-center border-b border-gray-100 pb-2"
                >
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      {room.name}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">
                      · Up to {room.capacity} guests
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-[#1e2d4a]">
                    {room.price}/night
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews — sirf accommodation page pe */}
        {showReviews && rating && (
          <div className="mt-5 flex items-center gap-3">
            <div className="bg-[#1e2d4a] text-white px-3 py-2 text-lg font-bold">
              {rating}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Exceptional</p>
              <p className="text-xs text-gray-400">{reviewCount} reviews</p>
            </div>
          </div>
        )}

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
