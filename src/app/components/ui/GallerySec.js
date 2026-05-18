import Image from "next/image";
import Link from "next/link";

export default function GallerySec({
  images = ["4.png", "5.jpg", "6.jpg", "1.jpg", "2.jpg", "3.jpg"],
  heading = "",
  paragraph = "",
  hashtag = "",
}) {
  const INSTAGRAM_URL = "https://www.instagram.com/cheese.wine/";

  return (
    <section className="pb-[80px] px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        {/* Image Grid — 4–6 images in a 2-row grid */}
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[70%] group"
          aria-label="Visit our Instagram profile"
        >
          <div className="grid grid-cols-3 gap-2">
            {images.slice(0, 6).map((src, index) => (
              <div key={index} className="h-[200px] overflow-hidden">
                <Image
                  src={`/assets/images/gallery/${src}`}
                  alt={`Instagram photo ${index + 1}`}
                  height={300}
                  width={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Link>
        {/* Text Side */}
        <div className="w-[30%]">
          {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
          {paragraph && (
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {paragraph}
            </p>
          )}
          {hashtag && (
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
              aria-label={`Follow us on Instagram: ${hashtag}`}
            >
              {/* Instagram icon */}
              <Image
                src="/assets/svg-icons/instagram.svg"
                alt="Instagram icon"
                width={40}
                height={40}
              />

              {/* Handle */}
              <h3 className="text-3xl font-bold underline transition-colors duration-200 group-hover:text-pink-600">
                {hashtag}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
