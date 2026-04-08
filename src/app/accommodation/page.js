import React from "react";
import HeroSub from "../components/sections/Hero-2";
import AccommodationSec from "../components/sections/Accomodation";

const Accommodation = () => {
  const accommodations = [
    {
      id: 1,
      imageSrc: "/assets/images/suites.jpg",
      title: "Suites",
      description:
        "Unique and exclusive bedrooms and a gorgeous breakfast. Located in the trendy and central Santos design district, at walking distance to the major sightseeing attractions and trendy places...",
      href: "/#",
    },
    {
      id: 2,
      imageSrc: "/assets/images/apartments.jpg",
      title: "Apartments",
      description:
        "Comfortable and beautifully decorated properties. Located in the most incredible places, most of them with breathtaking views, or simply the best location you can have in Lisbon's historic city center...",
      href: "/#",
    },
  ];
  return (
    <>
      <HeroSub heading="Accommodation" />
      <AccommodationSec detailed={true} />
      {/* <section className="py-[80px] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodations.map((item) => (
              <AccommodationCard
                key={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                paragraph={item.description}
                href={item.href}
                buttonLabel="BOOK NOW"
                showRoomTypes={true}
                showReviews={true}
                roomTypes={[
                  { name: "Classic Suite", capacity: 2, price: "€185" },
                  { name: "Superior Suite", capacity: 2, price: "€225" },
                  { name: "Deluxe Suite", capacity: 3, price: "€275" },
                ]}
                rating="9.4"
                reviewCount={128}
              />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Accommodation;
