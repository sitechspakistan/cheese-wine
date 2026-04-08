// app/booking/page.jsx  ya  pages/booking.jsx

export default function BookingPage() {
  return (
    <div className="w-full mb-12 max-w-7xl mx-auto mt-25">
      <a
        style={{ fontSize: "16px", color: "#000000" }}
        target="_blank"
        href="https://admin.hostsync.io/booking.php?propid=311285&referer=BookingLink"
      >
        Book Online
      </a>
      <iframe
        className="w-full   h-[800px]"
        src="https://admin.hostsync.io/booking2.php?propid=311285&referer=iframe"
      />
    </div>
  );
}
