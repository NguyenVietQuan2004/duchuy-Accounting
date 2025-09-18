"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function CardWrapper({
  service,
  idx,
  visible,
  stagger = 300,
}: {
  service: any;
  idx: number;
  visible?: boolean;
  stagger?: number;
}) {
  return (
    <Card
      className={`group rounded-sm border-none h-full p-0 transition-all duration-300
        ${idx >= 2 ? "lg:col-span-6" : idx === 0 ? "lg:col-span-5 lg:col-start-2" : "lg:col-span-5 lg:col-start-7"}
        ${visible ? "animate-card opacity-100" : "opacity-0"}
      `}
      style={{ animationDelay: `${idx * stagger}ms` }}
    >
      <CardContent
        className={`p-6 flex flex-col items-center gap-4 border-none
          ${visible ? "animate-ltr-opacity" : "opacity-0"}`}
        style={{ animationDelay: `${idx * stagger + 300}ms` }}
      >
        <service.icon />
        <h3 className="text-xl font-bold text-center lg:text-start">{service.title}</h3>
        <ul className="space-y-1 text-sm">
          {service.items.map((item: string, i: number) => (
            <li key={i} className="text-gray-700 group-hover:text-white leading-snug">
              • {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
