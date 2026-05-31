"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const NIGHTS = 2;
const DATES_LABEL = "22 → 24 May 2026";

const listings = [
  {
    id: 1,
    type: "Apartments",
    name: "Sto. Estêvão Viewpoint 1",
    rating: "9.1",
    district: "Alfama",
    sub: "St Estêvão",
    capacity: "Up to 2 guests",
    description:
      "Self-catering apartment in Alfama · St Estêvão, with a full kitchen and the best of the neighbourhood at your door.",
    features: ["Full kitchen", "Fast Wi-Fi", "Self check-in", "Washing machine"],
    amenities: ["Balcony / terrace"],
    photos: 6,
    onlyLeft: 1,
    bookDirect: 130,
    bookingCom: 147,
    airbnb: 143,
  },
  {
    id: 2,
    type: "Apartments",
    name: "Sto. Estêvão Viewpoint 2",
    rating: "9.3",
    district: "Alfama",
    sub: "St Estêvão",
    capacity: "Up to 3 guests",
    description:
      "Bright apartment with private balcony and panoramic views over the Alfama rooftops and the Tagus river.",
    features: ["Balcony", "Fast Wi-Fi", "Air conditioning", "Self check-in"],
    amenities: ["Balcony / terrace"],
    photos: 8,
    bookDirect: 145,
    bookingCom: 164,
    airbnb: 159,
  },
  {
    id: 3,
    type: "Apartments",
    name: "Chiado Charm Studio",
    rating: "9.0",
    district: "Chiado",
    sub: "Largo do Carmo",
    capacity: "Up to 2 guests",
    description:
      "A characterful studio in the heart of Chiado, steps from boutique shops, theatres and tram 28.",
    features: ["Full kitchen", "Fast Wi-Fi", "Heritage building", "Air conditioning"],
    amenities: [],
    photos: 5,
    bookDirect: 135,
    bookingCom: 152,
    airbnb: 148,
  },
  {
    id: 4,
    type: "Apartments",
    name: "Amoreiras Sky Loft",
    rating: "9.4",
    district: "Amoreiras",
    sub: "Rato",
    capacity: "Up to 4 guests",
    description:
      "Spacious loft with floor-to-ceiling windows and a quiet residential setting, ideal for longer stays.",
    features: ["2 bedrooms", "Workspace", "Washing machine", "Fast Wi-Fi"],
    amenities: ["Swimming pool"],
    photos: 10,
    onlyLeft: 2,
    bookDirect: 185,
    bookingCom: 208,
    airbnb: 202,
  },
  {
    id: 5,
    type: "Apartments",
    name: "Graça Tile House",
    rating: "9.2",
    district: "Graça",
    sub: "Senhora do Monte",
    capacity: "Up to 3 guests",
    description:
      "Traditional Lisbon tile house, fully refurbished, with a small private patio and miradouro views nearby.",
    features: ["Patio", "Full kitchen", "Self check-in", "Fast Wi-Fi"],
    amenities: ["Balcony / terrace"],
    photos: 7,
    bookDirect: 155,
    bookingCom: 172,
    airbnb: 168,
  },
  {
    id: 6,
    type: "Apartments",
    name: "Príncipe Real Garden Flat",
    rating: "9.5",
    district: "Príncipe Real",
    sub: "Jardim",
    capacity: "Up to 2 guests",
    description:
      "Elegant one-bedroom with leafy garden views, on a quiet street lined with concept stores and cafés.",
    features: ["Garden view", "Fast Wi-Fi", "Air conditioning", "Self check-in"],
    amenities: ["Balcony / terrace"],
    photos: 9,
    bookDirect: 175,
    bookingCom: 196,
    airbnb: 192,
  },
];

const DISTRICTS = ["All districts", "Alfama", "Amoreiras", "Chiado", "Graça", "Príncipe Real"];
const AMENITIES = ["Any amenity", "Swimming pool", "Balcony / terrace"];
const SORT_OPTIONS = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
  "Highest rated",
];

function ratesFor(listing) {
  return [
    {
      id: "standard",
      label: "Standard rate",
      tag: null,
      price: listing.bookDirect,
      description:
        "Our everyday rate with the web-exclusive direct price. Breakfast included.",
      notes: "Free cancellation up to 48h before arrival · No prepayment",
      hasPhoto: false,
    },
    {
      id: "flexible",
      label: "Flexible rate",
      tag: "Free cancellation",
      price: listing.airbnb,
      description:
        "Total peace of mind — change or cancel up to 24h before arrival, pay at the property.",
      notes: "Free cancellation up to 24h before arrival · Pay on arrival",
      hasPhoto: false,
    },
    {
      id: "package",
      label: "Cheese & Wine package",
      tag: "Most popular",
      price: listing.bookDirect + 40,
      description:
        "Arrive to a welcome bottle of Portuguese wine and a local cheese board, with guaranteed late checkout until 3pm.",
      notes: "Non-refundable · Welcome wine & cheese for 2 · Late checkout until 3pm",
      hasPhoto: true,
    },
  ];
}

export default function BookingList() {
  const [district, setDistrict] = useState("All districts");
  const [amenity, setAmenity] = useState("Any amenity");
  const [sortBy, setSortBy] = useState("Recommended");
  const [maxPrice, setMaxPrice] = useState(260);

  const [modalListing, setModalListing] = useState(null);
  const [modalRateId, setModalRateId] = useState("standard");
  const [modalAdults, setModalAdults] = useState(2);

  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(() => {
    let arr = listings.filter((l) => {
      if (district !== "All districts" && l.district !== district) return false;
      if (amenity !== "Any amenity" && !(l.amenities || []).includes(amenity))
        return false;
      if (l.bookDirect > maxPrice) return false;
      return true;
    });
    if (sortBy === "Price: Low to High")
      arr = [...arr].sort((a, b) => a.bookDirect - b.bookDirect);
    else if (sortBy === "Price: High to Low")
      arr = [...arr].sort((a, b) => b.bookDirect - a.bookDirect);
    else if (sortBy === "Highest rated")
      arr = [...arr].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    return arr;
  }, [district, amenity, sortBy, maxPrice]);

  function openModal(listing) {
    setModalListing(listing);
    setModalRateId("standard");
    setModalAdults(2);
  }
  function closeModal() {
    setModalListing(null);
  }

  function addToBooking() {
    const rate = ratesFor(modalListing).find((r) => r.id === modalRateId);
    const item = {
      cartId: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      listingId: modalListing.id,
      listingName: modalListing.name,
      type: modalListing.type,
      district: modalListing.district,
      sub: modalListing.sub,
      rateId: rate.id,
      rateLabel: rate.label,
      ratePrice: rate.price,
      adults: modalAdults,
      nights: NIGHTS,
      subtotal: rate.price * NIGHTS,
    };
    setCart((c) => [...c, item]);
    closeModal();
    setCartOpen(true);
  }

  function removeItem(cartId) {
    setCart((c) => c.filter((i) => i.cartId !== cartId));
  }

  const cartTotal = cart.reduce((s, i) => s + i.subtotal, 0);

  const modalRate = modalListing
    ? ratesFor(modalListing).find((r) => r.id === modalRateId)
    : null;
  const modalSubtotal = modalRate ? modalRate.price * NIGHTS : 0;

  return (
    <section className="px-4 md:px-6 pb-[80px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2d4a]">
            Available apartments for your dates
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-2xl">
            All {listings.length} apartments shown individually. The districts are only used to
            group / filter — filter by neighbourhood or price to narrow them down.
          </p>
        </div>

        {/* District pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {DISTRICTS.map((d) => (
            <button
              key={d}
              onClick={() => setDistrict(d)}
              className={`text-xs md:text-sm px-4 py-2 rounded-full border transition-colors ${
                district === d
                  ? "bg-[#1e2d4a] text-white border-[#1e2d4a]"
                  : "bg-white text-[#1e2d4a] border-gray-300 hover:border-[#1e2d4a]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Amenity pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {AMENITIES.map((a) => (
            <button
              key={a}
              onClick={() => setAmenity(a)}
              className={`text-xs md:text-sm px-4 py-2 rounded-full border transition-colors ${
                amenity === a
                  ? "bg-[#1e2d4a] text-white border-[#1e2d4a]"
                  : "bg-white text-[#1e2d4a] border-gray-300 hover:border-[#1e2d4a]"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Sort / price / available */}
        <div className="flex flex-wrap items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 rounded focus:outline-none focus:border-[#1e2d4a]"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-[260px] max-w-md">
            <span className="text-sm text-gray-500 whitespace-nowrap">Max price/night</span>
            <input
              type="range"
              min="50"
              max="400"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
              className="flex-1 accent-[#1e2d4a]"
            />
            <span className="text-sm font-semibold text-[#1e2d4a] whitespace-nowrap">
              €{maxPrice}
            </span>
          </div>

          <p className="text-sm text-gray-500 ml-auto">
            <span className="font-semibold text-gray-700">{filtered.length}</span> available
          </p>
        </div>

        {/* Listings */}
        <div className="flex flex-col gap-6">
          {filtered.length === 0 && (
            <p className="text-sm text-gray-500 py-12 text-center border border-dashed border-gray-300">
              No apartments match your filters. Try widening the price or clearing district/amenity filters.
            </p>
          )}

          {filtered.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-[1fr_320px] border border-gray-200 bg-white overflow-hidden"
            >
              <div className="flex flex-col">
                <div
                  className="relative w-full aspect-[16/9] bg-gray-100"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #efeee8 0 12px, #e6e5df 12px 24px)",
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
                    Photo · landscape (16:9)
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[#1e2d4a] text-white text-xs font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {item.photos} photos
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  {item.onlyLeft && (
                    <span className="inline-block bg-rose-50 text-rose-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      Only {item.onlyLeft} left
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1e2d4a]">
                      {item.name}
                    </h3>
                    <span className="bg-[#1e2d4a] text-white text-sm font-bold px-2.5 py-1 inline-flex items-center gap-1 shrink-0">
                      <span>★</span>
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.district} · {item.sub}
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {item.capacity}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    {item.features.join(" · ")}
                  </p>

                  <a
                    href="#"
                    className="text-sm font-semibold text-[#1e2d4a] underline underline-offset-4 hover:opacity-80"
                  >
                    More details &amp; full amenities →
                  </a>
                </div>
              </div>

              <aside className="border-t lg:border-t-0 lg:border-l border-gray-200 bg-gray-50 p-5 flex flex-col">
                <div className="border border-gray-200 bg-white">
                  <p className="bg-[#eaf3ef] text-[#1e2d4a] text-xs font-bold tracking-widest uppercase px-4 py-2.5">
                    Compare prices
                  </p>

                  <div className="px-4 py-4 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">Book direct</span>
                    <span className="text-2xl font-extrabold text-[#1e2d4a]">
                      €{item.bookDirect}
                    </span>
                  </div>

                  <div className="px-4 py-3 flex items-center justify-between text-sm">
                    <span className="text-gray-600">Booking.com</span>
                    <span className="text-gray-400 line-through">€{item.bookingCom}</span>
                  </div>
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between text-sm">
                    <span className="text-gray-600">Airbnb</span>
                    <span className="text-gray-400 line-through">€{item.airbnb}</span>
                  </div>

                  <div className="bg-[#d8efe1] text-[#1f6b46] text-sm font-semibold text-center py-2.5">
                    You save €{Math.max(item.bookingCom, item.airbnb) - item.bookDirect}/night
                  </div>

                  <ul className="px-4 py-4 space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="text-[#1f6b46]">✓</span> Free cancellation</li>
                    <li className="flex items-center gap-2"><span className="text-[#1f6b46]">✓</span> Web-exclusive discount</li>
                    <li className="flex items-center gap-2"><span className="text-[#1f6b46]">✓</span> Best price guaranteed</li>
                    <li className="flex items-center gap-2"><span className="text-[#1f6b46]">✓</span> Maximum flexibility</li>
                  </ul>

                  <a
                    href="#"
                    className="block px-4 pb-4 text-sm font-semibold text-[#1e2d4a] underline underline-offset-4 hover:opacity-80"
                  >
                    See all perks →
                  </a>
                </div>

                <button
                  onClick={() => openModal(item)}
                  className="mt-4 inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase font-oswald bg-[#1e2d4a] text-white border border-[#1e2d4a] px-6 py-3 hover:opacity-90"
                >
                  SELECT
                  <Image
                    src="/assets/svg-icons/round-arrow-white.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                </button>
              </aside>
            </article>
          ))}
        </div>
      </div>

      {/* Floating cart button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-[#1e2d4a] text-white font-bold uppercase tracking-widest px-5 py-3 shadow-lg hover:opacity-90"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6h15l-1.5 9h-12z" />
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M6 6L4 2H2" />
        </svg>
        Your booking
        <span className="bg-white text-[#1e2d4a] text-xs px-2 py-0.5 rounded-full">
          {cart.length}
        </span>
      </button>

      {/* Modal */}
      {modalListing && (
        <RoomRatesModal
          listing={modalListing}
          rateId={modalRateId}
          setRateId={setModalRateId}
          adults={modalAdults}
          setAdults={setModalAdults}
          onClose={closeModal}
          onAdd={addToBooking}
          subtotal={modalSubtotal}
          cartTotal={cartTotal}
          cartCount={cart.length}
        />
      )}

      {/* Cart drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          total={cartTotal}
          onClose={() => setCartOpen(false)}
          onRemove={removeItem}
          onCheckout={() => {
            localStorage.setItem(
              "cw_checkout",
              JSON.stringify({ cart, total: cartTotal, datesLabel: DATES_LABEL, nights: NIGHTS })
            );
            router.push("/checkout");
          }}
        />
      )}
    </section>
  );
}

function RoomRatesModal({
  listing,
  rateId,
  setRateId,
  adults,
  setAdults,
  onClose,
  onAdd,
  subtotal,
  cartTotal,
  cartCount,
}) {
  const rates = ratesFor(listing);
  const selectedRate = rates.find((r) => r.id === rateId);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 md:p-8">
      <div className="bg-white w-full max-w-6xl shadow-xl">
        {/* Top breadcrumb */}
        <div className="flex items-center justify-between bg-gray-100 px-5 py-3 text-sm">
          <p className="text-gray-700">
            <span className="text-gray-500">{listing.type}</span>{" "}
            <span className="text-gray-400">·</span>{" "}
            <span className="font-semibold">{listing.name}</span>
          </p>
          <button
            onClick={onClose}
            className="text-xs font-bold tracking-widest text-[#b08a4a] hover:underline uppercase"
          >
            ← Back to results
          </button>
        </div>

        {/* Sub-bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3 border-b border-gray-200 text-sm">
          <span>
            <span className="text-gray-500">Room</span>{" "}
            <span className="font-semibold">{cartCount + 1} of {cartCount + 1}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gray-500">Guests this room:</span>
            <button
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-6 h-6 border border-gray-300 inline-flex items-center justify-center text-sm hover:border-[#1e2d4a]"
            >
              –
            </button>
            <span className="font-medium">{adults} adults</span>
            <button
              onClick={() => setAdults(Math.min(6, adults + 1))}
              className="w-6 h-6 border border-gray-300 inline-flex items-center justify-center text-sm hover:border-[#1e2d4a]"
            >
              +
            </button>
          </span>
          <span>
            <span className="text-gray-500">Dates:</span>{" "}
            <span className="font-medium">{DATES_LABEL}</span>{" "}
            <button className="text-xs font-bold tracking-widest text-[#b08a4a] hover:underline uppercase ml-1">
              Change
            </button>
          </span>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 p-5 md:p-6">
          {/* Left column */}
          <div>
            <div className="flex gap-5 mb-6">
              <div
                className="w-36 h-32 shrink-0 bg-gray-100 flex items-center justify-center text-xs text-gray-400"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #efeee8 0 10px, #e6e5df 10px 20px)",
                }}
              >
                Photo
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-[#1e2d4a] mb-2">
                  {listing.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {listing.capacity}
                  </span>
                  <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {listing.district} · {listing.sub}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {listing.features.join(" · ")}
                </p>
                <a href="#" className="text-sm font-semibold text-[#1e2d4a] underline underline-offset-4">
                  View all photos →
                </a>
              </div>
            </div>

            <h4 className="text-lg font-bold text-[#1e2d4a] mb-3 border-b border-gray-200 pb-2">
              Choose your rate or package
            </h4>

            <div className="flex flex-col gap-3">
              {rates.map((rate) => {
                const selected = rate.id === rateId;
                return (
                  <label
                    key={rate.id}
                    className={`block border cursor-pointer transition-colors ${
                      selected
                        ? "border-[#1e2d4a] border-2"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-start gap-3 p-4">
                      <input
                        type="radio"
                        name="rate"
                        checked={selected}
                        onChange={() => setRateId(rate.id)}
                        className="mt-1 accent-[#1e2d4a]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-bold text-[#1e2d4a]">{rate.label}</span>
                          {rate.tag && (
                            <span className="text-[10px] uppercase tracking-widest font-bold text-[#1f6b46] bg-[#d8efe1] px-2 py-0.5 rounded-full">
                              {rate.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 mb-1">{rate.description}</p>
                        <p className="text-xs text-gray-500">{rate.notes}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-lg font-extrabold text-[#1e2d4a]">€{rate.price}</p>
                        <p className="text-xs text-gray-500">per night</p>
                      </div>
                    </div>
                    {rate.hasPhoto && (
                      <div
                        className="mx-4 mb-4 h-24 bg-gray-100 flex items-center justify-center text-xs text-gray-400"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, #efeee8 0 10px, #e6e5df 10px 20px)",
                        }}
                      >
                        Photo
                      </div>
                    )}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Right column: reservation summary */}
          <aside className="border border-gray-200 p-5 bg-white h-fit">
            <h4 className="text-lg font-bold text-[#1e2d4a]">Reservation summary</h4>
            <p className="text-sm text-gray-500 mt-1">
              {DATES_LABEL} · {NIGHTS} nights · {adults} adults
            </p>

            <div className="mt-4 border border-gray-200 p-3 bg-gray-50">
              <p className="text-sm text-gray-700">
                <span className="text-gray-500">Selected:</span>{" "}
                <span className="inline-block bg-[#1e2d4a] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 mx-1 align-middle">
                  {listing.type}
                </span>
                <span className="font-semibold">{listing.name}</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {selectedRate.label} · €{selectedRate.price}/night · {adults} adults · {NIGHTS} nights ={" "}
                <span className="font-semibold text-[#1e2d4a]">€{subtotal}</span>
              </p>
            </div>

            <button
              onClick={onAdd}
              className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-[#1e2d4a] text-white font-bold tracking-widest uppercase font-oswald px-5 py-3 hover:opacity-90"
            >
              Add this room to booking
              <Image
                src="/assets/svg-icons/round-arrow-white.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>

            <div className="mt-5 border-t border-gray-200 pt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-[#1e2d4a]">Total</span>
                <span className="text-2xl font-extrabold text-[#1e2d4a]">€{cartTotal}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>incl. taxes &amp; fees</span>
                <span>€0</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Deposit due today</span>
                <span>€0</span>
              </div>
              <p className="text-xs text-gray-500 text-center bg-gray-50 py-2 mt-2">
                🔒 No payment yet · pay at checkout
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ cart, total, onClose, onRemove, onCheckout }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-[#1e2d4a]">Your booking</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 inline-flex items-center justify-center text-gray-500 hover:text-[#1e2d4a]"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 px-5 py-4">
          {cart.length === 0 && (
            <p className="text-sm text-gray-500 text-center py-12">
              Your booking is empty. Select a room to add it here.
            </p>
          )}
          {cart.map((item, idx) => (
            <div
              key={item.cartId}
              className="border border-gray-200 p-4 mb-3"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Room {idx + 1}
                  </p>
                  <p className="font-bold text-[#1e2d4a]">{item.listingName}</p>
                  <p className="text-xs text-gray-500">
                    {item.district} · {item.sub}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.cartId)}
                  className="text-xs text-rose-700 hover:underline"
                >
                  Remove
                </button>
              </div>
              <p className="text-sm text-gray-700">
                {item.rateLabel} · €{item.ratePrice}/night
              </p>
              <p className="text-xs text-gray-500">
                {item.adults} adults · {item.nights} nights
              </p>
              <p className="text-sm font-semibold text-[#1e2d4a] mt-2 text-right">
                €{item.subtotal}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 px-5 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-[#1e2d4a]">Total</span>
            <span className="text-2xl font-extrabold text-[#1e2d4a]">€{total}</span>
          </div>
          <button
            disabled={cart.length === 0}
            onClick={onCheckout}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#1e2d4a] text-white font-bold tracking-widest uppercase font-oswald px-5 py-3 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Proceed to checkout
            <Image
              src="/assets/svg-icons/round-arrow-white.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
          <button
            onClick={onClose}
            className="w-full mt-2 text-sm text-gray-600 hover:text-[#1e2d4a]"
          >
            Continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}
