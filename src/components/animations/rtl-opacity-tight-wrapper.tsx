"use client";

import { useEffect, useRef, useState } from "react";

export default function RtlOpacityTightWrapper({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // true khi vào, false khi ra
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${isVisible && "relative animate-rtl-opacity-tight"}`}>
      {children}
    </div>
  );
}
