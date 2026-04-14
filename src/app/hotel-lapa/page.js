import React from "react";
import HeroSub from "../components/sections/Hero-2";
import ConceptSec from "../components/ui/ConceptSec";
import EmailForm from "../components/accommodation/EmailForm";

const LapaPage = () => {
  return (
    <>
      <HeroSub
        heading="Hotel LX Lapa Coming Spring 2027"
        imageUrl="/assets/images/lapa-hero.jpg"
        overlay={true}
      />

      <ConceptSec
        imageSrc="/assets/images/lapa-vision.jpg"
        heading="The Vision"
        paragraph="Hotel LX Lapa is our boldest project yet, a boutique hotel in the heart of Lapa, Lisbon. 38 beautifully designed rooms, a rooftop pool, a signature restaurant, and a bar, all crafted with the same handmade hospitality Cheese & Wine is known for. Opening Spring 2027."
        buttonLabel="STAY INFORMED"
        buttonHref="#stay-informed"
        watchLabel=""
        imageHeight="500px"
        imageWidth="45"
        textWidth="55"
      />
      {/* Amenities */}
      <div className="bg-gray-200 py-[80px]">
        <div className="max-w-7xl mx-auto px-10 ">
          <h2 className="text-3xl font-semibold mb-8 text-center">Amenities</h2>
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { icon: "🛏️", label: "38 Rooms" },
              { icon: "🍽️", label: "Restaurant" },
              { icon: "🍷", label: "Bar" },
              { icon: "🏊", label: "Pool" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-gray-300 py-10 flex flex-col items-center gap-3"
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="text-[#1e2d4a] font-semibold text-lg uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Construction Progress */}

      <div className="max-w-7xl mx-auto px-10 py-[80px] ">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Construction Progress
        </h2>
        <div className="flex flex-col gap-6">
          {[
            { label: "Planning & Permits", percent: 100 },
            { label: "Foundation & Structure", percent: 65 },
            { label: "Interior & Finishing", percent: 10 },
            { label: "Landscaping & Pool", percent: 5 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{item.label}</span>
                <span className="text-gray-500 text-sm">{item.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className="bg-[#1e2d4a] h-2"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <EmailForm />
    </>
  );
};

export default LapaPage;
