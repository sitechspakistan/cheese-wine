import React from "react";
import HeroSub from "../components/sections/Hero-2";
import ConceptSec from "../components/ui/ConceptSec";
import GuideLinks from "../components/ui/GuideLinks";
import Link from "next/link";
import ContactInquiry from "../components/sections/ContactInquiry";
import BlogCard from "../components/ui/BlogCard";
import ExperienceCard from "../components/ui/ExperienceCard";

const ExperiencesPage = () => {
  const experiences = [
    {
      id: 1,
      imageSrc: "/assets/images/experiences/image1.png",
      category: "Food & Wine",
      title: "Unique Experiences",
      description: "With our thoroughly curated partners we aim to provide. ",
      buttonText: "Enquire Now",
      buttonLink: "/#",
    },
    {
      id: 2,
      imageSrc: "/assets/images/experiences/image2.png",
      category: "Culture & History",
      title: "Explore Lisbon",
      description:
        "Welcome to our Lisbon Guides! Immerse yourself in Lisbon's.",
      buttonText: "Enquire Now",
      buttonLink: "/#",
    },
    {
      id: 3,
      imageSrc: "/assets/images/experiences/image3.jpg",
      category: "Culture & History",
      title: "Lisbon Sailing Experience",
      description:
        "Enjoy a fantastic and unforgettable sailing experience in Lisbon.",
      buttonText: "Book Now",
      buttonLink: "/#",
    },
    {
      id: 4,
      imageSrc: "/assets/images/experiences/image4.png",
      category: "Active & Outdoor",
      title: "Free Walking Tours",
      description:
        "A free walking tour in Lisbon is the ideal way to know the history and.",
      buttonText: "Enquire Now",
      buttonLink: "/#",
    },
    {
      id: 5,
      imageSrc: "/assets/images/experiences/image5.png",
      category: "Transport & Logistics",
      title: "Airport Transportation",
      description:
        "Experience seamless and stress-free travel with our premium.",
      buttonText: "Book Now",
      buttonLink: "/#",
    },
  ];
  return (
    <>
      <HeroSub heading="Experiences" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12 ">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            imageSrc={exp.imageSrc}
            category={exp.category}
            title={exp.title}
            description={exp.description}
            buttonText={exp.buttonText}
            buttonLink={exp.buttonLink}
          />
        ))}
      </div>

      {/* <ConceptSec
        imageWidth="50"
        imageHeight="450px"
        textWidth="55"
        imageSrc="/assets/images/experiences/image1.png"
        heading=""
        paragraph={
          <>
            <p className="mb-4 ">
              With our thoroughly curated partners we aim to provide you the
              best time in Lisbon with memorable and unforgettable experiences.
              A yoga class, a sailing trip, a wine tour or simply booking our
              private and premium transportation to/from the airport.
            </p>
            <p>
              If you are short of time and want to explore Lisbon, or if you
              simply would like to know what to do and where to go, or just
              relax and experience the Lisbon pace and way of living, just let
              us know. We aim to give a full, enriching and memorable experience
              in Lisbon, but there is plenty more to discover outside of the
              city. Explore the amazing Sintra and Cascais areas, the peaceful
              and quiet Alentejo region, or the West Coast going north. Just
              tell us your plans, wishes and desires and we would be delighted
              to give you our suggestions.
            </p>
          </>
        }
      /> */}
      {/* <ConceptSec
        reverse="true"
        imageWidth="50"
        imageHeight="470px"
        textWidth="50"
        imageSrc="/assets/images/experiences/image2.png"
        heading="Explore Lisbon: Ultimate Travel
Guides By Cheese & Wine"
        paragraph={
          <>
            <p className="mb-4 ">
              Welcome to our Lisbon Guides! Immerse yourself in Lisbon's hidden
              gems, cultural treasures, and unforgettable experiences. Enhance
              your journey with our exclusive Cheese & Wine map, crafted just
              for you, to effortlessly navigate through our thoughtfully curated
              itineraries.
            </p>
            <p>
              Discover our detailed itineraries and start your unforgettable
              journey.
            </p>
            <p className="mb-4">
              Click one of the buttons below to begin exploring!
            </p>
            <GuideLinks />
          </>
        }
      /> */}
      {/* <ConceptSec
        imageWidth="50"
        imageHeight="470px"
        textWidth="50"
        buttonLabel="Book Now"
        imageSrc="/assets/images/experiences/image3.jpg"
        heading="Lisbon Sailing Experience"
        paragraph={
          <>
            <p className="mb-4 ">
              Enjoy a fantastic and unforgettable sailing experience in Lisbon,
              passing by historical monuments, relaxing with a drink and, if you
              want, participating in the maneuvers of the boat. You will
              exchange knowledge with the skipper, in a pleasant, familiar and
              non commercial environment.
            </p>
            <p className="mb-4">
              Depending on the wind, it will be a more relaxing or a more sporty
              experience but always unforgettable, taking safety and comfort as
              our top priorities.
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                1 Hour Tour: Departure at 11H00 | 25€ per person.
              </li>
              <li className="mb-2">
                2 Hours Tour: Departure at 15H00 | 38€ per person.
              </li>
              <li className="mb-2">
                Sunset / Night Tour: 2 hours | 45€ per person.
              </li>
              <li className="mb-2">
                Private Tour: 2 hours | 250€ in total up to 10PAX.
              </li>
            </ul>
          </>
        }
      /> */}
      {/* <ConceptSec
        reverse="true"
        imageWidth="50"
        imageHeight="470px"
        textWidth="50"
        imageSrc="/assets/images/experiences/image4.png"
        heading="Free Walking Tours"
        paragraph={
          <>
            <p className="mb-4 ">
              A free walking tour in Lisbon is the ideal way to know the history
              and culture of Lisbon.
            </p>
            <p className="mb-4">
              The guide will put all his energy, commitment and knowledge into
              each tour. Choose a different way to discover the best of Lisbon
              with the original free walking tours and give what you want at the
              end of the visit!
            </p>
            <p className="mb-4">
              Join one of our recommended fantastic free walking tours and
              discover the best of Lisbon.
            </p>
            <p className="mb-4">
              We recommend (click on the links below for more info):
            </p>
            <ul className="list-disc list-inside underline ">
              <li className="mb-2">
                <Link href="/#">Lisbon Free Tour</Link>
              </li>
              <li className="mb-2">
                <Link href="/#">Sintra Free Tour</Link>
              </li>
              <li className="mb-2">
                <Link href="/#">Fado Free Tour</Link>
              </li>
            </ul>
          </>
        }
      /> */}
      {/* <ConceptSec
        imageWidth="50"
        imageHeight="470px"
        textWidth="50"
        buttonLabel="Book Now"
        imageSrc="/assets/images/experiences/image5.png"
        heading="Airport Transportation"
        paragraph={
          <>
            <p className="mb-4 ">
              Experience seamless and stress-free travel with our premium
              airport transportation and transfer services!
            </p>
            <p className="mb-4">
              From the moment you touch down to your final destination, our
              professional chauffeurs will ensure your comfort and convenience.
              This service offers a blend of elegance and sophistication,
              promising a comfortable ride for individuals, families, or groups.
            </p>
            <p>
              Enjoy the convenience of timely pickups and drop-offs, allowing
              you to focus on what matters most - your Lisbon travel experience.
            </p>
          </>
        }
      /> */}
      <ContactInquiry />
    </>
  );
};

export default ExperiencesPage;
