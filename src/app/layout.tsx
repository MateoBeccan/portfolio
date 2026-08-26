import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mateo Beccan | Software Developer",
    template: "%s | Mateo Beccan",
  },
  description:
    "Portfolio de Mateo Beccan, Software Developer especializado en Java, Spring Boot, SQL y desarrollo de aplicaciones.",
  applicationName: "Mateo Beccan Portfolio",
  authors: [{ name: "Mateo Beccan" }],
  keywords: [
    "Mateo Beccan",
    "Software Developer",
    "Java",
    "Spring Boot",
    "SQL",
    "Portfolio",
  ],
  openGraph: {
    title: "Mateo Beccan | Software Developer",
    description:
      "Portfolio profesional de Mateo Beccan: Java, Spring Boot, SQL, APIs REST y proyectos de software.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateo Beccan | Software Developer",
    description:
      "Portfolio profesional de Mateo Beccan: Java, Spring Boot, SQL, APIs REST y proyectos de software.",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
