import { SectionHeading } from "@/components/section-heading"

/* 会社情報は登記内容と一致させてください。 */
const profile = [
  { label: "会社名", value: ["ManyConnection合同会社"] },
  { label: "設立", value: ["2023年10月18日"] },
  { label: "代表者", value: ["代表社員 多田 友哉"] },
  { label: "所在地", value: ["〒170-0013", "東京都豊島区東池袋１丁目３４番５号いちご東池袋ビル６階"] },
  { label: "連絡先", value: ["tada@manyconnection.co.jp"] },
  {
    label: "事業内容",
    value: [
      "業務システムの受託開発",
      "Webサービス・モバイルアプリ開発",
      "クラウド構築・インフラ移行支援",
      "デジタル戦略コンサルティング",
    ],
  },
  { label: "取引形態", value: ["請負契約 / 準委任契約"] },
  { label: "対応エリア", value: ["全国（オンライン対応）／首都圏は対面打ち合わせ可"] },
]

export function CompanySection() {
  return (
    <section id="company" className="border-t border-border bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="09"
            eyebrow="Company"
            title="会社概要"
            description="テクノロジーで事業課題を解決する開発会社です。お客様との信頼関係を第一に、納品して終わりではなく、使われ続けるシステムを一緒に育てていくことを大切にしています。"
            className="mb-16"
          />

          <dl className="max-w-4xl border-t border-foreground">
            {profile.map((row) => (
              <div key={row.label} className="grid gap-2 border-b border-border py-5 md:grid-cols-4 md:gap-6">
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground md:pt-1">
                  {row.label}
                </dt>
                <dd className="text-foreground md:col-span-3">
                  {row.value.map((line) => (
                    <span key={line} className="block leading-relaxed">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
