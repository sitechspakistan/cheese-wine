import Image from "next/image";
import Hero from "./components/sections/Hero";
import TheConcept from "./components/sections/TheConcept";
import TheBulletin from "./components/sections/TheBulletin";
import AccommodationSec from "./components/sections/Accomodation";
import AboutPage from "./components/sections/AboutSec";
import ReviewsSec from "./components/sections/ReviewSec";
import EmailForm from "./components/accommodation/EmailForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <TheConcept />
      <ReviewsSec />
      <AccommodationSec detailed={true} />
      <TheBulletin />
      <AboutPage />
      <EmailForm />
    </main>
  );
}
