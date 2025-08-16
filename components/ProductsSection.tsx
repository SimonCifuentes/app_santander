'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Smartphone } from 'lucide-react'

const machines = [
  {
    name: "Getnet Smart",
    images:[
      "/smart1.png",
      "/smart2.png",
      "/smart3.png"
    ],
    features: [
      "Sistema operativo Android 10",
      "Pantalla táctil 5.5” HD",
      "Conexión 4G + WiFi",
      "SIM Card con conectividad multioperador",
      "Certificación PCI 5 y PCI 6",
      "Batería de larga duración"
    ],
    price: "",
    highlight: "Más Moderno",
    icon: Smartphone,
    color: "bg-red-500"
  }
]

export default function ProductsSection() {
  const [currentMachine, setCurrentMachine] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  
  const whatsappLink = "https://wa.me/56984051873?text=Hola%2C%20vengo%20de%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20m%C3%A1quinas%20de%20pago."

  // Observador de visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-play carrusel principal
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentMachine((prev) => (prev + 1) % machines.length)
        setCurrentImage(0) // reset imágenes al cambiar máquina
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  // Auto-play imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % machines[currentMachine].images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentMachine])

  const nextMachine = () => {
    setCurrentMachine((prev) => (prev + 1) % machines.length)
    setCurrentImage(0)
    setIsAutoPlaying(false)
  }

  const prevMachine = () => {
    setCurrentMachine((prev) => (prev - 1 + machines.length) % machines.length)
    setCurrentImage(0)
    setIsAutoPlaying(false)
  }

  // Swipe móvil
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX
    if (touchEndX.current - touchStartX.current > 50) {
      setCurrentImage((prev) => (prev - 1 + machines[currentMachine].images.length) % machines[currentMachine].images.length)
    } else if (touchStartX.current - touchEndX.current > 50) {
      setCurrentImage((prev) => (prev + 1) % machines[currentMachine].images.length)
    }
  }

  const machine = machines[currentMachine]

  return (
    <section ref={sectionRef} id="productos" className="py-12 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-red-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-blue-500 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Título */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-full animate-ping"></div>
            <span className="text-red-600 font-bold animate-pulse">PRODUCTOS SANTANDER</span>
            <div className="w-8 h-8 bg-red-600 rounded-full animate-ping delay-300"></div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-text-focus-in">
            Máquinas de Pago Santander
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in-up delay-300">
            Cada negocio es único. Encuentra la solución Santander que mejor se adapte a ti.
          </p>
        </div>

        {/* Tarjeta */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 mx-2 transform hover:scale-105 animate-card-glow relative">
                
                {machine.highlight && (
                  <div className={`${machine.color} text-white text-center py-3 text-sm font-bold relative overflow-hidden animate-gradient-x`}>
                    <div className="flex items-center justify-center gap-2">
                      {React.createElement(machine.icon, { className: "w-4 h-4 animate-bounce" })}
                      {machine.highlight}
                      {React.createElement(machine.icon, { className: "w-4 h-4 animate-bounce delay-200" })}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
                  </div>
                )}

                <div 
                  className="relative h-48 md:h-64 overflow-hidden bg-gray-50 flex items-center justify-center"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={machine.images[currentImage]}
                    alt={machine.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 bg-white/80 rounded-full animate-ping"></div>
                </div>

                <CardContent className="p-4 md:p-6 relative">
                  <div className="space-y-2 md:space-y-3 mb-6">
                    {machine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 transition-all duration-500 animate-slide-in-left" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 animate-pulse" />
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="text-center">
                      <span className="text-2xl md:text-3xl font-bold text-red-600 animate-price-pulse">{machine.price}</span>
                    </div>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:py-4 rounded-xl transform hover:scale-110 transition-all duration-500 w-full text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl animate-button-glow relative overflow-hidden group"
                      onClick={() => window.open(whatsappLink, '_blank')}
                    >
                      <span className="relative z-10">Consultar por WhatsApp</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
