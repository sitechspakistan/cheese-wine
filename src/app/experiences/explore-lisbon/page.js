import ContactInquiry from "@/app/components/sections/ContactInquiry";
import BookButton from "@/app/components/ui/BookButton";
import GuideLinks from "@/app/components/ui/GuideLinks";
import LightboxGallery from "@/app/components/ui/LightBoxGallery";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Explore Lisbon | Cheese & Wine",
  // description: "...",
};
const images = [
  "/assets/images/gallery/1.jpg",
  "/assets/images/gallery/2.jpg",
  "/assets/images/gallery/3.jpg",
  "/assets/images/gallery/4.jpg",
];

const ExploreLisbon = () => {
  return (
    <>
      <section className="px-4 py-[80px]">
        <div className="py-12  max-w-7xl mx-auto min-h-screen flex flex-col ">
          <h1 className="text-4xl font-bold text-center">
            Explore Lisbon: Ultimate Travel Guides by Cheese & Wine
          </h1>
          <p className="mt-10 text-base text-gray-600">
            Welcome to our Lisbon Guides! Immerse yourself in Lisbon’s hidden
            gems, cultural treasures, and unforgettable experiences. Enhance
            your journey with our exclusive Cheese & Wine map, crafted just for
            you, to effortlessly navigate through our thoughtfully curated
            itineraries.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Discover our detailed itineraries and start your unforgettable
            journey.
          </p>
          <p className=" text-base text-gray-600">
            Click one of the buttons below to begin exploring!
          </p>
          <LightboxGallery images={images} />

          <GuideLinks />
          <BookButton
            label={"Book Now"}
            href="/book-now"
            className="mx-auto bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 w-fit mt-6"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
        <ContactInquiry />
      </section>
    </>
  );
};

export default ExploreLisbon;
