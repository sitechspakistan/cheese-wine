import BookingBarForm from "./BookingBarForm";

const TOKEN =
  "mlcRaqmN4wpr/tAJNb2KKlHHETohyHSZ8GRbtWUaLJ6Rg0XUZS11QZyoamvCe4ePtSvhYjPhznkplFcJFLyRs+UuGI/YWyl41T/2/QVpD57YvcdAht0GdkiSNcQcTf9MG0Tv9qcvFH+8vMhTJYzcHA==";

async function fetchProperties() {
  try {
    const res = await fetch(
      "https://beds24.com/api/v2/properties?includeLanguages=en&includeTexts=all&includePictures=false&includeOffers=false",
      {
        headers: { accept: "application/json", token: TOKEN },
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
    <div className="px-4 md:px-6 mb-[64px] -mt-[80px] relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-6 border-2 border-gray-300 bg-gray-100">
        <BookingBarForm properties={properties} />
        <p className="text-[12px] font-medium text-gray-500 tracking-wide text-center mt-4">
          No hidden fees. Instant confirmation.
        </p>
      </div>
    </div>
  );
}
