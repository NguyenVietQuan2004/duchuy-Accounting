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
              <p className="text-lg text-zinc-800 font-bold max-w-full  mb-6">
                Prefer in-person consultation in Sydney: our partner
                {/* www.mygreatbookkeeper.com.au  */}
                <a
                  href="https://www.mygreatbookkeeper.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#124d9b] mx-1 wrap-break-word hover:underline"
                >
                  www.mygreatbookkeeper.com.au
                </a>
                provides face-to-face services in the Sydney area.
              </p>

              {/* Contact Grid */}
            </div>
            {/* Contact Form */}
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}

export default ContactClient;
