"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutClient() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [datesLabel, setDatesLabel] = useState("");
  const [nights, setNights] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    requests: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cw_checkout");
      if (raw) {
        const data = JSON.parse(raw);
        setCart(data.cart ?? []);
        setTotal(data.total ?? 0);
        setDatesLabel(data.datesLabel ?? "");
        setNights(data.nights ?? 0);
      }
    } catch {}
  }, []);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem("cw_checkout");
    setSubmitted(true);
  }

  if (submitted) {
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
              Thank you, <strong>{form.firstName}</strong>. Your reservation has been received. A
              confirmation email will be sent to <strong>{form.email}</strong>.
            </p>

            <div className="border border-gray-200 p-5 bg-gray-50 w-full max-w-lg text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Booking summary
              </p>
              {cart.map((item, idx) => (
                <div key={item.cartId} className="mb-3 pb-3 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Room {idx + 1}</p>
                  <p className="font-bold text-[#1e2d4a]">{item.listingName}</p>
                  <p className="text-xs text-gray-500">
                    {item.rateLabel} · {item.adults} adults · {item.nights} nights
                  </p>
                  <p className="text-sm font-semibold text-[#1e2d4a] mt-1">€{item.subtotal}</p>
                </div>
              ))}
              <div className="border-t border-gray-200 mt-3 pt-3 flex items-center justify-between">
                <span className="font-bold text-[#1e2d4a]">Total charged</span>
                <span className="text-xl font-extrabold text-[#1e2d4a]">€{total}</span>
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

  if (cart.length === 0) {
    return (
      <section className="px-4 md:px-6 py-16">
        <div className="max-w-7xl mx-auto text-center py-20 border border-dashed border-gray-300">
          <p className="text-gray-500 mb-4">Your booking is empty.</p>
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1e2d4a] underline underline-offset-4 hover:opacity-70"
          >
            ← Back to booking
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-6 mt-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2d4a]">
            Complete your booking
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Fill in your details below to confirm your reservation.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
            {/* Left: Guest + Payment */}
            <div className="flex flex-col gap-6">
              {/* Guest details */}
              <div className="border border-gray-200 bg-white">
                <div className="bg-gray-100 px-5 py-3 border-b border-gray-200">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1e2d4a]">
                    Guest details
                  </h3>
                </div>
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      First name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Maria"
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      Last name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Silva"
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="maria@example.com"
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+351 912 345 678"
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      Country of residence
                    </label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e2d4a]"
                    >
                      <option value="">Select country</option>
                      <option>Portugal</option>
                      <option>United Kingdom</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Spain</option>
                      <option>United States</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special requests */}
              <div className="border border-gray-200 bg-white">
                <div className="bg-gray-100 px-5 py-3 border-b border-gray-200">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1e2d4a]">
                    Special requests
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-3">
                    We'll do our best to accommodate your requests. They are not guaranteed.
                  </p>
                  <textarea
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Early check-in, extra pillows, dietary requirements…"
                    className="w-full border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a] resize-none"
                  />
                </div>
              </div>

              {/* Payment */}
              <div className="border border-gray-200 bg-white">
                <div className="bg-gray-100 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1e2d4a]">
                    Payment details
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f6b46] bg-[#eaf3ef] px-3 py-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    256-bit SSL
                  </span>
                </div>
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      Name on card <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      name="cardName"
                      value={form.cardName}
                      onChange={handleChange}
                      placeholder="Maria Silva"
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      Card number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a] font-mono tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      Expiry date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      name="expiry"
                      value={form.expiry}
                      onChange={handleChange}
                      placeholder="MM / YY"
                      maxLength={7}
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      CVV <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      name="cvv"
                      value={form.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength={4}
                      className="border border-gray-300 bg-[#f9f9f7] px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e2d4a]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Order summary (sticky) */}
            <aside className="lg:sticky lg:top-24 flex flex-col gap-4">
              <div className="border border-gray-200 bg-white">
                <div className="bg-[#eaf3ef] px-5 py-3 border-b border-gray-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1e2d4a]">
                    Booking summary
                  </p>
                </div>

                {datesLabel && (
                  <div className="px-5 py-3 border-b border-gray-100 text-sm text-gray-600">
                    <span className="text-gray-400">Dates: </span>
                    {datesLabel}
                    {nights > 0 && <span className="text-gray-400"> · {nights} nights</span>}
                  </div>
                )}

                <div className="px-5 py-4 flex flex-col gap-3">
                  {cart.map((item, idx) => (
                    <div
                      key={item.cartId}
                      className="border border-gray-200 p-3 bg-gray-50"
                    >
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">
                        Room {idx + 1}
                      </p>
                      <p className="font-bold text-[#1e2d4a] text-sm">{item.listingName}</p>
                      <p className="text-xs text-gray-500">{item.district} · {item.sub}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-600">{item.rateLabel}</span>
                        <span className="text-xs font-semibold text-[#1e2d4a]">
                          €{item.ratePrice}/night
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="text-xs text-gray-500">
                          {item.adults} adults · {item.nights} nights
                        </span>
                        <span className="text-sm font-bold text-[#1e2d4a]">€{item.subtotal}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 px-5 py-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold text-gray-700">€{total}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Taxes &amp; fees</span>
                    <span className="text-gray-500">€0</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-1">
                    <span className="text-base font-bold text-[#1e2d4a]">Total</span>
                    <span className="text-2xl font-extrabold text-[#1e2d4a]">€{total}</span>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1e2d4a] text-white font-bold tracking-widest uppercase font-oswald px-5 py-3 hover:opacity-90"
                  >
                    Confirm booking
                    <Image
                      src="/assets/svg-icons/round-arrow-white.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </button>

                  <p className="text-xs text-gray-500 text-center bg-gray-50 py-2 mt-3">
                    🔒 No payment until confirmed
                  </p>

                  <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#1f6b46]">✓</span> Best price guaranteed
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1f6b46]">✓</span> Instant confirmation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1f6b46]">✓</span> Free cancellation (rate dependent)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1f6b46]">✓</span> No hidden fees
                    </li>
                  </ul>
                </div>
              </div>

              {/* Save banner */}
              <div className="bg-[#d8efe1] text-[#1f6b46] text-sm font-semibold text-center py-3 px-4">
                You're booking direct — saving vs. OTAs
              </div>
            </aside>
          </div>
        </form>
      </div>
    </section>
  );
}
