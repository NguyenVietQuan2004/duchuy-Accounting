"use client";

import Link from "next/link";
import Service from "@/components/service";

export default function ServicesSection() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="flex items-center justify-between mb-8 max-w-[1200px] px-4 mx-auto">
          <div>
            <p className="text-sm font-semibold uppercase text-gray-500 mb-6">Dịch vụ của chúng tôi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Những gì chúng tôi mang đến cho bạn</h2>
          </div>
          <Link href="/service" className="text-orange-500 font-medium underline">
            Tất cả dịch vụ
          </Link>
        </div>

        <Service />
      </div>
    </section>
  );
}
