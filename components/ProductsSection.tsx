'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ChevronLeft, ChevronRight, Crown, Zap, Award, Smartphone } from 'lucide-react'

const machines = [
  {
    name: "Getnet Smart",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDIwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNDAwIiByeD0iMjAiIGZpbGw9IiNGRjQ0NDQiLz4KPHJlY3QgeD0iMTUiIHk9IjYwIiB3aWR0aD0iMTcwIiBoZWlnaHQ9IjMwMCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIxMDAiIHk9IjQwIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdldG5ldDwvdGV4dD4KPHN1cGVyc2NyaXB0Pjx0ZXh0IHg9IjEzNSIgeT0iMzUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjgiPisrPC90ZXh0Pjwvc3VwZXJzY3JpcHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iNTUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjEwIj5ieSDigJog4pmgU2FudGFuZGVyPC90ZXh0Pgo8Y2lyY2xlIGN4PSI1NSIgY3k9IjIyMCIgcj0iMjAiIGZpbGw9IiNGRjQ0NDQiLz4KPHN1cGVyc2NyaXB0Pjx0ZXh0IHg9IjEyNSIgeT0iMjAwIiBmaWxsPSIjRkY0NDQ0IiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCI+RzwvdGV4dD48L3N1cGVyc2NyaXB0Pgo8cmVjdCB4PSIxNDAiIHk9IjIwNSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNDYiIHk9IjIwNSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNTIiIHk9IjIwNSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNDAiIHk9IjIxMSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNDYiIHk9IjIxMSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNTIiIHk9IjIxMSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNDAiIHk9IjIxNyIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNDYiIHk9IjIxNyIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8cmVjdCB4PSIxNTIiIHk9IjIxNyIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI0ZGNDQzNCIvPgo8L3N2Zz4K",
    features: ["Pantalla táctil HD", "Conexión 4G LTE", "Batería larga duración", "App móvil incluida"],
    price: "Desde $75.990",
    highlight: "Más Moderno",
    icon: Smartphone,
    color: "bg-red-500"
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

        {/* Tarjeta centrada única */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 mx-2 transform hover:scale-105 animate-card-glow relative">
                {/* Badge destacado con animación */}
                {machines[0].highlight && (
                  <div className={`${machines[0].color} text-white text-center py-3 text-sm font-bold relative overflow-hidden animate-gradient-x`}>
                    <div className="flex items-center justify-center gap-2">
                      {React.createElement(machines[0].icon, { className: "w-4 h-4 animate-bounce" })}
                      {machines[0].highlight}
                      {React.createElement(machines[0].icon, { className: "w-4 h-4 animate-bounce delay-200" })}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
                  </div>
                )}
                
                <div className="relative h-48 md:h-64 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={machines[0].image}
                    alt={machines[0].name}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-110"
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
                    {machines[0].name}
                  </h3>
                  
                  <div className="space-y-2 md:space-y-3 mb-6">
                    {machines[0].features.map((feature, idx) => (
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
                        {machines[0].price}
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
          </div>
        </div>
      </div>
    </section>
  )
}