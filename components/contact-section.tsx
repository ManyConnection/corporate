import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/section-heading"
import Link from "next/link"
import { Clock, Mail, ShieldCheck } from "lucide-react"

/*
 * Netlify Forms は静的HTMLからフィールドを検出します。
 * 項目を増減した場合は public/contact.html の hidden フォームも必ず揃えてください。
 */
const fieldClass = "border-input bg-background focus-visible:border-foreground focus-visible:ring-0"

const selectClass =
  "h-9 w-full border border-input bg-background px-3 py-1 text-base text-foreground outline-none transition-colors focus-visible:border-foreground md:text-sm"

const labelClass = "font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground"

const inquiryTypes = [
  "新規システム開発",
  "既存システムの改修・リプレイス",
  "Web・モバイルアプリ開発",
  "クラウド構築・インフラ移行",
  "DX支援・技術相談",
  "運用保守のみ",
  "その他・未定",
]

const budgets = ["未定・相談したい", "〜100万円", "100〜300万円", "300〜500万円", "500〜1,000万円", "1,000万円以上"]

const schedules = ["未定・相談したい", "1ヶ月以内", "3ヶ月以内", "6ヶ月以内", "半年以上先"]

const phases = [
  "アイデア段階（何を作るかこれから）",
  "課題は明確・要件はこれから",
  "要件を整理中",
  "要件定義書・RFPあり",
  "既存システムの改修・引き継ぎ",
]

const asides = [
  {
    icon: Mail,
    title: "メールでのご相談",
    body: "フォームをお使いいただかず、直接メールでご連絡いただいても構いません。",
    link: { href: "mailto:tada@manyconnection.co.jp", label: "tada@manyconnection.co.jp" },
  },
  {
    icon: Clock,
    title: "ご返信について",
    body: "平日 10:00〜18:00 に確認しています。最短翌営業日、遅くとも3営業日以内にご返信します。",
  },
  {
    icon: ShieldCheck,
    title: "秘密保持について",
    body: "お預かりした情報は本件のご検討目的以外に使用しません。NDAの締結にも対応します。",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-background py-24 pb-32 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="10"
            eyebrow="Contact"
            title={
              <>
                まずは、お困りごとだけ
                <br className="hidden md:block" />
                お聞かせください
              </>
            }
            description="仕様が固まっていない段階でも構いません。ご相談・お見積りは無料です。いただいた内容をもとに、最短翌営業日にご返信します。"
            className="mb-16"
          />

          <div className="grid border border-border lg:grid-cols-3">
            <div className="border-b border-border p-8 md:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
              <form
                name="contact"
                method="POST"
                action="/contact-success.html"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-7"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: "none" }}>
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </div>

                <div className="grid gap-7 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="company" className={labelClass}>
                      会社名・団体名 <span className="text-foreground">*</span>
                    </label>
                    <Input id="company" name="company" placeholder="株式会社サンプル" required className={fieldClass} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="name" className={labelClass}>
                      お名前 <span className="text-foreground">*</span>
                    </label>
                    <Input id="name" name="name" placeholder="山田 太郎" required className={fieldClass} />
                  </div>
                </div>

                <div className="grid gap-7 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>
                      メールアドレス <span className="text-foreground">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@company.com"
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tel" className={labelClass}>
                      電話番号
                    </label>
                    <Input id="tel" name="tel" type="tel" placeholder="03-1234-5678" className={fieldClass} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className={labelClass}>
                    ご相談の種類 <span className="text-foreground">*</span>
                  </label>
                  <select id="inquiry-type" name="inquiry-type" required defaultValue="" className={selectClass}>
                    <option value="" disabled>
                      選択してください
                    </option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-7 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="budget" className={labelClass}>
                      ご予算
                    </label>
                    <select id="budget" name="budget" defaultValue="" className={selectClass}>
                      <option value="">選択してください</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="schedule" className={labelClass}>
                      希望時期
                    </label>
                    <select id="schedule" name="schedule" defaultValue="" className={selectClass}>
                      <option value="">選択してください</option>
                      {schedules.map((schedule) => (
                        <option key={schedule} value={schedule}>
                          {schedule}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phase" className={labelClass}>
                    現在の検討状況
                  </label>
                  <select id="phase" name="phase" defaultValue="" className={selectClass}>
                    <option value="">選択してください</option>
                    {phases.map((phase) => (
                      <option key={phase} value={phase}>
                        {phase}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className={labelClass}>
                    ご相談内容 <span className="text-foreground">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={
                      "例）拠点ごとにExcelで在庫を管理しており、実在庫とのズレが頻発しています。\n入出庫をその場で記録できる仕組みにしたいのですが、何から始めればよいか分からず相談したいです。"
                    }
                    rows={7}
                    required
                    className={`${fieldClass} resize-none`}
                  />
                  <p className="text-xs text-muted-foreground">
                    現状の困りごとだけでも構いません。分かる範囲でご記入ください。
                  </p>
                </div>

                <div className="flex items-start gap-3 border-t border-border pt-7">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    value="同意する"
                    required
                    className="checkbox-field mt-0.5 shrink-0 cursor-pointer"
                  />
                  <label htmlFor="privacy" className="cursor-pointer text-sm text-muted-foreground">
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4"
                    >
                      プライバシーポリシー
                    </Link>
                    に同意します <span className="text-foreground">*</span>
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full cursor-pointer font-semibold md:w-auto">
                  この内容で相談する（無料）
                </Button>
              </form>
            </div>

            <div className="grid">
              {asides.map((aside) => (
                <div key={aside.title} className="border-b border-border p-8">
                  <aside.icon className="mb-5 size-5 text-foreground" strokeWidth={1.5} />
                  <h3 className="mb-2 text-sm font-semibold text-foreground">{aside.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{aside.body}</p>
                  {aside.link && (
                    <a
                      href={aside.link.href}
                      className="mt-3 inline-block break-all font-mono text-xs text-foreground underline underline-offset-4"
                    >
                      {aside.link.label}
                    </a>
                  )}
                </div>
              ))}

              <div className="bg-foreground p-8 text-background">
                <h3 className="mb-2 text-sm font-semibold">売り込みはいたしません</h3>
                <p className="text-sm leading-relaxed text-background/70">
                  お問い合わせ後にしつこい営業連絡を行うことはありません。検討を見送られる場合も、その旨ご連絡いただければ以降の連絡は停止します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
