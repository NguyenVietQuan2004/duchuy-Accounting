"use client";

import { useEffect, useRef, useState } from "react";

export default function Hetbietdatten1Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
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
    <div ref={ref} className={`${className} lg:relative ${isVisible && "lg:animate-hetbietdatten1"}`}>
      {children}
    </div>
  );
}
