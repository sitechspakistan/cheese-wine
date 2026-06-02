const TOKEN =
  "mlcRaqmN4wpr/tAJNb2KKlHHETohyHSZ8GRbtWUaLJ6Rg0XUZS11QZyoamvCe4ePtSvhYjPhznkplFcJFLyRs+UuGI/YWyl41T/2/QVpD57YvcdAht0GdkiSNcQcTf9MG0Tv9qcvFH+8vMhTJYzcHA==";

const FEATURE_LABELS = {
  WIFI: "Fast Wi-Fi",
  INTERNET: "Fast Wi-Fi",
  TV: "Smart TV",
  CABLE: "Cable TV",
  HAIR_DRYER: "Hair dryer",
  AIR_CONDITIONING: "Air conditioning",
  BALCONY: "Balcony",
  BREAKFAST_INCLUDED: "Breakfast included",
  PARKING_INCLUDED: "Parking included",
  ELEVATOR: "Elevator",
  CLEANING_INCLUDED: "Daily cleaning",
  ROOF_TERRACE: "Roof terrace",
  FIREPLACE: "Fireplace",
  TOWELS: "Towels provided",
  CONCIERGE: "Concierge",
  BAGGAGE_STORAGE: "Luggage storage",
  RECEPTION_24_HOUR: "24h reception",
  CHILDREN_WELCOME: "Family friendly",
  BED_QUEEN: "Queen bed",
  BED_KING: "King bed",
  BATH_SHOWER: "Shower",
  BATH_TOILET: "Private toilet",
  BATH_BIDET: "Bidet",
  SELF_CHECKIN: "Self check-in",
  KITCHEN: "Full kitchen",
  KITCHENETTE: "Kitchenette",
  WASHING_MACHINE: "Washing machine",
  WORKSPACE: "Workspace",
};

// Flatten [[code, code], [code]] → deduplicated human labels
export function mapFeatureCodes(featureCodes = []) {
  const seen = new Set();
  const labels = [];
  for (const group of featureCodes) {
    for (const code of group) {
      const label = FEATURE_LABELS[code];
      if (label && !seen.has(label)) {
        seen.add(label);
        labels.push(label);
      }
    }
  }
  return labels;
}

// Codes that count as "amenities" for the filter pills
const AMENITY_CODES = new Set(["BALCONY", "ROOF_TERRACE", "SWIMMING_POOL", "PARKING_INCLUDED"]);

export function mapAmenities(featureCodes = []) {
  const amenities = [];
  for (const group of featureCodes) {
    for (const code of group) {
      if (AMENITY_CODES.has(code)) {
        if (code === "BALCONY" || code === "ROOF_TERRACE") amenities.push("Balcony / terrace");
        else if (code === "SWIMMING_POOL") amenities.push("Swimming pool");
        else if (code === "PARKING_INCLUDED") amenities.push("Parking included");
      }
    }
  }
  return [...new Set(amenities)];
}

function dateStr(d) {
  return d.toISOString().split("T")[0];
}

function avgPriceFromCalendar(calRoom) {
  const cal = calRoom?.calendar ?? {};
  const prices = Object.values(cal)
    .map((d) => d?.price ?? null)
    .filter((p) => typeof p === "number" && p > 0);
  if (!prices.length) return null;
  return Math.round(prices.reduce((s, p) => s + p, 0) / prices.length);
}

export async function fetchPropertyListings(propertyId = "322695") {
  // Dates: tomorrow + 2 nights, to get representative pricing
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 2);
  const startDate = dateStr(tomorrow);
  const endDate = dateStr(dayAfter);

  const headers = { accept: "application/json", token: TOKEN };
  const opts = { next: { revalidate: 3600 } };

  const [propRes, calRes] = await Promise.all([
    fetch(
      `https://beds24.com/api/v2/properties?id=${propertyId}&includePictures=true&includeAllRooms=true&includeOffers=true`,
      { headers, ...opts }
    ),
    fetch(
      `https://beds24.com/api/v2/inventory/rooms/calendar?startDate=${startDate}&endDate=${endDate}&propertyId=${propertyId}&includePrices=true&includeNumAvail=true&includeMinStay=true`,
      { headers, ...opts }
    ),
  ]);

  const propData = await propRes.json();
  const calData = await calRes.json();

  const property = propData?.data?.[0];
  if (!property) return [];

  const propFeatures = mapFeatureCodes(property.featureCodes ?? []);
  const propAmenities = mapAmenities(property.featureCodes ?? []);

  // Build a map of roomId → calendar data
  const calMap = {};
  for (const r of calData?.data ?? []) {
    calMap[r.roomId] = r;
  }

  // Build a map of pictures per room (pictures may be on property level)
  const picsByRoom = {};
  for (const pic of property.pictures ?? []) {
    const rid = pic.roomId ?? "property";
    if (!picsByRoom[rid]) picsByRoom[rid] = [];
    picsByRoom[rid].push(pic.url ?? pic.pictureUrl ?? pic.src ?? "");
  }

  return (property.roomTypes ?? []).map((room) => {
    const calRoom = calMap[room.id];
    const price = avgPriceFromCalendar(calRoom) ?? room.minPrice ?? 0;
    const roomFeatures = mapFeatureCodes(room.featureCodes ?? []);
    const allFeatures = [...new Set([...roomFeatures, ...propFeatures])];
    const pics = picsByRoom[room.id] ?? picsByRoom["property"] ?? [];

    // Map enabled offers for this room
    const enabledOffers = (room.offers ?? [])
      .filter((o) => o.enable === "always" || o.enable === "yes")
      .sort((a, b) => a.position - b.position)
      .map((o) => {
        const cancellation = o.allowCancellation?.type;
        const minStayDays =
          o.minimumStay?.type === "numberOfDays"
            ? o.minimumStay.numberOfDaysValue
            : null;

        let cancellationLabel = "Per property cancellation policy";
        let tag = null;
        if (cancellation === "never") {
          cancellationLabel = "Non-refundable";
          tag = "Non-refundable";
        } else if (cancellation === "always") {
          cancellationLabel = "Free cancellation";
          tag = "Free cancellation";
        }

        const name = o.name?.trim() || `Standard Rate`;

        return {
          id: String(o.offerId),
          label: name,
          tag,
          price,
          description: [
            "Best direct rate — no OTA fees.",
            minStayDays ? `Minimum stay: ${minStayDays} night${minStayDays !== 1 ? "s" : ""}.` : null,
          ]
            .filter(Boolean)
            .join(" "),
          notes: [
            cancellationLabel,
            minStayDays ? `Min ${minStayDays} nights` : null,
          ]
            .filter(Boolean)
            .join(" · "),
          hasPhoto: false,
        };
      });

    const ROOM_TYPE_LABEL = {
      single: "Single Room",
      double: "Double Room",
      twin: "Twin Room",
      triple: "Triple Room",
      quad: "Quadruple Room",
      suite: "Suite",
      studio: "Studio",
      apartment: "Apartment",
      dormitory: "Dormitory",
      villa: "Villa",
      cottage: "Cottage",
    };

    return {
      id: room.id,
      propertyId: property.id,
      type: ROOM_TYPE_LABEL[room.roomType] ?? room.roomType ?? "Room",
      name: room.name,
      rating: null,
      district: property.city ?? "",
      sub: property.address ?? "",
      capacity: `Up to ${room.maxPeople ?? 2} guests`,
      description: [
        property.city && `Located in ${property.city}`,
        room.roomType && `${ROOM_TYPE_LABEL[room.roomType] ?? room.roomType}`,
        room.roomSize ? `${room.roomSize} m²` : null,
        property.checkInStart && `Check-in from ${property.checkInStart}`,
      ]
        .filter(Boolean)
        .join(" · "),
      features: allFeatures.slice(0, 6),
      amenities: propAmenities,
      photos: pics.length,
      pictureUrls: pics,
      bookDirect: price,
      bookingCom: price ? Math.round(price * 1.15) : 0,
      airbnb: price ? Math.round(price * 1.12) : 0,
      minStay: room.minStay ?? 1,
      maxStay: room.maxStay ?? 0,
      checkIn: property.checkInStart,
      checkOut: property.checkOutEnd,
      offers: enabledOffers,
    };
  });
}
