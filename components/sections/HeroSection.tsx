'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/data/contact'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeInUp from '@/components/ui/FadeInUp'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 px-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeInUp delay={0.2}>
              <Badge className="bg-white/20 text-white border-white/30 animate-pulse">
                Tu Aliado en Ventas
              </Badge>
            </FadeInUp>
            
            <div className="space-y-4">
              <AnimatedText
                text="Acepta Pagos con Tarjeta Hoy Mismo y Haz Crecer tu Negocio"
                className="text-4xl md:text-6xl font-bold leading-tight"
                highlightWords={["Hoy Mismo"]}
                highlightClassName="text-yellow-300"
              />
              
              <FadeInUp delay={0.8}>
                <p className="text-xl text-red-100">
                  Asesoría personalizada para que elijas la máquina de pago Santander perfecta para ti.
                </p>
              </FadeInUp>
            </div>

            <FadeInUp delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={scrollToProducts}
                >
                  Ver Máquinas
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5 animate-pulse" />
                  WhatsApp
                </Button>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={1.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg blur-lg opacity-30 animate-pulse"></div>
              <Image
                src="/modern-store-payment.png"
                alt="Persona usando máquina de pago en tienda"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
