"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/#services", label: "サービス" },
  { href: "/#works", label: "実績" },
  { href: "/#process", label: "進め方" },
  { href: "/#pricing", label: "費用・納期" },
  { href: "/#faq", label: "よくある質問" },
  { href: "/#company", label: "会社概要" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Logo className="h-7" />
            <span className="text-base font-semibold tracking-tight text-foreground md:text-lg">
              ManyConnection
              <span className="font-normal text-muted-foreground">合同会社</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/#contact" className="hidden sm:block">
              <Button className="cursor-pointer font-semibold">無料で相談する</Button>
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer lg:hidden" aria-label="メニューを開く">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 border-l border-border bg-background p-0 [&>button:last-child]:hidden"
              >
                <div className="flex h-16 items-center justify-between border-b border-border px-6">
                  <SheetTitle className="flex items-center gap-3 text-base font-semibold text-foreground">
                    <Logo className="h-6" />
                    ManyConnection
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="cursor-pointer" aria-label="メニューを閉じる">
                      <X className="size-5" />
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-5 border-b border-border px-6 py-4 text-sm text-foreground transition-colors hover:bg-surface"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/privacy-policy"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-5 border-b border-border px-6 py-4 text-sm text-foreground transition-colors hover:bg-surface"
                  >
                    <span className="font-mono text-xs text-muted-foreground">07</span>
                    プライバシーポリシー
                  </Link>
                </nav>

                <div className="mt-auto space-y-3 border-t border-border p-6">
                  <Link href="/#contact" onClick={() => setOpen(false)}>
                    <Button className="w-full cursor-pointer font-semibold">無料で相談する</Button>
                  </Link>
                  <a
                    href="mailto:tada@manyconnection.co.jp"
                    className="block text-center font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    tada@manyconnection.co.jp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
