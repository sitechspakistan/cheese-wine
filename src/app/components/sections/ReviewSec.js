"use client";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import ReviewCard from "../ui/ReviewCard";

const platforms = [
  {
    logo: "/assets/svg-logo/airbnb.svg",
    alt: "Airbnb",
    stats: "4.65★ / 5,358 reviews / 13 years hosting (for Apartments)",
  },
  {
    logo: "/assets/svg-logo/booking.svg",
    alt: "Booking.com",
    stats: "8.7 / Excellent / 2,013 reviews (for Suites)",
  },
];

const reviews = [
  {
    id: 1,
    rating: 4.5,
    date: "03-2026",
    title: '"Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor Sit Amet,"',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Pat Dolan",
    href: "#",
  },
  {
    id: 2,
    rating: 3.0,
    date: "03-2026",
    title: '"Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor Sit Amet,"',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Mary Anne Mistick",
    href: "#",
  },
  {
    id: 3,
    rating: 4.5,
    date: "03-2026",
    title: '"Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor Sit Amet,"',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Jackie Dunn",
    href: "#",
  },
  {
    id: 4,
    rating: 5,
    date: "03-2026",
    title: '"Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor Sit Amet,"',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "John Smith",
    href: "#",
  },
];

export default function ReviewsSec() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-[#f5f5f5] py-[50px] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Heading + Platform Logos */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>

          <div
            className="flex items-center
           gap-12"
          >
            {platforms.map((p) => (
              <div key={p.alt} className="flex flex-col  gap-3">
                <Image
                  src={p.logo}
                  alt={p.alt}
                  width={0}
                  height={0}
                  className="object-contain h-[50px] w-[120px]"
                />
                <p className="text-sm text-gray-600 max-w-[200px]">{p.stats}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_33.33%] min-w-0">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-3 mt-8">
          <button onClick={scrollPrev}>
            <Image
              src="/assets/svg-icons/pre.svg"
              alt="Previous"
              width={50}
              height={50}
            />
          </button>
          <button onClick={scrollNext}>
            <Image
              src="/assets/svg-icons/next.svg"
              alt="Next"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
