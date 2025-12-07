import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ManyConnection合同会社</h3>
            <p className="text-sm text-background/70">
              未来を創造するイノベーション企業
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/#services" className="hover:text-background transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/#company" className="hover:text-background transition-colors">
                  企業情報
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-background transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>tada@manyconnection.co.jp</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>&copy; 2025 ManyConnection合同会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
