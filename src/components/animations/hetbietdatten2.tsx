"use client";

import { useEffect, useRef, useState } from "react";

export default function Hetbietdatten2Wrapper({ children }: { children: React.ReactNode }) {
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
    <div ref={ref} className={`${isVisible && "animate-hetbietdatten2 relative"}`}>
      {children}
    </div>
  );
}
