import HeroSub from "@/app/components/sections/Hero-2";
import BulletinSidebar from "@/app/components/ui/BulletinSidebar";

export default function BlogDetail() {
  return (
    <>
      <HeroSub
        heading="Amoreiras: Where History Meets Contemporary Elegance In Lisbon"
        overlay="true"
        breadcrumb="Amoreiras: Where History Meets Contemporary Elegance In Lisbon"
      />
      <div className="flex gap-7 items-start px-4 py-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <img
            src="/assets/images/apartments.jpg"
            alt="Blog"
            className="w-full h-[500px] object-cover rounded-lg mb-6"
          />

          <p className="text-sm text-gray-400 mb-2">
            Lifestyle • July 22, 2026
          </p>

          <h1 className="text-3xl font-bold mb-4">
            Day 1: History & Lisbon’s Identity
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Morning:  Museu do Azulejo (National Tile Museum)
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Why visit? Tiles are one of Portugal’s most iconic art forms, and
            this museum is a must-see to understand Lisbon’s beauty.
          </p>

          <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-10">
            <li>
              Housed in a 16th-century convent, the museum showcases the
              stunning tilework from the 15th century until today.
            </li>
            <li>
              Don’t miss the giant tile mural of Lisbon before the 1755
              earthquake!
            </li>
            <li>
              Tip: There’s a beautiful coffee shop inside—perfect for a coffee
              break.
            </li>
          </ul>

          <img
            src="/assets/images/blog/blog-1.jpg"
            alt="Blog"
            className="w-full h-[500px] object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">Afternoon:  Museu do Fado</h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Morning:  Museu do Azulejo (National Tile Museum)
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Why visit? You can’t fully experience Lisbon without
            understanding Fado music.
          </p>

          <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-10">
            <li>
              Located in Alfama, the heart of Fado, this museum tells the story
              of Portugal’s soulful music.
            </li>
            <li>
              Listen to original recordings and see instruments used by
              legendary Fado singers.
            </li>
            <li>
              Tip: After the museum, wander through Alfama’s streets and catch a
              live Fado performance in the evening.
            </li>
          </ul>

          <img
            src="/assets/images/blog/blog-2.jpg"
            alt="Blog"
            className="w-full h-[500px] object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">Day 2: Art & Culture</h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Morning: Calouste Gulbenkian Museum{" "}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Why visit? It's Lisbon's best Art Museum, with an extraordinary
            collection spanning ancient Egypt, Islamic art, and European
            masterpieces.
          </p>

          <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-10">
            <li>
              See the works of Rembrandt, Monet, and René Lalique,
              alongside Persian carpets and Roman coins.
            </li>
            <li>
              Surrounded by a peaceful garden, it’s the perfect spot to relax.
            </li>
            <li>
              Tip: If you love modern art, visit the museum’s Modern
              Collection in the same complex.
            </li>
          </ul>
          <img
            src="/assets/images/blog/blog-3.jpg"
            alt="Blog"
            className="w-full h-[500px] object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">
            Afternoon:  MAAT (Museum of Art, Architecture, and Technology)
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Why visit? A mix of contemporary art and technology in a stunning
            riverside setting.
          </p>

          <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-10 ">
            <li>
              The futuristic building is a highlight, and you can walk on the
              rooftop for an amazing view of the river.
            </li>

            <li>
              Tip: End your weekend with a sunset by the Tagus River—a perfect
              farewell to Lisbon.
            </li>
          </ul>
        </div>
        {/* Sidebar */}
        <BulletinSidebar />
      </div>
    </>
  );
}
