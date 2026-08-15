import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground py-24 text-background md:py-32">
      {/* ロゴを断ち切りで大きく置いた透かし */}
      <div className="pointer-events-none absolute -bottom-32 -right-20 -z-10 opacity-[0.06] md:right-0" aria-hidden>
        <Logo invert className="h-[34rem] max-w-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-background" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-background/60">
                Let&apos;s talk
              </span>
            </div>

            <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
              発注を決める前の
              <br className="hidden md:block" />
              相談で構いません
            </h2>

            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-pretty text-background/70">
              「これは開発すべきか」「いくらくらいかかるのか」といった段階のご相談を歓迎しています。
              話しただけで費用は発生しません。
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full cursor-pointer bg-background text-base font-semibold text-foreground hover:bg-background/85 sm:w-auto"
                >
                  無料で相談する
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <a href="mailto:tada@manyconnection.co.jp">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full cursor-pointer border-background/50 bg-transparent text-base text-background transition-colors hover:bg-background hover:text-foreground sm:w-auto"
                >
                  メールで問い合わせる
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
