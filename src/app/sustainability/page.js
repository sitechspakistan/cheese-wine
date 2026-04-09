import React from "react";
import HeroSub from "../components/sections/Hero-2";
import ConceptSec from "../components/ui/ConceptSec";

const SustainabilityPage = () => {
  return (
    <>
      <HeroSub heading="Sustainability" />

      <ConceptSec
        imageSrc="public/assets/images/sustainability.svg"
        imageHeight="400px"
        imageWidth="50"
        heading="Sustainability"
        paragraph={
          <ul>
            <li className="mb-4">
              Car-free tourism (public transport, walking, cycling)
            </li>
            <li className="mb-4">
              Digital guest registration (paperless operations)
            </li>
            <li className="mb-4">
              Towel & sheet reuse program + Green-certified laundry partner
            </li>
            <li className="mb-4">
              Glass water bottles (refillable, no single-use plastic)
            </li>
            <li className="mb-4">
              No disposable plastic packaging (no individual butter/jam plastic,
              cloth napkins)
            </li>
            <li className="mb-4">
              Fresh-ground coffee (no Nespresso capsules)
            </li>
            <li className="mb-4">
              Local sourcing from neighbourhood suppliers{" "}
            </li>
            <li className="mb-4">
              All breakfast products baked and made in-house
            </li>
            <li className="mb-4">
              Partnership with Balague Wines (sustainable Douro viticulture)
            </li>
          </ul>
        }
      />
    </>
  );
};

export default SustainabilityPage;
