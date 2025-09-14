"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";

function MyPartner() {
  const images = [
    "https://w.ladicdn.com/s1550x900/57b167c9ca57d39c18a1c57c/or-yaDSI20231021035505.jpg",
    "https://w.ladicdn.com/s1550x900/57b167c9ca57d39c18a1c57c/GhPkeaeM20240119023216.jpeg",
    "https://w.ladicdn.com/s1550x900/57b167c9ca57d39c18a1c57c/QmXgwnm720240119023121.jpeg",
    "https://w.ladicdn.com/s1550x900/57b167c9ca57d39c18a1c57c/bq67wd8t20231021035607.jpg",
  ];

  const swiperRef = useRef<any>(null);

  return (
    <div className="py-0 pb-8 lg:py-16 px-0 lg:px-4 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative"
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            className="select-none cursor-pointer flex items-center justify-center w-full lg:max-w-[60%] !h-[500px]"
          >
            <Image
              alt={`Partner ${index}`}
              src={item}
              width={1200}
              height={520}
              className="object-cover w-full h-full lg:rounded-xl shadow"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="hidden lg:flex justify-center gap-4 mt-14 mr-40 float-right">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 text-3xl cursor-pointer border border-blue-700 flex items-center justify-center rounded hover:bg-blue-700 hover:text-white transition"
        >
          ‹
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 text-3xl cursor-pointer border border-blue-700 flex items-center justify-center rounded hover:bg-blue-700 hover:text-white transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default MyPartner;
