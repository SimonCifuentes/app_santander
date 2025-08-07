'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ChevronLeft, ChevronRight, Crown, Zap, Award } from 'lucide-react'

const machines = [
  {
    name: "Santander Portátil Plus",
    image: "/modern-payment-terminal.png",
    features: ["Conexión 4G y WiFi", "Batería 8 horas", "Imprime vouchers", "Todas las tarjetas"],
    price: "Desde $89.990",
    highlight: "Más Popular",
    icon: Crown,
    color: "bg-yellow-500"
  },
  {
    name: "Santander Pocket",
    image: "/compact-card-reader.png",
    features: ["Ultra compacto", "Bluetooth", "Batería larga duración", "Fácil transporte"],
    price: "Desde $59.990",
    highlight: "Económico",
    icon: Zap,
    color: "bg-green-500"
  },
  {
    name: "Santander Pro Fijo",
    image: "/fixed-payment-terminal.png",
    features: ["Para mostrador", "Pantalla táctil", "Conexión ethernet", "Alta velocidad"],
    price: "Desde $129.990",
    highlight: "Profesional",
    icon: Award,
    color: "bg-purple-500"
  }
]

export default function ProductsSection() {
  const [currentMachine, setCurrentMachine] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  
  const whatsappLink = "https://wa.me/569XXXXXXXX?text=Hola,%20vengo%20de%20tu%20página%20web%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20máquinas%20de%20pago."

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-play del carrusel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentMachine((prev) => (prev + 1) % machines.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextMachine = () => {
    setCurrentMachine((prev) => (prev + 1) % machines.length)
    setIsAutoPlaying(false)
  }

  const prevMachine = () => {
    setCurrentMachine((prev) => (prev - 1 + machines.length) % machines.length)
    setIsAutoPlaying(false)
  }

  return (
    <section ref={sectionRef} id="productos" className="py-12 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-red-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-blue-500 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Título con animación espectacular */}
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

        {/* Carrusel móvil ultra animado */}
        <div className="lg:hidden mb-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 mx-2 transform hover:scale-105 animate-card-glow relative">
              {/* Badge destacado con animación */}
              {machines[currentMachine].highlight && (
                <div className={`${machines[currentMachine].color} text-white text-center py-3 text-sm font-bold relative overflow-hidden animate-gradient-x`}>
                  <div className="flex items-center justify-center gap-2">
                    {React.createElement(machines[currentMachine].icon, { className: "w-4 h-4 animate-bounce" })}
                    {machines[currentMachine].highlight}
                    {React.createElement(machines[currentMachine].icon, { className: "w-4 h-4 animate-bounce delay-200" })}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
                </div>
              )}
              
              <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                  src={machines[currentMachine].image || "/placeholder.svg"}
                  alt={machines[currentMachine].name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Overlay con efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/80 rounded-full animate-ping"></div>
              </div>
              
              <CardContent className="p-4 md:p-6 relative">
                {/* Efecto de partículas */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-red-500 rounded-full animate-float-particle"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-900 animate-text-slide-up">
                  {machines[currentMachine].name}
                </h3>
                
                <div className="space-y-2 md:space-y-3 mb-6">
                  {machines[currentMachine].features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-3 transition-all duration-500 animate-slide-in-left`}
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 animate-pulse" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold text-red-600 animate-price-pulse">
                      {machines[currentMachine].price}
                    </span>
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

          {/* Controles del carrusel ultra animados */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevMachine}
              className="rounded-full p-3 hover:bg-red-50 border-red-200 hover:border-red-300 transform hover:scale-125 transition-all duration-300 animate-bounce-gentle"
            >
              <ChevronLeft className="h-5 w-5 text-red-600" />
            </Button>
            
            <div className="flex gap-3">
              {machines.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-150 ${
                    index === currentMachine 
                      ? 'bg-red-600 scale-125 animate-pulse' 
                      : 'bg-gray-300 hover:bg-red-300'
                  }`}
                  onClick={() => {
                    setCurrentMachine(index)
                    setIsAutoPlaying(false)
                  }}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextMachine}
              className="rounded-full p-3 hover:bg-red-50 border-red-200 hover:border-red-300 transform hover:scale-125 transition-all duration-300 animate-bounce-gentle delay-200"
            >
              <ChevronRight className="h-5 w-5 text-red-600" />
            </Button>
          </div>
        </div>

        {/* Grid desktop con animaciones espectaculares */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {machines.map((machine, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 group h-full animate-card-float relative"
                style={{ animationDelay: `${index * 0.5}s` }}>
                
                {machine.highlight && (
                  <div className={`${machine.color} text-white text-center py-2 text-sm font-bold relative overflow-hidden`}>
                    <div className="flex items-center justify-center gap-2">
                      {React.createElement(machine.icon, { className: "w-4 h-4 animate-spin-slow" })}
                      {machine.highlight}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={machine.image || "/placeholder.svg"}
                    alt={machine.name}
                    fill
                    className="object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                </div>
                
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300 animate-text-glow">
                    {machine.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {machine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 0.1}s` }}>
                        <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-red-600 animate-price-pulse">
                        {machine.price}
                      </span>
                    </div>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white transform hover:scale-110 transition-all duration-500 w-full font-bold shadow-xl hover:shadow-2xl animate-button-glow relative overflow-hidden group"
                      onClick={() => window.open(whatsappLink, '_blank')}
                    >
                      <span className="relative z-10">Consultar</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
