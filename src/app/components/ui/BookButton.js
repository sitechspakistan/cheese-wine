import Image from "next/image";
import Link from "next/link";

export default function BookButton({
  label = "BOOK NOW",
  href = "#",
  className = "",
  url = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-bold tracking-widest text-[#1e2d4a] hover:opacity-70 transition-opacity uppercase ${className}`}
    >
      {label}
      <Image
        src={url || "/assets/svg-icons/arrow-right.svg"}
        alt="Arrow Right"
        width={32}
        height={32}
      />
    </Link>
  );
}
