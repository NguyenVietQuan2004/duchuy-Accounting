"use client";

import { useEffect, useState, useRef } from "react";

export default function CountUpNumber({
  target,
  duration = 2000,
  className,
}: {
  target: number;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.unobserve(entry.target); // chỉ trigger 1 lần
        }
      },
      {
        threshold: 0, // trigger khi thấy 40% element
        rootMargin: "0px 0px -10% 0px", // bắt sớm 1 chút
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let frame: number;
    let animationStart: number | null = null;

    const step = (timestamp: number) => {
      if (!animationStart) animationStart = timestamp;
      const progress = Math.min((timestamp - animationStart) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
    </span>
  );
}
