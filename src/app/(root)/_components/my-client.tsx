"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Briefcase, Building2, Layers, Network } from "lucide-react";
import Image from "next/image";
export default function MyClient() {
  const items = [
    {
      icon: <Rocket className="w-8 h-8 text-cyan-600" />,
      title: "Startups",
      desc: "Fast setup, lean systems, and growth-focused advice",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-cyan-600" />,
      title: "Small Businesses",
      desc: "Reliable support, cash flow clarity, and compliance confidence",
    },
    {
      icon: <Building2 className="w-8 h-8 text-cyan-600" />,
      title: "Large Enterprises",
      desc: "Scalable systems, strategic tax planning, and advanced reporting",
    },
    {
      icon: <Layers className="w-8 h-8 text-cyan-600" />,
      title: "All Industries",
      desc: "From tech and retail to construction and healthcare",
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-600" />,
      title: "All Business Structures",
      desc: "Sole traders, partnerships, companies, trusts, and not-for-profits",
    },
  ];
  const logoBlue = "/images/logoblue.png";
  return (
    <section className="max-w-5xl mx-auto px-4 py-4 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          {" "}
          <h2 className="w-[100px]">
            <Image alt="" width={200} height={200} src={logoBlue} className="w-full h-full object-cover" />
          </h2>
          <h3 className="text-3xl font-bold mb-8 mt-2">Our Clients</h3>
        </div>
        {items.map((item, i) => (
          <Card key={i} className="rounded-lg shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col gap-4">
              {item.icon}
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
