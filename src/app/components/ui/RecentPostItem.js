import Image from "next/image";
import Link from "next/link";

export default function RecentPostItem({
  date,
  title,
  imageUrl = "/assets/images/apartments.jpg",
  href = "#",
}) {
  return (
    <Link
      href={href}
      className="flex gap-3 py-2.5 border-t border-gray-100 hover:bg-gray-50 transition-colors group"
    >
      {/* Thumbnail */}
      <div className="relative w-[72px] h-[56px] rounded-sm overflow-hidden flex-shrink-0 bg-gray-200">
        <Image
          src={imageUrl}
          alt={title}
          width={72}
          height={56}
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center gap-1 min-w-0">
        <span className="text-[11px] text-gray-400">{date}</span>
        <p className="text-[12px] text-gray-700 leading-snug group-hover:text-gray-900 transition-colors line-clamp-2">
          {title}
        </p>
      </div>
    </Link>
  );
}
