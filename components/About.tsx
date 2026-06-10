"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { WordReveal } from "@/components/TextFX";

const stats = [
  { value: "2", label: "App stores shipped to, solo" },
  { value: "5mo", label: "From zero to live product" },
  { value: "C2", label: "English — Spanish native" },
  { value: "∞", label: "Curiosity for what's next" },
];

const photos = [
  { src: "/carousel/image2.jpg", alt: "With friends under the Manhattan Bridge, NYC", caption: "DUMBO, NYC" },
  { src: "/carousel/image3.jpg", alt: "Padel match at a packed arena", caption: "Padel nights" },
  { src: "/carousel/image5.jpg", alt: "Racing Club football stadium at sunset", caption: "Matchday" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionHeading number="01" title="About" />

      <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <WordReveal
            className="display text-3xl leading-tight md:text-5xl"
            segments={[
              { text: "I build products end-to-end — from the" },
              { text: "first commit", className: "text-accent" },
              { text: "to the" },
              { text: "app store review.", className: "text-stroke" },
            ]}
          />

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-5 text-lg leading-relaxed text-cream/70">
              <p>
                I&apos;m Alejandro, a software engineer from Buenos Aires. By day I build and ship
                enterprise applications at <span className="text-cream">Accenture</span> — C# / .NET 8
                backends talking to React + TypeScript frontends. Before that, I was the founding
                developer of <span className="text-cream">ReNauticos</span>, where I owned a marketplace
                mobile app from technical design to live release on the Apple App Store and Google Play.
              </p>
              <p>
                Right now I&apos;m channeling that product mindset into{" "}
                <span className="text-accent">AI engineering</span> — LLM integration, the Claude API and
                AI-assisted development workflows. I thrive in high-growth, high-expectation environments,
                and I&apos;m especially drawn to fintech and startups.
              </p>
              <p>
                Off the clock you&apos;ll find me on a padel court, at a football stadium, in the gym, or
                deep into a movie — I consider myself a bit of a cinephile.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group flex flex-col gap-2 bg-ink p-6 transition-colors duration-300 hover:bg-accent"
                >
                  <span className="display text-4xl text-accent transition-colors duration-300 group-hover:text-ink md:text-5xl">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-wider text-muted uppercase transition-colors duration-300 group-hover:text-ink/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Photo stack */}
        <div className="flex flex-col gap-6">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ clipPath: i % 2 === 0 ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] }}
              className={`group relative aspect-16/10 overflow-hidden rounded-2xl ${
                i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
              }`}
            >
              <motion.div
                initial={{ scale: 1.3 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 28rem, 100vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </motion.div>
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-4 py-1.5 font-mono text-xs tracking-widest backdrop-blur-sm">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
