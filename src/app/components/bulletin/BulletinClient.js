"use client";
import React, { useState } from "react";
import Image from "next/image";
import BulletinBlogCard from "../ui/BulletinBlogCard";
import BulletinSidebar from "../ui/BulletinSidebar";
import { blogPosts } from "@/app/data/blogPost";

const BulletinClient = () => {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex gap-7 items-start px-4 py-10 max-w-7xl mx-auto">
      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-5">
        {currentPosts.map((post) => (
          <BulletinBlogCard key={post.id} {...post} href="/bulletin/detail" />
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            <Image
              src="/assets/svg-icons/pre.svg"
              alt="Previous"
              width={30}
              height={30}
            />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-[12px] flex items-center justify-center border text-[12px] rounded
              ${
                currentPage === page
                  ? "bg-[#1e2d4a] text-white border-[#1e2d4a]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            <Image
              src="/assets/svg-icons/next.svg"
              alt="Next"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <BulletinSidebar />
    </div>
  );
};

export default BulletinClient;
