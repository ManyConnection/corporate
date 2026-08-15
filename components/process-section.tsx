import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    duration: "最短翌営業日にご返信",
    description: "フォームまたはメールでご連絡ください。この時点では仕様が固まっていなくて構いません。",
    client: "やりたいこと・困っていることを一言で",
  },
  {
    step: "02",
    title: "オンラインヒアリング",
    duration: "30〜60分 / 無料",
    description: "現状の業務、実現したいこと、予算感と希望時期を伺います。必要に応じてNDAを締結します。",
    client: "現行の資料・画面キャプチャがあれば共有",
  },
  {
    step: "03",
    title: "ご提案・お見積り",
    duration: "1週間程度 / 無料",
    description: "実現方法、機能一覧、スケジュール、費用の内訳をまとめてご提示します。予算に合わせた優先度案も添えます。",
    client: "内容のご確認と、社内での検討",
  },
  {
    step: "04",
    title: "ご契約",
    duration: "1週間程度",
    description: "請負・準委任のうち適した形態で契約を締結します。貴社所定の契約書式にも対応します。",
    client: "契約内容のご確認・締結",
  },
  {
    step: "05",
    title: "設計・開発",
    duration: "案件により 2週間〜",
    description: "週次で進捗を共有し、動く画面を早い段階からご確認いただきます。仕様変更もこの中で調整します。",
    client: "週次ミーティングでのご確認",
  },
  {
    step: "06",
    title: "納品・運用保守",
    duration: "納品後も継続対応可",
    description: "受入テストののち納品します。ソースコードとドキュメントを一式お渡しし、以降の改修・保守もご相談いただけます。",
    client: "受入テストと本番運用の開始",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-border bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="05"
            eyebrow="Process"
            title="ご依頼の流れ"
            description="お問い合わせから着手までは概ね2〜3週間です。ご提案・お見積りまでは費用をいただきません。"
            className="mb-16"
          />

          <ol className="border-t border-foreground">
            {steps.map((step) => (
              <li
                key={step.step}
                className="group grid gap-x-8 gap-y-4 border-b border-border py-8 transition-colors duration-200 hover:bg-surface md:grid-cols-12 md:py-10"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                    {step.step}
                  </span>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">{step.title}</h3>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{step.duration}</p>
                </div>

                <div className="md:col-span-8">
                  <p className="mb-4 leading-relaxed text-pretty text-muted-foreground">{step.description}</p>
                  <p className="flex flex-wrap items-center gap-3 text-sm text-foreground">
                    <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      Your part
                    </span>
                    {step.client}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
