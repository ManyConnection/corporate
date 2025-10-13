export function CompanySection() {
  return (
    <section id="company" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-balance">企業情報</h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-border">
              <div className="text-sm text-muted-foreground">会社名</div>
              <div className="md:col-span-2 text-foreground">株式会社サンプル企業</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-border">
              <div className="text-sm text-muted-foreground">設立</div>
              <div className="md:col-span-2 text-foreground">2000年4月1日</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-border">
              <div className="text-sm text-muted-foreground">代表者</div>
              <div className="md:col-span-2 text-foreground">代表取締役社長 山田 太郎</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-border">
              <div className="text-sm text-muted-foreground">所在地</div>
              <div className="md:col-span-2 text-foreground">
                〒100-0001
                <br />
                東京都千代田区千代田1-1-1
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-border">
              <div className="text-sm text-muted-foreground">資本金</div>
              <div className="md:col-span-2 text-foreground">1億円</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-border">
              <div className="text-sm text-muted-foreground">従業員数</div>
              <div className="md:col-span-2 text-foreground">150名</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-border">
              <div className="text-sm text-muted-foreground">事業内容</div>
              <div className="md:col-span-2 text-foreground">
                デジタルコンサルティング
                <br />
                システム開発・導入支援
                <br />
                データ分析サービス
                <br />
                クラウドソリューション
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
