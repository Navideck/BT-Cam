import Hero from "@/components/hero"
import Features from "@/components/features"
import SupportedCameras from "@/components/supported-cameras"
import AppScreenshots from "@/components/app-screenshots"
import HowItWorks from "@/components/how-it-works"
import DownloadSection from "@/components/download-section"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <SupportedCameras />
      <AppScreenshots />
      <HowItWorks />
      <DownloadSection />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

