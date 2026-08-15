import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  /** 通し番号。製図の図番のように振る */
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  /** 反転ブロック（黒地）に置く場合 */
  invert?: boolean
  className?: string
}

/** 全セクション共通の見出し。図番 + 英字ラベル → 罫線 → 見出し → リード文。 */
export function SectionHeading({ index, eyebrow, title, description, invert, className }: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <div
        className={cn(
          "flex items-baseline gap-4 border-b pb-4 mb-8",
          invert ? "border-white/25" : "border-foreground",
        )}
      >
        <span className={cn("font-mono text-xs tracking-[0.25em]", invert ? "text-white" : "text-foreground")}>
          {index}
        </span>
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-[0.25em]",
            invert ? "text-white/60" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          "text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-3xl text-lg leading-relaxed text-pretty",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
