"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import { Facebook, Instagram, Music2, MessageCircle } from "lucide-react"; // icons thay cho FB, IG, Tiktok, Messenger
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-[#003978] py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Cột 1 Logo */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center space-x-0">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <Image
                alt=""
                width={200}
                height={200}
                src={"https://w.ladicdn.com/s400x400/57b167c9ca57d39c18a1c57c/business-011-20231106081214-8ssds.png"}
              />
            </div>
            <span className="font-bold flex flex-col text-[#003978]">
              <span className="text-[22px] leading-5">Hexble</span>
              <span className="text-[12px] leading-3 tracking-[4px]">Business</span>
            </span>
          </div>
          <p className="text-sm text-gray-600">Chiến lược tài chính thông minh tạo giá trị</p>
          {/* Social */}
          <div className="flex space-x-4 pt-2">
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <Music2 size={20} /> {/* TikTok icon placeholder */}
            </Link>
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <MessageCircle size={20} /> {/* Messenger */}
            </Link>
          </div>
        </div>

        {/* Cột 2 Công ty chúng tôi */}
        <div>
          <h3 className="font-bold mb-3 text-[16px] text-black">Công ty chúng tôi</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/about" className="text-sm text-black font-normal">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-black font-normal">
                Liên hệ
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm text-black font-normal">
                Bảng giá
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 3 Tính năng */}
        <div>
          <h3 className="font-bold mb-3 text-[16px] text-black">Tính năng</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Affiliate Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Chăm sóc khách hàng
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-black font-normal">
                Dịch vụ
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 4 Giúp đỡ */}
        <div>
          <h3 className="font-bold mb-3 text-[16px] text-black">Giúp đỡ?</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Chính sách bảo mật
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Điều khoản sử dụng
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Tìm hiểu thêm
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 5 Đăng ký dịch vụ */}
        <div>
          <h3 className="font-bold mb-3 text-[16px] text-black">Đăng ký dịch vụ</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Họ và tên*"
              className="w-full px-3 py-2 bg-gray-100 text-sm rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-3 py-2 bg-gray-100 text-sm rounded focus:outline-none"
            />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
              ĐĂNG KÝ
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
