"use client";
import TeamModal from "../ui/TeamModal";
import TeamCard from "../ui/TeamCard";
import { useState } from "react";
import BookButton from "../ui/BookButton";

export default function TeamSection({
  className = "",
  bookButton = false,
  heading = "Meet Our Team: Crafters Of Unforgettable Experiences",
  paragraph = `At our charming Cheese & Wine, we pride ourselves on practicing the art of Handmade Hospitality. Our dedicated team embodies
warmth, attentiveness, and a genuine passion for curating unforgettable experiences for our guests. From the moment you step
through our doors, you'll be greeted with genuine smiles and personalised attention. Each member of our team is committed to
tailoring your stay to your needs and preferences, ensuring every moment is filled with comfort and delight. Whether it's
recommending the perfect local restaurant or arranging a special excursion, our team goes above and beyond to make your stay truly
exceptional.

Welcome to our home away from home, where Handmade Hospitality is more than just a service — it's a heartfelt commitment to making your visit unforgettable!`,
  members = [
    {
      name: "Wesley Ferreira",
      location: "São Paulo - Brasil",
      image: "/assets/team/team-1.png",
      quote: `I'm a calm and understanding person who enjoys living in harmony. My favorite Portuguese dish is Cod with Cream (Bacalhau
com Natas). I haven't explored many places yet,
but Caxias beach has already won me over
with its beauty, organization, and amazing
view.`,
    },
    {
      name: "Isabel Mendonça",
      location: "Porto Santo - Madeira",
      image: "/assets/team/team-2.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Tarcísio Salles",
      location: "São Paulo - Brasil",
      image: "/assets/team/team-3.png",
      quote: "Apna quote yahan...",
    },
  ],
}) {
  const [selected, setSelected] = useState(null);

  return (
    <section className={`bg-white px-4 pb-16 ${className}`}>
      <div className="max-w-7xl mx-auto ">
        {/* Heading & Paragraph */}
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {heading}
          </h2>
          <div className="text-gray-600 text-base leading-relaxed  mx-auto space-y-4">
            {paragraph.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <TeamCard key={i} member={member} onClick={setSelected} />
          ))}
        </div>
        {bookButton && (
          <div className="flex justify-center mt-10">
            <BookButton
              label={"Meet The Whole Team"}
              href={"/about/team"}
              className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white"
              url="/assets/svg-icons/round-arrow-white.svg"
            />
          </div>
        )}
      </div>

      {/* Modal */}
      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
