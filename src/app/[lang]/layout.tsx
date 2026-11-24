import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { dictionaries } from "@/i18n/dictionary";
import { isLocale, locales } from "@/i18n/locales";
import { availableResumes } from "@/lib/resume";
import "../globals.css";

const geist = localFont({
  src: "../../../node_modules/next/dist/next-devtools/server/font/geist-latin.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});
const mono = localFont({
  src: "../../../node_modules/next/dist/next-devtools/server/font/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
  adjustFontFallback: false,
});

const initializeTheme = 'try{document.documentElement.dataset.theme=localStorage.getItem("portfolio-theme")==="light"?"light":"dark"}catch{}';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Layout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "es";
  const { nav, ui, resume } = dictionaries[locale];
  const [cv] = availableResumes(locale);
  return (
    <html lang={locale === "es" ? "es-AR" : "en"} className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: initializeTheme }} /></head>
      <body>
        <a className="skip-link" href="#main-content">{ui.skip}</a>
        <Navbar locale={locale} nav={nav} ui={ui} cv={cv} cvLanguage={cv && resume.languages[cv.locale]} />
        <BackToTop label={ui.backToTop} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
