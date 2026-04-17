import React from "react";
import HeroSub from "../components/sections/Hero-2";
import ConceptSec from "../components/ui/ConceptSec";
import SustainabilityIntro from "../components/sections/sustainability/SustainabilityIntro";
import SustainabilityImgSec from "../components/sections/sustainability/SustainabilityImgSec";
import SustainabilityPractices from "../components/sections/sustainability/SustainabilityPractices";
import CTABanner from "../components/ui/CTABanner";

export const metadata = {
  title: "Sustainability | Cheese & Wine",
  // description: "...",
};

const SustainabilityPage = () => {
  return (
    <>
      <HeroSub heading="Sustainability" overlay="true" />
      <SustainabilityIntro />
      <SustainabilityImgSec />
      <SustainabilityPractices />
      <CTABanner
        heading="Curious about how we operate?"
        subheading="Learn more about our story and the spaces we've created with care."
        buttonHref="/about"
        buttonLabel="About us"
      />
      {/* <ConceptSec
        imageSrc="/assets/images/sustainability.png"
        // imageHeight="400px"
        // imageWidth="50"
        heading="Sustainability"
        paragraph={
          <ul className="list-disc list-inside text-gray-500 text-base">
            <li className="mb-4">
              Car-free tourism (public transport, walking, cycling)
            </li>
            <li className="mb-4">
              Digital guest registration (paperless operations)
            </li>
            <li className="mb-4 ">
              Towel & sheet reuse program + Green-certified laundry partner
            </li>
            <li className="mb-4 ">
              Glass water bottles (refillable, no single-use plastic)
            </li>
            <li className="mb-4 ">
              No disposable plastic packaging (no individual butter/jam plastic,
              cloth napkins)
            </li>
            <li className="mb-4 ">
              Fresh-ground coffee (no Nespresso capsules)
            </li>
            <li className="mb-4 ">
              Local sourcing from neighbourhood suppliers{" "}
            </li>
            <li className="mb-4 ">
              All breakfast products baked and made in-house
            </li>
            <li className="mb-4 ">
              Partnership with Balague Wines (sustainable Douro viticulture)
            </li>
          </ul>
        }
      /> */}
    </>
  );
};

export default SustainabilityPage;
