"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems, socialLinks } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/8 bg-[#07090d]/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/#home"
          aria-label="Ir al inicio"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md p-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-200 transition hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 md:hidden"
        >
          {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-white/8 bg-[#07090d]/96 px-4 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-3 flex items-center gap-3 border-t border-white/8 pt-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
