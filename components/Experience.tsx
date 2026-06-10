"use client";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { experience, education } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionHeading number="02" title="Experience" />

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={job.company} x={i % 2 === 0 ? -90 : 90} delay={0.05 * i}>
            <article className="group grid gap-6 border-b border-line py-12 transition-colors duration-300 md:grid-cols-[1fr_2fr] md:py-16">
              <div>
                <h3 className="display text-4xl transition-colors duration-300 group-hover:text-accent md:text-6xl">
                  {job.company}
                </h3>
                <p className="mt-3 text-lg font-medium text-cream/90">{job.role}</p>
                <p className="mt-1 font-mono text-sm text-muted">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-4 text-base leading-relaxed text-cream/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <Reveal x={-90} delay={0.1}>
          <article className="grid gap-4 py-12 md:grid-cols-[1fr_2fr] md:py-16">
            <p className="font-mono text-sm tracking-widest text-muted uppercase">Education</p>
            <div>
              <h3 className="text-xl font-semibold">{education.school}</h3>
              <p className="mt-1 text-cream/70">{education.degree}</p>
              <p className="mt-1 font-mono text-sm text-muted">{education.period}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
