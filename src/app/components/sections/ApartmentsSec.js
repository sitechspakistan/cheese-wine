import React from "react";
import ApartmentsImg from "../ui/ApartmentsImg";
import ApartmentsAddDetails from "../ui/ApartmentsAddDetails";
import CancellationPolicies from "../ui/CancellationPolicies";
import TermsCondition from "../ui/TermsCondition";

import BookingBarVer from "../ui/BookingBarVer";
import AmenitiesBar from "../ui/AmenitiesBar";

const ApartmentsSec = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex gap-8">
        {/* LEFT — 70% */}
        <div className="w-[100%]">
          <ApartmentsImg />

          <ApartmentsAddDetails />
          <CancellationPolicies />
          <TermsCondition />
        </div>

        <div className="w-[30%] flex flex-col gap-6">
          <BookingBarVer />
          <AmenitiesBar />
        </div>
      </div>
    </section>
  );
};

export default ApartmentsSec;
