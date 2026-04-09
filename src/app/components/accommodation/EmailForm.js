import React from "react";
import BookButton from "../ui/BookButton";

const EmailForm = () => {
  return (
    <div
      id="stay-informed"
      className="bg-gray-200 py-[80px] border-b border-gray-300"
    >
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-3">Stay Tuned!</h2>
        <p className="text-gray-600 mb-6">
          Be the first to know about our opening, Get notified when Hotel LX
          Lapa opens.
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1e2d4a] bg-white"
          />
          <BookButton
            label="Notify Me"
            href="/book"
            className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 [&>span]:border-white"
            url="/assets/svg-icons/round-arrow-white.svg"
          />
        </div>
        <p className="text-xs text-gray-400 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default EmailForm;
