import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="Education" title="Education" />

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass spot group flex gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_50px_-30px_rgb(17_17_17/0.45)] sm:p-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-lg text-paper transition-colors duration-300 group-hover:bg-accent">
                <FaGraduationCap />
              </div>
              <div>
                <p className="font-mono text-xs text-accent">{edu.date}</p>
                <h3 className="mt-1 text-lg font-extrabold leading-snug tracking-tight">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-ink/55">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
