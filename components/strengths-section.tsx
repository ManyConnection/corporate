import { SectionHeading } from "@/components/section-heading"
import { Bot, FileSearch, MessagesSquare, PackageOpen, Receipt, ScanSearch } from "lucide-react"

/* 自社の実態に合わせて内容を調整してください。02・03 は職務経歴書の実績に基づく記述です。 */
const strengths = [
  {
    icon: FileSearch,
    title: "要件が固まっていなくても着手できる",
    description:
      "「作りたいものはあるが仕様書がない」状態からのご相談が中心です。業務のヒアリングと課題整理を行い、実装できる要件へ落とし込むところから担当します。",
  },
  {
    icon: ScanSearch,
    title: "仕様書がない既存システムでも引き受けられる",
    description:
      "稼働中のシステムやコードから仕様を読み取り、設計書として整備する進め方を繰り返してきました。前任者からの引き継ぎで情報が分散している案件や、ドキュメントが失われた環境からのご相談にも対応します。",
  },
  {
    icon: Bot,
    title: "AIエージェントを開発プロセスに組み込んでいる",
    description:
      "仕様書のないレガシーシステムに対し、AIエージェント（Devin）で画面一覧を起点に仕様書・テスト仕様書の生成からテスト実施までを連鎖的に自動化した実績があります（本事例はセミナーで登壇）。n8n とレビュー観点の playbook による自動コードレビュー体制も整備済みです。",
  },
  {
    icon: Receipt,
    title: "見積の内訳を開示します",
    description:
      "「一式」でまとめず、機能単位で工数と金額を提示します。予算に収まらない場合は、どの機能を後回しにすれば収まるかまで含めてご提案します。",
  },
  {
    icon: MessagesSquare,
    title: "実装担当が直接やり取りします",
    description:
      "営業が聞いた話を開発に伝える伝言ゲームがありません。実際に手を動かす人間が要件を直接伺うため、認識のズレと出戻りを最小限に抑えます。",
  },
  {
    icon: PackageOpen,
    title: "引き継げる状態で納品します",
    description:
      "ソースコード一式と設計・運用ドキュメントをお渡しします。将来的に内製化する場合も、他社へ移管する場合も動かせる形を標準としています。",
  },
]

export function StrengthsSection() {
  return (
    <section id="strengths" className="border-t border-border bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="03"
            eyebrow="Why us"
            title="選ばれる理由"
            description="発注前に不安になりやすいポイントを、あらかじめ潰した状態で進めます。"
            className="mb-16"
          />

          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="group bg-background p-8 transition-colors duration-200 hover:bg-surface md:p-10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <strength.icon className="size-7 text-foreground" strokeWidth={1.5} />
                  <span className="font-mono text-5xl font-bold leading-none text-border transition-colors duration-200 group-hover:text-foreground/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-balance text-foreground md:text-2xl">
                  {strength.title}
                </h3>
                <p className="leading-relaxed text-pretty text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
