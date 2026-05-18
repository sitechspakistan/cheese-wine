import React from "react";

const CancellationPolicies = () => {
  return (
    <div className="py-8 ">
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Property And Cancellation Policies
      </h2>

      {/* Free Cancellation Policy */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 mb-2">
          *Free Cancellation Policy
        </h3>
        <ul className="text-sm text-gray-700 leading-5">
          {[
            "Guests may cancel free of charge up to 5 days before the scheduled arrival date and check-in time.",
            "A deposit equivalent to the 1st night's stay will be charged at the time of booking. This deposit is refundable if cancellation occurs at least 5 days prior to the arrival date and time.",
            "If cancellation is made less than 5 days of arrival, the total price of the reservation will be charged.",
            "No-shows will also incur a charge for the total price of the reservation.",
            "This rate includes VAT but excludes a city tax of €4 per person per night (applicable to guests aged 13 and older, for a maximum of 7 nights per stay).",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 justify-start items-baseline">
              <span className=" text-gray-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Non-Refundable Rate Policy */}
      <div>
        <h3 className="font-bold text-gray-900 mb-2">
          **Non-Refundable Rate Policy
        </h3>
        <ul className="text-sm text-gray-700 leading-5 ">
          {[
            "This rate offers the lowest available price in exchange for full prepayment at the time of booking.",
            "No changes or cancellations are allowed, and the payment is non-refundable.",
            "This rate includes VAT but excludes a city tax of €4 per person per night (applicable to guests aged 13 and older, for a maximum of 7 nights per stay).",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 justify-start items-baseline">
              <span className="mt-1 text-gray-400 ">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CancellationPolicies;
