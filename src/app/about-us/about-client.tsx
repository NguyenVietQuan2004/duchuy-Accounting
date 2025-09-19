"use client";
import { Copyright } from "lucide-react";
import HeroWithStats from "./_components/section-freedom";
import ContactFormSection from "./_components/contact-form";
import Service from "@/components/service";

function AboutClient() {
  const img = "/images/imgbackgroundhome.jpg";

  return (
    <div className="max-w-screen overflow-hidden">
      {/* Banner */}
      <div className="relative h-[700px] mt-[140px] max-w-screen overflow-hidden">
        {img && (
          <div
            className="absolute inset-0 bg-[position:50%_70%] bg-cover bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img})`,
              filter: "brightness(100%)",
            }}
          />
        )}
        <div className="relative max-w-[1200px] animate-rtl-opacity py-[120px] h-full pt-[160px] lg:pt-[200px] mx-auto px-4">
          <div className="text-[#003978] max-w-[540px]">
            <div className="text-[18px]">CONTACT</div>
            <div className="text-[36px] font-bold">With us! For Financial Consulting for your Business</div>
          </div>
        </div>
      </div>
      {/* <Service /> */}
      <div className="max-w-[1200px] mx-auto px-4 py-6 md:py-16">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About us</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our accounting firm brings years of experience in accounting, tax, and business advisory to help your
            business succeed.
          </p>

          <ul className="space-y-2 text-gray-700 leading-relaxed list-none">
            <li className="flex items-start text-justify gap-2">
              <span className="text-green-600 text-justify mt-1">✔</span>
              We provide a wide range of services including accurate accounting, strategic tax planning, insightful
              business advice, and effective budget management.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-justify mt-1">✔</span>
              Our team ensures compliance, minimizes risks, and optimizes financial outcomes for individuals and
              businesses alike.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-justify mt-1">✔</span>
              Every client receives tailored guidance to meet their specific needs, from managing day-to-day finances to
              planning for long-term expansion.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-justify mt-1">✔</span>
              We prioritize clear communication and responsive support, helping you make informed decisions.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed text-justify">
            Our commitment is to build lasting relationships based on trust, integrity, and results. Whether you need
            thorough tax assistance, comprehensive accounting, or expert budget advice, we are here to provide
            professional, reliable support.
          </p>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600 space-y-3">
          <div className="flex items-center gap-1 font-semibold">
            Disclaimer <Copyright width={14} />
          </div>
          <p className="text-justify text-[10px]">
            All materials on this site are presented for general knowledge purposes and should not be considered as
            professional counsel. Please contact our consultants to receive specific professional advice which is
            tailored to your unique situation or circumstance.
          </p>
          <p className="text-justify text-[10px]">
            We disclaim all liability and responsibility (direct or indirect or incidental or consequential or special
            damages) arising from or in connection with the use, inability to use, or reliance on any information
            provided.
          </p>
          <p className="text-justify text-[10px]">
            We refer to NTN Professional Services Pty Ltd. Liability limited under a scheme approved under Professional
            Standards Legislation.
          </p>
        </div>
      </div>

      {/* <HeroWithStats /> */}
      {/* <ContactFormSection /> */}
    </div>
  );
}

export default AboutClient;
