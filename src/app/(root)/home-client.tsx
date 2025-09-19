"use client";

import { Card, CardContent } from "@/components/ui/card";
import MissionSection from "./_components/mission";
import ServicesSection from "./_components/service";
import ProjectCard from "./_components/project-card";
import { Briefcase, DollarSign, Shield, Lock, Users, Copyright } from "lucide-react";
import MyPartner from "./_components/my-partner";
import RequestCallback from "./_components/request-callback";
import BlogSection from "./_components/blogs";
import ClientFeedback from "./_components/client-feedback";
import MyPartnerLogo from "./_components/my-partner-logo";
import MyClient from "./_components/my-client";
import CardAnimationWrapper from "@/components/animations/card-animation";
import LtrOpacityTightWrapper from "@/components/animations/ltr-opacity-tight-wrapper";

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    title: "Tax & Accounting",
    desc: "Certified tax agents and chartered accountants providing reliable services.",
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Industry Expertise",
    desc: "Deep understanding of industry-specific needs for tailored solutions.",
  },
  // {
  //   icon: <DollarSign className="w-8 h-8 text-orange-500" />,
  //   title: "Transparent Pricing",
  //   desc: "Clear pricing with no hidden fees, helping you stay on budget.",
  // },
  // {
  //   icon: <Lock className="w-8 h-8 text-orange-500" />,
  //   title: "Secure Portal",
  //   desc: "Safe online platform for sharing and managing your documents.",
  // },
  {
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: "Dedicated Support",
    desc: "A support team that knows your business and responds quickly.",
  },
];

function HomeClient() {
  const img = "/images/imgbackgroundhome.jpg";

  return (
    <div className="max-w-screen overflow-hidden">
      {/* Banner */}
      <div className="relative h-[700px] mt-[140px]">
        {img && (
          <div
            className="absolute inset-0 bg-[position:50%_70%] bg-cover bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img})`,
              filter: "brightness(100%)",
            }}
          />
        )}
        <div className="relative max-w-[1200px] py-[120px] h-full pt-[100px] lg:pt-[200px] mx-auto px-4">
          <div className="max-w-[540px]">
            <div className="text-[18px] animate-fade-in delay-500 opacity-0">
              We understand that no two businesses are alike. Whether you're launching your first venture, managing a
              growing team, or leading a large corporation, your financial needs evolve—and we evolve with you.
            </div>
            <div className="text-4xl lg:text-[48px] relative animate-ltr-opacity font-bold">How may we assist you?</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] hidden px-4 lg:grid grid-cols-12 gap-10 mx-auto -translate-y-1/4">
        {services.map((service, idx) => (
          <CardAnimationWrapper
            idx={idx}
            key={idx}
            className={`opacity-0 overflow-hidden col-span-4 
        ${idx == 3 ? "col-start-3" : ""} ${idx > 2 && ""}`} // ép 2 thẻ cuối vào cột giữa
            style={{ animationDelay: `${idx * 300}ms` }}
          >
            <Card className="bg-white shadow-xl rounded-sm hover:shadow-2xl transition-all">
              <LtrOpacityTightWrapper
                idx={idx}
                style={{ animationDelay: `${idx * 300 + 700}ms` }}
                className={`${idx >= 3 ? "" : ""}  left-[-10px] opacity-0`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </LtrOpacityTightWrapper>
            </Card>
          </CardAnimationWrapper>
        ))}
      </div>

      {/* <div className="max-w-[1200px] hidden lg:block mx-auto  -translate-y-1/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-4">
          {services.slice(0, 3).map((service, idx) => (
            <CardAnimationWrapper className="opacity-0 overflow-hidden" key={idx}>
              <Card className="bg-white  shadow-xl rounded-sm hover:shadow-2xl transition-all">
                <LtrOpacityTightWrapper className="delay-500 left-[-10px] opacity-0">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </CardContent>
                </LtrOpacityTightWrapper>
              </Card>
            </CardAnimationWrapper>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center max-w-3xl mx-auto px-4">
          {services.slice(3).map((service, idx) => (
            <CardAnimationWrapper className="opacity-0 delay-1000" key={idx}>
              <Card key={idx} className="bg-white shadow-xl rounded-sm hover:shadow-2xl transition-all">
                <LtrOpacityTightWrapper className="delay left-[-10px] opacity-0">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </CardContent>
                </LtrOpacityTightWrapper>
              </Card>
            </CardAnimationWrapper>
          ))}
        </div>
      </div> */}

      <div className="max-w-[1200px] mx-auto lg:hidden  -translate-y-1/6">
        {/* Hàng 1: 3 services */}
        <div className="grid grid-cols-1 gap-4 mx-auto px-4">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-white  transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="relative -translate-y-[80px] lg:-translate-y-0">
        <MissionSection />
        <MyClient />
        <ServicesSection />
        {/* <MyPartner /> */}
        {/* <ProjectCard /> */}
        {/* <RequestCallback /> */}
        {/* <BlogSection /> */}
        {/* <ClientFeedback /> */}
        <div className="pb-8 px-2 bg-blue-50">
          <div className=" max-w-[1000px] mx-auto bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600 space-y-3">
            <div className="flex items-center text-[12px] gap-1 font-semibold">
              Disclaimer <Copyright width={14} />
            </div>
            <p className="text-justify text-[12px]">
              All materials on this site are presented for general knowledge purposes and should not be considered as
              professional counsel. Please contact our consultants to receive specific professional advice which is
              tailored to your unique situation or circumstance.
            </p>
            <p className="text-justify text-[12px]">
              We disclaim all liability and responsibility (direct or indirect or incidental or consequential or special
              damages) arising from or in connection with the use, inability to use, or reliance on any information
              provided.
            </p>
            <p className="text-justify text-[12px]">
              We refer to NTN Professional Services Pty Ltd. Liability limited under a scheme approved under
              Professional Standards Legislation.
            </p>
          </div>
        </div>
        {/* <MyPartnerLogo /> */}
      </div>
    </div>
  );
}

export default HomeClient;
