import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve("./public"); // your SVG source folder
const OUT_DIR = path.resolve("./components/example"); // where TSX components will be saved

// Utility: convert filename to PascalCase for component name
function toPascalCase(str: string) {
  return str
    .replace(/\.svg$/i, "")
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}

// Utility: convert filename to kebab-case for file output
function toKebabCase(str: string) {
  return str
    .replace(/\.svg$/i, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

// ensure output directory exists
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith(".svg"));
const exports: string[] = [];

for (const file of files) {
  const svgPath = path.join(SRC_DIR, file);
  const svgContent = fs.readFileSync(svgPath, "utf8");

  // clean up svg
  const cleaned = svgContent
    .replace(/<\?xml.*?\?>/g, "")
    .replace(/<!DOCTYPE.*?>/g, "")
    .replace(/\r?\n|\r/g, "")
    .trim();

  const componentName = toPascalCase(file);
  const fileBaseName = toKebabCase(file);
  const formattedSvg = cleaned
    .replace("<svg", "<svg {...props}")
    // convert dashed attributes (stroke-width → strokeWidth)
    .replace(/([a-zA-Z-]+)="(.*?)"/g, (match, attr: string, val) =>
      attr.includes("-")
        ? `${attr.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())}="${val}"`
        : match,
    );

  const tsxContent = `
import * as React from "react";

export function ${componentName}(props: React.SVGProps<SVGSVGElement>) {
  return (
    ${formattedSvg}
  );
}
`;

  const outPath = path.join(OUT_DIR, `${fileBaseName}.tsx`);
  fs.writeFileSync(outPath, tsxContent.trim());
  exports.push(`export * from "./${fileBaseName}";`);
  console.log(`✅ Generated ${fileBaseName}.tsx`);
}

// generate index.ts
const indexContent = exports.join("\n") + "\n";
fs.writeFileSync(path.join(OUT_DIR, "index.ts"), indexContent);
console.log("📦 Generated index.ts");
