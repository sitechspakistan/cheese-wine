import BookButton from "./BookButton";

export default function BookingBar() {
  return (
    <>
      {/* Booking Bar */}
      <div className=" mb-[80px] -mt-[80px] ">
        <div className="max-w-7xl mx-auto px-10 pt-8 pb-3 border-2 border-gray-300 bg-gray-100">
          <p className="text-center text-[20px] font-bold text-gray-800 mb-[16px]">
            Book direct and embark on this journey with us.
          </p>

          <div className="flex gap-4">
            {/* Property */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[16px] font-bold  uppercase text-gray-500">
                Property
              </label>
              <select className="!bg-[#dedede] border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500">
                <option value="">All</option>
                <option value="1">Suites</option>
                <option value="2">Apartments</option>
              </select>
            </div>

            {/* Check In / Check Out */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[16px] font-bold  uppercase text-gray-500">
                Check In / Check Out
              </label>
              <input
                type="text"
                placeholder="Add The Dates"
                className="bg-[#dedede] border border-gray-300 px-3 py-2 text-sm text-gray-400  focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Adults */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[16px] font-bold  uppercase text-gray-500">
                Adults
              </label>
              <select className="!bg-[#dedede] border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500">
                <option value="">Add The Dates</option>
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[16px] font-bold  uppercase text-gray-500">
                Coupon Code
              </label>
              <input
                type="text"
                placeholder="Add Promo Code"
                className="!bg-[#dedede] border border-gray-300 bg-white px-3 py-2 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Book Now Button + note */}
            <div className="flex flex-col items-start  mt-5">
              <BookButton
                label="BOOK NOW"
                href="/book"
                className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white"
                url="/assets/svg-icons/round-arrow-white.svg"
              />
              <p className="text-[12px] font-medium text-gray-500 tracking-wide mt-3">
                No hidden fees. Instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
