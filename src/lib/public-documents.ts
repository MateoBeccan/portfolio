import { closeSync, openSync, readSync, realpathSync, statSync } from "node:fs";
import { dirname, join } from "node:path";

type Directory = "cv" | "certificates";
const jpeg = (header: Buffer) => header[0] === 255 && header[1] === 216 && header[2] === 255;

const fileSignatures: Record<string, (header: Buffer) => boolean> = {
  pdf: (header) => header.subarray(0, 5).toString() === "%PDF-",
  png: (header) => header.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
  jpg: jpeg,
  jpeg,
  webp: (header) => header.subarray(0, 4).toString() === "RIFF" && header.subarray(8, 12).toString() === "WEBP",
};

function hasPdfTrailer(descriptor: number, size: number) {
  const tail = Buffer.alloc(Math.min(size, 1024));
  if (readSync(descriptor, tail, 0, tail.length, size - tail.length) !== tail.length) return false;
  const trailer = /[\r\n]startxref\s+(\d+)\s+%%EOF\s*$/.exec(tail.toString("latin1"));
  if (!trailer) return false;
  const offset = Number(trailer[1]);
  return offset >= 12 && offset < size - tail.length + trailer.index;
}

export function publicDocument(href: string | undefined, directory: Directory): string | undefined {
  const match = href?.match(/^\/(cv|certificates)\/([a-z0-9_-]+\.(pdf|png|jpe?g|webp))$/i);
  if (!match || match[1] !== directory) return;
  const extension = match[3].toLowerCase();
  if (directory === "cv" && extension !== "pdf") return;

  try {
    const folder = join(realpathSync("public"), directory);
    const file = realpathSync(join(folder, match[2]));
    if (dirname(file) !== folder) return;
    const stats = statSync(file);
    if (!stats.isFile()) return;

    const descriptor = openSync(file, "r");
    try {
      const header = Buffer.alloc(12);
      if (readSync(descriptor, header, 0, header.length, 0) !== header.length || !fileSignatures[extension](header)) return;
      if (directory === "cv" && !hasPdfTrailer(descriptor, stats.size)) return;
      return href;
    } finally {
      closeSync(descriptor);
    }
  } catch {
    return;
  }
}

export function credentialUrl(value: string | undefined): string | undefined {
  if (!value) return;
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && !url.username && !url.password) return url.href;
  } catch {
    return;
  }
}

