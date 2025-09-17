"use client";

import Hetbietdatten1Wrapper from "@/components/animations/hetbietdatten1";
import Hetbietdatten2Wrapper from "@/components/animations/hetbietdatten2";
import Image from "next/image";

function MissionSection() {
  const img = "/images/handshake.jpg";
  return (
    <section className="max-w-[1200px] mx-auto pb-4 md:pb-20">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Cột hình bên trái */}
        <div className="md:w-1/2 w-full">
          {/* <Hetbietdatten1Wrapper className="h-full lg:-left-[20px]"> */}
          <div className="h-full relative ">
            <Image
              src={img}
              alt="Handshake"
              width={500}
              height={500}
              className="w-full h-full lg:absolute inset-0 object-cover"
            />
          </div>
          {/* </Hetbietdatten1Wrapper> */}
        </div>

        {/* Cột nền xanh bên phải */}
        <div className="md:w-1/2 w-full">
          {/* <Hetbietdatten2Wrapper className="lg:-right-[20px]"> */}
          <div className="bg-[#084ea4] text-white flex items-center h-full">
            <div className="p-4  lg:p-10 md:p-16">
              <p className="uppercase text-sm tracking-wide mb-3 font-semibold">Who We Are</p>
              <h2 className="text-[26px] md:text-4xl font-bold mb-6">Our Mission & Values</h2>
              <p className="leading-relaxed text-sm md:text-base mb-6 lg:text-justify">
                Our team of certified accountants and tax professionals offers scalable, industry-specific solutions
                that simplify compliance, optimize performance, and unlock growth. We’re not just number crunchers—we’re
                your strategic financial partners.
              </p>

              <p className="leading-relaxed text-sm md:text-base mb-6 lg:text-justify">
                We help you choose and set up the right structure (sole trader, partnership, company, trust, or
                not-for-profit) to suit your goals, protect your assets, and optimize tax outcomes.
              </p>
            </div>
          </div>
          {/* </Hetbietdatten2Wrapper> */}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
