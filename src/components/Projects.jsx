import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
} from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import {
  projects,
  teamProjects,
  moreProjects,
} from "../data/portfolioData";

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

function Tag({ children }) {
  return (
    <li className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[0.6875rem] text-ink/70">
      {children}
    </li>
  );
}

function Visual({ visual, title }) {
  if (visual.image) {
    return (
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="ml-3 truncate font-mono text-[0.625rem] text-ink/45">
            {visual.label}
          </span>
        </div>
        <img
          src={visual.image}
          alt={`${title}: ${visual.label}`}
          loading="eager"
          decoding="async"
          draggable="false"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${title} architecture: ${visual.nodes
        .map((n) => n.label)
        .join(", ")}`}
      className="relative flex flex-col justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-[#0e0e10] p-5 sm:aspect-[16/10] sm:p-6"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl"
      />
      {visual.nodes.map((n, i) => (
        <div key={n.label} className="relative">
          <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.04] px-4 py-2.5 backdrop-blur-sm">
            <span className="font-mono text-[0.625rem] text-accent">0{i + 1}</span>
            <div className="min-w-0">
              <p className="truncate text-[0.8125rem] font-semibold text-white">
                {n.label}
              </p>
              <p className="truncate font-mono text-[0.65625rem] text-white/50">
                {n.sub}
              </p>
            </div>
          </div>
          {i < visual.nodes.length - 1 && (
            <span
              aria-hidden
              className="ml-[22px] block h-2.5 w-px bg-gradient-to-b from-accent to-transparent"
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Slide({ project, index, total }) {
  return (
    <article className="glass spot flex h-full flex-col rounded-2xl p-4 transition-shadow hover:shadow-[0_30px_60px_-35px_rgb(17_17_17/0.45)] sm:p-5">
      <Visual visual={project.visual} title={project.title} />

      <div className="flex flex-1 flex-col px-1.5 pb-1.5 pt-6">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}{" "}
          · {project.kicker}
        </p>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-[0.9375rem] text-ink/60">{project.tagline}</p>

        <ul className="mt-5 flex-1 space-y-2.5">
          {project.points.map((pt, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-[0.84375rem] leading-relaxed text-ink/65"
            >
              <span className="mt-0.5 font-mono text-accent">▹</span>
              {pt}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>

        {(project.link || project.repo) && (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 font-mono text-[0.8125rem]">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink/65 transition hover:text-accent"
              >
                <FaArrowUpRightFromSquare className="text-xs" /> Live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink/65 transition hover:text-accent"
              >
                <FaGithub /> {project.repoLabel ?? "Source"}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Carousel() {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const goTo = useCallback((i) => {
    const track = trackRef.current;
    const slide = track?.children[i];
    if (!slide) return;
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft),
      behavior: "smooth",
    });
  }, []);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const pad = parseFloat(getComputedStyle(track).paddingLeft);
    let best = 0;
    let bestDist = Infinity;
    [...track.children].forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - track.offsetLeft - pad - track.scrollLeft);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIndex(best);
  };

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startLeft: trackRef.current.scrollLeft,
      moved: false,
    };
  };
  useEffect(() => {
    const move = (e) => {
      const d = drag.current;
      if (!d.active) return;
      const dx = e.clientX - d.startX;
      if (Math.abs(dx) > 4) {
        d.moved = true;
        setDragging(true);
      }
      trackRef.current.scrollLeft = d.startLeft - dx;
    };
    const up = () => {
      if (!drag.current.active) return;
      drag.current.active = false;
      setDragging(false);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") goTo(Math.min(index + 1, projects.length - 1));
    if (e.key === "ArrowLeft") goTo(Math.max(index - 1, 0));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-sm text-ink/70">
          <span className="text-ink">{String(index + 1).padStart(2, "0")}</span>{" "}
          / {String(projects.length).padStart(2, "0")}
          <span className="ml-3 hidden text-ink/60 sm:inline">
            drag, swipe or use the arrows
          </span>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(Math.max(index - 1, 0))}
            disabled={index === 0}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition hover:border-ink hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => goTo(Math.min(index + 1, projects.length - 1))}
            disabled={index === projects.length - 1}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition hover:border-ink hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Featured projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        className={`no-scrollbar -mx-5 flex scroll-pl-5 gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:scroll-pl-8 sm:px-8 ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
        }`}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="w-[88%] shrink-0 snap-start sm:w-[32.5rem] lg:w-[35rem]"
          >
            <Slide project={project} index={i} total={projects.length} />
          </div>
        ))}
        <div aria-hidden className="w-px shrink-0" />
      </div>

      <div className="mt-2 flex items-center gap-2" role="tablist" aria-label="Choose project">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${p.title}`}
            onClick={() => goTo(i)}
            className="group flex h-11 items-center px-3"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                i === index ? "w-10 bg-accent" : "w-4 bg-ink/20 group-hover:bg-ink/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="Projects"
          title="Selected Projects"
          subtitle="// Full-stack applications, from database design to user interface."
        />

        <Carousel />

        <div className="mt-24">
          <motion.div {...reveal} className="mb-8 max-w-2xl">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Team &amp; client work
            </h3>
            <p className="mt-2 font-mono text-[0.8125rem] leading-relaxed text-ink/55">
              // Production Laravel applications built with a team. Each card
              lists my contribution.
            </p>
          </motion.div>

          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamProjects.map((p, i) => (
              <motion.li key={p.id} {...reveal} className="h-full">
                <div className="glass spot flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-ink/30">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[0.6875rem] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} live site`}
                        className="-m-3.5 p-3.5 text-ink/40 transition hover:text-accent"
                      >
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    )}
                  </div>
                  <h4 className="mt-3 text-lg font-extrabold tracking-tight">
                    {p.name}
                  </h4>
                  <p className="mt-0.5 text-sm text-ink/50">{p.domain}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">
                    {p.built}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-24">
          <motion.div {...reveal} className="mb-8 max-w-2xl">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              More React builds
            </h3>
            <p className="mt-2 font-mono text-[0.8125rem] leading-relaxed text-ink/55">
              // Smaller front-end projects with source code on GitHub.
            </p>
          </motion.div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moreProjects.map((p) => (
              <motion.li key={p.id} {...reveal} className="h-full">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="glass spot group flex h-full flex-col rounded-xl p-5 transition hover:-translate-y-1 hover:border-ink/40"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="flex items-center gap-2 text-[0.9375rem] font-bold tracking-tight">
                      <FaGithub className="text-ink/50" />
                      {p.name}
                    </span>
                    <FaArrowUpRightFromSquare className="mt-1 shrink-0 text-xs text-ink/30 transition-colors group-hover:text-accent" />
                  </span>
                  <span className="mt-3 flex-1 text-[0.8125rem] leading-relaxed text-ink/60">
                    {p.blurb}
                  </span>
                  <span className="mt-4 font-mono text-[0.6875rem] leading-relaxed text-ink/45">
                    {p.stack.join(" · ")}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
