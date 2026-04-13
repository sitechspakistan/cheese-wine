// components/ui/CTABanner.jsx

import BookButton from "./BookButton";

export default function CTABanner({
  heading = "Ready to experience handmade hospitality?",
  subheading = "Browse our Suites & Apartments and book your Lisbon experience.",
  buttonLabel = "EXPLORE NOW",
  buttonHref = "/accommodation",
}) {
  return (
    <div className="bg-[#1e2d4a] py-[60px] px-4 text-center">
      <h2 className="text-3xl font-semibold text-white mb-2 max-w-3xl mx-auto">
        {heading}
      </h2>
      <p className="text-gray-300 text-base mb-8">{subheading}</p>
      <BookButton
        label={buttonLabel}
        href={buttonHref}
        className="text-[#1e2d4a] bg-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 w-fit"
        url="/assets/svg-icons/arrow-right.svg"
      />
    </div>
  );
}
