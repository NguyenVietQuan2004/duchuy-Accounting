"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
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
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-[#003978] fixed top-0 left-0 right-0 z-50">
      {/* Top Row */}
      <div className="border-b border-[#2760A5]">
        <div className="flex max-w-[1200px] px-2 mx-auto h-[70px] lg:h-[80px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-[40px] md:w-[50px] lg:w-[60px] flex items-center justify-center">
              <Image alt="logo" width={200} height={200} src={logoWhite} className="w-full h-full object-contain" />
            </div>
            {/* <div>NTN Professional Services Pty Ltd</div> */}
            <span className="font-bold flex flex-col text-white">
              <span className="text-[24px] leading-5">NTN Professional Services</span>
              <span className="text-[12px] leading-3 tracking-[4px]">Pty Ltd</span>
            </span>
          </Link>

          {/* Hotline Desktop */}
          <div className="hidden lg:flex items-center text-white text-sm space-x-2">
            <span className="opacity-70">Hotline:</span>
            <Phone size={16} className="text-white" />
            <span className="font-bold">info@ntnps.com.au</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <nav className="bg-[#003978] max-w-[1200px] mx-auto px-4 lg:px-2">
        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center justify-between px-4 h-[70px] space-x-20 py-3">
          <div className="items-center text-white text-sm space-x-2">
            <span className="opacity-70">
              Hotline: <br />
            </span>
            <span className="font-bold ml-1">info@ntnps.com.au</span>
          </div>

          {/* Drawer Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setOpen(true)}>
                <Image alt="menu" src={imgMenu} width={30} height={30} className="brightness-[1000%]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-[250px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold text-[#003978]">Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col space-y-6 p-6">
                {menu.map((item) => (
                  <Link
                    key={item.name}
                    onClick={() => setOpen(false)}
                    href={item.link}
                    className={`${
                      pathName === item.link ? "text-orange-500" : "text-gray-800"
                    } font-semibold text-lg hover:text-orange-500 transition-colors`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-start h-[60px] space-x-20 py-3">
          {menu.map((item) => (
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
