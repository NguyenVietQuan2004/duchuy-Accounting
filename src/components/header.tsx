"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Service",
    link: "/service",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
export default function Header() {
  const imgMenu = "https://w.ladicdn.com/v2/source/builder/svg/menu_icon1.svg?v=1.0";
  const logoWhite = "/images/logowhite.png";
  const pathName = usePathname();
  return (
    <header className="w-full bg-[#003978] fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-[#2760A5] ">
        {/* Top Row */}
        <div className="flex max-w-[1200px] px-2 mx-auto h-[70px] lg:h-[80px] items-center justify-between ">
          {/* Logo + Brand */}
          <Link href={"/"} className="flex items-center space-x-2">
            {/* Logo (SVG đơn giản ví dụ) */}
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image alt="" width={200} height={200} src={logoWhite} />
            </div>
            <span className="text-white font-bold text-[26px]">Hexble Business</span>
          </Link>

          {/* Hotline */}
          <div className="hidden lg:flex items-center text-white text-sm space-x-2">
            <span className="opacity-70">Hotline:</span>
            <Phone size={16} className="text-white" />
            <span className="font-bold">(+84) 333 756 5589</span>
          </div>
        </div>
      </div>
      {/* Bottom Row - Navigation */}
      <nav className="bg-[#003978] max-w-[1200px] mx-auto  px-4 lg:px-2">
        <div className="flex lg:hidden items-center justify-between px-4 h-[70px] space-x-20 py-3">
          <div className="items-center text-white text-sm space-x-2">
            <span className="opacity-70">
              Hotline: <br />{" "}
            </span>
            <span className="font-bold ml-1">(+84) 333 756 5589</span>
          </div>
          <button>
            <Image alt="" src={imgMenu} width={30} height={30} className="brightness-[1000%]" />
          </button>
        </div>

        <ul className="hidden lg:flex items-center justify-start h-[60px] space-x-20 py-3">
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
