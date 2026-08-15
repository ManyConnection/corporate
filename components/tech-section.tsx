import { SectionHeading } from "@/components/section-heading"

/*
 * 出典：職務経歴書（2026年8月版）のテクニカルスキル表および各案件の使用技術。
 * 実務経験のない技術は載せていません。書きすぎは期待値のズレにつながります。
 * 追加する場合は、実際に商用環境で使った経験があるものだけにしてください。
 */
const stacks = [
  {
    category: "言語",
    items: [
      { name: "PHP", years: "約6年" },
      { name: "JavaScript", years: "約6.5年" },
      { name: "Python", years: "1.5年" },
      { name: "Java", years: "1.5年" },
    ],
  },
  {
    category: "バックエンド",
    items: [
      { name: "Laravel", years: "約4.5年" },
      { name: "EC-CUBE", years: "1.5年" },
      { name: "FastAPI", years: "1.5年" },
      { name: "Spring Boot", years: "0.5年" },
    ],
  },
  {
    category: "フロントエンド・モバイル",
    items: [
      { name: "Vue.js / Nuxt.js", years: "約4年" },
      { name: "React.js / Next.js", years: "約3.5年" },
      { name: "MUI / Storybook", years: "1.5年" },
      { name: "React Native", years: "個人開発" },
    ],
  },
  {
    category: "データベース",
    items: [
      { name: "MySQL / AWS Aurora", years: "約6年" },
      { name: "Cloud Firestore", years: "0.5年" },
      { name: "Symfoware", years: "0.8年" },
    ],
  },
  {
    category: "クラウド・インフラ",
    items: [
      { name: "AWS", years: "約5年" },
      { name: "GCP / Kubernetes", years: "1年" },
    ],
  },
  {
    category: "AI・ローコード・連携",
    items: [
      { name: "Devin / n8n", years: "約1.5年" },
      { name: "Claude Code", years: "現在" },
      { name: "kintone", years: "0.5年" },
      { name: "OutSystems", years: "0.5年" },
      { name: "Stripe", years: "約3年" },
    ],
  },
]

export function TechSection() {
  return (
    <section id="tech" className="border-t border-border bg-surface py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="06"
            eyebrow="Technology"
            title="対応技術"
            description="実際に商用環境で使用した経験のある技術のみを、実務経験年数とあわせて掲載しています。技術ありきではなく、案件の要件・運用体制・将来の保守性から選定します。既存システムで採用済みの技術に合わせる形でも対応可能です。"
            className="mb-16"
          />

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {stacks.map((stack, index) => (
              <div key={stack.category} className="bg-background p-8">
                <div className="mb-6 flex items-baseline justify-between gap-3 border-b border-foreground pb-3">
                  <h3 className="text-sm font-semibold text-foreground">{stack.category}</h3>
                  <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul>
                  {stack.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 border-b border-border py-2.5 last:border-b-0 last:pb-0"
                    >
                      <span className="font-mono text-sm text-foreground">{item.name}</span>
                      <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{item.years}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] text-muted-foreground">
            ※ 実務経験年数は案件期間から再集計した概算値です。React Native は個人開発でのリリース実績です。
          </p>
        </div>
      </div>
    </section>
  )
}
