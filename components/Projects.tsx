"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiImage } from "react-icons/fi";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { projects, type Project } from "@/data/content";

function ProjectImage({ project }: { project: Project }) {
  if (!project.image) {
    if (project.logo) {
      return (
        <div className="relative h-full w-full bg-[radial-gradient(120%_120%_at_50%_35%,#16181d_0%,#0c0d10_100%)]">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            fill
            sizes="(min-width: 768px) 34rem, 85vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 md:object-contain md:p-8"
          />
        </div>
      );
    }
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-[repeating-linear-gradient(135deg,#141416,#141416_14px,#0f0f11_14px,#0f0f11_28px)]">
        <FiImage size={36} className="text-cream/30" />
        <span className="font-mono text-xs tracking-[0.25em] text-cream/40 uppercase">
          Screenshot coming soon
        </span>
      </div>
    );
  }
  return (
    <Image
      src={project.image}
      alt={`${project.title} screenshot`}
      fill
      sizes="(min-width: 768px) 44rem, 85vw"
      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
  );
}

function ProjectCard({
  project,
  index,
  className = "",
  imageClassName = "aspect-16/10",
}: {
  project: Project;
  index: number;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-300 hover:border-accent/50 ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${imageClassName}`}>
        <motion.div
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.25 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0"
          >
            <ProjectImage project={project} />
          </motion.div>
        </motion.div>
        <span className="absolute top-4 right-4 z-10 font-mono text-xs tracking-widest text-cream/50">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        {project.featured && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-accent px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-ink uppercase">
            Featured
          </span>
        )}
      </div>

      <div className="flex shrink-0 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display text-3xl transition-colors duration-300 group-hover:text-accent md:text-4xl">
            {project.title}
          </h3>
          <span className="font-mono text-sm text-muted">{project.year}</span>
        </div>

        <p className="text-sm leading-relaxed text-cream/70 md:text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1.5 text-xs font-medium tracking-wider text-cream/80 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="flex items-center gap-5 pt-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent"
              >
                <FaGithub size={16} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent"
              >
                Live <FiArrowUpRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      setRange(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -range]);
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <section id="work">
      {/* Desktop: vertical scroll drives the gallery sideways */}
      <div
        ref={sectionRef}
        className="relative hidden md:block"
        style={{ height: `calc(100vh + ${range}px)` }}
      >
        <div
          ref={viewportRef}
          className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-20 pb-6"
        >
          <div className="mx-auto w-full max-w-7xl px-10">
            <Reveal x={-90} className="mb-6">
              <div className="flex items-baseline gap-4 border-b border-line pb-4">
                <span className="font-mono text-sm text-accent">03</span>
                <h2 className="display text-4xl lg:text-5xl">Selected Work</h2>
              </div>
            </Reveal>
          </div>
          <motion.div ref={trackRef} style={{ x }} className="flex items-stretch gap-8 self-start px-10">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                className="h-[min(62vh,540px)] w-[34rem] shrink-0"
                imageClassName="min-h-0 flex-1"
              />
            ))}
          </motion.div>
          <div className="mx-auto mt-6 w-full max-w-7xl px-10">
            <div className="h-px w-full bg-line">
              <motion.div style={{ scaleX: progressX }} className="h-px origin-left bg-accent" />
            </div>
            <p className="mt-3 font-mono text-xs tracking-[0.3em] text-muted uppercase">
              Keep scrolling →
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: native horizontal snap carousel */}
      <div className="px-6 py-24 md:hidden">
        <SectionHeading number="03" title="Selected Work" />
        <Reveal x={60}>
          <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                className="w-[85vw] shrink-0 snap-center"
              />
            ))}
          </div>
        </Reveal>
        <p className="mt-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
          Swipe →
        </p>
      </div>
    </section>
  );
}
