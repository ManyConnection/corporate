import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">お問い合わせ</h2>
          <p className="text-lg text-muted-foreground mb-12">
            サービスに関するご質問やご相談は、お気軽にお問い合わせください。
          </p>

          <Card className="border-border bg-background">
            <CardContent className="p-8">
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      お名前 <span className="text-primary">*</span>
                    </label>
                    <Input id="name" name="name" placeholder="山田 太郎" required className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      メールアドレス <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@company.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    会社名
                  </label>
                  <Input id="company" name="company" placeholder="株式会社サンプル" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    お問い合わせ内容 <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto hover:scale-105 transition-transform duration-200 cursor-pointer">
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
