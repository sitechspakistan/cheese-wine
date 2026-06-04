"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BookButton from "./BookButton";
import DateRange from "./DateRange";
import GuestPicker from "./GuestPicker";

function fmt(d) {
  return `${d.year}-${String(d.month).padStart(2, "0")}-${String(d.day).padStart(2, "0")}`;
}

function fmtLabel(d) {
  const date = new Date(d.year, d.month - 1, d.day);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function nightsBetween(start, end) {
  const a = new Date(start.year, start.month - 1, start.day);
  const b = new Date(end.year, end.month - 1, end.day);
  return Math.max(1, Math.round((b - a) / 86400000));
}

function avgPrice(calendar) {
  if (!calendar) return null;
  const prices = Object.values(calendar)
    .map((d) => d?.price ?? d?.prices ?? null)
    .filter((p) => typeof p === "number" && p > 0);
  if (!prices.length) return null;
  return Math.round(prices.reduce((s, p) => s + p, 0) / prices.length);
}

export default function BookingBarForm({ properties = [] }) {
  const router = useRouter();
  const [propertyId, setPropertyId] = useState("");
  const [dates, setDates] = useState(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attempted, setAttempted] = useState(false);

  async function handleSearch() {
    setError("");
    setAttempted(true);

    const missing = [];
    if (!propertyId) missing.push("a property");
    if (!dates?.start || !dates?.end)
      missing.push("check-in & check-out dates");
    if (missing.length) {
      setError(`Please select ${missing.join(" and ")}.`);
      return;
    }

    const startDate = fmt(dates.start);
    const endDate = fmt(dates.end);
    const nights = nightsBetween(dates.start, dates.end);
    const datesLabel = `${fmtLabel(dates.start)} → ${fmtLabel(dates.end)}`;

    // Determine which propertyIds to search
    const ids = propertyId
      ? [propertyId]
      : properties.map((p) => String(p.id)).filter(Boolean);

    if (!ids.length) {
      setError("No property available to search.");
      return;
    }

    setLoading(true);

    try {
      // Fetch availability + calendar for each propertyId in parallel
      const results = await Promise.all(
        ids.map(async (pid) => {
          const [availRes, calRes] = await Promise.all([
            fetch(
              `/api/availability?propertyId=${pid}&startDate=${startDate}&endDate=${endDate}`,
            ),
            fetch(
              `/api/calendar?propertyId=${pid}&startDate=${startDate}&endDate=${endDate}`,
            ),
          ]);
          const availData = await availRes.json();
          const calData = await calRes.json();
          return { pid, availData, calData };
        }),
      );

      // Flatten rooms — keep only rooms where every date in range is available
      const rooms = [];
      for (const { availData, calData } of results) {
        const availRooms = availData?.data ?? [];
        const calMap = {};
        for (const r of calData?.data ?? []) {
          calMap[r.roomId] = r;
        }

        for (const room of availRooms) {
          const allAvailable = Object.values(room.availability ?? {}).every(
            Boolean,
          );
          if (!allAvailable) continue;

          const calRoom = calMap[room.roomId];
          const pricePerNight = avgPrice(calRoom?.calendar);

          rooms.push({
            id: room.roomId,
            type: "Room",
            name: room.name,
            propertyId: room.propertyId,
            rating: null,
            district: "",
            sub: "",
            capacity: `Up to ${guests.adults + guests.children} guests`,
            description: "",
            features: [],
            amenities: [],
            photos: 1,
            bookDirect: pricePerNight ?? 0,
            bookingCom: pricePerNight ? Math.round(pricePerNight * 1.15) : 0,
            airbnb: pricePerNight ? Math.round(pricePerNight * 1.12) : 0,
            minStay: calRoom
              ? Math.min(
                  ...Object.values(calRoom.calendar ?? {}).map(
                    (d) => d?.minStay ?? 1,
                  ),
                )
              : 1,
            numAvail: calRoom
              ? Math.min(
                  ...Object.values(calRoom.calendar ?? {}).map(
                    (d) => d?.numAvail ?? 1,
                  ),
                )
              : 1,
          });
        }
      }

      localStorage.setItem(
        "cw_search",
        JSON.stringify({
          rooms,
          nights,
          datesLabel,
          guests,
          startDate,
          endDate,
        }),
      );
      localStorage.setItem(
        "cw_search_params",
        JSON.stringify({
          propertyId,
          guests,
          startDate,
          endDate,
        }),
      );

      router.push("/book-now");
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  const [initialDates, setInitialDates] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cw_search_params");
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.propertyId) setPropertyId(saved.propertyId);
        if (saved.guests) setGuests(saved.guests);
        if (saved.startDate && saved.endDate) {
          // "2026-06-05" → {year, month, day} object mein convert karo
          const parseDate = (str) => {
            const [year, month, day] = str.split("-").map(Number);
            return { year, month, day };
          };
          setDates({
            start: parseDate(saved.startDate),
            end: parseDate(saved.endDate),
          });
          setInitialDates({
            start: parseDate(saved.startDate),
            end: parseDate(saved.endDate),
          });
        }
      }
    } catch {}
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-4 items-end">
        {/* Property */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <label className="text-[12px] font-bold uppercase tracking-wide text-gray-500">
            Property
          </label>
          <select
            value={propertyId}
            onChange={(e) => {
              setPropertyId(e.target.value);
              setAttempted(false);
            }}
            className={`!bg-[#dedede] border px-3 py-2.5 text-sm text-gray-600 w-full focus:outline-none focus:border-gray-500 ${
              attempted && !propertyId
                ? "border-rose-500 ring-1 ring-rose-400"
                : "border-gray-300"
            }`}
          >
            <option value="">Select property</option>
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
          <div
            className={attempted && !dates?.start ? "ring-1 ring-rose-400" : ""}
          >
            <DateRange
              onDateChange={(v) => {
                setDates(v);
                setAttempted(false);
              }}
            />
          </div>
        </div>

        {/* Guests & Rooms */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <label className="text-[12px] font-bold uppercase tracking-wide text-gray-500">
            Guests &amp; Rooms
          </label>
          <GuestPicker onChange={setGuests} />
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

        {/* Search Button */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <span className="text-[12px] font-bold uppercase tracking-wide text-gray-500 invisible select-none">
            Book
          </span>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase font-oswald bg-[#1e2d4a] text-white border border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 w-full disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Checking...
              </>
            ) : (
              <>
                Search
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 8 16 12 12 16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-sm text-rose-600 mt-3 font-medium">{error}</p>
      )}
    </>
  );
}
