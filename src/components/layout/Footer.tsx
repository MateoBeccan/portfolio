import Link from "next/link";

import { profile, socialLinks } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          © {year} {profile.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/#home" className="transition hover:text-white">
            Inicio
          </Link>
          {socialLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
