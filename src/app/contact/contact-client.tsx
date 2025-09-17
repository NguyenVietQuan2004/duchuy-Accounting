"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./form";
import FadeInWrapper from "@/components/animations/fade-in-wrapper";

function ContactClient() {
  const img = "https://w.ladicdn.com/s1440x452/57b167c9ca57d39c18a1c57c/wf1agw3j20231115092001.jpg";
  return (
    <div>
      {/* Banner */}
      <div className="relative h-[600px] mt-[140px]">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img})`,
              filter: "brightness(100%)",
            }}
          />
        )}
        <div className=" animate-ltr-opacity relative max-w-[1200px] py-[120px] h-full pt-[100px] lg:pt-[120px] mx-auto px-4">
          <div className="text-[#003978] max-w-[540px]">
            <div className="text-[18px]">CONTACT</div>
            <div className="text-[36px] font-bold">With us! For Financial Consulting for your Business</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] px-4 mx-auto text-[18px] font-light py-8  lg:pb-36 flex flex-col gap-6">
        <FadeInWrapper className="opacity-0">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              {/* Heading */}
              <h2 className="text-[36px] font-bold mb-2">Interested in Collaborating with Us</h2>
              <p className="text-sm font-normal mb-6">
                Priority for in-person consultation in Sydney: our partner (website link) provides face-to-face services
                in the Sydney area.
              </p>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Phone */}
                {/* <div className="flex items-center space-x-3">
              <Phone className="min-w-6 min-h-6 text-black" />
              <span className="font-bold text-lg">097 2220777</span>
            </div> */}

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="min-w-6 min-h-6 text-black" />
                  <a href="mailto:Support@hexblebusiness.vn" className="font-bold text-lg hover:text-blue-600">
                    info@ntnps.com.au
                  </a>
                </div>

                {/* Website */}
                {/* <div className="flex items-center space-x-3">
              <Globe className="min-w-6 min-h-6 text-black" />
              <a
                href="https://hexblebusiness.vn"
                className="font-bold text-lg hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ntnps.vn
              </a>
            </div> */}

                {/* Address */}
                {/* <div className="flex items-center space-x-3">
              <MapPin className="min-w-6 min-h-6 text-black" />
              <span className="font-bold text-lg">Address: Level 24, 300 Barangaroo Avenue, Barangaroo NSW 2000</span>
            </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="">
              <h2 className="text-[#124D9B] text-3xl lg:text-4xl mt-4 lg:mt-0 font-bold">
                Book a consultation
                <br />
              </h2>
              <div className=" text-sm my-4"></div>
              <ContactForm />
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}

export default ContactClient;
