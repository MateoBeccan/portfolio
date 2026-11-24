import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import BrandMark from "@/components/ui/BrandMark";

export default function Footer({ locale }: { locale: Locale }) {
  const { nav, ui } = dictionaries[locale];
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <BrandMark />
          <div><p className="footer-name">© {new Date().getFullYear()} {profile.name}</p><p>{profile.role}</p></div>
        </div>
        <nav aria-label={ui.footerNav}>
          <Link href={`/${locale}#projects`} prefetch={false}>{nav.projects}</Link>
          <Link href={`/${locale}#contact`} prefetch={false}>{nav.contact}</Link>
          <a href={`/${locale}#home`} className="icon-button" aria-label={ui.backHome}><ArrowUp size={17} aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
}
