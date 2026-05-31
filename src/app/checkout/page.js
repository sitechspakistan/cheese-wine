import HeroSub from "../components/sections/Hero-2";
import CheckoutClient from "./CheckoutClient";

export const metadata = {
  title: "Checkout | Cheese & Wine",
};

export default function CheckoutPage() {
  return (
    <>
      <HeroSub heading="Checkout" overlay="true" />
      <CheckoutClient />
    </>
  );
}
