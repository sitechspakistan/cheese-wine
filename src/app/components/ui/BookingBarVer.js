import React from "react";
import DateRange from "../ui/DateRange";
import BookButton from "../ui/BookButton";

const BookingBarVer = () => {
  return (
    <div className="border border-gray-200 px-4 py-4 bg-white">
      <div className="flex justify-between items-baseline gap-4 mb-4">
        <h2 className="text-lg font-semibold ">Booking</h2>
        <span className="text-lg font-bold text-gray-800 uppercase">
          $500/night
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-[16px] font-bold  uppercase text-gray-500">
            Check In / Check Out
          </label>
          <DateRange />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-[16px] font-bold  uppercase text-gray-500">
            Rooms
          </label>
          <input
            type="text"
            placeholder="01"
            className="!bg-[#dedede] border border-gray-300 bg-white px-3 py-2 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="flex  gap-1 flex-1">
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-[16px] font-bold  uppercase text-gray-500">
              Adults
            </label>
            <input
              type="text"
              placeholder="02"
              className="!bg-[#dedede] border border-gray-300 bg-white px-3 py-2 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-[16px] font-bold  uppercase text-gray-500">
              Children
            </label>
            <input
              type="text"
              placeholder="0"
              className="!bg-[#dedede] border border-gray-300 bg-white px-3 py-2 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex justify-between items-baseline gap-4 ">
          <h2 className="text-lg font-semibold ">Total Cost</h2>
          <span className="text-lg font-bold text-gray-800 uppercase">
            $500
          </span>
        </div>

        {/* Book Now Button + note */}
        <div className="flex flex-col items-start mt-2">
          <BookButton
            label="BOOK NOW"
            href="/book-now"
            className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-4 py-2 w-full hover:opacity-90 justify-center "
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingBarVer;
