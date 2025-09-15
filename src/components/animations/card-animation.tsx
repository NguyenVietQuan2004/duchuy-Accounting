"use client";

import { useEffect, useRef, useState } from "react";

export default function CardAnimationWrapper({
  children,
  className,
  style,
  idx,
  threshold,
}: {
  children: React.ReactNode;
  style: any;
  threshold?: number;
  idx: number;
  className?: string;
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
    <div style={style} ref={ref} className={`${className} ${isVisible && "animate-card relative"}`}>
      {children}
    </div>
  );
}
