import { blogPosts } from "@/app/data/blogPost";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-[300px] object-cover rounded-lg mb-6"
      />

      <p className="text-sm text-gray-400 mb-2">
        {post.tag} • {post.date}
      </p>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-600 leading-relaxed">{post.description}</p>
    </div>
  );
}
