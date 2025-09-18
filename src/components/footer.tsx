"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import { Facebook, Instagram, Music2, MessageCircle } from "lucide-react"; // icons thay cho FB, IG, Tiktok, Messenger
import Image from "next/image";

export default function Footer() {
  const logoblack = "/images/logoblue.png";
  return (
    <footer className="bg-white text-[#003978] pt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 pb-6 md:grid-cols-5 gap-8">
        {/* Column 1 Logo */}
        <div className="space-y-4 col-span-2 md:col-span-1">
          <div className="flex items-center space-x-0">
            <div className="w-[70px] md:w-[70px]  lg:w-[100px]   flex items-center justify-center mr-1">
              <Image alt="" width={200} height={200} src={logoblack} className="w-full h-full object-contain" />
            </div>
            {/* <span className="font-bold flex flex-col text-[#003978]">
              <span className="text-[22px] leading-5"></span>
              <span className="text-[12px] leading-3 tracking-[4px]">Business</span>
            </span> */}
          </div>
          {/* <p className="text-sm text-gray-600">Smart financial strategy creating value</p> */}
          {/* Social */}
          {/* <div className="flex space-x-4 pt-2">
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <Music2 size={20} /> 
            </Link>
            <Link href="#" className="text-[#003978] hover:text-orange-500">
              <MessageCircle size={20} />
            </Link>
          </div> */}
        </div>

        {/* Column 2 Our Company */}
        <div>
          <Link href={"/about-us"} className="font-bold mb-3 text-[16px] text-[#084ea4]">
            About us
          </Link>
        </div>

        {/* Column 3 Features */}
        <div>
          <Link href={"/services"} className="font-bold mb-3 text-[16px] text-[#084ea4]">
            Customer services
          </Link>
        </div>

        {/* Column 4 Help */}
        <div>
          <Link href={"/contact"} className="font-bold mb-3 text-[16px] text-[#084ea4]">
            Contact
          </Link>
        </div>
        <div>
          <Link href={"/services"} className="font-bold mb-3 text-[16px] text-[#084ea4]">
            Terms of service
          </Link>
        </div>
        {/* Column 5 Subscribe */}
        {/* <div className="col-span-2 lg:col-span-1">
          <h3 className="font-bold mb-3 text-[16px] text-[#084ea4]">Subscribe</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-3 py-2 bg-gray-100 text-sm rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-3 py-2 bg-gray-100 text-sm rounded focus:outline-none"
            />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
              SUBSCRIBE
            </Button>
          </form>
        </div> */}
      </div>

      <div className="text-sm border-t p-6 pt-1 pb-4 text-gray-400">Disclainmer</div>
    </footer>
  );
}
