import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const title = "アクセス解析について"
const description = "ManyConnection会社サイトにおけるGoogle Analyticsの利用と、計測の選択・変更方法について。"
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/analytics-privacy" },
  openGraph: { title, description, type: "website", locale: "ja_JP", url: "https://manyconnection.co.jp/analytics-privacy", siteName: "ManyConnection合同会社" },
  twitter: { card: "summary", title, description },
}

export default function AnalyticsPrivacyPage() {
  return <>
    <Header />
    <main className="mx-auto max-w-4xl space-y-8 px-6 pt-32 pb-24">
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">アクセス解析について</h1>
      <p className="leading-relaxed">ManyConnection合同会社は、この会社サイト（manyconnection.co.jp）の閲覧状況を把握し、内容や使いやすさを改善するため、Google LLCが提供するGoogle Analytics 4を利用します。この説明は会社サイトのGoogle Analyticsに関するもので、TimeFitアプリのプライバシーポリシーとは別のものです。</p>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">同意と設定変更</h2>
        <p className="leading-relaxed">「許可する」を選択した場合にのみ、Google Analyticsのタグを読み込み、Cookieを使った計測を開始します。「許可しない」を選んでも、サイトの閲覧やお問い合わせは利用できます。ページ下部の「アクセス解析の設定」から、いつでも選択を変更できます。同意を取り消すと計測を停止し、この計測で使用するCookieを削除するためページを再読み込みします。</p>
        <p className="leading-relaxed">選択内容はこのブラウザ内に最大180日間保存します。ブラウザの保存データを消去した場合や別のブラウザを使用する場合は、再度選択が必要です。計測用Cookieの有効期間も最大180日です。同意の取り消しは、すでにGoogleへ送信されたデータの削除を意味するものではありません。</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">計測する情報と送信先</h2>
        <p className="leading-relaxed">同意後は、閲覧したページ、閲覧時刻、ブラウザ・端末情報、Cookieによる識別子などがGoogleへ送信され、利用状況の集計に使われます。通信時にはIPアドレスもGoogleに伝わり、大まかな地域の推定などに使用されます。</p>
        <p className="leading-relaxed">氏名・メールアドレス・お問い合わせ本文などのフォーム入力値は計測に送信しません。ページURLのクエリ文字列とフラグメント、参照元URLも送信しない設定です。フォーム操作やリンククリック等の拡張計測は無効にしています。Googleシグナル、広告向けのパーソナライズ、広告Cookieは有効にしていません。</p>
        <p className="leading-relaxed">Googleにおけるデータの取り扱いは、以下の説明をご確認ください。</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><a className="underline" href="https://policies.google.com/privacy?hl=ja">Googleプライバシーポリシー</a></li>
          <li><a className="underline" href="https://policies.google.com/technologies/partner-sites?hl=ja">Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用</a></li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">その他の解析とお問い合わせ</h2>
        <p className="leading-relaxed">本サイトでは従来からVercel Web Analyticsも利用しています。上記の選択は今回導入したGoogle Analyticsを対象としています。Vercel Web Analyticsの仕組みについては、<a className="underline" href="https://vercel.com/docs/analytics/privacy-policy">Vercelのプライバシーに関する説明</a>をご確認ください。</p>
        <p>お問い合わせ：ManyConnection合同会社 <a className="underline" href="mailto:tada@manyconnection.co.jp">tada@manyconnection.co.jp</a></p>
      </section>
    </main>
    <Footer />
  </>
}
