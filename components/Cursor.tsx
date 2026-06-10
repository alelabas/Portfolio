"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Custom cursor: accent dot + trailing ring that grows over interactive elements. Fine pointers only. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest("a, button, [data-cursor]")));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-200 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed top-0 left-0 z-200 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.9 : 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-9 w-9 rounded-full border border-cream"
        />
      </motion.div>
    </>
  );
}
