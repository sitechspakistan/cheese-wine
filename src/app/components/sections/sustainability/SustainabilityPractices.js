import React from "react";

const categories = [
  {
    title: "Zero waste",
    colorClass: "bg-green-50",
    iconColor: "#3B6D11",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
    items: [
      "Glass water bottles — no single-use plastic",
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
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    items: [
      "All breakfast products baked in-house",
      "Neighbourhood suppliers for fresh ingredients",
      "Balague Wines — sustainable Douro viticulture",
    ],
  },
  {
    title: "Energy & transport",
    colorClass: "bg-amber-50",
    iconColor: "#854F0B",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    items: [
      "Car-free tourism — public transport, cycling, walking",
      "Towel & sheet reuse programme",
      "Green-certified laundry partner",
    ],
  },
];

const SustainabilityPractices = () => {
  return (
    <section className=" py-16 px-6  bg-gray-100">
      <p className="text-xs font-medium tracking-widest text-gray-300 uppercase text-center mb-10">
        Our practices
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-gray-50 rounded-xl border border-gray-100 p-6"
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${cat.colorClass}`}
              style={{ color: cat.iconColor }}
            >
              {cat.icon}
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              {cat.title}
            </h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-500 flex items-start gap-2 border-b border-gray-100 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-gray-300 mt-0.5 shrink-0">—</span>
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
