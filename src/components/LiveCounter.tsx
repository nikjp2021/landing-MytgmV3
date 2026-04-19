"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";

export default function LiveCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const baseCount = 23;
    const randomAdd = Math.floor(Math.random() * 25);
    setCount(baseCount + randomAdd);

    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(20, Math.min(50, prev + change));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-text-secondary">
      <div className="relative">
        <Users className="w-4 h-4 text-accent" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </div>
      <span>
        <span className="text-accent font-semibold">{count}</span> people viewing
      </span>
    </div>
  );
}