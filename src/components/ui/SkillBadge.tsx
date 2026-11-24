import type { ReactNode } from "react";

export default function SkillBadge({ children }: { children: ReactNode }) {
  return <span className="skill-badge">{children}</span>;
}
