'use client";';
import HeroSub from "../components/sections/Hero-2";

export const metadata = {
  title: "Book Now | Cheese & Wine",
  // description: "...",
};
export default function BookingPage() {
  return (
    <>
      <HeroSub heading="Book Now" overlay="true" />
      {/* <div className=" max-w-7xl mx-auto  overflow-hidden"> */}
      <iframe
        src="https://admin.hostsync.io/booking2.php?propid=322695&amp;referer=iframe"
        width={"100%"}
        height={"1000px"}
        className="overflow-hidden border-none -mt-12 relative"
        id="bookingFrame"
      >
        {/* <a
            href="https://admin.hostsync.io/booking2.php?propid=322695&amp;referer=iframe"
            title="Book Now"
          >
            Book Now
          </a> */}
      </iframe>
      {/* </div> */}
    </>
  );
}
