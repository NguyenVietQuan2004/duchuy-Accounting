"use client";

import { useEffect, useRef, useState } from "react";

export default function FlyFourWrapper({
  children,
  className,
  animation,
}: {
  animation: string;
  className?: string;
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${isVisible && "relative "} ${animation}`}>
      {children}
    </div>
  );
}
