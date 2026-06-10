"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLenis } from "lenis/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { site } from "@/data/content";
import { useIntroDone } from "@/components/Preloader";
import { SplitLetters } from "@/components/TextFX";
import Magnetic from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

export default function Hero() {
  const lenis = useLenis();
  const introDone = useIntroDone();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  const anim = introDone ? "show" : "hidden";

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10"
    >
      <motion.div
        style={{ scale: sectionScale, opacity: sectionOpacity }}
        className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.4fr_1fr]"
      >
        {/* Name + intro */}
        <motion.div style={{ y: textY }}>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={anim}
            custom={0.1}
            className="mb-6 text-sm font-medium tracking-[0.3em] text-muted uppercase"
          >
            {site.role} — {site.location}
          </motion.p>

          <h1 className="display text-[clamp(4rem,13vw,11rem)]">
            <SplitLetters text="Alejandro" show={introDone} delay={0.15} />
            <SplitLetters text="Labastie" show={introDone} delay={0.35} className="text-stroke" />
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={anim}
            custom={0.65}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/70"
          >
            Product-minded <span className="text-cream">full stack engineer</span> moving into{" "}
            <span className="text-accent">AI engineering</span>. I ship enterprise software at
            Accenture and have taken a mobile product from zero to both app stores — solo.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={anim}
            custom={0.8}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Magnetic>
              <button
                onClick={() => lenis?.scrollTo("#work", { offset: -80, duration: 1.4 })}
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold tracking-widest text-ink uppercase"
              >
                View Work
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={site.cv}
                target="_blank"
                rel="noreferrer noopener"
                className="block rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Resume
              </a>
            </Magnetic>
            <div className="flex items-center gap-4 text-cream/60">
              <a href={site.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="transition-colors hover:text-accent">
                <FaGithub size={22} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                <FaLinkedin size={22} />
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="transition-colors hover:text-accent">
                <FaInstagram size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div style={{ y: imageY }} className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={introDone ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-4/5 w-full overflow-hidden rounded-2xl md:aspect-3/4"
          >
            <motion.div
              initial={{ scale: 1.35 }}
              animate={introDone ? { scale: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/carousel/image1.jpg"
                alt="Alejandro Labastie in New York City"
                fill
                priority
                sizes="(min-width: 768px) 24rem, 20rem"
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </motion.div>
          </motion.div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={anim}
            custom={1.2}
            className="absolute right-4 bottom-4 rounded-full bg-ink/70 px-4 py-1.5 font-mono text-xs tracking-widest backdrop-blur-sm"
          >
            NYC ✦ 2024
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block font-mono text-xs tracking-[0.3em] text-muted uppercase"
        >
          Scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
