
import { Providers } from "./providers"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Cta from "@/components/cta"
import Stats from "@/components/stats"
import About from "@/components/about"
import NichesCarousel from "@/components/niches-carousel"
import FaqCompact from "@/components/faq-compact"
import ResponsiveFixes from "@/components/responsive-fixes"

export default function Home() {
  return (
    <Providers>
      <ResponsiveFixes />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Stats />
        <NichesCarousel />
        <Features />
        <About />
        <Testimonials />
        <Pricing />
        <FaqCompact category="geral" limit={5} />
        <Cta />
      </div>
      <Footer />
    </Providers>
  )
}

