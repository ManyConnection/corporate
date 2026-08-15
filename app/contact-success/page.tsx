import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "お問い合わせありがとうございます",
  description: "ManyConnection合同会社へのお問い合わせを受け付けました。",
}

export default function ContactSuccessPage() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden />

      <div className="max-w-xl space-y-6 border border-border bg-background p-12 text-center">
        <div className="mx-auto flex size-16 items-center justify-center bg-foreground text-background">
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-semibold text-foreground">お問い合わせありがとうございます</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          送信内容を受け付けました。担当者より折り返しご連絡いたしますので、今しばらくお待ちください。
        </p>
        <Button asChild size="lg" className="px-8 font-semibold">
          <Link href="/">トップページに戻る</Link>
        </Button>
      </div>
    </main>
  )
}
