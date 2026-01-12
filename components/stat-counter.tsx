"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1200,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const stepTime = Math.max(duration / value, 16);

          const interval = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value) clearInterval(interval);
          }, stepTime);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, started]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-foreground">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
