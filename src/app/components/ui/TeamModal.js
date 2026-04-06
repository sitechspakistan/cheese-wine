import Image from "next/image";

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white  overflow-hidden max-w-4xl w-full flex sm:flex-row shadow-2xl "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image */}
        <div className="relative w-[50%] sm:h-auto flex-shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Modal Content */}
        <div className="px-8 pb-[50px] pt-8 flex flex-col justify-center gap-3 w-[50%]">
          <div
            className=" flex items-center justify-end cursor-pointer "
            onClick={onClose}
          >
            <Image
              src="/assets/svg-icons/close.svg"
              alt="Close Modal"
              width={32}
              height={32}
            />
          </div>
          <h3 className="text-2xl font-bold ">{member.name}</h3>
          <p className="text-sm font-semibold text-[#666666]">
            {member.location}
          </p>
          <p className="text-[#666666] text-base leading-relaxed mt-2">
            "{member.quote}"
          </p>
        </div>

        {/* Close Button */}
      </div>
    </div>
  );
}
