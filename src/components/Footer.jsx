import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center font-mono text-xs text-ink/70 sm:flex-row sm:px-8 sm:text-left">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <a href="#home" className="inline-flex h-11 items-center px-2 transition-colors hover:text-accent">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
