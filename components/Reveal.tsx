"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  /** Vertical offset (default 50). Ignored when `x` is set. */
  y?: number;
  /** Horizontal offset — slides in from the side instead of from below. */
  x?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 50, x, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: x ?? 0, y: x !== undefined ? 0 : y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  number,
  title,
  className = "",
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal x={-90} className={`mb-14 md:mb-20 ${className}`}>
      <div className="flex items-baseline gap-4 border-b border-line pb-6">
        <span className="font-mono text-sm text-accent">{number}</span>
        <h2 className="display text-5xl md:text-7xl">{title}</h2>
      </div>
    </Reveal>
  );
}
