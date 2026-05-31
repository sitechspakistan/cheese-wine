import HeroSub from "../components/sections/Hero-2";
import BookingBar from "../components/ui/BookingBar";
import BookingList from "./BookingList";

export const metadata = {
  title: "Book Now | Cheese & Wine",
};

export default function BookingPage() {
  return (
    <>
      <HeroSub heading="Book Now" overlay="true" />
      <BookingBar />
      <BookingList />
    </>
  );
}
