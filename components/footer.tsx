import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">企業名</h3>
            <p className="text-sm text-background/70">
              未来を創造する
              <br />
              イノベーション企業
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  コンサルティング
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  システム開発
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  データ分析
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  クラウド
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">企業情報</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="#about" className="hover:text-background transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#company" className="hover:text-background transition-colors">
                  企業情報
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  ニュース
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>〒100-0001</li>
              <li>東京都千代田区千代田1-1-1</li>
              <li>TEL: 03-1234-5678</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>&copy; 2025 株式会社サンプル企業. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
