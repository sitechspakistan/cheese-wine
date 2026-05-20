import HeroSub from "@/app/components/sections/Hero-2";
import TeamSection from "@/app/components/sections/TeamSec";
import React from "react";

const members = [
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
];

const teamDetail = () => {
  return (
    <>
      <HeroSub heading="Our Team" overlay="true" />
      <TeamSection members={members} className="pt-16" />
    </>
  );
};

export default teamDetail;
