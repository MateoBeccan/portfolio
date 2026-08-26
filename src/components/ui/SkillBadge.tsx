type SkillBadgeProps = {
  children: string;
  emphasis?: boolean;
};

export default function SkillBadge({ children, emphasis = false }: SkillBadgeProps) {
  return (
    <span
      className={
        emphasis
          ? "rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-sm font-medium text-blue-100"
          : "rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-slate-300"
      }
    >
      {children}
    </span>
  );
}
