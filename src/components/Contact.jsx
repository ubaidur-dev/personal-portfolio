import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { contactInfo, socialLinks } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          index="contact"
          title="Let's Build Something"
          subtitle="// Open to Full-Stack, React and Laravel roles, and freelance projects"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="glass spot rounded-2xl p-10 border border-black/5 glow-purple text-left mx-auto transition-colors duration-300 hover:border-ink/25"
        >
          <p className="font-mono text-sm text-black/60 mb-6">
            <span className="text-black">function</span>{" "}
            <span className="text-black">getInTouch</span>() {"{"}
            <br />
            &nbsp;&nbsp;
            <span className="text-black">return</span> "Hiring for a Full-Stack, React or Laravel role?
            <br />
            <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Have a project in mind? Let's talk.";
            <br />
            {"}"}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group w-full sm:w-auto justify-center px-7 py-3 rounded-lg bg-black font-mono text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_14px_30px_-12px_rgb(255_90_31/0.6)] flex items-center gap-2"
            >
              <FaPaperPlane className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" /> {contactInfo.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={name}
                className="-m-2.5 p-2.5 text-black/50 hover:text-accent transition-colors text-xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
