type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
