import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="About"
          title="About Me"
          subtitle="// React in the browser, Laravel on the server."
        />

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55 }}
            className="space-y-5 text-base leading-relaxed text-ink/75 sm:text-[1.0625rem] lg:col-span-7"
          >
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="glass spot relative rounded-2xl px-6 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_26px_50px_-32px_rgb(17_17_17/0.4)] sm:px-7 lg:col-span-5"
          >
            {about.facts.map(({ label, value, href }) => (
              <div
                key={label}
                className="group flex items-baseline justify-between gap-6 border-b border-line py-4 last:border-b-0"
              >
                <dt className="shrink-0 font-mono text-[0.8125rem] text-ink/65 transition-colors duration-200 group-hover:text-accent">
                  {label}
                </dt>
                <dd className="text-right text-[0.9375rem] font-semibold">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-ink/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
