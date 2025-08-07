'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

const PARTICLE_COUNT = 6

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${i * 0.5}s`,
    animationDuration: `${3 + Math.random() * 2}s`
  }))
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [particles, setParticles] = useState<{left: string, top: string, animationDelay: string, animationDuration: string}[]>([])

  const whatsappLink = "https://wa.me/569XXXXXXXX?text=Hola,%20vengo%20de%20tu%20página%20web%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20máquinas%20de%20pago."

  const animatedWords = ["Hoy Mismo", "Sin Demora", "Ahora", "Ya!"]

  useEffect(() => {
    setIsVisible(true)
    setIsMobile(window.innerWidth < 768)
    setParticles(generateParticles()) // Solo en cliente

    // Animación de palabras rotativas
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedWords.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12 md:py-20 px-4 overflow-hidden">
      {/* Fondo animado ultra dinámico */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-5 w-32 h-32 md:w-64 md:h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-48 md:h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-spin-slow"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-sparkle"
            style={style}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Contenido de texto con animaciones ultra llamativas */}
          <div className={`space-y-4 md:space-y-8 text-center lg:text-left transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
            <Badge className="bg-white/20 text-white border-white/30 mx-auto lg:mx-0 animate-bounce-gentle backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
              🏦 Santander - Tu Aliado en Ventas
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="inline-block animate-slide-in-left">Acepta Pagos con Tarjeta</span>{' '}
                <span className="inline-block text-yellow-300 animate-text-glow font-black text-3xl md:text-5xl lg:text-7xl">
                  {animatedWords[textIndex]}
                </span>{' '}
                <span className="inline-block animate-slide-in-right">y Haz Crecer tu Negocio</span>
              </h1>
              
              <p className="text-base md:text-xl text-red-100 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-500">
                Asesoría personalizada para que elijas la máquina de pago Santander perfecta para ti.
              </p>
            </div>

            {/* Botones con animaciones espectaculares */}
            <div className="flex flex-col gap-3 md:gap-4 w-full max-w-sm mx-auto lg:max-w-none lg:flex-row lg:justify-start">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 w-full lg:w-auto animate-pulse-button group overflow-hidden relative"
                onClick={scrollToProducts}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Ver Máquinas Santander
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 animate-bounce-x group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
  size="lg"
  className="bg-white text-red-600 hover:bg-gray-100 font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-2xl w-full lg:w-auto group relative overflow-hidden border border-red-200"
  onClick={() => window.open(whatsappLink, '_blank')}
>
  <span className="relative z-10 flex items-center justify-center">
    <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
    Consultar WhatsApp
  </span>
</Button>
            </div>
          </div>

          {/* Imagen con animaciones espectaculares */}
          <div className={`relative transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-12 scale-90 rotate-3'}`}>
            <div className="relative mx-auto max-w-xs md:max-w-md lg:max-w-none">
              {/* Anillo animado alrededor de la imagen */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-2xl blur-lg opacity-40 animate-spin-slow"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-white to-yellow-300 rounded-xl blur-md opacity-50 animate-pulse"></div>
              
              <Image
                src="/modern-store-payment.png"
                alt="Persona usando máquina de pago Santander"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-700 animate-float-gentle"
              />
              
              {/* Efectos de brillo */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-300/80 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}