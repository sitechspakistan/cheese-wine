import React from "react";

const photos = [
  {
    src: "/assets/images/sustainability/sustainability-1.png",
    alt: "Refillable glass water bottles on the breakfast table",
  },
  {
    src: "/assets/images/sustainability/sustainability-2.png",
    alt: "Our in-house baked breakfast spread",
  },
  {
    src: "/assets/images/sustainability/sustainability-3.png",
    alt: "Cloth napkins and reusable tableware",
  },
];

const SustainabilityImgSec = () => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3  bg-white border-b border-gray-100">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="aspect-[4/3] rounded-md overflow-hidden bg-gray-100"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default SustainabilityImgSec;
