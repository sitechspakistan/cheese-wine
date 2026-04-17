import ContactInquiry from "@/app/components/sections/ContactInquiry";
import BookButton from "@/app/components/ui/BookButton";
import LightboxGallery from "@/app/components/ui/LightBoxGallery";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Unique Experience | Cheese & Wine",
  // description: "...",
};

const images = [
  "/assets/images/gallery/1.jpg",
  "/assets/images/gallery/2.jpg",
  "/assets/images/gallery/3.jpg",
  "/assets/images/gallery/4.jpg",
];
const uniqueExperience = () => {
  return (
    <>
      <section className="px-4 py-[80px]">
        <div className="py-12  max-w-7xl mx-auto min-h-screen flex flex-col ">
          <h1 className="text-4xl font-bold text-center">
            Unique Experience: Unforgettable Moments with Cheese & Wine in
            Lisbon
          </h1>
          <p className="mt-10 text-base text-gray-600">
            With our thoroughly curated partners we aim to provide you the best
            time in Lisbon with memorable and unforgettable experiences. A yoga
            class, a sailing trip, a wine tour or simply booking our private and
            premium transportation to/from the airport.
          </p>
          <p className="mt-4 text-base text-gray-600">
            If you are short of time and want to explore Lisbon, or if you
            simply would like to know what to do and where to go, or just relax
            and experience the Lisbon pace and way of living, just let us know.
            We aim to give a full, enriching and memorable experience in Lisbon,
            but there is plenty more to discover outside of the city. Explore
            the amazing Sintra and Cascais areas, the peaceful and quiet
            Alentejo region, or the West Coast going north. Just tell us your
            plans, wishes and desires and we would be delighted to give you our
            suggestions.
          </p>
          {/* <p className=" text-base text-gray-600">
            Click one of the buttons below to begin exploring!
          </p> */}
          <LightboxGallery images={images} />

          <BookButton
            label={"Book Now"}
            href="/book-now"
            className="mx-auto bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 w-fit mt-10"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
        <ContactInquiry />
      </section>
    </>
  );
};

export default uniqueExperience;
