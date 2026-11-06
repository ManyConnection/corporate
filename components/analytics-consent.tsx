"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const measurementId = "G-MNHRXGGN73"
const storageKey = "mc-analytics-consent-v1"
const lifetime = 180 * 24 * 60 * 60 * 1000
const pageTitles: Record<string, string> = {
  "/": "ManyConnection合同会社｜業務システム・アプリの受託開発",
  "/privacy-policy": "プライバシーポリシー｜ManyConnection合同会社",
  "/analytics-privacy": "アクセス解析について｜ManyConnection合同会社",
  "/contact-success": "お問い合わせありがとうございます｜ManyConnection合同会社",
}
type Choice = "granted" | "denied"
type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  mcAnalyticsStarted?: boolean
} & Partial<Record<`ga-disable-${typeof measurementId}`, boolean>>

function savedChoice(): Choice | null {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null")
    return saved && (saved.choice === "granted" || saved.choice === "denied") &&
      typeof saved.time === "number" && Date.now() - saved.time >= 0 &&
      Date.now() - saved.time < lifetime ? saved.choice : null
  } catch { return null }
}

function stopAnalytics() {
  const w = window as AnalyticsWindow
  w[`ga-disable-${measurementId}`] = true
  // Remove only this property's cookies, including older host/domain variants.
  for (const name of ["_ga", `_ga_${measurementId.slice(2)}`]) {
    for (const domain of ["", `; domain=${location.hostname}`, "; domain=.manyconnection.co.jp"]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax; Secure`
    }
  }
}

function trackPage(pathname: string) {
  // Never count previews, unknown paths, or URLs supplied in query/fragment data.
  if (location.hostname !== "manyconnection.co.jp" || !pageTitles[pathname]) return
  const w = window as AnalyticsWindow
  const page = {
    page_location: `https://manyconnection.co.jp${pathname}`,
    page_title: pageTitles[pathname],
    page_referrer: "",
  }
  w[`ga-disable-${measurementId}`] = false
  if (!w.mcAnalyticsStarted) {
    w.mcAnalyticsStarted = true
    w.dataLayer = w.dataLayer || []
    w.gtag = function () { w.dataLayer!.push(arguments) }
    w.gtag("consent", "default", {
      analytics_storage: "denied", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied",
    })
    w.gtag("consent", "update", { analytics_storage: "granted" })
    // Apply defaults before the upgraded Google tag container initializes.
    w.gtag("set", {
      ...page, send_page_view: false,
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_domain: "manyconnection.co.jp", cookie_path: "/",
      cookie_expires: lifetime / 1000, cookie_update: false,
    })
    w.gtag("js", new Date())
    w.gtag("config", measurementId, {
      ...page, send_page_view: false,
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_domain: "manyconnection.co.jp", cookie_path: "/",
      cookie_expires: lifetime / 1000, cookie_update: false,
    })
    const script = document.createElement("script")
    script.id = "mc-google-analytics"
    script.async = true
    script.referrerPolicy = "no-referrer"
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
  }
  // Enhanced measurement is disabled in this Web stream. Send one explicit view.
  w.gtag!("set", page)
  w.gtag!("event", "page_view", { ...page, send_to: measurementId })
}

export function AnalyticsConsent() {
  const pathname = usePathname()
  const [choice, setChoice] = useState<Choice | null>(null)
  const [ready, setReady] = useState(false)
  const [editing, setEditing] = useState(false)
  const lastPage = useRef<string | null>(null)
  const settingsButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setChoice(savedChoice())
    setReady(true)
    const onStorage = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return
      const next = savedChoice()
      if (next !== "granted") {
        stopAnalytics()
        // Unload any already-running tag immediately in other open tabs too.
        if ((window as AnalyticsWindow).mcAnalyticsStarted) location.reload()
      }
      setChoice(next)
      lastPage.current = null
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  useEffect(() => {
    if (!ready || choice !== "granted" || !pathname || lastPage.current === pathname) return
    trackPage(pathname)
    lastPage.current = pathname
  }, [ready, choice, pathname])

  function choose(next: Choice) {
    try { localStorage.setItem(storageKey, JSON.stringify({ choice: next, time: Date.now() })) } catch {}
    if (next === "denied") {
      stopAnalytics()
      if ((window as AnalyticsWindow).mcAnalyticsStarted) {
        // No denied-consent pings: unload the tag instead of running it cookieless.
        location.reload()
        return
      }
    }
    setChoice(next)
    setEditing(false)
    settingsButton.current?.focus({ preventScroll: true })
  }

  if (!ready) return null
  return (
    <>
      <div className="border-t border-border bg-background px-6 py-5 text-center pb-24 sm:pb-5">
        <button ref={settingsButton} type="button" onClick={() => setEditing(!editing)}
          aria-expanded={editing || choice === null} aria-controls="analytics-consent"
          className="cursor-pointer text-sm underline underline-offset-4">
          アクセス解析の設定
        </button>
      </div>
      {(choice === null || editing) && (
        <section id="analytics-consent" aria-labelledby="analytics-consent-title"
          className="fixed inset-x-0 bottom-0 z-[60] max-h-[70vh] overflow-y-auto border-t border-foreground bg-background p-5 shadow-lg sm:p-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 id="analytics-consent-title" className="text-base font-semibold">アクセス解析について</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                サイト改善のため、同意いただいた場合にのみGoogle Analyticsで閲覧状況を計測し、Cookieを使用します。
                許可しなくてもサイトをご利用いただけます。設定はページ下部から変更できます。
                <Link href="/analytics-privacy" className="ml-1 underline underline-offset-4">詳しく見る</Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button type="button" onClick={() => choose("denied")}
                className="cursor-pointer border border-foreground px-5 py-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">許可しない</button>
              <button type="button" onClick={() => choose("granted")}
                className="cursor-pointer border border-foreground px-5 py-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">許可する</button>
              {editing && choice !== null && <button type="button" onClick={() => { setEditing(false); settingsButton.current?.focus({ preventScroll: true }) }} className="cursor-pointer px-3 py-3 text-sm underline">閉じる</button>}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
