"use client";

import { Card, CardContent } from "@/components/ui/card";
import MissionSection from "./_components/mission";
import ServicesSection from "./_components/service";
import ProjectCard from "./_components/project-card";
import { Briefcase, DollarSign, Shield, Lock, Users } from "lucide-react";
import MyPartner from "./_components/my-partner";
import RequestCallback from "./_components/request-callback";
import BlogSection from "./_components/blogs";
import ClientFeedback from "./_components/client-feedback";
import MyPartnerLogo from "./_components/my-partner-logo";

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
  {
    icon: <DollarSign className="w-8 h-8 text-orange-500" />,
    title: "Transparent Pricing",
    desc: "Clear pricing with no hidden fees, helping you stay on budget.",
  },
  {
    icon: <Lock className="w-8 h-8 text-orange-500" />,
    title: "Secure Portal",
    desc: "Safe online platform for sharing and managing your documents.",
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: "Dedicated Support",
    desc: "A support team that knows your business and responds quickly.",
  },
];

function HomeClient() {
  const img = "https://w.ladicdn.com/s1440x620/57b167c9ca57d39c18a1c57c/op6ZCVTO20231115065153.jpeg";

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[700px] mt-[140px]">
        {img && (
          <div
            className="absolute inset-0 bg-[position:50%_0%] bg-cover bg-no-repeat transition-opacity duration-500"
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

      <div className="max-w-[1200px] hidden lg:block mx-auto  -translate-y-1/4">
        {/* Hàng 1: 3 services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-4">
          {services.slice(0, 3).map((service, idx) => (
            <Card key={idx} className="bg-white shadow-xl rounded-sm hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hàng 2: 2 services, căn giữa */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center max-w-3xl mx-auto px-4">
          {services.slice(3).map((service, idx) => (
            <Card key={idx} className="bg-white shadow-xl rounded-sm hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

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

      <div className="relative -translate-y-[120px] lg:-translate-y-0">
        <MissionSection />
        <ServicesSection />
        <MyPartner />
        <ProjectCard />
        <RequestCallback />
        <BlogSection />
        <ClientFeedback />
        <MyPartnerLogo />
      </div>
    </div>
  );
}

export default HomeClient;
