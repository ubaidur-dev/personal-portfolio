import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolioData";

const brand = {
  "React 19": "#0C9ACB",
  "JavaScript (ES6+)": "#F0CF00",
  TypeScript: "#3178C6",
  "Next.js": "#111111",
  "Tailwind CSS 4": "#0891B2",
  "React Router": "#CA4245",
  "Framer Motion": "#0055FF",
  Axios: "#5A29E4",
  Vite: "#646CFF",
  Sass: "#C2467F",
  "Bootstrap & jQuery": "#7952B3",
  "HTML5 / CSS3": "#E34F26",
  PHP: "#4F5B93",
  Laravel: "#F02B1E",
  "REST API design": "#3F8F1F",
  MySQL: "#00618A",
  Python: "#3776AB",
  FastAPI: "#009688",
  "scikit-learn": "#E9760F",
  "Git & GitHub": "#F05032",
  "OpenAPI / Swagger": "#3F8F1F",
  "Chrome extensions (MV3)": "#4285F4",
  Composer: "#6B4226",
  npm: "#CB3837",
  "Sanctum & OTP auth": "#ff5a1f",
  "Role-based access": "#ff5a1f",
  "Eloquent & migrations": "#ff5a1f",
  "PDF reports (DOMPDF)": "#ff5a1f",
};

const lone = "[&>li:last-child:nth-child(odd)]:col-span-2";

const layout = [
  {
    span: "lg:col-span-7",
    tiles: "grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-3",
  },
  {
    span: "lg:col-span-5",
    tiles: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-2",
  },
  {
    span: "lg:col-span-5",
    tiles: `grid-cols-2 min-[400px]:grid-cols-3 ${lone} min-[400px]:[&>li:last-child:nth-child(odd)]:col-span-1`,
  },
  {
    span: "lg:col-span-7",
    tiles: `grid-cols-2 sm:grid-cols-5 ${lone} sm:[&>li:last-child:nth-child(odd)]:col-span-1`,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="Skills"
          title="Technical Skills"
          subtitle="// Technologies used across the projects below."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {skillCategories.map((group, gi) => {
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: (gi % 2) * 0.08 }}
                className={`glass spot rounded-2xl p-6 sm:p-8 ${layout[gi % 4].span}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight">
                      {group.category}
                    </h3>
                    <p className="mt-1 text-sm text-ink/55">{group.blurb}</p>
                  </div>
                  <span className="font-mono text-xs text-accent">
                    0{gi + 1}
                  </span>
                </div>

                <ul
                  className={`mt-7 grid gap-3 ${layout[gi % 4].tiles}`}
                >
                  {group.skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-paper/70 px-1.5 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:bg-card hover:shadow-[0_16px_30px_-20px_rgb(17_17_17/0.45)]"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-card text-[1.75rem] transition-transform duration-300 group-hover:scale-110">
                        <Icon style={{ color: brand[name] || "#111" }} />
                      </span>
                      <span className="text-[0.8125rem] font-semibold leading-tight text-ink [overflow-wrap:anywhere]">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
