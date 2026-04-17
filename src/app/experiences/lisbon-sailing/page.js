import ContactInquiry from "@/app/components/sections/ContactInquiry";
import BookButton from "@/app/components/ui/BookButton";
import LightboxGallery from "@/app/components/ui/LightBoxGallery";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Lisbon Sailing | Cheese & Wine",
  // description: "...",
};
const images = [
  "/assets/images/gallery/sailing/1.jpg",
  "/assets/images/gallery/sailing/2.jpg",
  "/assets/images/gallery/sailing/3.jpg",
  "/assets/images/gallery/sailing/4.jpg",
];

const lisbonSailing = () => {
  return (
    <>
      <section className="px-4 my-[80px]">
        <div className="py-12  max-w-7xl mx-auto min-h-screen flex flex-col ">
          <h1 className="text-4xl font-bold text-center">
            Lisbon Sailing Experience
          </h1>
          <p className="mt-10 text-base text-gray-600">
            Enjoy a fantastic and unforgettable sailing experience in Lisbon,
            passing by historical monuments, relaxing with a drink and, if you
            want, participating in the maneuvers of the boat. You will exchange
            knowledge with the skipper, in a pleasant, familiar and non
            commercial environment.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Depending on the wind, it will be a more relaxing or a more sporty
            experience but always unforgettable, taking safety and comfort as
            our top priorities.
          </p>
          {/* <p className=" text-base text-gray-600">
            Click one of the buttons below to begin exploring!
          </p> */}
          <ul className="list-disc list-inside mt-3 text-base text-gray-600">
            <li>
              <span className="font-bold">1 Hour Tour:</span> Departure at 11H00
              | 25€ per person.
            </li>
            <li>
              <span className="font-bold">2 Hours Tour:</span> Departure at
              15H00 | 38€ per person.
            </li>
            <li>
              <span className="font-bold">Sunset / Night Tour:</span> 2 hours |
              45€ per person.
            </li>
            <li>
              <span className="font-bold">Private Tour:</span> 2 hours | 250€ in
              total up to 10PAX.
            </li>
          </ul>

          <LightboxGallery images={images} />

          {/* <div className="grid grid-cols-4 gap-4 mt-10">
            {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((src, index) => (
              <div key={index} className="relative h-[300px] w-full">
                <Image
                  src={`/assets/images/gallery/sailing/${src}`}
                  alt={`gallery-${index}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div> */}

          <BookButton
            label={"Book Now"}
            href="/book-now"
            className="mx-auto bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90  w-fit mt-10"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
        <ContactInquiry />
      </section>
    </>
  );
};

export default lisbonSailing;
