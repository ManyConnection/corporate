import { SectionHeading } from "@/components/section-heading"

/*
 * 出典：職務経歴書（2026年8月版）。クライアント名・サービス名・出張先など、
 * 特定につながる固有名詞は削除または抽象化しています。
 *
 * バッジには契約形態ではなく `phase`（担当フェーズ）を出しています。
 * 受託の発注検討者が知りたいのは「どの工程まで任せられるか」であって契約形態ではないため。
 * 契約形態はセクション冒頭のリード文で一度だけ開示しています。
 *
 * ⚠️ 公開前に、各案件の掲載可否を秘密保持条項に照らして確認してください。
 *    業種＋規模＋技術の組み合わせから特定されうる案件がないかも併せてご確認を。
 */
const works = [
  {
    industry: "医療・歯科",
    phase: "要件定義〜運用保守",
    title: "歯科医院向け予約管理システムを新規開発し、4年以上の運用保守まで担当",
    context:
      "デザインのイメージはあるものの仕様が固まっていない状態からのスタート。医院側の管理画面と、患者が予約を行う画面の双方を新規に立ち上げる必要があった。",
    role: "顧客との定期ミーティングで不明点を潰しながら仕様を確定。管理画面のコーディング・API作成・繋ぎこみを単独で担当した。外部API連携のデータ取り込み設計と、CloudWatch によるログ管理など運用監視の設計も対応。",
    result:
      "リリース後も継続して関与し、4年4ヶ月にわたり運用保守と改修を担当。要件の取りまとめから長期運用までを一貫して見る体制を維持した。",
    tags: ["PHP 7.4", "Laravel", "Vue.js", "MySQL (Aurora)", "AWS"],
  },
  {
    industry: "化粧品EC",
    phase: "要件定義〜リリース",
    title: "仕様書のない基幹システムを、稼働中の挙動から設計書を起こしてリプレース",
    context:
      "複数ブランドを一つに統合するEC刷新と、対応する基幹システムのリプレース。基幹システムには仕様書が存在せず、稼働中システムの挙動だけが手がかりだった。",
    role: "PMとしてオフショアを含む10名規模のチームを統括。タスク発行・PRレビュー・デプロイ・クライアント最終確認まで一貫して担当し、現行テスト環境の挙動から基幹システムの設計書を作成した。",
    result:
      "EC-CUBEの標準構造を崩さない拡張方針を設計し保守性を確保。AIエージェント（Devin）を仕様調査・速度改善の原因調査・不具合の一次対応に組み込み、n8nによる自動コードレビュー体制も整備して工数を削減した。",
    tags: ["PHP", "JavaScript", "EC-CUBE", "Devin", "n8n"],
  },
  {
    industry: "レンタル・リース",
    phase: "詳細設計〜テスト",
    title: "複数システムに分散していた業務を、一元管理システムへ統合",
    context:
      "商品・会社情報のマスタ管理、作業報告書、スケジュール管理、在庫管理がそれぞれ別システムに分かれており、一元管理できる基盤が求められていた。",
    role: "Figmaのデザインと仕様書をもとにフロントエンド実装を担当。MUI + Storybook でコンポーネント設計を行い、PRレビュー・テスト仕様書作成・バグ修正のサイクルを継続的に運用した。",
    result:
      "コンポーネントの再利用とデザイン統一を進め、実装速度と品質を両立。1年9ヶ月にわたり継続的にコミットし、複数機能のリリースを担当した。",
    tags: ["JavaScript", "React.js", "MUI", "Storybook", "Figma"],
  },
  {
    industry: "EC・体験ギフト",
    phase: "要件定義〜リリース",
    title: "ホテル予約型ECサイトを新規開発し、Kubernetes での運用まで対応",
    context:
      "既存の予約サービスと同様の構成で、体験ギフト向けの予約型ECサイトと管理画面を新規に立ち上げる必要があった。",
    role: "PMとしてオフショアチームを統括し、タスク発行から進捗管理までを担当。サイトと管理画面の設計・開発に加え、外部の在庫管理システムとのAPI連携、GCP（Kubernetes）でのコンテナ管理・運用まで対応した。",
    result:
      "顧客とメール・電話で直接やり取りしながら詳細な仕様を確定し、フィードバックをチームへ展開してリリースまで完遂した。",
    tags: ["JavaScript", "Next.js", "GCP", "Kubernetes"],
  },
  {
    industry: "SaaS連携",
    phase: "要件定義〜総合テスト",
    title: "kintone と複数SaaSを連携させる仕組みを、要件定義から単独で構築",
    context:
      "kintone と請求書発行・マーケティング・電子契約の各SaaSが分断されており、データを手作業で連携している状態だった。",
    role: "要件定義から設計・実装・テストまで全工程を単独で担当。kintoneアプリのカスタマイズと、バッチ処理・Webhook によるデータ相互連携の仕組みを構築した。",
    result:
      "Webhookが提供されていないサービスはバッチ処理で代替する設計とし、全連携先をカバー。ラボ型開発として毎週顧客と打ち合わせを行い、仕様を煮詰めながら実装・反映するサイクルを回した。",
    tags: ["JavaScript", "React.js", "Cloud Firestore", "kintone"],
  },
  {
    industry: "大手企業",
    phase: "要件確認〜リリース",
    title: "引き継ぎで情報が分散していた受発注システムを、設計書として体系化",
    context:
      "大手企業向け受発注システムの開発を既存担当者から引き継ぎ。仕様情報が会議や関係者に分散しており、設計書として整理されていない状態だった。",
    role: "社内チームリーダーとして、担当者から要件・仕様を確認しながらエンティティ・ER図・設計書を作成。大手企業特有の複雑な業務フローから他システム連携までの設計、テスト・リリースまで一貫して対応した。",
    result:
      "多数の会議に参加して分散した情報を収集し、設計書として体系化。現地拠点へ出張して現場ヒアリングを行い、業務実態に即した仕様へ落とし込んだ。",
    tags: ["OutSystems（ローコード）"],
  },
]

const rows = [
  { key: "context", label: "背景" },
  { key: "role", label: "担当" },
  { key: "result", label: "結果" },
] as const

export function WorksSection() {
  return (
    <section id="works" className="border-t border-border bg-surface py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title="これまでの担当実績"
            description="要件定義から設計・開発・運用保守まで、代表が担当したプロジェクトです。いずれも業務委託・準委任での参画で、法人設立以前の個人事業主としての案件を含みます。守秘義務のため、クライアント名および特定につながる内容は伏せています。近い規模・技術構成の事例は、NDA 締結のうえ個別にご説明できます。"
            className="mb-16"
          />

          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {works.map((work, index) => (
              <article key={work.title} className="flex flex-col bg-background p-8 md:p-10">
                <div className="mb-8 flex items-start justify-between gap-4 border-b border-border pb-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="border border-foreground px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-foreground">
                      {work.industry}
                    </span>
                    <span className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-[0.05em] text-muted-foreground">
                      {work.phase}
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    No.{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-8 text-xl font-semibold leading-snug tracking-tight text-balance text-foreground md:text-2xl">
                  {work.title}
                </h3>

                <dl className="mb-10 space-y-5">
                  {rows.map((row) => (
                    <div key={row.key} className="flex gap-5">
                      <dt className="w-8 shrink-0 pt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground">{work[row.key]}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-5">
                  {work.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
