import ContactInquiry from "@/app/components/sections/ContactInquiry";
import BookButton from "@/app/components/ui/BookButton";
import LightboxGallery from "@/app/components/ui/LightBoxGallery";
import React from "react";
export const metadata = {
  title: "Airport Transportation | Cheese & Wine",
  // description: "...",
};

const images = [
  "/assets/images/gallery/transport/1.png",
  "/assets/images/gallery/transport/2.jpg",
  "/assets/images/gallery/transport/3.jpg",
  "/assets/images/gallery/transport/4.jpg",
];

const airportTransportation = () => {
  return (
    <>
      <section className="px-4 py-[80px]">
        <div className="py-12  max-w-7xl mx-auto min-h-screen flex flex-col ">
          <h1 className="text-4xl font-bold text-center">
            Airport Transportation
          </h1>
          <p className="mt-10 text-base text-gray-600">
            Experience seamless and stress-free travel with our premium airport
            transportation and transfer services!
          </p>
          <p className="mt-4 text-base text-gray-600">
            From the moment you touch down to your final destination, our
            professional chauffeurs will ensure your comfort and convenience.
            This service offers a blend of elegance and sophistication,
            promising a comfortable ride for individuals, families, or groups.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Enjoy the convenience of timely pickups and drop-offs, allowing you
            to focus on what matters most - your Lisbon travel experience.
          </p>
          <LightboxGallery images={images} columns={4} height={300} />

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

export default airportTransportation;
