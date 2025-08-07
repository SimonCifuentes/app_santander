'use client'

import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProductsSection from '@/components/ProductsSection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
