"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BookButton from "../ui/BookButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto flex items-center  px-10 py-4">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-7 flex-1">
          <Link
            href="/about"
            className="text-gray-600 text-sm tracking-wide hover:text-black transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/accommodation"
            className="text-gray-600 text-sm tracking-wide hover:text-black transition-colors"
          >
            Accommodation
          </Link>
          <Link
            href="/experiences"
            className="text-gray-600 text-sm tracking-wide hover:text-black transition-colors"
          >
            Experiences
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center no-underline">
            {/* <span className="text-xl font-bold text-gray-900 tracking-wider font-serif">
              Cheese & Wine
            </span>
            <span className="text-[10px] text-gray-400 tracking-[3px] uppercase">
              handmade hospitality
            </span> */}
            <Image
              src="/assets/svg-logo/header-logo.svg"
              alt="Cheese & Wine Logo"
              width={400}
              height={100}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-7 flex-1 justify-end">
          <Link
            href="/bulletin"
            className="text-gray-600 text-sm tracking-wide hover:text-black transition-colors"
          >
            The Bulletin
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 text-sm tracking-wide hover:text-black transition-colors"
          >
            Contact Us
          </Link>
          <BookButton />
          {/* <Link
            href="/book"
            className="bg-gray-900 text-white text-xs tracking-widest px-5 py-2 rounded-sm hover:bg-gray-700 transition-colors"
          >
            BOOK NOW
          </Link> */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-8 pb-6 gap-4 bg-white shadow-lg">
          <Link
            href="/about"
            className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/accommodation"
            className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Accommodation
          </Link>
          <Link
            href="/experiences"
            className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Experiences
          </Link>
          <Link
            href="/bulletin"
            className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            The Bulletin
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/book"
            className="bg-gray-900 text-white text-sm tracking-widest text-center py-3 rounded-sm hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
