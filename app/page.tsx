import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ServicesSection } from "@/components/services-section"
import { StrengthsSection } from "@/components/strengths-section"
import { WorksSection } from "@/components/works-section"
import { ProcessSection } from "@/components/process-section"
import { CtaSection } from "@/components/cta-section"
import { TechSection } from "@/components/tech-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CompanySection } from "@/components/company-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <StrengthsSection />
        <WorksSection />
        <ProcessSection />
        <CtaSection />
        <TechSection />
        <PricingSection />
        <FaqSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
