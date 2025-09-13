"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./form";

// function ContactClient({ img, address }: Props) {
function ContactClient() {
  const img = "https://w.ladicdn.com/s1440x452/57b167c9ca57d39c18a1c57c/wf1agw3j20231115092001.jpg";
  return (
    <div>
      {/* Banner */}
      <div className="relative h-[500px] mt-[140px]">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img})`,
              filter: "brightness(100%)",
            }}
          />
        )}
        <div className="relative max-w-[1200px] py-[120px] h-full pt-[160px] lg:pt-[120px] mx-auto px-4">
          <div className="text-[#003978] max-w-[540px]">
            <div className="text-[18px]">LIÊN HỆ</div>
            <div className="text-[36px] font-bold">
              Với chúng tôi! Để được Tư vấn Tài chính cho doanh nghiệp của bạn
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] px-4 mx-auto text-[18px] font-light py-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Thông tin liên hệ */}
          <div className="flex flex-col gap-8 h-full">
            <div className="h-full">
              {/* <h3 className="font-bold">BMB Garage – Trung Tâm Chăm Sóc Xe</h3>
              <p>Số 21 Phú Thuận, P. Tân Mỹ, TP. Hồ Chí Minh (Đ/c cũ: 21 Phú Thuận, P. Tân Phú, Q.7)</p> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.056640960699!2d106.73078149999999!3d10.7301149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175254fc81ab34d%3A0xc416f38314923c3a!2sBMB%20Garage!5e0!3m2!1svi!2s!4v1750091279481!5m2!1svi!2s"
                className="w-full h-full mt-2"
                loading="lazy"
              ></iframe>

              {/* {address
                ?.filter((add) => add.name === "Số điện thoại")
                ?.map((item) => (
                  <div key={item._id} className="mt-4 text-base">
                    <span className="font-semibold">SĐT liên hệ:</span> {item.address}
                  </div>
                ))} */}
            </div>
          </div>

          {/* Form liên hệ */}
          <div>
            <h2 className="text-[#124D9B] text-4xl font-bold">
              Câu hỏi / thắc mắc:
              <br />
            </h2>
            <div className=" text-sm my-4"></div>
            <ContactForm />
          </div>
        </div>
        <div className=" mt-20 px-10">
          {/* Heading */}
          <h2 className="text-[36px] font-bold mb-2">Quan tâm đến việc hợp tác cùng chúng tôi</h2>
          <p className=" text-sm font-normal mb-6">
            Ưu tiên tư vấn trực tiếp tại Sydney: đối tác của chúng tôi (liên kết website) cung cấp dịch vụ gặp mặt trực
            tiếp tại khu vực Sydney.
          </p>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-black" />
              <span className="font-bold text-lg">097 2220777</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-black" />
              <a href="mailto:Support@hexblebusiness.vn" className="font-bold text-lg hover:text-blue-600">
                Support@hexblebusiness.vn
              </a>
            </div>

            {/* Website */}
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-black" />
              <a
                href="https://hexblebusiness.vn"
                className="font-bold text-lg hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://hexblebusiness.vn
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-black" />
              <span className="font-bold text-lg">24th Floor, MD Complex Building, 68 Nguyen Co Thach, Hanoi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactClient;
