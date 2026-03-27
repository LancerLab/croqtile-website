"use client";

import { type ReactNode, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className = "" }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl border bg-[var(--card)] overflow-hidden transition-all
                  hover:border-mint-500/50 ${className}`}
      style={
        isHovered
          ? {
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(74, 222, 131, 0.06), transparent 40%)`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
