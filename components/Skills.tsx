"use client";

import type { IconType } from "react-icons";
import {
  SiClaude,
  SiDotnet,
  SiGooglecloud,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import {
  LuBot,
  LuBrainCircuit,
  LuCloud,
  LuCode,
  LuContainer,
  LuCpu,
  LuDatabase,
  LuHardDrive,
  LuRefreshCw,
  LuServer,
  LuSmartphone,
  LuTarget,
  LuTerminal,
  LuUsers,
  LuWorkflow,
} from "react-icons/lu";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { skillGroups } from "@/data/content";

const groupIcons: Record<string, IconType> = {
  "Languages & Frameworks": LuCode,
  "Cloud & Infrastructure": LuCloud,
  "AI & Tooling": LuCpu,
  Methodologies: LuUsers,
};

const skillIcons: Record<string, IconType> = {
  "C#": TbBrandCSharp,
  ".NET 8": SiDotnet,
  "ASP.NET Core": SiDotnet,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  "React Native": TbBrandReactNative,
  "Next.js": SiNextdotjs,
  SQL: LuDatabase,
  "Google Cloud Platform": SiGooglecloud,
  "Cloud Run": LuContainer,
  "Cloud SQL": LuServer,
  "Cloud Storage": LuHardDrive,
  "REST APIs": TbApi,
  "CI/CD": LuWorkflow,
  "LLM Integration": LuBrainCircuit,
  "Claude API": SiClaude,
  "Prompt Engineering": LuTerminal,
  "AI-assisted Workflows": LuBot,
  "Agile / Scrum": LuRefreshCw,
  "End-to-end Product Ownership": LuTarget,
  "Mobile Release Management": LuSmartphone,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionHeading number="04" title="Stack" />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const GroupIcon = groupIcons[group.label] ?? LuCode;
          return (
            <Reveal key={group.label} x={i % 2 === 0 ? -70 : 70} delay={0.05 * i} className="h-full">
              <div className="group/card relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-accent/40 md:p-8">
                {/* Watermark icon */}
                <GroupIcon
                  aria-hidden
                  className="absolute -top-8 -right-8 size-40 text-cream/[0.04] transition-all duration-500 group-hover/card:rotate-6 group-hover/card:text-accent/10"
                />

                <div className="relative mb-7 flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink text-accent">
                    <GroupIcon size={20} />
                  </span>
                  <div>
                    <span className="font-mono text-xs tracking-[0.3em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display text-xl md:text-2xl">{group.label}</h3>
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {group.skills.map((skill) => {
                    const Icon = skillIcons[skill];
                    return (
                      <div
                        key={skill}
                        className="group/skill flex items-center gap-3 rounded-xl border border-line bg-ink/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10"
                      >
                        {Icon && (
                          <Icon
                            size={17}
                            className="shrink-0 text-muted transition-colors duration-300 group-hover/skill:text-accent"
                          />
                        )}
                        <span className="text-sm font-medium text-cream/85 transition-colors duration-300 group-hover/skill:text-cream">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
