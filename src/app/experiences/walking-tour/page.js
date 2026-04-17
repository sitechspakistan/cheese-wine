import ContactInquiry from "@/app/components/sections/ContactInquiry";
import BookButton from "@/app/components/ui/BookButton";
import LightboxGallery from "@/app/components/ui/LightBoxGallery";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Free Walking Tours | Cheese & Wine",
  // description: "...",
};

const images = [
  "/assets/images/gallery/walking-tour/1.png",
  "/assets/images/gallery/walking-tour/2.png",
  "/assets/images/gallery/walking-tour/3.png",
  "/assets/images/gallery/walking-tour/4.png",
];

const walkingTour = () => {
  return (
    <>
      <section className="px-4 py-[80px]">
        <div className="py-12  max-w-7xl mx-auto min-h-screen flex flex-col ">
          <h1 className="text-4xl font-bold text-center">Free Walking Tours</h1>
          <p className="mt-10 text-base text-gray-600">
            A free walking tour in Lisbon is the ideal way to know the history
            and culture of Lisbon.
          </p>
          <p className="mt-4 text-base text-gray-600">
            The guide will put all his energy, commitment and knowledge into
            each tour. Choose a different way to discover the best of Lisbon
            with the original free walking tours and give what you want at the
            end of the visit!
          </p>
          <p className="mt-4 text-base text-gray-600">
            Join one of our recommended fantastic free walking tours and
            discover the best of Lisbon.
          </p>

          <p className="mt-5 text-base text-gray-600">
            We recommend (click on the links below for more info):
          </p>

          <ul className="list-disc list-inside mt-3 text-base text-gray-600">
            <li>
              <a
                href="https://www.takefreetours.com/lisbon-free-tour"
                className="text-blue-500 underline"
                target="_blank"
              >
                Lisbon Free Tour
              </a>
            </li>
            <li>
              <a
                href="https://www.takefreetours.com/sintra-free-tour"
                className="text-blue-500 underline"
                target="_blank"
              >
                Sintra Free Tour
              </a>
            </li>
            <li>
              <a
                href="https://www.takefreetours.com/lisbon-fado-tour"
                className="text-blue-500 underline"
                target="_blank"
              >
                Fado Free Tour
              </a>
            </li>
          </ul>

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

export default walkingTour;
