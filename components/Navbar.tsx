"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { site } from "@/data/content";
import { RollText } from "@/components/TextFX";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    lenis?.scrollTo(href, { offset: -80, duration: 1.4 });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled && !open ? "border-b border-line bg-ink/70 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => lenis?.scrollTo(0, { duration: 1.4 })}
          className="display z-50 text-2xl tracking-wide transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          AL<span className="text-accent">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium tracking-widest text-cream/80 uppercase"
              >
                <RollText>{link.label}</RollText>
              </button>
            </li>
          ))}
          <li>
            <a
              href={site.cv}
              target="_blank"
              rel="noreferrer noopener"
              className="block rounded-full border border-cream/30 px-5 py-2 text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:border-accent"
            >
              <RollText>Resume</RollText>
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-7 bg-cream"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-7 bg-cream"
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-ink px-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollTo(link.href)}
                className="display text-left text-6xl text-cream transition-colors hover:text-accent"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + links.length * 0.08, duration: 0.5 }}
              href={site.cv}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 w-fit rounded-full border border-cream/30 px-8 py-3 text-sm font-medium tracking-widest uppercase"
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
