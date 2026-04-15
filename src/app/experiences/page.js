"use client";
import React, { useState } from "react";
import HeroSub from "../components/sections/Hero-2";
import ContactInquiry from "../components/sections/ContactInquiry";
import ExperienceCard from "../components/ui/ExperienceCard";
import ExperienceFilter from "../components/experiences/ExperiencesFilter";

const experiences = [
  {
    id: 1,
    imageSrc: "/assets/images/experiences/image1.png",
    category: "Food & Wine",
    title: "Unique Experiences",
    description: "With our thoroughly curated partners we aim to provide. ",
    buttonText: "Discover",
    buttonLink: "/#",
    complimentary: false,
    price: "€50",
    rating: "4.8",
    ratingSource: "TripAdvisor",
  },
  {
    id: 2,
    imageSrc: "/assets/images/experiences/image2.png",
    category: "Culture & History",
    title: "Explore Lisbon",
    description: "Welcome to our Lisbon Guides! Immerse yourself in Lisbon's.",
    buttonText: "Discover",
    buttonLink: "/#",
    complimentary: true,
    price: "complimentary",
  },
  {
    id: 3,
    imageSrc: "/assets/images/experiences/image3.jpg",
    category: "Culture & History",
    title: "Lisbon Sailing Experience",
    description:
      "Enjoy a fantastic and unforgettable sailing experience in Lisbon.",
    buttonText: "Discover",
    buttonLink: "/#",
  },
  {
    id: 4,
    imageSrc: "/assets/images/experiences/image4.png",
    category: "Active & Outdoor",
    title: "Free Walking Tours",
    description:
      "A free walking tour in Lisbon is the ideal way to know the history and.",
    buttonText: "Discover",
    buttonLink: "/#",
  },
  {
    id: 5,
    imageSrc: "/assets/images/experiences/image5.png",
    category: "Transport & Logistics",
    title: "Airport Transportation",
    description: "Experience seamless and stress-free travel with our premium.",
    buttonText: "Discover",
    buttonLink: "/#",
  },
];

const ExperiencesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = experiences.filter((exp) =>
    activeFilter === "All" ? true : exp.category === activeFilter,
  );

  return (
    <>
      <HeroSub heading="Experiences" overlay="true" />

      <ExperienceFilter onFilter={setActiveFilter} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        {filtered.map((exp) => (
          <ExperienceCard
            key={exp.id}
            imageSrc={exp.imageSrc}
            category={exp.category}
            title={exp.title}
            description={exp.description}
            buttonText={exp.buttonText}
            buttonLink={exp.buttonLink}
            isComplimentary={exp.complimentary}
            price={exp.price}
            rating={exp.rating}
            ratingSource={exp.ratingSource}
          />
        ))}
      </div>

      <ContactInquiry />
    </>
  );
};

export default ExperiencesPage;
