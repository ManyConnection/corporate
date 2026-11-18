import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ふたりのお願い プライバシーポリシー",
  alternates: { canonical: "/futari-gohan/privacy-policy" },
  description: "iOSアプリ「ふたりのお願い」で取り扱う情報、利用目的、保存と削除について説明します。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ManyConnection合同会社",
    title: "ふたりのお願い プライバシーポリシー｜ManyConnection合同会社",
    description: "iOSアプリ「ふたりのお願い」で取り扱う情報、利用目的、保存と削除について説明します。",
    url: "https://manyconnection.co.jp/futari-gohan/privacy-policy",
  },
}

export default function FutariGohanPrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative isolate overflow-hidden pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8 flex items-baseline gap-4 border-b border-foreground pb-4">
            <span className="font-mono text-xs tracking-[0.25em] text-foreground">01</span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Privacy Policy</span>
          </div>
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            ふたりのお願い プライバシーポリシー
          </h1>
          <div className="space-y-8 leading-relaxed text-muted-foreground">
            <p>
              ManyConnection合同会社（以下「当社」）は、iOSアプリ「ふたりのお願い」（以下「本アプリ」）で取り扱う情報について、以下のとおり定めます。
            </p>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">1. 取り扱う情報</h2>
              <p className="mb-3">本アプリは、サービスの提供と不正利用防止のため、次の情報を取り扱います。</p>
              <ul className="ml-4 list-disc space-y-2">
                <li>接続用ID、アカウントを識別するID、認証情報</li>
                <li>利用者が登録する表示名</li>
                <li>利用者が作成・編集する質問、選択肢、回答、メモ、回答期限などの内容</li>
                <li>相手との招待・接続状態</li>
                <li>通知を許可した場合の端末通知トークン</li>
                <li>登録回数の制限に使う、接続元IPアドレスから作成した時間単位のハッシュ値</li>
                <li>利用者がサポートへ問い合わせる際に送信するメールアドレスと問い合わせ内容</li>
              </ul>
              <p className="mt-3">
                端末の認証情報はiOSのKeychainに保存します。表示名など一部の設定は端末内にも保存します。本アプリはアカウント登録のためにメールアドレスを求めません。連絡先や位置情報を収集する機能もありません。問い合わせで受け取ったメールアドレスと内容は、サポート対応に使用します。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">2. 利用目的と相手への共有</h2>
              <p>
                情報は、アカウントの作成・認証、接続相手との質問や回答の共有、通知、サービスの維持、不正利用防止、お問い合わせへの対応に使用します。利用者が接続を承認した相手には、表示名、質問、選択肢、回答、メモなどが共有されます。接続する相手とIDを確認してから承認してください。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">3. 保存と委託先</h2>
              <p>
                サーバー上の情報はCloudflare WorkersおよびD1で処理・保存します。通知を許可した場合、通知の配送にAppleのプッシュ通知サービスを使用します。各サービスの提供に必要な範囲で、これらの事業者が情報を処理します。
              </p>
              <p className="mt-3">
                有効なアカウントの情報は、利用者が本アプリから削除するまで保存します。削除が完了すると、本番データベースから登録情報と削除対象の内容を削除し、端末の認証情報も消去します。相手が作成・編集した内容は、削除後も相手側に残ることがあります。
              </p>
              <p className="mt-3">
                削除前の情報が復旧用履歴に一時的に残ることがあります。Cloudflare D1の復旧可能期間はWorkers Freeで最大7日、Workers Paidで最大30日です。保持期間は利用プランにより異なります。
              </p>
              <p className="mt-3">
                登録制限に使う時間単位のハッシュ値は、時間が切り替わった後の定期処理で削除します。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">4. 広告・アクセス解析</h2>
              <p>本アプリでは、広告配信や利用状況の分析を行いません。アプリからメールを自動送信しません。</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">5. 登録とデータの削除</h2>
              <p>
                利用者は、本アプリの設定にある「登録とデータを削除」から削除できます。削除操作は取り消せません。接続用IDだけでは認証や復旧はできません。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">6. 本ポリシーの変更</h2>
              <p>本ポリシーを変更する場合は、このページでお知らせします。</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">7. お問い合わせ</h2>
              <p>
                本アプリの情報の取り扱いについては、ManyConnection合同会社までお問い合わせください。
              </p>
              <p className="mt-2">
                Email: <a className="underline underline-offset-4" href="mailto:tada@manyconnection.co.jp">tada@manyconnection.co.jp</a>
              </p>
            </section>

            <p className="border-t border-border pt-6 text-sm">制定日: 2026年11月18日</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
