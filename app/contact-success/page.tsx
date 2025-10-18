import Link from "next/link"

export const metadata = {
  title: "お問い合わせありがとうございます",
  description: "ManyConnection合同会社へのお問い合わせを受け付けました。",
}

export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen bg-muted/30 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl rounded-3xl bg-background shadow-2xl p-10 text-center space-y-6 border border-border">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-semibold text-foreground">お問い合わせありがとうございます</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          送信内容を受け付けました。担当者より折り返しご連絡いたしますので、今しばらくお待ちください。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-primary/90"
        >
          トップページに戻る
        </Link>
      </div>
    </main>
  )
}
