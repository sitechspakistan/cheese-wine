import Image from "next/image";

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl overflow-hidden max-w-2xl w-full flex flex-col sm:flex-row shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image */}
        <div className="relative w-full sm:w-[45%] h-64 sm:h-auto flex-shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Modal Content */}
        <div className="p-8 flex flex-col justify-center gap-3">
          <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-sm font-semibold text-[#1e2d4a]">
            {member.location}
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-2">
            "{member.quote}"
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition text-lg font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
