import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/modern-office-building.png')",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          未来を創造する
          <br />
          イノベーション企業
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          私たちは最先端のテクノロジーとクリエイティブな発想で、
          <br />
          お客様のビジネスを次のステージへと導きます
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            サービスを見る
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-transparent">
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  )
}
