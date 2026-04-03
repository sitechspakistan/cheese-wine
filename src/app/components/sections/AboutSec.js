import ConceptSec from "../ui/ConceptSec";
import GallerySec from "../ui/GallerySec";

export default function AboutPage() {
  return (
    <>
      <ConceptSec
        imageSrc="/assets/images/room.jpg"
        reverse={true}
        heading="Hotel LX Lapa (Coming Soon)"
        paragraph="Located in the heart of the Lapa district, in an old palace, that
      houses not only this Guesthouse, but also a concept store. This is
      the perfect place for the price-conscious and lovers of a more
relaxed and trendy vibe. With amazing views and extremely fast
internet, it is also a good option for more extended stays."
        buttonLabel="Discover"
      />
      <GallerySec
        images={["1.jpg", "2.jpg", "3.jpg"]}
        heading="Cheese Wine"
        paragraph="Located in the heart of the Lapa district, in an old palace, that houses not only this Guesthouse, but also a concept store. This is the perfect place for the price-conscious and lovers of a more relaxed and trendy vibe."
        hashtag="#cheese.wine"
      />
    </>
  );
}
