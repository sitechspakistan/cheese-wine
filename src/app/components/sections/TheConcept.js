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
      />
    </>
  );
}
