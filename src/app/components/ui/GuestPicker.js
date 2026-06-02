"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = [
  { key: "adults", label: "Adults", min: 1 },
  { key: "children", label: "Children", min: 0 },
  { key: "rooms", label: "Rooms", min: 1 },
];

export default function GuestPicker({ onChange } = {}) {
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState({ adults: 2, children: 0, rooms: 1 });
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function adjust(key, delta) {
    const row = ROWS.find((r) => r.key === key);
    setCounts((prev) => {
      const next = { ...prev, [key]: Math.max(row.min, prev[key] + delta) };
      onChange?.(next);
      return next;
    });
  }

  const label = `${counts.adults} adult${counts.adults !== 1 ? "s" : ""} · ${counts.children} child${counts.children !== 1 ? "ren" : ""} · ${counts.rooms} room${counts.rooms !== 1 ? "s" : ""}`;

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setOpen((p) => !p)}
        className="bg-[#dedede] border border-gray-300 px-3 py-2.5 text-sm text-gray-700 w-full text-left flex items-center gap-2 focus:outline-none focus:border-gray-500"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50 shrink-0">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
        <span className="flex-1 truncate">{label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-40 shrink-0">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute top-full mt-1 z-50 bg-white border border-gray-200 shadow-lg w-full min-w-[220px]"
        >
          {ROWS.map((row, idx) => (
            <div
              key={row.key}
              className={`flex items-center justify-between px-4 py-3 ${idx < ROWS.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <span className="text-sm font-medium text-[#1e2d4a]">{row.label}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => adjust(row.key, -1)}
                  disabled={counts[row.key] <= row.min}
                  className="w-7 h-7 border border-gray-300 flex items-center justify-center text-[#1e2d4a] hover:border-[#1e2d4a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <span className="text-sm font-semibold text-[#1e2d4a] w-4 text-center">
                  {counts[row.key]}
                </span>
                <button
                  onClick={() => adjust(row.key, 1)}
                  className="w-7 h-7 border border-gray-300 flex items-center justify-center text-[#1e2d4a] hover:border-[#1e2d4a] transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="px-4 py-3 border-t border-gray-100">
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-[#1e2d4a] text-white text-xs font-bold uppercase tracking-widest py-2.5 hover:opacity-90"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
