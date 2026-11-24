export default function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <header className="section-title">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
