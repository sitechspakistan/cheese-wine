const milestones = [
  {
    year: "2014",
    milestone:
      "Filipa & Sergio Found Home Delight. First 5 Apartments Welcome Guests In Lisbon",
  },
  {
    year: "2016",
    milestone: "Cheese & Wine Suites Opens In Santos With 9 Rooms",
  },
  { year: "2018", milestone: "Suites Expands To 22 Rooms" },
  { year: "2019", milestone: "The Lapa Hotel Project Is Approved" },
  {
    year: "2020-21",
    milestone:
      "COVID-19 Hits. The Team Endures, Protects The Business, And Plans The Comeback",
  },
  {
    year: "2022",
    milestone: "Cheese & Wine Lapa Opens With 10 Rooms. Recovery Accelerates",
  },
  {
    year: "2023",
    milestone:
      "Lapa Expands To 23 Rooms. Portfolio Grows To 58 Units Across Lisbon",
  },
  { year: "2024", milestone: "Record Year. 60 Units Operational" },
  {
    year: "2025",
    milestone:
      "68 Units Across 3 Properties. Suites Renovation Completed With 6 New Rooms",
  },
  {
    year: "2026",
    milestone:
      "New Website. Hotel Lx Lapa Construction Begins - 38-Room Boutique Hotel",
  },
  { year: "2027", milestone: "Hotel Lx Lapa Opens Its Doors" },
];

export default function Timeline() {
  return (
    <div className="max-w-7xl mx-auto pb-[80px]">
      {/* Header Row */}
      <div className="grid grid-cols-[300px_1fr] bg-black text-white">
        <div className="px-8 py-5">
          <p className="text-[24px] font-bold">Year</p>
        </div>
        <div className="px-8 py-5 border-l border-gray-700">
          <p className="text-[24px] font-bold">Milestone</p>
        </div>
      </div>

      {/* Rows */}
      {milestones.map((item, index) => (
        <div
          key={item.year}
          className={`grid grid-cols-[300px_1fr] items-center ${
            index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <div className="px-8 py-4">
            <p className="text-[24px] font-bold text-black">{item.year}</p>
          </div>
          <div className="px-8 py-4 border-l border-gray-300">
            <p className="text-[18px] text-gray-800 ">{item.milestone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
