"use client";
import TeamModal from "../ui/TeamModal";
import TeamCard from "../ui/TeamCard";
import { useState } from "react";

export default function TeamSection({
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
    {
      name: "Iris Soares",
      location: "Luanda - Angola",
      image: "/assets/team/team-4.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Leonardo Silva",
      location: "Santa Catarina - Brasil",
      image: "/assets/team/team-5.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Maria Soares",
      location: "Minas Gerais - Brasil",
      image: "/assets/team/team-6.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Jamuna Bhattarai",
      location: "Pokhara - Nepal",
      image: "/assets/team/team-7.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Isabel Fernando",
      location: "Luanda - Angola",
      image: "/assets/team/team-8.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Rafaela Furtado",
      location: "Lisboa - Portugal",
      image: "/assets/team/team-9.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Hugo Fabian",
      location: "La Pampa - Argentina",
      image: "/assets/team/team-10.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Debabrata Khatua",
      location: "Kolkata - Índia",
      image: "/assets/team/team-11.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Alcidia Maria",
      location: "Santo Antão - Cabo Verde",
      image: "/assets/team/team-12.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Bruna Letícia Araújo",
      location: "",
      image: "/assets/team/team-13.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Silene Silva",
      location: "Ilha de Santo Antão - Cabo Verde",
      image: "/assets/team/team-14.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Paula Moreira",
      location: "Lisboa - Portugal",
      image: "/assets/team/team-15.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Joana da Graça",
      location: "Ilha de São Vicente - Cabo Verde",
      image: "/assets/team/team-16.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Sérgio Pinheiro",
      location: "Covilhã - Portugal",
      image: "/assets/team/team-17.png",
      quote: "Apna quote yahan...",
    },
    {
      name: "Filipa Cândido Pinheiro",
      location: "",
      image: "/assets/team/team-18.png",
      quote: "Apna quote yahan...",
    },
  ],
}) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white px-4 pb-[80px]">
      <div className="max-w-7xl mx-auto">
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
      </div>

      {/* Modal */}
      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
