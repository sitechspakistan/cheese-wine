"use client";

import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useState } from "react";

const images = [
  "/assets/images/gallery/1.jpg",
  "/assets/images/gallery/2.jpg",
  "/assets/images/gallery/3.jpg",
  "/assets/images/gallery/4.png",
];

const ApartmentsImg = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [mainRef, mainApi] = useEmblaCarousel({ loop: true });
  const [thumbRef] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [mainApi],
  );

  return (
    <div className="w-full relative">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={mainRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <img
                src={img}
                alt={`Apartment view ${i + 1}`}
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails — main image ke andar bottom mein overlay */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="overflow-hidden" ref={thumbRef}>
          <div className="flex gap-2 justify-center">
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-[0_0_120px] min-w-0 cursor-pointer"
                onClick={() => onThumbClick(i)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className={`w-full h-[120px] object-cover border-2 transition-all duration-200 ${
                    selectedIndex === i
                      ? "border-white opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsImg;
