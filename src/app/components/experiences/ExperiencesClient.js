"use client";
import React, { useState } from "react";
import ExperienceFilter from "./ExperiencesFilter";
import ExperienceCard from "../ui/ExperienceCard";

const ExperiencesClient = ({ experiences }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = experiences.filter((exp) =>
    activeFilter === "All" ? true : exp.category === activeFilter,
  );

  return (
    <>
      <ExperienceFilter onFilter={setActiveFilter} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        {filtered.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </>
  );
};

export default ExperiencesClient;
