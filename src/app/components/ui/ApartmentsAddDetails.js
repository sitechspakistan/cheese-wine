import React from "react";

const ApartmentsAddDetails = () => {
  return (
    <div className="py-6">
      <p>
        Unique and exclusive bedrooms and a gorgeous breakfast. Located in the
        trendy and central Santos design district, at walking distance to the
        major sightseeing attractions and trendy places. If you want to taste
        our handmade hospitality, this is the right choice for you.
      </p>
      <div className="flex gap-8 pt-8">
        {/* Address And Contact */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-3 text-xl">
            Address And Contact
          </h3>
          <div className="text-base text-gray-700 leading-6">
            <p>Calçada Marquês Abrantes 40</p>
            <p>Lisboa</p>
            <p>PT</p>
            <p>1200-719</p>
            <p>+351 939 417 352</p>
            <a href="mailto:lisbon@cheese-wine.com" className="underline">
              lisbon@cheese-wine.com
            </a>
          </div>
        </div>

        {/* Check-In And Check-Out Policies */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-3 text-xl">
            Check-In And Check-Out Policies
          </h3>
          <ul className="text-base text-gray-700 leading-6 list-disc list-inside">
            <li>Check-in: 15:00</li>
            <li>Check-out: 11:30</li>
            <li>Late Checkout Hours: 14:00</li>
            <li>Late Checkout Fee: 50%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsAddDetails;
