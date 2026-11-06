import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import {
  cvLink,
  moreProjects,
  personalInfo,
  projects,
  skillCategories,
  socialLinks,
  teamProjects,
} from "../data/portfolioData";

const ease = [0.22, 1, 0.36, 1];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease, delay },
});

function useTyping(words) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(reduce ? words[0] : "");

  useEffect(() => {
    if (reduce) return;
    let w = 0;
    let c = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const word = words[w];
      c += deleting ? -1 : 1;
      setText(word.slice(0, c));
      let delay = deleting ? 28 : 55;
      if (!deleting && c === word.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && c === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words, reduce]);

  return text;
}

const k = (v) => ({ t: "k", v: `"${v}"` });
const s = (v) => ({ t: "s", v: `"${v}"` });
const p = (v) => ({ t: "p", v });
const list = (items) => [
  p("["),
  ...items.flatMap((v, i) => [s(v), ...(i < items.length - 1 ? [p(", ")] : [])]),
  p("]"),
];

const codeLines = [
  [p("{")],
  [k("name"), p(": "), s(personalInfo.name), p(",")],
  [k("role"), p(": "), s(personalInfo.role), p(",")],
  [k("location"), p(": "), s("Karachi, PK"), p(",")],
  [k("frontend"), p(": "), ...list(["React 19", "Tailwind", "Vite"]), p(",")],
  [k("backend"), p(": "), ...list(["Laravel", "PHP", "MySQL"]), p(",")],
  [k("also"), p(": "), ...list(["Python", "FastAPI"]), p(",")],
  [k("focus"), p(": "), ...list(["REST APIs", "RBAC", "PDF reports"]), p(",")],
  [k("open_to_work"), p(": "), { t: "b", v: "true" }],
  [p("}")],
];

const tokenClass = {
  k: "text-sky-300",
  s: "text-emerald-300",
  p: "text-white/60",
  b: "text-amber-300",
};

function Terminal() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useSpring(0, { stiffness: 120, damping: 18 });
  const my = useSpring(0, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(mx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(my, [-0.5, 0.5], [6, -6]);

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.12 }}
      className="relative mx-auto w-full max-w-[32.5rem] lg:mx-0"
      style={{ perspective: 1000 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgb(255_90_31/0.22),transparent)] blur-2xl"
      />

      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e10] shadow-[0_40px_80px_-30px_rgb(17_17_17/0.6)]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-white/40">
            developer.json
          </span>
        </div>

        <pre className="whitespace-pre-wrap break-words p-4 font-mono text-[0.71875rem] leading-6 sm:p-5 sm:text-[0.84375rem] sm:leading-7">
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 shrink-0 select-none whitespace-nowrap pr-3 text-right text-white/20">
                {i + 1}
              </span>
              <code className={`min-w-0 ${i > 0 && i < codeLines.length - 1 ? "pl-3 sm:pl-4" : ""}`}>
                {line.map((tok, j) => (
                  <span key={j} className={tokenClass[tok.t]}>
                    {tok.v}
                  </span>
                ))}
                {i === codeLines.length - 1 && (
                  <span className="ml-1 inline-block h-4 w-[0.45rem] translate-y-0.5 animate-caret bg-accent" />
                )}
              </code>
            </div>
          ))}
        </pre>
      </motion.div>

      <span className="absolute -right-3 -top-4 hidden animate-float rounded-lg border border-line bg-card px-3 py-1.5 font-mono text-[0.6875rem] shadow-lg sm:block">
        <span className="text-accent">$</span> npm run dev
      </span>
      <span
        className="absolute -bottom-4 -left-3 hidden animate-float rounded-lg border border-line bg-card px-3 py-1.5 font-mono text-[0.6875rem] shadow-lg sm:block"
        style={{ animationDelay: "-3s" }}
      >
        <span className="text-accent">$</span> php artisan serve
      </span>
    </motion.div>
  );
}

function Counter({ to, suffix = "", active }) {
  const value = useMotionValue(0);
  const [shown, setShown] = useState(0);
  useMotionValueEvent(value, "change", (v) => setShown(Math.round(v)));

  useEffect(() => {
    if (active) {
      const controls = animate(value, to, { duration: 1.6, ease });
      return () => controls.stop();
    }
    value.set(0);
  }, [active, to, value]);

  return (
    <span className="tabular-nums">
      {shown}
      {suffix}
    </span>
  );
}

const stats = [
  { value: projects.length, label: "Featured projects" },
  { value: teamProjects.length, label: "Team projects" },
  { value: moreProjects.length, label: "Front-end projects" },
  { value: 30, suffix: "+", label: "Public GitHub repos" },
];
const statMax = Math.max(...stats.map((st) => st.value));

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const pct = Math.max(stat.value / statMax, 0.12);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease, delay: index * 0.07 }}
      className="glass spot group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-5"
    >
      <p className="flex items-center justify-between font-mono text-[0.625rem] uppercase tracking-wide text-ink/50 sm:text-[0.6875rem] sm:tracking-wider">
        <span className="flex items-center gap-2 min-[380px]:whitespace-nowrap">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {stat.label}
        </span>
        <span className="hidden text-ink/30 sm:inline">0{index + 1}</span>
      </p>

      <p className="mt-4 text-4xl font-extrabold leading-none tracking-tight sm:text-[2.75rem]">
        <Counter to={stat.value} suffix={stat.suffix} active={inView} />
      </p>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="h-full origin-left rounded-full bg-gradient-to-r from-accent to-[#ffa45c]"
          style={{ width: `${pct * 100}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 1.6, ease }}
        />
      </div>
    </motion.div>
  );
}

const techItems = (() => {
  const seen = new Set();
  return skillCategories
    .flatMap((c) => c.skills)
    .filter((sk) => sk.icon && !seen.has(sk.name) && seen.add(sk.name));
})();

export default function Hero() {
  const typed = useTyping(personalInfo.roles);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:pb-20 lg:pt-36">
        <div>
          <motion.p
            {...rise(0)}
            className="font-mono text-sm text-ink/70"
          >
            <span className="text-accent">$</span> whoami
          </motion.p>

          <motion.h1
            {...rise(0.04)}
            className="mt-5 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.2rem]"
          >
            Hi, I&rsquo;m{" "}
            <span className="relative inline-block">
              {personalInfo.firstName}
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-accent"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 50 2, 150 2, 198 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            Ur Rehman
          </motion.h1>

          <motion.div
            {...rise(0.08)}
            className="mt-6 h-9 font-mono text-lg text-ink/80 sm:text-2xl"
            aria-label={personalInfo.role}
          >
            <span className="text-accent">&gt; </span>
            <span aria-hidden>{typed}</span>
            <span
              aria-hidden
              className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-1 animate-caret bg-ink"
            />
          </motion.div>

          <motion.p
            {...rise(0.12)}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            {...rise(0.16)}
            className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center"
          >
            <a
              href="#projects"
              className="group col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 sm:col-span-1 font-mono text-sm font-semibold text-paper shadow-[0_12px_30px_-12px_rgb(17_17_17/0.6)] transition hover:-translate-y-0.5 hover:bg-accent"
            >
              View Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-ink/25 px-3 py-3.5 text-center font-mono text-sm font-semibold transition hover:border-ink hover:bg-ink/5 sm:px-6"
            >
              Get In Touch
            </a>
            <a
              {...cvLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink/25 md:hidden px-3 py-3.5 font-mono text-sm font-semibold transition hover:border-ink hover:bg-ink/5 sm:border-transparent sm:px-4 sm:text-ink/70 sm:hover:border-transparent sm:hover:bg-transparent sm:hover:text-ink"
            >
              <FaDownload /> <span className="sm:hidden">Download CV</span><span className="hidden sm:inline">CV</span>
            </a>
          </motion.div>

          <motion.div
            {...rise(0.2)}
            className="mt-9 flex items-center gap-5 text-xl text-ink/50"
          >
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={name}
                className="-m-2.5 p-2.5 transition-colors hover:text-accent"
              >
                <Icon />
              </a>
            ))}
            <span className="hidden font-mono text-xs text-ink/60 sm:block">
              {personalInfo.availability}
            </span>
          </motion.div>
        </div>

        <Terminal />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((st, i) => (
            <StatCard key={st.label} stat={st} index={i} />
          ))}
        </div>
      </div>

      <div
        className="relative border-y border-line bg-card/60 py-5 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {[...techItems, ...techItems].map(({ name, icon: Icon }, i) => (
            <span
              key={i}
              className="flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2 font-mono text-[0.8125rem] text-ink/75"
            >
              <Icon className="text-base" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
