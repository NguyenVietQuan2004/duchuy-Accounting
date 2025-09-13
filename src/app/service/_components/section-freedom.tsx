"use client";

import React from "react";

type Props = {
  img?: string; // nếu không truyền sẽ dùng default
};

export default function HeroWithStats({
  img = "https://w.ladicdn.com/s1440x377/57b167c9ca57d39c18a1c57c/k7g0f9qf20231115072945.jpg",
}: Props) {
  return (
    <section className="relative">
      {/* Background image + overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* ảnh nền */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${img})`,
            // chỉnh vị trí ảnh: '50% 0%' lấy phần trên, '50% 100%' lấy phần dưới
            backgroundPosition: "50% 50%",
            // nếu muốn cố định khi scroll: backgroundAttachment: 'fixed'
          }}
        />
        {/* overlay sáng (giống ảnh gốc mờ, trắng nhẹ) */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Title + description */}
          <div className="md:pr-8">
            <h2 className="text-4xl  font-extrabold mb-6 leading-tight">
              Tự do tài chính dành cho
              <br /> những ai tìm hiểu về nó
            </h2>
            <p className="text-[18px] text-gray-700 max-w-[500px] text-justify">
              Là thành viên hiện tại đã đăng ký hành nghề công và có uy tín tốt với Hiệp hội Kế toán tổng hợp được chứng
              nhận
            </p>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col md:flex-row md:justify-around items-center gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-[56px] font-extrabold text-[#2760A5]">1,980+</div>
              <div className="text-sm md:text-base text-[#2760A5] font-bold mt-2">Dự án đã hoàn thành</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-[56px] font-extrabold text-[#2760A5]">879</div>
              <div className="text-sm md:text-base text-[#2760A5] font-bold mt-2">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
