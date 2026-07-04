"use client";

import { ArrowRight, Download, Mail, Folder, ArrowLeft, Github, ExternalLink, PenLine } from "lucide-react";

const ICONS = {
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  download: Download,
  mail: Mail,
  folder: Folder,
  github: Github,
  external: ExternalLink,
  "pen-line": PenLine,
};

const VARIANTS = {
  // mirrors RaisedButton default: dark gradient, rounded-full
  default:
    "text-white border-[#111113] bg-gradient-to-b from-[#444] to-black hover:from-[#4a4a4a] hover:to-[#111]",

  // mirrors RaisedButton accent: #00bbff fill + before: shimmer
  accent:
    "text-black border-[rgba(0,187,255,0.4)] bg-[#00bbff] shadow-[0_2px_8px_rgba(0,187,255,0.3)] " +
    "before:absolute before:inset-0 before:rounded-full before:border-t before:border-white/30 " +
    "before:pointer-events-none before:bg-gradient-to-b before:from-white/15 before:to-transparent",

  // mirrors RaisedButton secondary: white surface, subtle shadow
  secondary:
    "text-black/70 border-black/9 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)] hover:bg-[#f7f7f7]",

  // mirrors RaisedButton outline
  outline:
    "bg-transparent text-[#e5e7eb] border-zinc-700 hover:bg-zinc-800/50",

  // mirrors RaisedButton ghost
  ghost:
    "bg-transparent text-[#9ca3af] border-transparent hover:bg-zinc-800 hover:text-white",

  // your existing gradient — kept for About section
  gradient:
    "bg-gradient-to-r from-sky-500 to-emerald-400 border-0 text-white hover:opacity-90",

  // your purple — kept for Experience section
  purple:
    "bg-[#9d4edd]/10 border-[#9d4edd]/30 text-[#c084fc] hover:bg-[#9d4edd]/20 hover:border-[#9d4edd]/60",
};

const SIZES = {
  sm:        "h-8  px-3 text-xs  gap-1.5",
  default:   "h-10 px-4 text-sm  gap-2",
  lg:        "h-11 px-6 text-sm  gap-2.5",
  icon:      "h-10 w-10",
  "icon-sm": "h-8  w-8",
};

export default function ButtonLink({
  href,
  label,
  icon,
  iconSize = 14,
  trailingArrow = false,
  download,
  target,
  rel,
  variant = "default",
  size = "default",
  className = "",
  onClick,
}) {
  const IconComp = icon ? ICONS[icon] : null;

  const base = [
    "inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full font-medium",
    "transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "relative cursor-pointer disabled:pointer-events-none disabled:opacity-50",
    "border subpixel-antialiased",
    "transition-transform duration-150 hover:scale-[0.98] active:scale-[0.96]",
    VARIANTS[variant] ?? VARIANTS.default,
    SIZES[size]       ?? SIZES.default,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {IconComp && <IconComp size={iconSize} aria-hidden="true" />}
      {label && <span>{label}</span>}
      {trailingArrow && (
        <ArrowRight
          size={iconSize}
          className="transition-transform duration-150 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (onClick && !href) {
    return (
      <button type="button" onClick={onClick} className={`group ${base}`}>
        {inner}
      </button>
    );
  }

  return (
    <a href={href} download={download} target={target} rel={rel} className={`group ${base}`}>
      {inner}
    </a>
  );
}