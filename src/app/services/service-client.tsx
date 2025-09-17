"use client";

import HeroWithStats from "./_components/section-freedom";
import ContactFormSection from "./_components/contact-form";
import Service from "@/components/service";

function ServiceClient() {
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
          <div className=" max-w-[540px]">
            <div className="text-[18px]">Learn About Our Services</div>
            <div className="text-[48px] font-bold">How Can We Help You?</div>
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
