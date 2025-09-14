"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  const logoWhite = "/images/logoblue.png";
  return (
    <section className="py-6 lg:pb-20 pt-0 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
          {/* Logo + Date */}
          <div className="flex flex-col items-start lg:items-center gap-4 col-span-1 md:col-span-3">
            <div className="flex items-center space-x-0">
              <div className="w-[60px] md:w-[70px] lg:w-[90px] h-[60px] md:h-[70px] lg:h-[90px] flex items-center justify-center">
                {/* <Image
                  alt=""
                  width={200}
                  height={200}
                  src={"https://w.ladicdn.com/s400x400/57b167c9ca57d39c18a1c57c/business-011-20231106081214-8ssds.png"}
                /> */}
                <Image alt="" width={200} height={200} src={logoWhite} />
              </div>
              {/* <span className="font-bold flex flex-col text-[#003978]">
                <span className="text-4xl leading-[32px]">ntnps</span>
                <span className="text-sm leading-3 tracking-[9px]">Business</span>
              </span> */}
            </div>
            <p className="text-gray-300 text-sm font-bold">Contact project: May 25, 2022</p>
          </div>

          {/* Nội dung bên phải */}
          <div className="space-y-3 col-span-6 md:col-span-6 lg:col-span-5">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Development Planning for Viral World</h3>
            <p className="text-gray-600 leading-relaxed">
              It is important to consider key factors such as business goals, target market, products/services,
              marketing, and finances. Each step should be carefully researched and evaluated. The development plan
              needs to be flexible to adapt to changes in the business environment.
            </p>
            <Link href="#" className="text-gray-800 underline font-medium hover:underline inline-block">
              View Details
            </Link>
          </div>
        </div>
        {/* <div className="col-span-2"></div> */}
      </div>
    </section>
  );
}
