// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowIcon, BoxIcon, CheckedIcon, MoneyIcon } from "../../public/icons";

// // data/services.ts
// export const services = [
//   {
//     icon: CheckedIcon,
//     title: "Accounting",
//     items: [
//       "Financial reporting & analysis",
//       "Budgeting & forecasting",
//       "Business structuring & advisory",
//       "Financial services for scaling companies",
//     ],
//   },

//   {
//     icon: ArrowIcon,
//     title: "Tax Solutions",
//     items: [
//       "Individual & business tax returns",
//       "BAS, GST & PAYG lodgements",
//       "Tax planning and optimisation strategies",
//       "ATO support & representation",
//     ],
//   },
//   {
//     icon: BoxIcon,
//     title: "Bookkeeping",
//     items: [
//       "Cloud-based bookkeeping (Xero, MYOB, QuickBooks)",
//       "Payroll & superannuation management",
//       "Accounts payable & receivable",
//       "Real-time financial dashboards",
//     ],
//   },
//   {
//     icon: MoneyIcon,
//     title: "Other Compliance Services",
//     items: [
//       "State-based tax and business compliance",
//       "Payroll tax and WorkCover registration",
//       "ASIC and ABN compliance support",
//     ],
//   },
// ];
// function Service() {
//   return (
//     <section className="bg-blue-50 px-4 lg:px-0 pt-8 lg:pt-12  pb-8 lg:pb-20">
//       <div className="max-w-[1300px] mx-auto px-0 lg:px-40">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
//           {services.map((service, idx) => (
//             <Card
//               key={idx}
//               className={`group hover:bg-[#2760A5] rounded-sm border-none p-0 hover:text-white transition-all duration-300
//           ${
//             idx >= 2
//               ? "lg:col-span-6" // 2 thẻ dưới to full 6 + 6
//               : idx === 0
//               ? "lg:col-span-5 lg:col-start-2" // thẻ 1 nhỏ căn giữa
//               : "lg:col-span-5 lg:col-start-7" // thẻ 2 nhỏ căn giữa
//           }`}
//             >
//               <CardContent className="p-6 flex flex-col items-center gap-4 border-none  ">
//                 <div className="">{<service.icon />}</div>
//                 <h3 className="text-xl font-bold">{service.title}</h3>
//                 <ul className="space-y-1 text-sm">
//                   {service.items.map((item, i) => (
//                     <li key={i} className="text-gray-700 group-hover:text-white leading-snug">
//                       • {item}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Service;

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowIcon, BoxIcon, CheckedIcon, MoneyIcon } from "../../public/icons";
import FlyFourWrapper from "./animations/fly-four";
import CardAnimationWrapper from "./animations/card-animation";
import LtrOpacityTightWrapper from "./animations/ltr-opacity-tight-wrapper";

export const services = [
  {
    icon: CheckedIcon,
    title: "Accounting",
    items: [
      "Financial reporting & analysis",
      "Budgeting & forecasting",
      "Business structuring & advisory",
      "Financial services for scaling companies",
    ],
  },

  {
    icon: ArrowIcon,
    title: "Tax Solutions",
    items: [
      "Individual & business tax returns",
      "BAS, GST & PAYG lodgements",
      "Tax planning and optimisation strategies",
      "ATO support & representation",
    ],
  },
  {
    icon: BoxIcon,
    title: "Bookkeeping",
    items: [
      "Cloud-based bookkeeping (Xero, MYOB, QuickBooks)",
      "Payroll & superannuation management",
      "Accounts payable & receivable",
      "Real-time financial dashboards",
    ],
  },
  {
    icon: MoneyIcon,
    title: "Other Compliance Services",
    items: [
      "State-based tax and business compliance",
      "Payroll tax and WorkCover registration",
      "ASIC and ABN compliance support",
    ],
  },
];

function Service() {
  const animations = [
    "animate-in-top-left",
    "animate-in-top-right",
    "animate-in-bottom-left",
    "animate-in-bottom-right",
  ];

  return (
    <section className="bg-blue-50 px-4 lg:px-0 pt-8 lg:pt-12 pb-8 lg:pb-20">
      <div className="max-w-[1300px] mx-auto px-0 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {services.map((service, idx) => (
            <CardAnimationWrapper
              idx={idx}
              threshold={0.2}
              key={idx}
              className={`
                col-span- 12
                md:col-span-1
                ${
                  idx >= 2
                    ? "lg:col-span-6"
                    : idx === 0
                    ? "lg:col-span-5 lg:col-start-2"
                    : "lg:col-span-5 lg:col-start-7"
                }
                
                
                h-full
                opacity-0 overflow-hidden  
                    ${idx == 3 ? "lg:col-start-0" : ""} ${idx > 2 && ""}`} // ép 2 thẻ cuối vào cột giữa
              style={{ animationDelay: `${idx * 300}ms` }}
            >
              <Card
                key={idx}
                className={`group rounded-sm border-none h-full p-0 transition-all duration-300 hover:bg-[#2760A5] hover:text-white `}
              >
                <LtrOpacityTightWrapper
                  idx={idx}
                  threshold={0.2}
                  style={{ animationDelay: `${idx * 300 + 700}ms` }}
                  className={`${idx >= 3 ? "" : ""}  left-[-10px] opacity-0`}
                >
                  <CardContent className="p-6 flex flex-col items-center gap-4 border-none">
                    <service.icon />
                    <h3 className="text-xl font-bold text-center lg:text-start">{service.title}</h3>
                    <ul className="space-y-1 text-sm">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-gray-700 group-hover:text-white leading-snug">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </LtrOpacityTightWrapper>
              </Card>
            </CardAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
