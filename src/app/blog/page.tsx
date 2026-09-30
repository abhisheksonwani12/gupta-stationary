import React from "react";
import Link from "next/link";
import { Clock, User, ArrowRight, BookOpen } from "lucide-react";
import { BLOGS } from "@/data/blogs";

export default function BlogIndexPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
            Knowledge & Insights
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-2">
            Stationery Guides & Expert Articles
          </h1>
          <p className="text-xs sm:text-sm text-[#706E6B] mt-3 leading-relaxed">
            Expert tips on student exam supplies, sustainable eco-friendly stationery, office desk productivity, and bulk buying strategies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Featured Top Article */}
        <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FAF8F5] border border-[#E8E3DA] p-6 sm:p-10 items-center">
            <div className="lg:col-span-6 relative aspect-video overflow-hidden border border-[#E8E3DA]">
              <img
                src={BLOGS[0].coverImage}
                alt={BLOGS[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest bg-white px-2.5 py-1 border border-[#E8E3DA] inline-block">
                {BLOGS[0].category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-gray-900 leading-snug">
                <Link href={`/blog/${BLOGS[0].slug}`} className="hover:text-[#B38E5D] transition-colors">
                  {BLOGS[0].title}
                </Link>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {BLOGS[0].summary}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#B38E5D]" /> {BLOGS[0].author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#B38E5D]" /> {BLOGS[0].readingTime}
                </span>
              </div>
              <div className="pt-2">
                <Link
                  href={`/blog/${BLOGS[0].slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.slice(1).map((blog) => (
            <article
              key={blog.id}
              className="bg-white border border-[#E8E3DA] flex flex-col justify-between overflow-hidden group hover:shadow-luxury hover:border-[#1C1C1C]/40 transition-all"
            >
              <div>
                <div className="relative aspect-[16/10] bg-[#FAF8F5] overflow-hidden border-b border-[#E8E3DA]">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#1C1C1C] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    <span>{blog.publishedDate}</span>
                    <span>•</span>
                    <span>{blog.readingTime}</span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold uppercase text-gray-900 group-hover:text-[#B38E5D] transition-colors leading-snug">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                <span className="text-gray-400 font-normal">By {blog.author}</span>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[#1C1C1C] group-hover:text-[#B38E5D] transition-colors flex items-center gap-1 uppercase tracking-wider text-[11px]"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
