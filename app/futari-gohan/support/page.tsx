import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ふたりのお願い サポート",
  alternates: { canonical: "/futari-gohan/support" },
  description: "iOSアプリ「ふたりのお願い」の使い方とお問い合わせ先です。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ManyConnection合同会社",
    title: "ふたりのお願い サポート｜ManyConnection合同会社",
    description: "iOSアプリ「ふたりのお願い」の使い方とお問い合わせ先です。",
    url: "https://manyconnection.co.jp/futari-gohan/support",
  },
}

export default function FutariGohanSupportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative isolate overflow-hidden pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8 flex items-baseline gap-4 border-b border-foreground pb-4">
            <span className="font-mono text-xs tracking-[0.25em] text-foreground">02</span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Support</span>
          </div>
          <h1 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            ふたりのお願い サポート
          </h1>
          <div className="space-y-10 text-muted-foreground">
            <p className="leading-relaxed">
              「ふたりのお願い」は、接続用IDを共有した相手と質問・お願い・回答をやりとりするiOSアプリです。相手が招待を承認すると内容が共有されます。
            </p>

            <section>
              <h2 className="mb-5 text-xl font-semibold text-foreground">よくある質問</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">相手とつながるには？</h3>
                  <p className="leading-relaxed">設定画面で自分の接続用IDを共有し、相手から受け取ったIDを入力して招待します。相手が承認すると接続されます。知っている相手か、IDを確認してから承認してください。</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">通知が届きません</h3>
                  <p className="leading-relaxed">iPhoneの「設定」で「ふたりのお願い」の通知が許可されているか確認してください。通知を許可しなくても、アプリを開いて内容を確認できます。</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">機種変更・再インストール後に登録を戻せますか？</h3>
                  <p className="leading-relaxed">現在、登録の引き継ぎや復旧には対応していません。接続用IDだけで登録を復旧することはできません。</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">登録とデータを削除するには？</h3>
                  <p className="leading-relaxed">アプリの設定で「登録とデータを削除」を選び、確認画面で確定してください。削除対象や相手側に残る内容は、<Link href="/futari-gohan/privacy-policy" className="underline underline-offset-4">プライバシーポリシー</Link>をご確認ください。</p>
                </div>
              </div>
            </section>

            <section className="border border-border bg-surface p-6">
              <h2 className="mb-3 text-xl font-semibold text-foreground">お問い合わせ</h2>
              <p className="leading-relaxed">不具合やご質問は、以下のメールアドレスへご連絡ください。アプリ名、iOSバージョン、問題が起きた操作をお知らせいただくと、確認がスムーズです。パスワードや認証情報は送らないでください。</p>
              <p className="mt-3">
                <a className="underline underline-offset-4" href="mailto:tada@manyconnection.co.jp">tada@manyconnection.co.jp</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
