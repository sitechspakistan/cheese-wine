"use client";

import React, { useState } from "react";
import HeroSub from "../components/sections/Hero-2";
import BulletinSidebar from "../components/ui/BulletinSidebar";
import BulletinBlogCard from "../components/ui/BulletinBlogCard";

import { blogPosts } from "../data/blogPost";
import BookButton from "../components/ui/BookButton";
import EmailForm from "../components/accommodation/EmailForm";

const bulletinPage = () => {
  const ITEMS_PER_PAGE = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentPosts = blogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <>
      <HeroSub heading="Bulletin" overlay="true" />

      <div className="flex gap-7 items-start px-4 py-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          {currentPosts.map((post) => (
            <BulletinBlogCard
              key={post.id}
              tag={post.tag}
              date={post.date}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              href="/bulletin/detail"
            />
          ))}
          <div className="flex justify-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-4 py-2 bg-gray-200 "
            >
              Prev
            </button>

            <span className="px-4 py-2">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-4 py-2 bg-[#1e2d4a] text-white"
            >
              Next
            </button>
          </div>

          {/* <BookButton
            className="bg-[#1e2d4a] text-white border-[#1e2d4a] px-6 py-2.5 hover:opacity-90 w-fit mt-8 text-center mx-auto inline-block"
            url="/assets/svg-icons/round-arrow-white.svg"
            label="More Blogs"
            href={"#"}
          /> */}
        </div>
        {/* Sidebar */}
        <BulletinSidebar />
      </div>
      <EmailForm para="Get Lisbon insider tips in your inbox." />
      {/* <CTABanner
        heading="Get Lisbon insider tips in your inbox"
        buttonHref="/about"
        buttonLabel="About us"
      /> */}
    </>
  );
};

export default bulletinPage;
