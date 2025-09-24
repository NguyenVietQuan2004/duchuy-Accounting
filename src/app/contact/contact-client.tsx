"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./form";
import FadeInWrapper from "@/components/animations/fade-in-wrapper";

function ContactClient() {
  const img = "/images/imgbackgroundhome.jpg";
  return (
    <div>
      {/* Banner */}
      {/* <div className="relative h-[700px] mt-[140px]">
        {img && (
          <div
            className="absolute inset-0 bg-[position:50%_50%] bg-cover  transition-opacity duration-500"
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
      </div> */}

      <div className="max-w-[1200px] mt-[140px] px-4 mx-auto text-[18px] font-light py-8  lg:pb-36 flex flex-col gap-6">
        <FadeInWrapper className="opacity-0">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-[#124D9B] text-3xl lg:text-4xl  font-bold">
                Book a consultation
                <br />
              </h2>
              <div className=" text-sm my-4"></div>
              <ContactForm />
            </div>
            <div className="flex items-center justify-center ">
              {/* Heading */}
              {/* <h2 className="text-[36px] font-bold mb-2">Interested in Collaborating with Us</h2> */}
              <p className="text-lg text-zinc-800 font-bold  mb-6">
                Prefer in-person consultation in Sydney: our partner
                {/* www.mygreatbookkeeper.com.au  */}
                <a
                  href="https://www.mygreatbookkeeper.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#124d9b] mx-1 hover:underline"
                >
                  www.mygreatbookkeeper.com.au
                </a>
                provides face-to-face services in the Sydney area.
              </p>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Phone */}
                {/* <div className="flex items-center space-x-3">
              <Phone className="min-w-6 min-h-6 text-black" />
              <span className="font-bold text-lg">097 2220777</span>
            </div> */}

                {/* Email */}
                {/* <div className="flex items-center space-x-3">
                  <Mail className="min-w-6 min-h-6 text-black" />
                  <a href="mailto:Support@hexblebusiness.vn" className="font-bold text-lg hover:text-blue-600">
                    info@ntnps.com.au
                  </a>
                </div> */}

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
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}

export default ContactClient;
