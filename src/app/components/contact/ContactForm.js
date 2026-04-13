"use client";
import { useState } from "react";
import ContactInput from "./ContactInput";
import ContactSelect from "./ContactSelect";
import ContactTextarea from "./ContactTextArea";
import BookButton from "../ui/BookButton";
import ContactGDPR from "./ContactGDPR";
import Image from "next/image";

const reasonOptions = [
  { value: "booking", label: "Booking Enquiry" },
  { value: "experience", label: "Experience Enquiry" },
  { value: "general", label: "General Question" },
  { value: "complaint", label: "Complaint" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    reason: "",
    email: "",
    phone: "",
    description: "",
    gdpr: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <ContactInput
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <ContactSelect
        name="reason"
        placeholder="Reason"
        value={formData.reason}
        onChange={handleChange}
        options={reasonOptions}
      />
      <ContactInput
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <ContactInput
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <ContactTextarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <ContactGDPR checked={formData.gdpr} onChange={handleChange} />
      <div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 font-bold tracking-widest bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 uppercase"
        >
          SUBMIT NOW
          <Image
            src="/assets/svg-icons/round-arrow-white.svg"
            alt="Arrow"
            width={32}
            height={32}
          />
        </button>
        <p className="text-xs text-gray-400 mt-3">
          We typically respond within 2-4 hours during working hours.
        </p>
      </div>
    </form>
  );
}
