"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

type VelocityMarqueeProps = {
  items: string[];
  /** Percent of one copy width per second. Negative scrolls the other way. */
  baseVelocity?: number;
  className?: string;
};

/** Marquee whose speed and direction react to scroll velocity, Lando-style. */
export default function VelocityMarquee({
  items,
  baseVelocity = 2.5,
  className = "",
}: VelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });

  const directionFactor = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const factor = velocityFactor.get();
    if (factor < 0) {
      directionFactor.current = -1;
    } else if (factor > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * Math.abs(factor);

    baseX.set(baseX.get() + moveBy);
  });

  const copy = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="display px-6 text-3xl whitespace-nowrap text-cream/90 md:px-10 md:text-5xl">
            {item}
          </span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden border-y border-line py-5 md:py-7 ${className}`}>
      <motion.div className="flex w-max" style={{ x }}>
        {copy(false)}
        {copy(true)}
        {copy(true)}
        {copy(true)}
      </motion.div>
    </div>
  );
}
