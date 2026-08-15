import Image from "next/image"
import { cn } from "@/lib/utils"

type LogoProps = {
  /** 反転ブロック（黒地）に置く場合に白へ転じる */
  invert?: boolean
  className?: string
}

/** MC モノグラム。原寸は 491x512 の透過PNG。高さ指定で使う。 */
export function Logo({ invert, className }: LogoProps) {
  return (
    <Image
      src="/logo-mc.png"
      alt="ManyConnection合同会社"
      width={491}
      height={512}
      priority
      className={cn("w-auto", invert && "logo-invert", className)}
    />
  )
}
