import AccommodationCard from "../ui/AccomodationCard";

const accommodations = [
  {
    id: 1,
    imageSrc: "/assets/images/suites.jpg",
    title: "Suites",
    description:
      "Unique and exclusive bedrooms and a gorgeous breakfast. Located in the trendy and central Santos design district, at walking distance to the major sightseeing attractions and trendy places...",
    href: "/accommodation/suites",
    roomTypes: [
      {
        name: "Classic Suite",
        capacity: 2,
        price: "€185",
        platforms: [
          {
            name: "Booking.com",
            price: "€195",
            logoSrc: "/assets/svg-logo/booking.jpeg",
          },
          {
            name: "Expedia",
            price: "€189",
            logoSrc: "/assets/svg-logo/expedia.jpeg",
          },
          {
            name: "Airbnb",
            price: "€198",
            logoSrc: "/assets/svg-logo/airbnb.jpeg",
          },
        ],
      },
      {
        name: "Superior Suite",
        capacity: 2,
        price: "€185",
        platforms: [
          {
            name: "Booking.com",
            price: "€195",
            logoSrc: "/assets/svg-logo/booking.jpeg",
          },
          {
            name: "Expedia",
            price: "€189",
            logoSrc: "/assets/svg-logo/expedia.jpeg",
          },
          {
            name: "Airbnb",
            price: "€198",
            logoSrc: "/assets/svg-logo/airbnb.jpeg",
          },
        ],
      },
      {
        name: "Deluxe Suite",
        capacity: 2,
        price: "€185",
        platforms: [
          {
            name: "Booking.com",
            price: "€195",
            logoSrc: "/assets/svg-logo/booking.jpeg",
          },
          {
            name: "Expedia",
            price: "€189",
            logoSrc: "/assets/svg-logo/expedia.jpeg",
          },
          {
            name: "Airbnb",
            price: "€198",
            logoSrc: "/assets/svg-logo/airbnb.jpeg",
          },
        ],
      },
    ],
    location: "Santos, Lisbon",
    mapHref: "#",
    rating: "9.4",
    reviewCount: 128,
  },
  {
    id: 2,
    imageSrc: "/assets/images/apartments.jpg",
    title: "Apartments",
    description:
      "Comfortable and beautifully decorated properties. Located in the most incredible places, most of them with breathtaking views, or simply the best location you can have in Lisbon's historic city center...",
    href: "/accommodation/apartments",
    roomTypes: [
      {
        name: "Studio Apartment",
        capacity: 2,
        price: "€185",
        platforms: [
          {
            name: "Booking.com",
            price: "€195",
            logoSrc: "/assets/svg-logo/booking.jpeg",
          },
          {
            name: "Expedia",
            price: "€189",
            logoSrc: "/assets/svg-logo/expedia.jpeg",
          },
          {
            name: "Airbnb",
            price: "€198",
            logoSrc: "/assets/svg-logo/airbnb.jpeg",
          },
        ],
      },
      {
        name: "One Bedroom Apartment",
        capacity: 2,
        price: "€185",
        platforms: [
          {
            name: "Booking.com",
            price: "€195",
            logoSrc: "/assets/svg-logo/booking.jpeg",
          },
          {
            name: "Expedia",
            price: "€189",
            logoSrc: "/assets/svg-logo/expedia.jpeg",
          },
          {
            name: "Airbnb",
            price: "€198",
            logoSrc: "/assets/svg-logo/airbnb.jpeg",
          },
        ],
      },
      {
        name: "Two Bedroom Apartment",
        capacity: 2,
        price: "€185",
        platforms: [
          {
            name: "Booking.com",
            price: "€195",
            logoSrc: "/assets/svg-logo/booking.jpeg",
          },
          {
            name: "Expedia",
            price: "€189",
            logoSrc: "/assets/svg-logo/expedia.jpeg",
          },
          {
            name: "Airbnb",
            price: "€198",
            logoSrc: "/assets/svg-logo/airbnb.jpeg",
          },
        ],
      },
    ],
    location: "Baixa, Lisbon",
    mapHref: "#",
    rating: "9.1",
    reviewCount: 94,
  },
];

export default function AccommodationSec({ detailed = false }) {
  return (
    <section className="px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodations.map((item) => (
            <AccommodationCard
              key={item.id}
              imageSrc={item.imageSrc}
              title={item.title}
              paragraph={item.description}
              href={item.href}
              location={item.location}
              mapHref={item.mapHref}
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
