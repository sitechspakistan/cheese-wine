// components/experiences/ExperienceFilter.jsx
"use client";
import { useState } from "react";

const filters = [
  "All",
  "Food & Wine",
  "Culture & History",
  "Active & Outdoor",
  "Transport & Logistics",
];

export default function ExperienceFilter({ onFilter }) {
  const [active, setActive] = useState("All");

  return (
    <div className="max-w-7xl mx-auto px-10 py-10 flex gap-3 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            setActive(filter);
            onFilter(filter);
          }}
          className={`px-5 py-2 text-sm uppercase tracking-wide transition-colors 
            ${
              active === filter
                ? "bg-[#1e2d4a] text-white"
                : "border border-gray-300 text-gray-600 hover:border-[#1e2d4a] hover:text-[#1e2d4a]"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
