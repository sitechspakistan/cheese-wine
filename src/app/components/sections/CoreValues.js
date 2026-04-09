import Link from "next/link";
import React from "react";

const values = [
  { icon: "🛏️", label: "Handmade Hospitality" },
  { icon: "🍽️", label: "Local & Authentic" },
  { icon: "🍷", label: "Personal Connection" },
  { icon: "🏊", label: "Curated Experiences" },
  { icon: "🌱", label: "Sustainability", href: "/sustainability" },
];

const CoreValues = () => {
  return (
    <div className="max-w-7xl mx-auto pb-[80px]">
      <h2 className="text-3xl font-semibold mb-8 text-center">Core Values</h2>
      <div className="grid grid-cols-5 gap-6 text-center ">
        {values.map((item) => (
          <div
            key={item.label}
            className="border border-gray-300 rounded-md
 p-8 flex flex-col items-center gap-3 "
          >
            <span className="text-4xl">{item.icon}</span>
            <p className="text-[#1e2d4a] font-semibold text-base uppercase tracking-wide">
              {item.label}
            </p>
            {item.href && (
              <Link
                href={item.href}
                className="text-xs text-gray-500 underline underline-offset-2 hover:text-[#1e2d4a] mt-1"
              >
                Read More
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
