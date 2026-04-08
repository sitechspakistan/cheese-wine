// components/accommodation/data/properties.js

export const properties = [
  {
    id: "suites",
    name: "Cheese & Wine Suites",
    slug: "suites",
    bookSlug: "book-now-suites",
    tagline: "Luxury Suites in the Heart of Lisbon",
    description:
      "Experience the finest in boutique hospitality. Our Suites blend classic Portuguese charm with modern luxury — each space thoughtfully designed with handcrafted details, premium linens, and a curated wine selection waiting for your arrival.",
    image: "https://placehold.co/800x600/1e2d4a/ffffff?text=Suites",
    fromPrice: "€185",
    rating: "9.4",
    reviewCount: 128,
    roomTypes: [
      { name: "Classic Suite", capacity: 2, price: "€185" },
      { name: "Superior Suite", capacity: 2, price: "€225" },
      { name: "Deluxe Suite", capacity: 3, price: "€275" },
    ],
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Private Bathroom",
      "City View",
    ],
  },
  {
    id: "apartments",
    name: "Cheese & Wine Apartments",
    slug: "apartments",
    bookSlug: "book-now-apartments",
    tagline: "Feel at Home in Lisbon",
    description:
      "Our Apartments offer the perfect home-away-from-home experience. Fully equipped kitchens, spacious living areas, and all the warmth of handmade hospitality. Ideal for longer stays and families who want the freedom to live like a local.",
    image: "https://placehold.co/800x600/2d4a1e/ffffff?text=Apartments",
    fromPrice: "€145",
    rating: "9.1",
    reviewCount: 94,
    roomTypes: [
      { name: "Studio Apartment", capacity: 2, price: "€145" },
      { name: "One Bedroom", capacity: 3, price: "€185" },
      { name: "Two Bedroom", capacity: 5, price: "€245" },
    ],
    amenities: ["Full Kitchen", "Free WiFi", "Washing Machine", "Living Area"],
  },
];
