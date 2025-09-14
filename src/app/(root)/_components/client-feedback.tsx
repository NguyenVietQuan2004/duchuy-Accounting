"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "David Nguyen",
    role: "Chief Accountant",
    image: "https://w.ladicdn.com/s400x400/57b167c9ca57d39c18a1c57c/3k2m0dGO20231021063147.jpeg",
    text: "The company's financial consulting service is truly excellent. The consulting team is very professional and has a deep understanding of the financial market. They helped me invest smartly and achieve higher-than-expected returns.",
  },
  {
    name: "David Nguyen",
    role: "Chief Accountant",
    image: "https://w.ladicdn.com/s400x400/57b167c9ca57d39c18a1c57c/3k2m0dGO20231021063147.jpeg",
    text: "The company's financial consulting service is truly excellent. The consulting team is very professional and has a deep understanding of the financial market. They helped me invest smartly and achieve higher-than-expected returns.",
  },
  {
    name: "Nguyen Dinh Dat",
    role: "Finance Manager",
    image: "https://w.ladicdn.com/s400x400/57b167c9ca57d39c18a1c57c/3k2m0dGO20231021063147.jpeg",
    text: "I have received financial advice from the company for many years and I am very satisfied with their service. They are always reliable, supportive, and help me optimize my personal finances.",
  },
  {
    name: "Denis Robinson",
    role: "Founder & CEO",
    image: "https://w.ladicdn.com/s400x400/57b167c9ca57d39c18a1c57c/3k2m0dGO20231021063147.jpeg",
    text: "I am very satisfied with the company's financial consulting service. The team understands my financial situation and provides reasonable solutions. I feel much more secure about my finances after receiving their support.",
  },
];

export default function ClientFeedback() {
  return (
    <section className="bg-[#f3f9ff] py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-sm font-semibold text-gray-500 tracking-widest uppercase">Feedback & Partners</h3>
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              800: {
                // lg ≥ 1024px
                slidesPerView: 2,
              },
              1024: {
                // lg ≥ 1024px
                slidesPerView: 3,
              },
            }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                {" "}
                {/* 👈 thêm flex để stretch */}
                <Card className="flex flex-col justify-between w-full h-full rounded-2xl shadow-none">
                  <CardContent className="flex flex-col justify-between p-0 pb-6 h-full">
                    {" "}
                    {/* 👈 ép h-full */}
                    <div className="flex items-center border-b p-6 px-8 gap-4 mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover w-[50px] h-[50px]"
                      />
                      <div>
                        <p className="font-semibold text-lg">{item.name}</p>
                        <p className="text-sm text-[#a6a6a6]">{item.role}</p>
                      </div>
                    </div>
                    {/* 👇 phần nội dung tự đẩy xuống cuối nếu thiếu chiều cao */}
                    <div className="p-6 px-8 flex-1 flex flex-col justify-start">
                      <div className="flex items-center mb-3 gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                        ))}
                      </div>

                      <p className="text-sm text-justify">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          {/* <button className="swiper-button-prev absolute top-0 font-light text-sm  ">
            <ChevronUpIcon className="w-5 h-5" />
          </button>
          <button className="swiper-button-next absolute  ">
            <ChevronUpIcon className="w-5 h-5" />
          </button> */}
        </div>
      </div>

      <style jsx>{`
        /* 👇 chỉ ảnh hưởng trong component này */
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #000;
          width: 26px;
          height: 26px;
        }
      `}</style>
    </section>
  );
}
