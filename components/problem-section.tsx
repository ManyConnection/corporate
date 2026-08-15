import { SectionHeading } from "@/components/section-heading"

const problems = [
  {
    title: "何から相談すればいいか分からない",
    description: "やりたいことはあるが、要件も予算感も固まっていない。RFP を書くところから止まっている。",
  },
  {
    title: "エクセル・紙の業務が限界",
    description: "属人化した手作業が増え続け、転記ミスや二重管理のコストが無視できなくなってきた。",
  },
  {
    title: "前の開発会社が続かなかった",
    description: "仕様が伝わらない、進捗が見えない、引き継ぎ資料がない。同じ失敗を繰り返したくない。",
  },
  {
    title: "社内に開発リソースがない",
    description: "情シスが一人、あるいは非エンジニアだけ。設計から任せられる相手を探している。",
  },
  {
    title: "作ったが誰も使っていない",
    description: "現場の運用に合わないシステムができてしまった。使われる形に作り直したい。",
  },
  {
    title: "保守できる人がいなくなった",
    description: "古い環境のまま塩漬け。改修も移行も相談できる先がなく、リスクだけが積み上がっている。",
  },
]

export function ProblemSection() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="01"
            eyebrow="Challenges"
            title={
              <>
                こんなお悩みは
                <br className="hidden md:block" />
                ありませんか
              </>
            }
            description="ひとつでも当てはまるなら、そのままの状態でご相談ください。整理されていない課題を、実装できる要件に翻訳するところから伴走します。"
            className="mb-16"
          />

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className="group bg-background p-8 transition-colors duration-200 hover:bg-surface"
              >
                <span className="mb-6 block font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(3, "0")}
                </span>
                <h3 className="mb-4 text-base font-semibold leading-snug text-foreground">
                  「{problem.title}」
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
