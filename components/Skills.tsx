"use client";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionHeading number="04" title="Stack" />

      <div className="flex flex-col">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} x={i % 2 === 0 ? -70 : 70} delay={0.05 * i}>
            <div className="grid gap-5 border-b border-line py-10 md:grid-cols-[1fr_2fr] md:py-12">
              <h3 className="font-mono text-sm tracking-[0.25em] text-muted uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
