"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./form";

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
        <div className=" animation-ltr-opacity relative max-w-[1200px] py-[120px] h-full pt-[100px] lg:pt-[120px] mx-auto px-4">
          <div className="text-[#003978] max-w-[540px]">
            <div className="text-[18px]">CONTACT</div>
            <div className="text-[36px] font-bold">With us! For Financial Consulting for your Business</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] px-4 mx-auto text-[18px] font-light py-8 lg:py-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Info */}
          <div className="flex flex-col gap-8 h-full">
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.056640960699!2d106.73078149999999!3d10.7301149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175254fc81ab34d%3A0xc416f38314923c3a!2sBMB%20Garage!5e0!3m2!1svi!2s!4v1750091279481!5m2!1svi!2s"
                className="w-full h-full mt-2"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="">
            <h2 className="text-[#124D9B] text-3xl lg:text-4xl mt-4 lg:mt-0 font-bold">
              Questions / Inquiries:
              <br />
            </h2>
            <div className=" text-sm my-4"></div>
            <ContactForm />
          </div>
        </div>

        <div className="mt-4 lg:mt-20 px-2 lg:px-10">
          {/* Heading */}
          <h2 className="text-[36px] font-bold mb-2">Interested in Collaborating with Us</h2>
          <p className="text-sm font-normal mb-6">
            Priority for in-person consultation in Sydney: our partner (website link) provides face-to-face services in
            the Sydney area.
          </p>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <Phone className="min-w-6 min-h-6 text-black" />
              <span className="font-bold text-lg">097 2220777</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="min-w-6 min-h-6 text-black" />
              <a href="mailto:Support@hexblebusiness.vn" className="font-bold text-lg hover:text-blue-600">
                Support@hexblebusiness.vn
              </a>
            </div>

            {/* Website */}
            <div className="flex items-center space-x-3">
              <Globe className="min-w-6 min-h-6 text-black" />
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
              <MapPin className="min-w-6 min-h-6 text-black" />
              <span className="font-bold text-lg">24th Floor, MD Complex Building, 68 Nguyen Co Thach, Hanoi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactClient;
