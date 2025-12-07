import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー | ManyConnection合同会社",
  description: "TimeFitアプリのプライバシーポリシー。個人情報の取り扱いについて説明しています。",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            プライバシーポリシー
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed">
                TimeFit（以下「本アプリ」）は、ManyConnection LLC.（以下「当社」）が提供するサービスです。当社は、本アプリの利用者（以下「ユーザー」）の個人情報を適切に取り扱うため、以下のプライバシーポリシーを定めます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. 収集する情報
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本アプリは、以下の情報を収集します。
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>メールアドレス（アカウント登録に利用）</li>
                <li>時間・行動記録など、ユーザーが入力したライフログ情報</li>
                <li>メモ等、ユーザーが任意で入力した情報</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                ※これらの情報は、サービス提供およびデータ保存のために収集します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. 収集した情報の利用目的
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                当社は、収集した情報を以下の目的で利用します。
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>アカウント作成および本人確認</li>
                <li>ユーザーのデータ保存およびバックアップ</li>
                <li>本アプリの機能提供、改良、品質向上のため</li>
                <li>お問い合わせへの対応</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. 保存・管理方法
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ユーザーが入力した情報は、安全なクラウド環境に保存され、当社および当社委託先により管理されます。保存場所およびサーバー事業者については、必要に応じて変更する場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. 第三者提供について
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                当社は、以下の場合を除き、ユーザーの情報を第三者に提供しません。
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づき開示が求められた場合</li>
                <li>本アプリの運営に必要な範囲で業務委託を行う場合（例：クラウドサービス事業者）</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                ※当社は広告・分析ツール等に情報を提供していません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. 個人情報の削除
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ユーザーは、いつでも自身の情報削除を当社に依頼することができます。削除を希望する場合は、以下のお問い合わせ先よりご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. 未成年の利用について
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                本アプリは、13歳未満の方による利用を推奨していません。保護者の同意なく取得した情報が判明した場合、削除対応を行います。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. プライバシーポリシーの変更
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                本ポリシーの内容は、必要に応じて変更することがあります。重大な変更がある場合は、本アプリまたはWEBサイト上にて通知します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                8. お問い合わせ先
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-foreground font-medium">ManyConnection LLC.</p>
                <p className="text-muted-foreground mt-2">
                  お問い合わせ Email: tada@manyconnection.co.jp
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
