import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* 本番ドメインが異なる場合はここを差し替えてください */
const siteUrl = 'https://manyconnection.co.jp'
const siteName = 'ManyConnection合同会社'
const siteDescription =
  '業務システム・Webサービス・モバイルアプリの受託開発会社。要件整理から設計・開発・運用保守まで一気通貫で対応します。費用・納期の目安を公開中。初回相談とお見積りは無料、NDA締結にも対応します。'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName}｜業務システム・アプリの受託開発`,
    template: `%s｜${siteName}`,
  },
  description: siteDescription,
  keywords: [
    '受託開発',
    'システム開発',
    '業務システム開発',
    'Webアプリ開発',
    'アプリ開発',
    'クラウド構築',
    'DX支援',
    '東京',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName,
    title: `${siteName}｜業務システム・アプリの受託開発`,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName}｜業務システム・アプリの受託開発`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  email: 'tada@manyconnection.co.jp',
  foundingDate: '2023-10-18',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: '東京都',
    addressLocality: '豊島区',
    streetAddress: '東池袋１丁目３４番５号いちご東池袋ビル６階',
    postalCode: '170-0013',
  },
  areaServed: 'JP',
  serviceType: ['受託開発', 'システム開発', 'アプリ開発', 'クラウド構築', 'DX支援'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
