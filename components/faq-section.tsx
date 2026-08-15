import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"

export const faqs = [
  {
    question: "要件がまだ固まっていませんが、相談してもよいですか？",
    answer:
      "はい、その段階でのご相談が最も多いです。「何を作るべきか」を整理するところから一緒に進めます。現状の業務や困りごとを伺い、実現方法と概算費用をご提案します。仕様書のご用意は不要です。",
  },
  {
    question: "見積りや提案に費用はかかりますか？",
    answer:
      "初回のヒアリングとお見積り、ご提案までは無料です。大規模な要件定義や詳細な技術調査が必要な場合のみ、事前にご相談のうえ有償とさせていただくことがあります。",
  },
  {
    question: "予算が限られているのですが対応できますか？",
    answer:
      "ご予算をお伝えいただければ、その範囲で実現できる機能の優先順位をご提案します。すべてを一度に作らず、効果の大きい部分から段階的にリリースする進め方もよくご採用いただいています。",
  },
  {
    question: "他社が開発したシステムの改修もお願いできますか？",
    answer:
      "対応可能です。まずソースコードと構成を調査し、改修可能な範囲・想定リスク・工数をご報告します。調査のみのご依頼も承ります。ドキュメントが残っていない場合もご相談ください。",
  },
  {
    question: "契約形態は選べますか？",
    answer:
      "成果物を明確に定義できる案件は請負契約、要件が流動的な案件や継続的な支援は準委任契約と、内容に応じて適した形態をご提案します。貴社所定の契約書式での締結にも対応します。",
  },
  {
    question: "秘密保持契約（NDA）は締結できますか？",
    answer: "はい。ヒアリングの前段階でも締結可能です。貴社の書式をご提示いただく形でも、当社の雛形をお出しする形でも対応します。",
  },
  {
    question: "納品後のサポートや保守はありますか？",
    answer:
      "納品後1ヶ月間は無償でバグ対応を行います。それ以降は月額の運用保守契約、または都度のスポット対応をお選びいただけます。機能追加のご相談も随時承ります。",
  },
  {
    question: "ソースコードの著作権はどうなりますか？",
    answer:
      "原則として納品時にお客様へ譲渡します。将来的に内製化する場合や他社へ移管する場合も動かせるよう、設計・運用ドキュメントもあわせてお渡しします。",
  },
  {
    question: "対応エリアはどこまでですか？",
    answer:
      "オンラインでの打ち合わせを基本としており、全国からのご依頼に対応しています。必要に応じて対面での打ち合わせにも伺います（首都圏以外は交通費を別途ご相談させてください）。",
  },
  {
    question: "急ぎの案件でも対応できますか？",
    answer:
      "内容と時期によります。まずは希望納期をお伝えください。難しい場合は、期日までに何が実現できるかという形で代替案をご提示します。",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-surface py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="08"
            eyebrow="FAQ"
            title="よくあるご質問"
            description="ここに載っていないご質問も、お問い合わせフォームからお気軽にお寄せください。"
            className="mb-16"
          />

          <Accordion type="single" collapsible className="w-full max-w-4xl border-t border-foreground">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="cursor-pointer gap-6 py-6 text-left text-base font-medium text-foreground hover:no-underline">
                  <span className="flex items-start gap-5">
                    <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-10 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  )
}
