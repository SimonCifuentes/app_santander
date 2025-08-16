// app/page.js (Next.js 13 con App Router)
export const metadata = {
  title: 'Maquinitas Santander - Pago Fácil',
  description: 'Compra y conoce nuestras maquinitas Santander, rápidas y seguras para tus pagos.',
  metadataBase: new URL('https://app-santander-sigma.vercel.app'), // 🔹 agrega esto
  openGraph: {
    title: 'Maquinitas Santander - Pago Fácil',
    description: 'Compra y conoce nuestras maquinitas Santander, rápidas y seguras para tus pagos.',
    url: '/', // ahora relativa
    images: [
      {
        url: '/portadaSantander.png', // 🔹 usa ruta relativa desde /public
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maquinitas Santander - Pago Fácil',
    description: 'Compra y conoce nuestras maquinitas Santander, rápidas y seguras para tus pagos.',
    images: ['/portadaSantander.png'], // 🔹 igual relativa
  },
}

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
