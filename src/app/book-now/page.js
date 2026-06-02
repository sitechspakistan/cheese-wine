import HeroSub from "../components/sections/Hero-2";
import BookingBar from "../components/ui/BookingBar";
import { fetchPropertyListings } from "../lib/beds24";
import BookingList from "./BookingList";

export const metadata = {
  title: "Book Now | Cheese & Wine",
};

export default async function BookingPage() {
  const initialListings = await fetchPropertyListings("322695");

  return (
    <>
      <HeroSub heading="Book Now" overlay="true" />
      <BookingBar />
      <BookingList initialListings={initialListings} />
    </>
  );
}
