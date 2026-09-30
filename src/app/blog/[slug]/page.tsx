import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS } from "@/data/blogs";
import { Clock, User, Calendar, ArrowLeft, Share2, Tag, BookOpen } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOGS.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = BLOGS.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <article className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest bg-white px-3 py-1 border border-[#E8E3DA] inline-block mb-3">
            {blog.category}
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-4 pt-4 border-t border-[#E8E3DA]">
            <span className="flex items-center gap-1 font-semibold text-gray-800">
              <User className="w-3.5 h-3.5 text-[#B38E5D]" /> {blog.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#B38E5D]" /> {blog.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#B38E5D]" /> {blog.readingTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Cover Photo */}
        <div className="aspect-[16/9] bg-[#FAF8F5] border border-[#E8E3DA] overflow-hidden mb-10 shadow-soft">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-gray-800 leading-relaxed space-y-6">
          <p className="text-base sm:text-lg font-serif italic text-gray-900 border-l-4 border-[#B38E5D] pl-4 py-1">
            {blog.summary}
          </p>

          {blog.content.map((paragraph, idx) => (
            <p key={idx} className="leading-loose">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Footer Box */}
        <div className="mt-12 p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
              Author
            </span>
            <h4 className="font-bold text-sm text-gray-900">{blog.author}</h4>
            <p className="text-xs text-gray-500">
              Gupta Stationery Content & Research Team, Raipur
            </p>
          </div>
          <Link
            href="/shop"
            className="px-6 py-2.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
          >
            Explore Related Products
          </Link>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E8E3DA]">
            <h3 className="font-serif text-2xl font-bold uppercase tracking-tight text-[#1C1C1C] mb-6">
              More Recommended Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedBlogs.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group bg-white border border-[#E8E3DA] p-4 flex flex-col justify-between hover:border-black transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-[#B38E5D]">
                      {r.category}
                    </span>
                    <h4 className="font-serif text-xs font-bold text-gray-900 group-hover:text-[#B38E5D] transition-colors line-clamp-2">
                      {r.title}
                    </h4>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-4 block">
                    {r.readingTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
