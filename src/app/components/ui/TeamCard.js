import Image from "next/image";

export default function TeamCard({ member, onClick }) {
  return (
    <div
      onClick={() => onClick(member)}
      className="cursor-pointer group overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Card Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Footer */}
      <div className="bg-[#1e2d4a] text-white text-center py-4 px-3">
        <p className="font-semibold text-lg">{member.name}</p>
        <p className="text-sm text-gray-300 mt-1">{member.location}</p>
      </div>
    </div>
  );
}
