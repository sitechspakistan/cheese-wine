import React from "react";
import BlogCard from "../ui/BlogCard";

const posts = [
  {
    id: 1,
    imageSrc: "blog-1.jpg",
    category: "Wine Restaurant",
    date: "15 Mar, 2026",
    title:
      "How To Create A Portuguese Wine & Cheese Experience In Cheese & Wine Suites, Lapa Or Apartments",
    href: "bulletin/detail",
  },
  {
    id: 2,
    imageSrc: "blog-2.jpg",
    category: "Outdoor Restaurant",
    date: "1 Feb, 2026",
    title: "Amoreiras: Where History Meets Contemporary Elegance In Lisbon",
    href: "bulletin/detail",
  },
  {
    id: 3,
    imageSrc: "blog-3.jpg",
    category: "Outdoor",
    date: "12 Jan, 2026",
    title: "How To Explore Lisbon's Museums In A Weekend",
    href: "/bulletin/detail",
  },
];

const TheBulletin = () => {
  return (
    <section className="bg-[#f5f5f5] py-[80px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">The Bulletin</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              imageSrc={post.imageSrc}
              category={post.category}
              date={post.date}
              title={post.title}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheBulletin;
