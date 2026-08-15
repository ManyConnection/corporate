import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import Link from "next/link"
import { ArrowRight, Cloud, Globe, RefreshCw, Smartphone, Users, Workflow } from "lucide-react"

/* 金額・期間はあくまで目安表示です。自社の受注実態に合わせて必ず調整してください。 */
const services = [
  {
    number: "01",
    icon: Workflow,
    title: "業務システム開発",
    description:
      "在庫・受発注・顧客管理・社内ワークフローなど、現場の運用に合わせた業務システムを設計から開発します。既存のExcel運用からの移行もお任せください。",
    deliverables: ["要件定義・業務フロー整理", "画面設計・DB設計", "開発・テスト・導入支援", "操作マニュアル・研修"],
    price: "300万円〜",
    duration: "3ヶ月〜",
  },
  {
    number: "02",
    icon: Globe,
    title: "Webサービス・Webアプリ開発",
    description:
      "toC / toB 向けのWebサービスを、MVPの立ち上げから本格運用まで。まず小さく作って検証したい、というご相談にも対応します。",
    deliverables: ["企画・要件の壁打ち", "UI/UX設計", "フロント・バックエンド開発", "リリース後の改善運用"],
    price: "300万円〜",
    duration: "2ヶ月〜",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "モバイルアプリ開発（React Native）",
    description:
      "React Native によるクロスプラットフォーム開発に対応します。iOS / Android を単一のコードベースで構築し、ストア申請・審査対応からリリース後の運用まで担当します。",
    deliverables: ["アプリ企画・画面設計", "React Native での実装", "ストア申請・審査対応", "バージョンアップ運用"],
    price: "300万円〜",
    duration: "3ヶ月〜",
  },
  {
    number: "04",
    icon: Cloud,
    title: "クラウド構築・インフラ移行",
    description:
      "AWS / Google Cloud を中心としたクラウド環境の設計・構築。オンプレミスからの移行、コスト最適化、監視・バックアップ体制の整備まで。",
    deliverables: ["現状構成の調査・移行計画", "インフラ設計・構築", "CI/CD・監視の整備", "コスト最適化の提案"],
    price: "100万円〜",
    duration: "1ヶ月〜",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "既存システムの改修・リプレイス",
    description:
      "他社が開発したシステムの引き継ぎ、機能追加、老朽化した環境の刷新に対応します。仕様書が残っていない場合も、稼働中の挙動から仕様を復元するところから着手できます。現状調査のみのご依頼も承ります。",
    deliverables: ["ソースコード・構成調査", "稼働中システムからの仕様復元", "段階的な改修・移行", "ドキュメント整備"],
    price: "50万円〜",
    duration: "2週間〜",
  },
  {
    number: "06",
    icon: Users,
    title: "DX支援・開発チーム伴走",
    description:
      "技術選定や体制づくりの相談役として、準委任契約で継続的に伴走します。内製化を目指すフェーズの支援もお引き受けします。",
    deliverables: [
      "技術選定・アーキテクチャ相談",
      "AIエージェント導入・開発プロセス整備",
      "コードレビュー・品質改善",
      "内製化に向けた育成支援",
    ],
    price: "月額50万円〜",
    duration: "3ヶ月〜",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border bg-surface py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="02"
            eyebrow="Services"
            title="承れる開発の内容"
            description="単発の開発から継続的な伴走まで、フェーズに合わせた関わり方をお選びいただけます。記載の金額・期間は標準的なケースの目安です。詳細はヒアリングのうえお見積りします。"
            className="mb-16"
          />

          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {services.map((service) => (
              <div key={service.number} className="group flex flex-col bg-background p-8 md:p-10">
                <div className="mb-8 flex items-start justify-between border-b border-border pb-6">
                  <service.icon className="size-6 text-foreground" strokeWidth={1.5} />
                  <span className="font-mono text-xs text-muted-foreground">{service.number}</span>
                </div>

                <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                <p className="mb-8 leading-relaxed text-muted-foreground">{service.description}</p>

                <ul className="mb-10 space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-px w-3 shrink-0 bg-foreground" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <dl className="mt-auto grid grid-cols-2 border-t border-foreground pt-5">
                  <div>
                    <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      Budget
                    </dt>
                    <dd className="text-lg font-semibold tracking-tight text-foreground">{service.price}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      Duration
                    </dt>
                    <dd className="text-lg font-semibold tracking-tight text-foreground">{service.duration}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-px flex flex-col justify-between gap-6 border border-t-0 border-border bg-foreground p-8 text-background md:flex-row md:items-center md:p-10">
            <div>
              <span className="mb-3 inline-block border border-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em]">
                Free consultation
              </span>
              <p className="mb-1.5 text-lg font-semibold text-balance">
                どのサービスに当てはまるか分からない場合も、そのままご相談ください。
              </p>
              <p className="text-sm text-background/70">
                やりたいことを伺ったうえで、適した進め方と概算をご提案します。
              </p>
            </div>
            <Link href="#contact" className="shrink-0">
              <Button
                size="lg"
                variant="outline"
                className="w-full cursor-pointer border-background bg-transparent font-semibold text-background transition-colors hover:bg-background hover:text-foreground md:w-auto"
              >
                相談内容を送る
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
