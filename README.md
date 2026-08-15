# ManyConnection コーポレートサイト

受託開発の問い合わせ獲得を目的としたランディング型のコーポレートサイトです。
Next.js (App Router) + Tailwind CSS v4 + shadcn/ui、Netlify にデプロイしています。

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## デザインシステム

コーポレートロゴ（黒一色・直線構成の MC モノグラム）に合わせた**モノクロ／製図的**な設計です。彩度は一切使わず、強調はコントラストと余白と罫線だけで作ります。

- **配色**：白（`--background`）／紙のグレー（`--surface`）／墨（`--foreground`）の3階調のみ。トークンは `app/globals.css` の `:root` に集約。
- **角丸**：`--radius: 0.125rem` としているため `rounded-md` が 0 に解決され、ボタン・入力欄が直角になります。ロゴの角張った造形に合わせた意図的な設定です。
- **セクションの地**：`bg-background`（白）と `bg-surface`（紙）を交互に。CTAとフッターは `bg-surface-deep`（黒地の反転ブロック）。
- **罫線グリッド**：カードは `gap-px` + `bg-border` の親要素で敷き詰め、セル間の隙間そのものを 1px の罫線にしています（`grid gap-px border border-border bg-border` のパターン）。
- **見出し**：`components/section-heading.tsx` に集約。`図番 + 英字ラベル → 罫線 → 見出し → リード文` の順。図番（01〜10）はセクションの並び順と一致させてください。
- **等幅フォント**：番号、ラベル、技術名、メールアドレスは Geist Mono。仕様書のような硬質さを出す担当です。
- **カスタムユーティリティ**（`@layer utilities`）：`bg-grid`（製図紙の方眼）、`mask-fade-y` / `mask-fade-b`、`rule-grid`、`ink-hover`、`logo-invert`、`checkbox-field`。

### ロゴ

- `public/logo-mc.png` … 透過PNG（491×512）。`components/logo.tsx` 経由で使用します。高さ指定（`className="h-7"`）で呼び出してください。
- `app/icon.png` … favicon。Next.js の App Router が自動で拾います。
- 黒地に置く場合は `<Logo invert />` とすると `filter: invert(1)` で白に転じます（CTAセクションとフッターで使用）。
- 差し替える場合は上の2ファイルを置き換えれば全箇所に反映されます。

`public/contact-success.html` は Next.js の外にある静的ページのため、色をハードコードしています。配色を変える際は合わせて修正してください。

## ページ構成

`app/page.tsx` が以下の順でセクションを組み立てています。

| 順 | セクション | ファイル | 役割 |
| --- | --- | --- | --- |
| 1 | ヒーロー | `components/hero-section.tsx` | 何屋かを一言で伝える + CTA |
| 2 | 課題提起 | `components/problem-section.tsx` | 「自分のことだ」と思わせる |
| 3 | サービス | `components/services-section.tsx` | 承れる内容 + 費用/期間の目安 |
| 4 | 選ばれる理由 | `components/strengths-section.tsx` | 発注前の不安を潰す |
| 5 | 実績 | `components/works-section.tsx` | 信頼の裏付け |
| 6 | ご依頼の流れ | `components/process-section.tsx` | 発注後のイメージを持たせる |
| 7 | 中間CTA | `components/cta-section.tsx` | 離脱前の受け皿 |
| 8 | 対応技術 | `components/tech-section.tsx` | 技術面での判断材料 |
| 9 | 費用・納期 | `components/pricing-section.tsx` | 問い合わせの最大のハードルを下げる |
| 10 | FAQ | `components/faq-section.tsx` | 残った疑問を潰す |
| 11 | 会社概要 | `components/company-section.tsx` | 与信の判断材料 |
| 12 | お問い合わせ | `components/contact-section.tsx` | リード獲得フォーム |

## 公開前チェックリスト

各セクションの編集対象データは、コンポーネント冒頭の配列にまとまっています。

- [ ] **`components/works-section.tsx` の掲載可否を確認する**（内容は職務経歴書2026年8月版から作成済み。固有名詞は削除・抽象化済み）
  - バッジは契約形態ではなく `phase`（担当フェーズ）を表示しています。受託の発注検討者が知りたいのは「どの工程まで任せられるか」であり、契約形態をカードごとに繰り返すと準委任専門に見えてしまうためです。契約形態はセクション冒頭のリード文で一度だけ開示しています
  - 掲載前に**各案件の秘密保持条項を確認**してください。業種＋規模＋技術の組み合わせから特定されうる案件がないかも併せて
- [ ] `components/services-section.tsx` の費用目安・期間目安を実際の受注価格に合わせる
  - ⚠️ Webサービス開発の「200万円〜」が `pricing-section.tsx` の受託プラン下限「300万円」を下回っています。どちらかに揃えてください
  - サービス03 は React Native によるクロスプラットフォーム開発に範囲を限定済み（Swift / Kotlin のネイティブ開発は実務経験がないため対象外）
- [ ] `components/pricing-section.tsx` の 3 プランの金額・想定工数・稼働量、支払条件、保守費用を確認する
- [ ] `components/tech-section.tsx` の追記が必要な技術がないか確認する（TypeScript / Tailwind CSS など、実務で使っていれば追加してください）
- [ ] `components/hero-section.tsx` の `promises`（返信速度・NDA対応など）を実際の運用と一致させる
- [ ] `components/faq-section.tsx` の回答（無償バグ対応1ヶ月、著作権譲渡など）を契約実務と一致させる
- [ ] `app/layout.tsx` の `siteUrl` を本番ドメインに合わせる
- [ ] OGP 画像（`/public`）を用意し、`app/layout.tsx` の `openGraph.images` に設定する

### 会社情報の要確認事項

`components/company-section.tsx` と `app/layout.tsx` の構造化データに、登記内容との不一致の可能性がある箇所があります。確認のうえ修正してください。

- **代表者の肩書**：合同会社の代表者は「代表社員」が正式名称です（「代表取締役社長」は株式会社の肩書）。発注側の法務・与信チェックで目に留まりやすい箇所です。

## お問い合わせフォーム（Netlify Forms）

Netlify は**静的 HTML からフィールドを検出**するため、フォーム項目は 2 ファイルで二重管理になっています。

- `components/contact-section.tsx` … 実際に表示されるフォーム
- `public/contact.html` … Netlify の検出用 hidden フォーム

**項目を増減したら必ず両方を揃えてください。** 揃っていないフィールドは送信されても記録されません。
送信後は `public/contact-success.html` を経由して `/contact-success` に遷移します。
