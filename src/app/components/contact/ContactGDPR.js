// components/contact/ContactGDPR.jsx

import Link from "next/link";

export default function ContactGDPR({ checked, onChange }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name="gdpr"
        checked={checked}
        onChange={onChange}
        className="mt-1 accent-[#1e2d4a]"
      />
      <span className="text-sm text-gray-600">
        I consent to Cheese & Wine processing my data to respond to this
        enquiry. See our{" "}
        <Link
          href="/privacy-policy"
          className="underline text-[#1e2d4a] hover:opacity-70"
        >
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  );
}
