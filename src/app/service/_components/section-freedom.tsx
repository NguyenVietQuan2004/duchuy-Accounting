"use client";

import FadeInWrapper from "@/components/animations/fade-in-wrapper";
import RtlOpacityTightWrapper from "@/components/animations/rtl-opacity-tight-wrapper";
import React from "react";

type Props = {
  img?: string; // default if not provided
};

export default function HeroWithStats({
  img = "https://w.ladicdn.com/s1440x377/57b167c9ca57d39c18a1c57c/k7g0f9qf20231115072945.jpg",
}: Props) {
  return (
    <section className="relative">
      {/* Background image + overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "50% 50%",
          }}
        />
        {/* light overlay */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Title + description */}
          <RtlOpacityTightWrapper>
            <div className="md:pr-8">
              <h2 className="text-2xl lg:text-4xl font-extrabold mb-6 leading-tight">
                Financial Freedom for
                <br /> Those Who Want to Learn About It
              </h2>
              <p className="text-[18px] text-gray-700 max-w-[500px] text-justify">
                Current members are registered professionals with good reputation certified by the Association of
                Chartered Accountants
              </p>
            </div>
          </RtlOpacityTightWrapper>
          {/* Right: Stats */}
          <FadeInWrapper>
            <div className="flex flex-col md:flex-row md:justify-around items-center gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-[56px] font-extrabold text-[#2760A5]">1,980+</div>
                <div className="text-sm md:text-base text-[#2760A5] font-bold mt-2">Projects Completed</div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-[56px] font-extrabold text-[#2760A5]">879</div>
                <div className="text-sm md:text-base text-[#2760A5] font-bold mt-2">Satisfied Clients</div>
              </div>
            </div>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}
