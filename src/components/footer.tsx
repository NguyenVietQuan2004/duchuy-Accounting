"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import { Facebook, Instagram, Music2, MessageCircle } from "lucide-react"; // icons thay cho FB, IG, Tiktok, Messenger
import Image from "next/image";

export default function Footer() {
  const logoblack = "/images/logoblue.png";
  return (
    <footer className="bg-white text-[#003978] py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 Logo */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center space-x-0">
            <div className="w-[50px] h-[50px] flex items-center justify-center mr-1">
              <Image alt="" width={200} height={200} src={logoblack} />
            </div>
            {/* <span className="font-bold flex flex-col text-[#003978]">
              <span className="text-[22px] leading-5"></span>
              <span className="text-[12px] leading-3 tracking-[4px]">Business</span>
            </span> */}
          </div>
          <p className="text-sm text-gray-600">Smart financial strategy creating value</p>
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

        {/* Column 2 Our Company */}
        <div>
          <h3 className="font-bold mb-3 text-[16px] text-black">Our Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/about" className="text-sm text-black font-normal">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-black font-normal">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm text-black font-normal">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 Features */}
        <div>
          <h3 className="font-bold mb-3 text-[16px] text-black">Features</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Affiliate Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Customer Care
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-black font-normal">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 Help */}
        <div>
          <h3 className="font-bold mb-3 text-[16px] text-black">Need Help?</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-black font-normal">
                Learn More
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 Subscribe */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-bold mb-3 text-[16px] text-black">Subscribe</h3>
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
        </div>
      </div>
    </footer>
  );
}
