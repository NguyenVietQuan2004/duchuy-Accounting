"use client";

import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function MyPartnerLogo() {
  const imageCount = 9;
  const images = Array.from(
    { length: imageCount },
    (_, i) => `https://w.ladicdn.com/s450x400/57b167c9ca57d39c18a1c57c/rbg/tai-xuong-4-20231012041954-elazf.png`
  );

  return (
    <div className="pb-16 px-4 lg:px-0 bg-[#f3f9ff] ">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-sm font-bold text-gray-500 mb-6">Our clients include:</div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
            600: {
              slidesPerView: 3,
            },
          }}
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index} className="select-none mb-10 cursor-pointer   flex items-center  justify-center ">
              <Image
                alt={`Logo ${index}`}
                width={192}
                height={300}
                className="object-contain "
                // src={item}
                src={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MyPartnerLogo;
