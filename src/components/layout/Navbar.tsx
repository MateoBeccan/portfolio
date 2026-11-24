"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { profile } from "@/data/profile";
import BrandMark from "@/components/ui/BrandMark";

export default function Navbar({ locale, nav, ui, cv }: { locale: Locale; nav: Dictionary["nav"]; ui: Dictionary["ui"]; cv?: string }) {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);
  const [active, setActive] = useState("home");
  const base = `/${locale}`;
  const isHome = pathname === base || pathname === "/";
  const other = locale === "es" ? "en" : "es";
  const otherPath = pathname.startsWith(base) ? `/${other}${pathname.slice(base.length)}` : `/${other}`;

  useEffect(() => {
    if (!isHome) return;

    const sections = document.querySelectorAll("main section[data-nav]");
    const update = () => {
      const above = [...sections].filter((section) => section.getBoundingClientRect().top < 160);
      const nearEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      setActive((nearEnd ? sections[sections.length - 1] : above.at(-1))?.id ?? "home");
    };
    update();
    const observer = new IntersectionObserver(update, { rootMargin: "-76px 0px -65% 0px" });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [isHome]);

  function closeMenu(restoreFocus = false) {
    if (!menu.current?.open) return;
    menu.current.open = false;
    if (restoreFocus) toggle.current?.focus();
  }

  function changeTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }

  function navigateToSection(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    closeMenu();
    const id = event.currentTarget.hash.slice(1);
    if (isHome) {
      document.getElementById(id)?.focus({ preventScroll: true });
      setActive(id);
    }
  }

  const links = Object.entries(nav).map(([id, label]) => (
    <Link key={id} href={`${base}#${id}`} prefetch={false} aria-current={isHome && active === id ? "location" : undefined} onClick={navigateToSection}>
      {label}
    </Link>
  ));

  return (
    <header className="site-header">
      <nav className="wrap nav-bar" aria-label={ui.navigation}>
        <Link href={`${base}#home`} prefetch={false} className="brand" onClick={() => closeMenu()}>
          <BrandMark alt={profile.name} eager />
          <span aria-hidden="true">{profile.name}</span>
        </Link>
        <div className="nav-links">{links}</div>
        <div className="nav-actions">
          {cv && <a className="nav-cv" href={cv} aria-label={ui.cv} download>CV</a>}
          <div className="lang-switch" aria-label={ui.language} role="group">
            <span lang={locale} aria-current="true">{locale.toUpperCase()}</span>
            <a href={otherPath} hrefLang={other} lang={other} aria-label={other === "es" ? "Español" : "English"} onClick={(event) => {
              const url = new URL(event.currentTarget.href);
              url.hash = window.location.hash;
              event.currentTarget.href = url.href;
              document.cookie = `portfolio-language=${other}; path=/; max-age=31536000; SameSite=Lax`;
            }}>{other.toUpperCase()}</a>
          </div>
          <button className="icon-button theme-button" type="button" onClick={changeTheme}>
            <Sun className="theme-sun" size={18} aria-hidden="true" />
            <Moon className="theme-moon" size={18} aria-hidden="true" />
            <span className="sr-only theme-sun">{ui.light}</span>
            <span className="sr-only theme-moon">{ui.dark}</span>
          </button>
          <details
            className="mobile-menu"
            ref={menu}
            onKeyDown={(event) => {
              if (event.key === "Escape") closeMenu(true);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
            }}
          >
            <summary className="icon-button" ref={toggle}>
              <Menu size={20} aria-hidden="true" />
              <span className="sr-only menu-closed">{ui.openMenu}</span>
              <span className="sr-only menu-open">{ui.closeMenu}</span>
            </summary>
            <div className="mobile-links">
              {links}
              {cv && <a href={cv} onClick={() => closeMenu(true)} download>{ui.cv}</a>}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
