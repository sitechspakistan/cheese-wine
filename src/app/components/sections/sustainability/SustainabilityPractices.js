import Image from "next/image";
import React from "react";

const categories = [
  {
    title: "Zero waste",
    colorClass: "bg-green-50",
    iconColor: "#3B6D11",
    icon: (
      <Image
        src="/assets/images/sustainability/circle-check.svg"
        alt="Zero waste icon"
        width={32}
        height={32}
      />
    ),
    items: [
      "Glass water bottles - no single-use plastic",
      "No disposable packaging (cloth napkins, bulk condiments)",
      "Fresh-ground coffee, no Nespresso capsules",
      "Digital guest registration (paperless operations)",
    ],
  },
  {
    title: "Local sourcing",
    colorClass: "bg-teal-50",
    iconColor: "#0F6E56",
    icon: (
      <Image
        src="/assets/images/sustainability/home.svg"
        alt="Local sourcing icon"
        width={32}
        height={32}
      />
    ),
    items: [
      "All breakfast products baked in-house",
      "Neighbourhood suppliers for fresh ingredients",
      "Balague Wines - sustainable Douro viticulture",
    ],
  },
  {
    title: "Energy & transport",
    colorClass: "bg-amber-50",
    iconColor: "#854F0B",
    icon: (
      <Image
        src="/assets/images/sustainability/energy.svg"
        alt="Energy & transport icon"
        width={32}
        height={32}
      />
    ),
    items: [
      "Car-free tourism - public transport, cycling, walking",
      "Towel & sheet reuse programme",
      "Green-certified laundry partner",
    ],
  },
];

const SustainabilityPractices = () => {
  return (
    <section className=" py-16 px-6  bg-gray-100">
      <h2 className="text-3xl font-semibold mb-8 text-center uppercase ">
        Our practices
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-gray-50 rounded-xl border border-gray-100 p-6"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${cat.colorClass}`}
              style={{ color: cat.iconColor }}
            >
              {cat.icon}
            </div>
            <h3 className="text-lg text-gray-900 mb-3">{cat.title}</h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-base text-gray-500 flex items-baseline gap-2 border-b border-gray-100 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-gray-300 shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainabilityPractices;
