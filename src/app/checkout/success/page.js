import HeroSub from "../../components/sections/Hero-2";
import CheckoutSuccess from "./CheckoutSuccess";

export const metadata = {
  title: "Booking Confirmed | Cheese & Wine",
};

export default function SuccessPage() {
  return (
    <>
      <HeroSub heading="Booking Confirmed" overlay="true" />
      <CheckoutSuccess />
    </>
  );
}
