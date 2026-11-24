import Image from "next/image";

export default function BrandMark({ alt = "", eager = false }: { alt?: string; eager?: boolean }) {
  return (
    <span className="brand-mark">
      <Image src="/images/logo.png" width={48} height={48} alt={alt} loading={eager ? "eager" : "lazy"} />
    </span>
  );
}
