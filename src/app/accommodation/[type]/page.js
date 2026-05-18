import ApartmentsSec from "@/app/components/sections/ApartmentsSec";
import HeroSub from "@/app/components/sections/Hero-2";

export async function generateMetadata({ params }) {
  const { type } = await params;

  const heading = type.charAt(0).toUpperCase() + type.slice(1);

  return {
    title: `${heading} | Cheese & Wine`,
  };
}

export default async function AccommodationTypePage({ params }) {
  const { type } = await params;
  const heading = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <>
      <HeroSub heading={heading} overlay="true" />
      <ApartmentsSec />
    </>
  );
}
