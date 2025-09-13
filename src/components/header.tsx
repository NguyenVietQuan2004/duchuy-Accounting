"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Dịch vụ",
    link: "/service",
  },
  {
    name: "Liên hệ",
    link: "/contact",
  },
];
export default function Header() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="w-full bg-[#003978] fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-[#2760A5] ">
        {/* Top Row */}
        <div className="flex max-w-[1200px] mx-auto h-[80px] items-center justify-between ">
          {/* Logo + Brand */}
          <Link href={"/"} className="flex items-center space-x-2">
            {/* Logo (SVG đơn giản ví dụ) */}
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image
                alt=""
                width={200}
                height={200}
                src={"https://w.ladicdn.com/s400x400/57b167c9ca57d39c18a1c57c/business-01-20231106064522-7rupw.png"}
              />
            </div>
            <span className="text-white font-bold text-[26px]">Hexble Business</span>
          </Link>

          {/* Hotline */}
          <div className="flex items-center text-white text-sm space-x-2">
            <span className="opacity-70">Hotline:</span>
            <Phone size={16} className="text-white" />
            <span className="font-bold">(+84) 333 756 5589</span>
          </div>
        </div>
      </div>
      {/* Bottom Row - Navigation */}
      <nav className="bg-[#003978] max-w-[1200px] mx-auto  ">
        <ul className="flex items-center justify-start h-[60px] space-x-16 py-3">
          {menu.map((item: any) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className={`${
                  pathName === item.link ? "text-orange-400" : "text-white"
                } font-bold select-none text-sm duration-300 hover:text-orange-400`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
