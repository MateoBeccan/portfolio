"use client";

import Link from "next/link";
import { ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { profile, type ResumeDocument } from "@/data/profile";
import BrandMark from "@/components/ui/BrandMark";
import ResumeDownloadLink from "@/components/ui/ResumeDownloadLink";

export default function Navbar({ locale, nav, ui, cv, cvLanguage }: {
  locale: Locale;
  nav: Dictionary["nav"];
  ui: Dictionary["ui"];
  cv?: ResumeDocument;
  cvLanguage?: string;
}) {
  const pathname = usePathname();
  const desktopLinks = useRef<HTMLUListElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const pendingSection = useRef<string | null>(null);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const base = `/${locale}`;
  const isHome = pathname === base || pathname === "/";
  const activeSection = isHome ? active : pathname.startsWith(`${base}/projects/`) ? "projects" : null;
  const other = locale === "es" ? "en" : "es";
  const otherPath = pathname.startsWith(base) ? `/${other}${pathname.slice(base.length)}` : `/${other}`;

  useEffect(() => {
    const sections = isHome ? [...document.querySelectorAll<HTMLElement>("main section[data-nav]")] : [];
    const destination = pendingSection.current;
    pendingSection.current = null;
    if (isHome && destination) document.getElementById(destination)?.focus({ preventScroll: true });

    const update = () => {
      setScrolled(window.scrollY > 12);
      if (!sections.length) return;

      const above = sections.findLast((section) => section.getBoundingClientRect().top < 160);
      const nearEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      setActive((nearEnd ? sections.at(-1) : above)?.id ?? "home");
    };
    update();
    const observer = new IntersectionObserver(update, { rootMargin: "-76px 0px -65% 0px" });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [isHome, pathname]);

  useEffect(() => {
    const links = desktopLinks.current;
    if (!links) return;

    const current = links.querySelector<HTMLAnchorElement>("a[aria-current]");
    const positionIndicator = () => {
      links.style.setProperty("--indicator-offset", `${current?.offsetLeft ?? 0}px`);
      links.style.setProperty("--indicator-width", `${current?.offsetWidth ?? 0}px`);
    };
    positionIndicator();
    const observer = new ResizeObserver(positionIndicator);
    observer.observe(links);
    for (const item of links.children) observer.observe(item);
    return () => observer.disconnect();
  }, [activeSection, nav]);

  function closeMenu(restoreFocus = false) {
    if (restoreFocus) toggle.current?.focus();
    setMenuOpen(false);
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
    const id = event.currentTarget.hash.slice(1);
    if (isHome) {
      document.getElementById(id)?.focus({ preventScroll: true });
      setActive(id);
    } else {
      pendingSection.current = id;
    }
    closeMenu();
  }

  function sectionLinks(mobile = false) {
    return Object.entries(nav).map(([id, label]) => (
      <li key={id}>
        <Link href={`${base}#${id}`} prefetch={false} aria-current={activeSection === id ? (isHome ? "location" : "true") : undefined} onClick={navigateToSection}>
          <span>{label}</span>
          {mobile && <ChevronRight size={17} aria-hidden="true" />}
        </Link>
      </li>
    ));
  }

  function languageSwitch(mobile = false) {
    const names = { es: "Español", en: "English" };
    return (
      <div className="lang-switch" aria-label={ui.language} role="group">
        {(["es", "en"] as const).map((language) => {
          const label = mobile ? names[language] : language.toUpperCase();
          const accessibleLabel = mobile ? label : `${label} — ${names[language]}`;
          return language === locale ? (
            <span key={language} lang={language} aria-current="true">
              {label}{!mobile && <span className="sr-only"> — {names[language]}</span>}
            </span>
          ) : (
            <a key={language} href={otherPath} hrefLang={language} lang={language} aria-label={accessibleLabel} onClick={(event) => {
              const url = new URL(event.currentTarget.href);
              url.hash = window.location.hash;
              event.currentTarget.href = url.href;
              document.cookie = `portfolio-language=${language}; path=/; max-age=31536000; SameSite=Lax`;
            }}>{label}</a>
          );
        })}
      </div>
    );
  }
  const cvLink = cv && cvLanguage && {
    document: cv,
    label: ui.cv,
    language: cvLanguage,
    showLanguage: cv.locale !== locale,
  };

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <nav
        className="wrap nav-bar"
        aria-label={ui.navigation}
        onKeyDown={(event) => {
          if (menuOpen && event.key === "Escape") {
            event.preventDefault();
            closeMenu(true);
          }
        }}
        onBlur={(event) => {
          if (menuOpen && !event.currentTarget.contains(event.relatedTarget)) closeMenu();
        }}
      >
        <Link href={`${base}#home`} prefetch={false} className="brand" onClick={navigateToSection}>
          <BrandMark eager />
          <span className="brand-copy">
            <span>{profile.name}</span>
            <span className="brand-role" lang="en">{profile.role}</span>
          </span>
        </Link>
        <ul className="nav-links" ref={desktopLinks}>{sectionLinks()}</ul>
        <div className="nav-actions">
          <div className="nav-desktop-actions">
            {cvLink && <ResumeDownloadLink {...cvLink} className="nav-cv" />}
            {languageSwitch()}
          </div>
          <button className="nav-control theme-button" type="button" onClick={changeTheme}>
            <Sun className="theme-sun" size={18} aria-hidden="true" />
            <Moon className="theme-moon" size={18} aria-hidden="true" />
            <span className="sr-only theme-sun">{ui.light}</span>
            <span className="sr-only theme-moon">{ui.dark}</span>
          </button>
          <button
            className="nav-control nav-menu-toggle"
            type="button"
            ref={toggle}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            onClick={(event) => {
              event.currentTarget.focus();
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
        <div id="mobile-navigation" className="mobile-menu" data-open={menuOpen} inert={!menuOpen}>
          <ul className="mobile-links">{sectionLinks(true)}</ul>
          {cvLink && <ResumeDownloadLink {...cvLink} className="nav-cv" onClick={() => closeMenu(true)} />}
          {languageSwitch(true)}
        </div>
      </nav>
    </header>
  );
}
