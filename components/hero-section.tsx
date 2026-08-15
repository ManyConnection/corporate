import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

/* 対応方針として掲げる約束。実際の運用に合わせて文言を調整してください。 */
const promises = ["初回相談・お見積り無料", "NDA締結に対応", "請負・準委任どちらも可", "最短翌営業日にご返信"]

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-background pt-28 pb-16">
      {/* 背景：製図紙の方眼 */}
      <div className="absolute inset-0 -z-30 bg-grid mask-fade-y" aria-hidden />

      {/* 背景：ロゴを大きく置いた透かし */}
      <div className="pointer-events-none absolute -right-24 top-1/2 -z-20 -translate-y-1/2 opacity-[0.04] lg:right-0" aria-hidden>
        <Logo className="h-[42rem] max-w-none" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-foreground" aria-hidden />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Software development partner
            </span>
          </div>

          <h1 className="mb-10 text-5xl font-bold leading-[1.05] tracking-tight text-balance text-foreground md:text-7xl lg:text-8xl">
            「作りたいもの」を、
            <br />
            動くシステムに。
          </h1>

          <p className="mb-12 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
            業務システム、Webサービス、モバイルアプリ、クラウド基盤。
            要件整理から設計・開発・リリース後の運用保守まで一気通貫でお引き受けします。
            <span className="font-medium text-foreground">要件が固まっていない段階のご相談も歓迎です。</span>
          </p>

          <div className="mb-16 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="#contact">
              <Button size="lg" className="w-full cursor-pointer text-base font-semibold sm:w-auto">
                無料で相談する
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button
                size="lg"
                variant="outline"
                className="w-full cursor-pointer border-foreground text-base transition-colors hover:bg-foreground hover:text-background sm:w-auto"
              >
                費用・納期の目安を見る
              </Button>
            </Link>
          </div>

          {/* 約束をヘアラインで区切った仕様欄のように並べる */}
          <ul className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {promises.map((promise, index) => (
              <li key={promise} className="bg-background p-4">
                <span className="mb-2 block font-mono text-[10px] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs leading-snug text-foreground md:text-sm">{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
