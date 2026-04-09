import Image from "next/image";
import Link from "next/link";

export default function GallerySec({
  images = [],
  heading = "",
  paragraph = "",
  hashtag = "",
}) {
  return (
    <section className="pb-[80px] px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        {/* 3 Images */}
        <div className="flex gap-4 w-[70%]">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-1/3 h-[320px] overflow-hidden"
            >
              <Image
                src={`/assets/images/gallery/${src}`}
                alt={`gallery-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

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
              href={"https://www.instagram.com/cheese.wine/"}
              target="_blank"
            >
              <h3 className="text-3xl font-bold underline">{hashtag}</h3>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
