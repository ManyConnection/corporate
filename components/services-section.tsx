import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    number: "01",
    title: "デジタル戦略コンサルティング",
    description: "ビジネス目標に合わせた最適なデジタル戦略を立案し、実行をサポートします。",
  },
  {
    number: "02",
    title: "システム開発・導入",
    description: "最新技術を活用した高品質なシステム開発と、スムーズな導入支援を提供します。",
  },
  {
    number: "03",
    title: "データ分析・活用",
    description: "ビッグデータを活用し、ビジネスインサイトを導き出すデータ分析サービスを提供します。",
  },
  {
    number: "04",
    title: "クラウドソリューション",
    description: "セキュアで拡張性の高いクラウド環境の構築と運用をサポートします。",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-balance">サービス</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.number} className="border-border bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-primary mb-4">{service.number}</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
