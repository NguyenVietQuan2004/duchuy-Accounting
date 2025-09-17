"use client";

import Link from "next/link";
import Service from "@/components/service";

export default function ServicesSection() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Tiêu đề */}
        <div className="flex lg:items-center flex-col lg:flex-row justify-between mb-8 max-w-[1200px] px-2 mx-auto">
          <div>
            <p className="text-sm font-semibold uppercase text-gray-500 mb-2 lg:mb-6">Our Services</p>
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Những gì chúng tôi mang đến cho bạn</h2> */}
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer You</h2> */}
          </div>
          {/* <Link href="/service" className="text-orange-500 mt-4 lg:mt-0 font-medium underline">
            All Services
          </Link> */}
        </div>

        <Service />
      </div>
    </section>
  );
}
