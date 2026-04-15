import React from "react";
import HeroSub from "../components/sections/Hero-2";
import ConceptSec from "../components/ui/ConceptSec";
import TeamSection from "../components/sections/TeamSec";
import CoreValues from "../components/sections/CoreValues";
import Timeline from "../components/sections/TimelineSec";
import CTABanner from "../components/ui/CTABanner";

const AboutPage = () => {
  return (
    <>
      <HeroSub heading="About Us" overlay="true" />

      <ConceptSec
        imageWidth="45"
        imageHeight="540px"
        textWidth="45"
        imageSrc="/assets/images/hero-bg.jpg"
        heading="Embrace Handmade Hospitality In Lisbon"
        paragraph={
          <>
            <p className="mb-4 ">
              Welcome to Cheese & Wine, a unique and distinctive concept that
              offers a one-of-a-kind experience to explore and enjoy the vibrant
              city of Lisbon. As an independent, family-owned hospitality
              business, we strive to provide a warm and welcoming atmosphere
              where you can feel right at home and fall in love with this
              wonderful city just like we did.
            </p>
            <p className="mb-4">
              Our commitment to handmade hospitality means that we go above and
              beyond to ensure that every guest feels special and valued. From
              beautifully decorated units to stunning surroundings, we provide
              an unforgettable experience that is tailored to your needs and
              preferences.
            </p>
            <p className="mb-4">
              Our friendly and knowledgeable team is always on hand to assist
              you with any queries, recommend local attractions or hidden gems,
              or simply have a friendly chat. Our ultimate goal is for you to
              have a truly enjoyable stay, and we believe that our Handmade
              Hospitality approach is what sets us apart from the rest.
            </p>
            <p className="">
              Thank you for considering Cheese & Wine for your Lisbon adventure.
            </p>
            <p className="mb-4">
              We can't wait to welcome you to our beautiful city!
            </p>
            <p>Cheese & Wine Team</p>
          </>
        }
      />
      <CoreValues />
      <Timeline />

      <TeamSection />

      <CTABanner
        heading="Ready to experience handmade hospitality?"
        subheading="Browse our Suites & Apartments and book your Lisbon experience."
      />
    </>
  );
};

export default AboutPage;
