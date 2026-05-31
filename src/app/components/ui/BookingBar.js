import BookButton from "./BookButton";
import DateRange from "./DateRange";
import GuestPicker from "./GuestPicker";

async function fetchProperties() {
  try {
    const res = await fetch(
      "https://beds24.com/api/v2/properties?includeLanguages=en&includeTexts=all&includePictures=false&includeOffers=false",
      {
        headers: {
          accept: "application/json",
          token:
            "mlcRaqmN4wpr/tAJNb2KKlHHETohyHSZ8GRbtWUaLJ6Rg0XUZS11QZyoamvCe4ePtSvhYjPhznkplFcJFLyRs+UuGI/YWyl41T/2/QVpD57YvcdAht0GdkiSNcQcTf9MG0Tv9qcvFH+8vMhTJYzcHA==",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data ?? data ?? [];
  } catch {
    return [];
  }
}

export default async function BookingBar() {
  const properties = await fetchProperties();

  return (
    <>
      {/* Booking Bar */}
      <div className="px-4 md:px-6 mb-[64px] -mt-[80px] relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-6 border-2 border-gray-300 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-4 items-end">
            {/* Property */}
            <div className="flex flex-col gap-1.5 min-w-0">
              <label className="text-[12px] font-bold uppercase tracking-wide text-gray-500">
                Property
              </label>
              <select className="!bg-[#dedede] border border-gray-300 px-3 py-2.5 text-sm text-gray-600 w-full focus:outline-none focus:border-gray-500">
                <option value="">All</option>
                {properties.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Check In / Check Out */}
            <div className="flex flex-col gap-1.5 min-w-0">
              <label className="text-[12px] font-bold uppercase tracking-wide text-gray-500">
                Check In / Check Out
              </label>
              <DateRange />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1.5 min-w-0">
              <label className="text-[12px] font-bold uppercase tracking-wide text-gray-500">
                Guests &amp; Rooms
              </label>
              <GuestPicker />
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col gap-1.5 min-w-0">
              <label className="text-[12px] font-bold uppercase tracking-wide text-gray-500">
                Coupon Code
              </label>
              <input
                type="text"
                placeholder="Add Promo Code"
                className="!bg-[#dedede] border border-gray-300 px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 w-full focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Book Now Button */}
            <div className="flex flex-col gap-1.5 min-w-0">
              <span className="text-[12px] font-bold uppercase tracking-wide text-gray-500 invisible select-none">
                Book
              </span>
              <BookButton
                label="BOOK NOW"
                href="/book-now"
                className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 justify-center hover:opacity-90 [&>span]:border-white w-full"
                url="/assets/svg-icons/round-arrow-white.svg"
              />
            </div>
          </div>

          <p className="text-[12px] font-medium text-gray-500 tracking-wide text-center mt-4">
            No hidden fees. Instant confirmation.
          </p>
        </div>
      </div>
    </>
  );
}
