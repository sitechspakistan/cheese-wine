import AccommodationCard from "../ui/AccomodationCard";

// const accommodations = [
//   {
//     id: 1,
//     imageSrc: "/assets/images/suites.jpg",
//     title: "Suites",
//     description:
//       "Unique and exclusive bedrooms and a gorgeous breakfast. Located in the trendy and central Santos design district, at walking distance to the major sightseeing attractions and trendy places...",
//     href: "/#",
//   },
//   {
//     id: 2,
//     imageSrc: "/assets/images/apartments.jpg",
//     title: "Apartments",
//     description:
//       "Comfortable and beautifully decorated properties. Located in the most incredible places, most of them with breathtaking views, or simply the best location you can have in Lisbon's historic city center...",
//     href: "/#",
//   },
// ];
const accommodations = [
  {
    id: 1,
    imageSrc: "/assets/images/suites.jpg",
    title: "Suites",
    description:
      "Unique and exclusive bedrooms and a gorgeous breakfast. Located in the trendy and central Santos design district, at walking distance to the major sightseeing attractions and trendy places...",
    href: "#",
    roomTypes: [
      { name: "Classic Suite", capacity: 2, price: "€185" },
      { name: "Superior Suite", capacity: 2, price: "€225" },
      { name: "Deluxe Suite", capacity: 3, price: "€275" },
    ],
    rating: "9.4",
    reviewCount: 128,
  },
  {
    id: 2,
    imageSrc: "/assets/images/apartments.jpg",
    title: "Apartments",
    description:
      "Comfortable and beautifully decorated properties. Located in the most incredible places, most of them with breathtaking views, or simply the best location you can have in Lisbon's historic city center...",
    href: "#",
    roomTypes: [
      { name: "Studio Apartment", capacity: 2, price: "€145" },
      { name: "One Bedroom", capacity: 3, price: "€185" },
      { name: "Two Bedroom", capacity: 5, price: "€245" },
    ],
    rating: "9.1",
    reviewCount: 94,
  },
];
// export default function AccommodationSec() {
//   return (
//     <section className="py-[80px] px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {accommodations.map((item) => (
//             <AccommodationCard
//               key={item.id}
//               imageSrc={item.imageSrc}
//               title={item.title}
//               paragraph={item.description}
//               href={item.href}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function AccommodationSec({ detailed = false }) {
  return (
    <section className="py-[80px] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodations.map((item) => (
            <AccommodationCard
              key={item.id}
              imageSrc={item.imageSrc}
              title={item.title}
              paragraph={item.description}
              href={item.href}
              // detailed prop se control hoga
              showRoomTypes={detailed}
              showReviews={detailed}
              roomTypes={item.roomTypes}
              rating={item.rating}
              reviewCount={item.reviewCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
