import ContactInquiry from "@/app/components/sections/ContactInquiry";
import BookButton from "@/app/components/ui/BookButton";
import GuideLinks from "@/app/components/ui/GuideLinks";
import Image from "next/image";
import React from "react";

const ExploreLisbon = () => {
  return (
    <>
      <section className="px-4 py-[80px]">
        <div className="pt-12  max-w-7xl mx-auto min-h-screen flex flex-col ">
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

          <div className="grid grid-cols-4 gap-4 mt-10">
            {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((src, index) => (
              <div key={index} className="relative h-[300px] w-full">
                <Image
                  src={`/assets/images/gallery/${src}`}
                  alt={`gallery-${index}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <GuideLinks />
          <BookButton
            label={"Book Now"}
            href="/book-now"
            className="mx-auto bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 w-fit mt-6"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
        <div className="mt-10">
          <ContactInquiry />
        </div>
      </section>
    </>
  );
};

export default ExploreLisbon;
