import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Technology } from "@/types/project";

export default function ProjectFlow({ steps, locale }: { steps: Technology[]; locale: Locale }) {
  return (
    <ol className="diagram" role="list">
      {steps.map((step, index) => {
        const label = typeof step === "string" ? step : step[locale];
        return <li key={label}><span>{label}</span>{index < steps.length - 1 && <ArrowRight size={15} aria-hidden="true" />}</li>;
      })}
    </ol>
  );
}
