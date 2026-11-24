import SectionTitle from "@/components/ui/SectionTitle";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

const processIcons = [ClipboardList, GitBranch, Code2, ShieldCheck, FileText];

export default function Methodology({ locale }: { locale: Locale }) {
  const { process } = dictionaries[locale];
  return (
    <section className="section bordered" id="methodology">
      <div className="wrap">
        <SectionTitle title={process.title} />
        <ol className="process-list" role="list">
          {process.steps.map(([title, description], index) => {
            const Icon = processIcons[index];
            return <li key={title}><span className="process-icon" aria-hidden="true"><Icon size={18} /></span><div><h3>{title}</h3><p>{description}</p></div></li>;
          })}
        </ol>
        <p className="process-note">{process.description}</p>
      </div>
    </section>
  );
}
import { ClipboardList, Code2, FileText, GitBranch, ShieldCheck } from "lucide-react";
