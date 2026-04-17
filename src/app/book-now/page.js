export const metadata = {
  title: "Book Now | Cheese & Wine",
  // description: "...",
};
export default function BookingPage() {
  return (
    <div className="w-full mb-12 max-w-7xl mx-auto mt-25 overflow-hidden">
      <style>{`
        #bookingFrame::-webkit-scrollbar {
          display: none;
        }
        #bookingFrame {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
      <iframe
        src="https://admin.hostsync.io/booking2.php?propid=322695&amp;referer=iframe"
        width={"100%"}
        height={"1000px"}
        className="overflow-hidden border-none"
        id="bookingFrame"
      >
        <p>
          <a
            href="https://admin.hostsync.io/booking2.php?propid=322695&amp;referer=iframe"
            title="Book Now"
          >
            Book Now
          </a>
        </p>
      </iframe>
    </div>
  );
}
