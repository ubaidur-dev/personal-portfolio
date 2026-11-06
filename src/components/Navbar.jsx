import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FaBars, FaXmark, FaDownload } from "react-icons/fa6";
import { cvLink, navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const primaryBtn =
    "rounded-lg bg-ink font-mono font-semibold text-paper transition hover:bg-accent";
  const secondaryBtn =
    "rounded-lg border border-ink/20 font-mono font-semibold transition hover:border-ink";

  const goTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", href);
      })
    );
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 select-none transition-colors duration-300 [-webkit-touch-callout:none] ${
        open
          ? "border-b border-line bg-paper"
          : scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent"
      }`}
    >
      <motion.span
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-accent"
      />

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center [@media(max-height:500px)]:h-14 justify-between pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:pl-[max(2rem,env(safe-area-inset-left))] sm:pr-[max(2rem,env(safe-area-inset-right))]"
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="inline-flex h-11 items-center font-mono text-lg font-bold"
        >
          <span className="text-ink/40">&lt;</span>
          {personalInfo.firstName}
          <span className="text-accent"> /</span>
          <span className="text-ink/40">&gt;</span>
        </a>

        <ul className="hidden items-center gap-4 font-mono text-[0.8125rem] md:flex xl:gap-7">
          {navLinks.slice(1).map((link, i) => (
            <li key={link.name}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`group relative whitespace-nowrap transition-colors ${
                  active === link.href ? "text-ink" : "text-ink/55 hover:text-ink"
                }`}
              >
                <span className="hidden text-accent lg:inline">0{i + 1}. </span>{link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-ink transition-all ${
                    active === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className={`${secondaryBtn} hidden px-4 py-3 text-xs xl:block`}
          >
            Let&rsquo;s talk
          </a>
          <a
            {...cvLink}
            className={`${primaryBtn} flex items-center gap-2 px-4 py-3 text-xs`}
          >
            <FaDownload />
            <span className="xl:hidden">CV</span>
            <span className="hidden xl:inline">Download CV</span>
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-xl md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </nav>
    </header>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain bg-paper px-5 pb-10 pt-4 [@media(max-height:500px)]:top-14 md:hidden"
        >
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.name} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={(e) => goTo(e, link.href)}
                  className="flex items-baseline justify-between py-5 text-2xl font-extrabold tracking-tight"
                >
                  {link.name}
                  <span className="font-mono text-xs font-normal text-accent">
                    0{i}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            {...cvLink}
            onClick={(e) => !personalInfo.resumeUrl && goTo(e, "#contact")}
            className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-ink py-4 text-center font-mono text-sm font-semibold text-paper"
          >
            <FaDownload /> Download CV
          </a>
          <a
            href="#contact"
            onClick={(e) => goTo(e, "#contact")}
            className="mt-3 block rounded-xl border border-ink/20 py-4 text-center font-mono text-sm font-semibold"
          >
            Let&rsquo;s talk
          </a>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
