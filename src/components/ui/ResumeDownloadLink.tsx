import { Download } from "lucide-react";
import type { MouseEventHandler } from "react";
import type { ResumeDocument } from "@/data/profile";

export default function ResumeDownloadLink({
  document,
  label,
  language,
  showLanguage = false,
  className,
  onClick,
}: {
  document: ResumeDocument;
  label: string;
  language: string;
  showLanguage?: boolean;
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a className={className} href={document.href} hrefLang={document.locale} download={document.downloadName} onClick={onClick}>
      <Download size={16} aria-hidden="true" />
      <span>{label}<span className={showLanguage ? undefined : "sr-only"}> ({language})</span></span>
    </a>
  );
}
