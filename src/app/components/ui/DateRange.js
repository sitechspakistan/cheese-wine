"use client";
import { today, getLocalTimeZone } from "@internationalized/date";
import { RangeCalendar } from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";

const DateRange = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);
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
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const formatDate = (d) => {
    if (!d) return "";
    return `${d.month}/${d.day}/${d.year}`;
  };

  const triggerText =
    value?.start && value?.end
      ? `${formatDate(value.start)}  →  ${formatDate(value.end)}`
      : "Add The Dates";

  return (
    <div className="relative">
      {/* Input-style trigger */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-[#dedede] border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-gray-500 w-full text-left flex items-center justify-between ${
          value?.start ? "text-gray-800" : "text-gray-400"
        }`}
      >
        <span>{triggerText}</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-40 flex-shrink-0"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full mt-1 z-50 bg-white border border-gray-300 shadow-lg p-3 w-[100%]"
        >
          <RangeCalendar
            aria-label="Trip dates"
            minValue={today(getLocalTimeZone())}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              if (newValue?.start && newValue?.end) {
                setIsOpen(false);
              }
            }}
          >
            <RangeCalendar.Header>
              <RangeCalendar.Heading />
              <RangeCalendar.NavButton slot="previous" />
              <RangeCalendar.NavButton slot="next" />
            </RangeCalendar.Header>
            <RangeCalendar.Grid>
              <RangeCalendar.GridHeader>
                {(day) => (
                  <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>
                )}
              </RangeCalendar.GridHeader>
              <RangeCalendar.GridBody>
                {(date) => <RangeCalendar.Cell date={date} />}
              </RangeCalendar.GridBody>
            </RangeCalendar.Grid>
          </RangeCalendar>
        </div>
      )}
    </div>
  );
};

export default DateRange;
