"use client";

import HeroWithStats from "./_components/section-freedom";
import ContactFormSection from "./_components/contact-form";
import Service from "@/components/service";

function ServiceClient() {
  const img = "https://w.ladicdn.com/s1440x620/57b167c9ca57d39c18a1c57c/op6ZCVTO20231115065153.jpeg";
  return (
    <div>
      {/* Banner */}
      <div className="relative h-[700px] mt-[140px]">
        {img && (
          <div
            className="absolute inset-0 bg-[position:50%_0%] bg-cover bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img})`,
              filter: "brightness(100%)",
            }}
          />
        )}
        <div className="relative max-w-[1200px] py-[120px] h-full pt-[160px] lg:pt-[200px] mx-auto px-4">
          <div className=" max-w-[540px]">
            <div className="text-[18px]">Tìm hiểu về Dịch vụ của chúng tôi</div>
            <div className="text-[48px] font-bold">Chúng tôi giúp gì được cho bạn?</div>
          </div>
        </div>
      </div>
      <Service />
      <HeroWithStats />
      <ContactFormSection />
    </div>
  );
}

export default ServiceClient;
