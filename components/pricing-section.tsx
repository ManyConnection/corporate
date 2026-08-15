import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import Link from "next/link"
import { Check } from "lucide-react"

/* 金額・支払条件は自社の実態に合わせて必ず調整してください。すべて税別表記です。 */
const plans = [
  {
    name: "スポット開発",
    amount: "50〜150",
    unit: "万円",
    duration: "2週間〜1.5ヶ月",
    effortLabel: "想定工数",
    effort: "0.5〜1.5人月",
    description: "小規模な機能追加、既存システムの改修、業務ツールの自動化、PoC・技術検証など。",
    features: ["現状調査・課題整理", "小規模な設計・開発", "既存環境へのデプロイ", "簡易ドキュメント"],
    highlighted: false,
  },
  {
    name: "受託開発（請負）",
    amount: "300〜1,000",
    unit: "万円",
    duration: "2ヶ月〜6ヶ月",
    effortLabel: "想定工数",
    effort: "3〜10人月",
    description: "業務システム、Webサービス、モバイルアプリなど、要件定義から納品まで一括でお引き受けする標準プラン。",
    features: [
      "要件定義・業務フロー整理",
      "UI/UX設計・DB設計",
      "開発・テスト・リリース",
      "設計/運用ドキュメント一式",
      "納品後1ヶ月の無償バグ対応",
    ],
    highlighted: true,
  },
  {
    name: "継続伴走（準委任）",
    amount: "50〜150",
    unit: "万円／月",
    duration: "3ヶ月〜",
    effortLabel: "稼働量",
    effort: "週2日 50万円〜／週4日 100万円〜／フル 150万円〜",
    description: "継続的な機能追加や改善、技術顧問、内製化に向けたチーム支援。稼働量に応じて調整します。",
    features: ["月次での稼働枠確保", "継続的な機能開発・改善", "技術選定・設計相談", "コードレビュー・育成支援"],
    highlighted: false,
  },
]

const factors = [
  "画面数・機能数の規模",
  "外部システムとの連携有無",
  "既存データの移行有無",
  "非機能要件（性能・セキュリティ・可用性）",
  "ご希望の納期（短縮の要否）",
  "デザイン制作の要否",
]

const terms = [
  { label: "表示価格", value: "すべて税別" },
  { label: "お支払い", value: "着手時50% / 納品時50%（分割のご相談可）" },
  { label: "契約形態", value: "請負契約 / 準委任契約" },
  { label: "運用保守", value: "月額5万円〜（内容に応じて個別見積）" },
  { label: "お見積り", value: "無料（相談・提案まで費用は発生しません）" },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="07"
            eyebrow="Pricing"
            title="費用・納期の目安"
            description="「いくらかかるか分からないから相談しづらい」をなくすため、目安を先に公開しています。正式なお見積りはヒアリング後に、機能単位の内訳とあわせてご提示します。"
            className="mb-16"
          />

          <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col p-8 md:p-10 ${
                  plan.highlighted ? "bg-foreground text-background" : "bg-background"
                }`}
              >
                <div className="mb-8 flex h-6 items-center">
                  {plan.highlighted && (
                    <span className="border border-background/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]">
                      Standard
                    </span>
                  )}
                </div>

                <h3
                  className={`mb-6 text-base font-semibold ${
                    plan.highlighted ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mb-5 flex items-baseline gap-1.5">
                  <span
                    className={`text-3xl font-bold tracking-tight md:text-4xl ${
                      plan.highlighted ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.amount}
                  </span>
                  <span
                    className={`text-base font-medium ${
                      plan.highlighted ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>

                {/* 金額だけでは妥当性が伝わらないため、工数・稼働量を併記する */}
                <dl className="mb-8 space-y-2 font-mono text-xs">
                  <div className="flex gap-3">
                    <dt className={`w-14 shrink-0 ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                      目安期間
                    </dt>
                    <dd className={plan.highlighted ? "text-background" : "text-foreground"}>{plan.duration}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className={`w-14 shrink-0 ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                      {plan.effortLabel}
                    </dt>
                    <dd className={`leading-relaxed ${plan.highlighted ? "text-background" : "text-foreground"}`}>
                      {plan.effort}
                    </dd>
                  </div>
                </dl>

                <p
                  className={`mb-8 border-t pt-8 text-sm leading-relaxed ${
                    plan.highlighted ? "border-background/25 text-background/70" : "border-border text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mb-10 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        plan.highlighted ? "text-background" : "text-foreground"
                      }`}
                    >
                      <Check className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      className={`w-full cursor-pointer font-semibold transition-colors ${
                        plan.highlighted
                          ? "border-background bg-transparent text-background hover:bg-background hover:text-foreground"
                          : "border-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      このプランを相談する
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-px grid gap-px border border-t-0 border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8 md:p-10">
              <h3 className="mb-6 border-b border-foreground pb-3 text-sm font-semibold text-foreground">
                費用が変動する主な要素
              </h3>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {factors.map((factor) => (
                  <li key={factor} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-px w-2.5 shrink-0 bg-foreground" aria-hidden />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 md:p-10">
              <h3 className="mb-6 border-b border-foreground pb-3 text-sm font-semibold text-foreground">
                お取引条件
              </h3>
              <dl className="space-y-3 text-sm">
                {terms.map((term) => (
                  <div key={term.label} className="flex gap-5">
                    <dt className="w-20 shrink-0 font-mono text-xs text-muted-foreground">{term.label}</dt>
                    <dd className="text-foreground">{term.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
