"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Reveal } from "@/components/Reveal";
import { RollText } from "@/components/TextFX";
import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] text-accent uppercase">
            05 — Contact
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a href={`mailto:${site.email}`} className="group mt-8 block w-fit">
            <RollText className="display text-[clamp(3rem,11vw,9rem)]">Let&apos;s Talk</RollText>
            <span className="mt-2 block text-lg text-cream/60 transition-colors group-hover:text-cream">
              {site.email} ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-md text-base leading-relaxed text-cream/60">
            Open to remote and hybrid roles — especially in fintech and startups. If you have a
            project in mind or just want to connect, my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <a href={site.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-cream/60 transition-colors hover:text-accent">
                <FaGithub size={22} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="text-cream/60 transition-colors hover:text-accent">
                <FaLinkedin size={22} />
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="text-cream/60 transition-colors hover:text-accent">
                <FaInstagram size={22} />
              </a>
              <a
                href={site.cv}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium tracking-widest text-cream/60 uppercase transition-colors hover:text-accent"
              >
                Resume ↓
              </a>
            </div>
            <p className="font-mono text-xs tracking-wider text-muted">
              © {new Date().getFullYear()} {site.name} — Buenos Aires, Argentina
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
