import React from "react";
import BookButton from "../ui/BookButton";

const ContactInquiry = () => {
  const experiences = [
    "Private Yoga Class",
    "Sailing Experience",
    "Birthday Cake",
    "Flower Bouquet",
    "Champagne In The Room",
  ];

  return (
    <section className="pb-16  max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Contact Us - Inquire Activities
      </h2>

      {/* Row 1 */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[
          ["YOUR NAME", "Your Name"],
          ["EMAIL", "Your Email"],
          ["PHONE", "Phone Number"],
        ].map(([label, placeholder]) => (
          <div key={label}>
            <label className="block mb-1 text-[16px] font-bold  uppercase text-gray-500">
              {label}
            </label>
            <input
              type="text"
              placeholder={placeholder}
              className="bg-[#dedede] border border-gray-300 px-3 py-2 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500"
            />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[
          ["ACTIVITY DATE", "Date"],
          ["NUMBER OF PEOPLE", "01"],
        ].map(([label, placeholder]) => (
          <div key={label}>
            <label className="block mb-1 text-[16px] font-bold  uppercase text-gray-500">
              {label}
            </label>
            <input
              type="text"
              placeholder={placeholder}
              className="bg-[#dedede] border border-gray-300  px-3 py-2 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500"
            />
          </div>
        ))}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block mb-1 text-[16px] font-bold  uppercase text-gray-500">
          MESSAGE
        </label>
        <textarea
          rows={5}
          placeholder="Message"
          className="bg-[#dedede] border border-gray-300  px-3 py-2 text-sm text-gray-400  w-full focus:outline-none focus:border-gray-500 resize-none"
        />
      </div>

      {/* Checkboxes */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-4 text-black">Experience</h3>
        <div className="flex flex-wrap justify-between ">
          {experiences.map((exp) => (
            <label
              key={exp}
              className="flex items-center gap-3 cursor-pointer text-base text-[#6e6e6e]"
            >
              <input type="checkbox" className="w-8 h-8 " />
              {exp}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <BookButton
          className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white "
          url="/assets/svg-icons/round-arrow-white.svg"
        />
      </div>
    </section>
  );
};

export default ContactInquiry;
