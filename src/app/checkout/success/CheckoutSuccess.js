"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutSuccess() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  //   const [datesLabel, setDatesLabel] = useState("");
  const [nights, setNights] = useState(0);
  const [form, setForm] = useState({ firstName: "", email: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cw_checkout_confirmed");
      if (raw) {
        const data = JSON.parse(raw);
        setCart(data.cart ?? []);
        setTotal(data.total ?? 0);
        // setDatesLabel(data.datesLabel ?? "");
        setNights(data.nights ?? 0);
        setForm(data.form ?? {});
        localStorage.removeItem("cw_checkout_confirmed"); // cleanup
      }
    } catch {}
  }, []);

  // Yeh wahi commented block hai, uncomment karke yahan paste kiya
  return (
    <section className="px-4 md:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb bar */}
        <div className="flex items-center justify-between bg-gray-100 px-5 py-3 text-sm mb-0">
          <p className="text-gray-700">
            <span className="text-gray-500">Booking</span>{" "}
            <span className="text-gray-400">·</span>{" "}
            <span className="font-semibold text-[#1f6b46]">Confirmed</span>
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-8 md:p-14 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#d8efe1] flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1f6b46"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2d4a]">
            Booking Confirmed!
          </h2>

          <p className="text-gray-600 max-w-lg">
            Thank you, <strong>{form.firstName}</strong>. Your reservation has
            been received. A confirmation email will be sent to{" "}
            <strong>{form.email}</strong>.
          </p>

          <div className="border border-gray-200 p-5 bg-gray-50 w-full max-w-lg text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Booking summary
            </p>
            {cart.map((item, idx) => (
              <div
                key={item.cartId}
                className="mb-3 pb-3 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
              >
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Room {idx + 1}
                </p>
                <p className="font-bold text-[#1e2d4a]">{item.listingName}</p>
                <p className="text-xs text-gray-500">
                  {item.rateLabel} · {item.adults} adults · {item.nights} nights
                </p>
                <p className="text-sm font-semibold text-[#1e2d4a] mt-1">
                  €{item.subtotal}
                </p>
              </div>
            ))}
            <div className="border-t border-gray-200 mt-3 pt-3 flex items-center justify-between">
              <span className="font-bold text-[#1e2d4a]">Total charged</span>
              <span className="text-xl font-extrabold text-[#1e2d4a]">
                €{total}
              </span>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#1e2d4a] text-white font-bold tracking-widest uppercase font-oswald px-8 py-3 hover:opacity-90"
          >
            Back to home
            <Image
              src="/assets/svg-icons/round-arrow-white.svg"
              alt=""
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
