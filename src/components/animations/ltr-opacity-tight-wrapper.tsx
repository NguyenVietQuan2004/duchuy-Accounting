"use client";

import { useEffect, useRef, useState } from "react";

export default function LtrOpacityTightWrapper({
  children,
  className,
  style,

  threshold,
  idx,
}: {
  className?: string;
  threshold?: number;
  style: any;
  idx: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // chỉ set true 1 lần
          observer.unobserve(entry.target); // ngừng observe -> animation chỉ chạy 1 lần
        }
      },
      {
        threshold: threshold ? threshold : idx > 2 ? 0.00001 : 0.7,

        rootMargin: `0px 0px ${idx > 2 ? "0%" : "0px"} 0px`,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={style} ref={ref} className={`${className} ${isVisible && "relative animate-ltr-opacity"}`}>
      {children}
    </div>
  );
}
