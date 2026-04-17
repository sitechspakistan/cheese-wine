import React from "react";
import BookButton from "../ui/BookButton";
import ContactInput from "../contact/ContactInput";
import ContactTextarea from "../contact/ContactTextArea";

const ContactInquiry = () => {
  const experiences = [
    "Private Yoga Class",
    "Sailing Experience",
    "Birthday Cake",
    "Flower Bouquet",
    "Champagne In The Room",
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Contact Us - Inquire Activities
      </h2>

      {/* Row 1 */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {["Your Name", "Your Email", "Phone Number"].map(
          (placeholder, index) => (
            <ContactInput key={index} placeholder={placeholder} />
          ),
        )}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {["Date", "Enter People"].map((placeholder, index) => (
          <div key={index}>
            <ContactInput placeholder={placeholder} />
          </div>
        ))}
      </div>

      {/* Message */}
      <div className="mb-6">
        <ContactTextarea placeholder={"Message"} />
      </div>

      {/* Checkboxes */}
      <div className="mb-10">
        <h3 className="text-3xl font-bold mb-4 text-black">Experience</h3>
        <div className="flex flex-wrap justify-between ">
          {experiences.map((exp) => (
            <label
              key={exp}
              className="flex items-center gap-3 cursor-pointer text-base text-[#6e6e6e]"
            >
              <input type="checkbox" className="w-4 h-full" />
              {exp}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <BookButton
          label="Inquire Now"
          className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white "
          url="/assets/svg-icons/round-arrow-white.svg"
        />
      </div>
    </section>
  );
};

export default ContactInquiry;
