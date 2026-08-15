"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        <a href="mailto:tada@manyconnection.co.jp" className="shrink-0">
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer border-foreground"
            aria-label="メールで問い合わせる"
          >
            <Mail className="size-4" />
          </Button>
        </a>
        <Link href="#contact" className="flex-1">
          <Button size="lg" className="w-full cursor-pointer font-semibold">
            無料で相談する
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
