import { SectionHeading } from "@/components/section-heading"

/*
 * 出典：職務経歴書（2026年8月版）のテクニカルスキル表および各案件の使用技術。
 * 実務経験のない技術は載せていません。書きすぎは期待値のズレにつながります。
 * 追加する場合は、実際に商用環境で使った経験があるものだけにしてください。
 */
const stacks = [
  {
    category: "言語",
    items: ["PHP", "JavaScript", "Python", "Java"],
  },
  {
    category: "バックエンド",
    items: ["Laravel", "EC-CUBE", "FastAPI", "Spring Boot"],
  },
  {
    category: "フロントエンド・モバイル",
    items: ["Vue.js / Nuxt.js", "React.js / Next.js", "MUI / Storybook", "React Native"],
  },
  {
    category: "データベース",
    items: ["MySQL / AWS Aurora", "Cloud Firestore", "Symfoware"],
  },
  {
    category: "クラウド・インフラ",
    items: ["AWS", "GCP / Kubernetes"],
  },
  {
    category: "AI・ローコード・連携",
    items: ["Devin / n8n", "Claude Code", "kintone", "OutSystems", "Stripe"],
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
            description="実際に商用環境で使用した経験のある技術のみを掲載しています。技術ありきではなく、案件の要件・運用体制・将来の保守性から選定します。既存システムで採用済みの技術に合わせる形でも対応可能です。"
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
                      key={item}
                      className="flex items-baseline justify-between gap-4 border-b border-border py-2.5 last:border-b-0 last:pb-0"
                    >
                      <span className="font-mono text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
