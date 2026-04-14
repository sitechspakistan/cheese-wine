import React from "react";
import RecentPostItem from "./RecentPostItem";

const defaultPosts = [
  {
    id: "1",
    date: "15 Mar, 2026",
    title: "How to Create a Portuguese Wine & Cheese Experience in Suites",
    imageUrl: "/assets/images/blog/blog-1.jpg",
    href: "/bulletin/detail",
  },
  {
    id: "2",
    date: "1 Feb, 2026",
    title: "Amoreiras: Where History Meets Contemporary Elegance In Lisbon",
    imageUrl: "/assets/images/blog/blog-2.jpg",
    href: "/bulletin/detail",
  },
  {
    id: "3",
    date: "12 Jan, 2026",
    title: "How To Explore Lisbon's Museums In A Weekend",
    imageUrl: "/assets/images/blog/blog-3.jpg",
    href: "/bulletin/detail",
  },
  {
    id: "4",
    date: "20 Dec, 2025",
    title: "Lisbon In Three Days: Your Perfect Visit Plan By Cheese & Wine",
    imageUrl: "/assets/images/gallery/1.jpg",
    href: "/bulletin/detail",
  },
  {
    id: "5",
    date: "15 Nov, 2025",
    title:
      "The Ultimate Guide To Lisbon: Essential Tips For First-Time Travelers",
    imageUrl: "/assets/images/gallery/3.jpg",
    href: "/bulletin/detail",
  },
];

export const categories = [
  {
    id: "1",
    name: "Lifestyle",
    slug: "lifestyle",
  },
  {
    id: "2",
    name: "Travel Guide",
    slug: "travel-guide",
  },
  {
    id: "3",
    name: "City Guide",
    slug: "city-guide",
  },
  {
    id: "4",
    name: "Architecture",
    slug: "architecture",
  },
  {
    id: "5",
    name: "Food & Culture",
    slug: "food-culture",
  },
  {
    id: "6",
    name: "Travel Tips",
    slug: "travel-tips",
  },
  {
    id: "7",
    name: "Luxury Stay",
    slug: "luxury-stay",
  },
];

const BulletinSidebar = () => {
  return (
    <div className="w-[300px] flex-shrink-0 flex flex-col gap-4 bg-gray-100 p-4">
      {/* Search */}
      <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2.5">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border-none outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
          />
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>

       <div className="overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800  pt-3.5">
          Categories
        </h3>
        {categories.map((cat, i) => (
          <a
            key={i}
            href={"#"}
            className="flex justify-between items-center py-2.5 divide-y  "
          >
            <span className="text-sm text-gray-700">
              {cat.name}
            </span>
            <span className="text-sm text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
              {`(${cat.id})`}
            </span>
          </a>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800  pt-3.5">
          Most Read
        </h3>
        {defaultPosts.map((post) => (
          <RecentPostItem
            key={post.id}
            date={post.date}
            title={post.title}
            imageUrl={post.imageUrl}
            href={post.href}
          />
        ))}
      </div>
     

      {/* Categories */}
      {/* <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
        <h3 className="text-[14px] font-semibold text-gray-800 px-3.5 pt-3.5 pb-2">
          Categories
        </h3>
        {categories.map((cat, i) => (
          <a
            key={i}
            href={cat.href ?? "#"}
            className="flex justify-between items-center px-3.5 py-2.5 border-t border-gray-100 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-[13px] text-gray-700 group-hover:text-gray-900">
              {cat.name}
            </span>
            <span className="text-[12px] text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
              {cat.count}
            </span>
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default BulletinSidebar;
