import BookButton from "./BookButton";

const ExperienceCard = ({
  imageSrc,
  category,
  title,
  description,
  buttonText = "Enquire Now",
  buttonLink = "#",
  price = "",
  isComplimentary = false,
  rating = null,
  ratingSource = "TripAdvisor",
}) => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="w-full h-72 overflow-hidden relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Complimentary Badge */}
        {isComplimentary && (
          <div className="absolute top-3 left-3 bg-[#1e2d4a] text-white text-xs px-3 py-1 uppercase tracking-wide">
            Included with your stay
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="text-2xl font-bold text-[#1a2b4a] mb-2">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 flex-1 mb-4">
          {description}
        </p>
        {/* Price */}
        {price && (
          <p className="text-sm font-semibold text-[#1e2d4a] mb-3">
            {isComplimentary
              ? "Complimentary for direct guests"
              : `From ${price} per person`}
          </p>
        )}

        {rating && (
          <div className="flex items-center gap-1 mb-4">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-sm font-medium text-gray-700">
              Rated {rating} on {ratingSource}
            </span>
          </div>
        )}
        {/* Button */}
        <BookButton
          label={buttonText}
          href={buttonLink}
          className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white w-fit"
          url="/assets/svg-icons/round-arrow-white.svg"
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
