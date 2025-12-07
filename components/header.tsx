import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-foreground">
            ManyConnection合同会社
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              会社概要
            </Link>
            <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              サービス
            </Link>
            <Link href="/#company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              企業情報
            </Link>
            <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              お問い合わせ
            </Link>
            <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              プライバシーポリシー
            </Link>
          </nav>

        </div>
      </div>
    </header>
  )
}
