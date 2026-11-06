import { motion } from "framer-motion";

export default function SectionHeading({ index, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-14"
    >
      <p className="font-mono text-[0.8125rem] text-ink/70">
        <span className="text-accent">const</span> section ={" "}
        <span className="text-ink">&quot;{index.toLowerCase()}&quot;</span>;
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="mt-5 leading-none">
        <span className="inline-block h-1 w-14 rounded-full bg-accent" />
      </div>
      {subtitle && (
        <div className="mt-5">
          <p className="inline-block max-w-2xl font-mono text-[0.8125rem] leading-relaxed text-ink/70">
            {subtitle}
          </p>
        </div>
      )}
    </motion.div>
  );
}
