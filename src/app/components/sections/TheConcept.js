import ConceptSec from "../ui/ConceptSec";
import FeatureSection from "../ui/FeatureSec";
import BookingBar from "../ui/BookingBar";

export default function TheConcept() {
  return (
    <>
      <BookingBar />
      <FeatureSection />
      <ConceptSec
        playIcon="/assets/svg-icons/play-btn.svg"
        imageSrc="/assets/images/hero-bg.jpg"
        watchLabel="Watch the story"
        buttonLabel="Dicover"
        paragraph="Have a seat, enjoy a glass of wine, a slice of cheese, and get ready to embark on a journey through Lisbon. Cheese & Wine is a different and unique concept to visit and enjoy Lisbon. We want you to feel at home and to love this city as much as we do. You will experience handmade hospitality, coupled with beautiful decorated units and scenarios."
      />
    </>
  );
}
