"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Per-letter staggered rise. `show` gates the animation (e.g. until the preloader is done). */
export function SplitLetters({
  text,
  show = true,
  delay = 0,
  stagger = 0.035,
  className = "",
}: {
  text: string;
  show?: boolean;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={{
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
        aria-label={text}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="inline-block"
            variants={{
              hidden: { y: "115%", rotate: 4 },
              show: { y: 0, rotate: 0, transition: { duration: 0.9, ease } },
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}

export type WordSegment = {
  text: string;
  className?: string;
};

/** Word-by-word rise, triggered on scroll into view. Segments allow styled runs of words. */
export function WordReveal({
  segments,
  className = "",
}: {
  segments: WordSegment[];
  className?: string;
}) {
  const words = segments.flatMap((segment) =>
    segment.text.split(" ").filter(Boolean).map((word) => ({ word, className: segment.className })),
  );

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{ show: { transition: { staggerChildren: 0.035 } } }}
    >
      {words.map(({ word, className: wordClass }, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${wordClass ?? ""}`}
            variants={{
              hidden: { y: "115%" },
              show: { y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}

/** Rolling text hover — the label slides up and an accent copy rolls in. Triggered by hovering itself or a parent link/button. */
export function RollText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`rolltext ${className}`}>
      <span>{children}</span>
      <span aria-hidden className="text-accent">
        {children}
      </span>
    </span>
  );
}
