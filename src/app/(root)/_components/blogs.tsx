"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      title: "Qution",
      description: "In the deep blue sky, white clouds float like dandelion seeds drifting in the wind...",
      image: "https://w.ladicdn.com/s700x550/57b167c9ca57d39c18a1c57c/dWToh0S_20240309100739.jpeg",
      href: "#",
    },
    {
      title:
        "The Universe's Mysteries Unfold Before Humaiet Steps on the Path of Exploraiet Steps on the Path of Exploranity",
      description:
        "At night, streetlights shimmer, creating a romantic and comforting atmosphere, highlighting the mysterious beauty...",
      image: "https://w.ladicdn.com/s700x550/57b167c9ca57d39c18a1c57c/dWToh0S_20240309100739.jpeg",
      href: "#",
    },
    {
      title: "Exploring the Deep Sea with a Team of Researchers",
      description: "By theair...",
      image: "https://w.ladicdn.com/s700x550/57b167c9ca57d39c18a1c57c/dWToh0S_20240309100739.jpeg",
      href: "#",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
      {/* Header */}
      <div className="flex justify-between flex-col lg:flex-row lg:items-center mb-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">OUR BLOG</p>
          <h2 className="text-3xl font-bold mt-2">Our Latest News</h2>
        </div>
        <Link href="#" className="text-orange-500 font-medium underline text-sm">
          View All
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-[250px]"
            />
            <h3 className="text-lg font-bold mt-4 line-clamp-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{blog.description}</p>
            <Link href={blog.href} className="mt-3 text-orange-500 font-medium underline text-sm">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
