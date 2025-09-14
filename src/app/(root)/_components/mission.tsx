"use client";

import Image from "next/image";

function MissionSection() {
  return (
    <section className="max-w-[1200px] mx-auto pb-20">
      <div className="flex flex-col md:flex-row">
        {/* Cột hình bên trái */}
        <div className="md:w-1/2 w-full">
          <Image
            width={600}
            height={600}
            src="https://w.ladicdn.com/s950x900/57b167c9ca57d39c18a1c57c/1bUzb5j620231020100743.jpeg"
            alt="Handshake"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cột nền xanh bên phải */}
        <div className="md:w-1/2 w-full bg-[#084ea4] text-white flex items-center">
          <div className="p-8 lg:p-10 md:p-16">
            <p className="uppercase text-sm tracking-wide mb-3 font-semibold">Who We Are</p>
            <h2 className="text-[26px] md:text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className=" leading-relaxed text-sm md:text-base mb-6 lg:text-justify">
              Our team of certified accountants and tax professionals offers scalable, industry-specific solutions that
              simplify compliance, optimize performance, and unlock growth. We’re not just number crunchers—we’re your
              strategic financial partners.
            </p>

            <p className=" leading-relaxed text-sm md:text-base mb-6 lg:text-justify">
              We help you choose and set up the right structure (sole trader, partnership, company, trust, or
              not-for-profit) to suit your goals, protect your assets, and optimize tax outcomes.
            </p>

            {/* <div className="mt-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Signature-icon.png/64px-Signature-icon.png"
                alt="Signature"
                className="h-12 mb-2"
              />
              <p className="font-bold text-lg">Denis Robinson</p>
              <p className="text-sm">Founder & CEO</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
