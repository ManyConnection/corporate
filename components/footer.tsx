import Link from "next/link"
import { Logo } from "@/components/logo"
import { ArrowUpRight } from "lucide-react"

const serviceLinks = [
  { href: "/#services", label: "承れる開発の内容" },
  { href: "/#pricing", label: "費用・納期の目安" },
  { href: "/#tech", label: "対応技術" },
  { href: "/#process", label: "ご依頼の流れ" },
]

const companyLinks = [
  { href: "/#works", label: "開発実績" },
  { href: "/#strengths", label: "選ばれる理由" },
  { href: "/#faq", label: "よくあるご質問" },
  { href: "/#company", label: "会社概要" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-deep py-16 text-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-14 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <Logo invert className="h-8" />
              <span className="text-lg font-semibold tracking-tight">
                ManyConnection<span className="font-normal text-background/60">合同会社</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-background/70">
              業務システム・Webサービス・モバイルアプリの受託開発。
              要件整理から設計・開発・運用保守まで一気通貫でお引き受けします。
            </p>
            <a
              href="mailto:tada@manyconnection.co.jp"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-background/70 transition-colors hover:text-background"
            >
              tada@manyconnection.co.jp
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div>
            <h4 className="mb-5 border-b border-background/25 pb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-background/60">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 transition-colors hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 border-b border-background/25 pb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-background/60">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 transition-colors hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 transition-colors hover:text-background"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-background/25 pt-8 text-sm text-background/60 md:flex-row">
          <p className="font-mono text-xs">&copy; 2025 ManyConnection LLC. All rights reserved.</p>
          <Link href="/#contact" className="transition-colors hover:text-background">
            無料で相談する
          </Link>
        </div>
      </div>
    </footer>
  )
}
