'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Rocket, DollarSign, User, CheckCircle, Zap, Star } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: "Empieza en 48 Horas",
    description: "Configuración rápida y sin complicaciones. Estarás vendiendo antes de lo que imaginas.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    hoverColor: "hover:bg-red-100",
    accent: "bg-red-500"
  },
  {
    icon: DollarSign,
    title: "Comisiones Santander",
    description: "Las tarifas más competitivas del mercado. Más ventas, menos descuentos.",
    color: "text-red-600",
    bgColor: "bg-gray-50",
    hoverColor: "hover:bg-gray-100",
    accent: "bg-green-500"
  },
  {
    icon: User,
    title: "Soporte Personalizado",
    description: "Hablas conmigo directamente, no con un bot. Atención humana cuando la necesites.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    hoverColor: "hover:bg-red-100",
    accent: "bg-blue-500"
  },
  {
    icon: CheckCircle,
    title: "Sin Contratos Ocultos",
    description: "Transparencia total. Sin arriendos mensuales sorpresa ni letra chica.",
    color: "text-red-600",
    bgColor: "bg-gray-50",
    hoverColor: "hover:bg-gray-100",
    accent: "bg-purple-500"
  }
]

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Título con animación espectacular */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4 animate-bounce-gentle">
            <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
            <Zap className="w-6 h-6 text-red-600 animate-pulse" />
            <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-text-focus-in">
            ¿Por Qué Elegir Santander?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in-up delay-300">
            Más que vender máquinas, somos tu socio estratégico para hacer crecer tu negocio
          </p>
        </div>
        
        {/* Grid de beneficios con animaciones ultra llamativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`text-center p-4 md:p-6 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group border-0 shadow-lg ${benefit.hoverColor} relative overflow-hidden animate-card-float`}
                style={{ animationDelay: `${index * 0.5}s` }}>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Círculo de acento animado */}
                <div className={`absolute top-2 right-2 w-3 h-3 ${benefit.accent} rounded-full animate-ping`}></div>
                
                <CardContent className="space-y-3 md:space-y-4 p-0 relative z-10">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-icon-bounce`}
                    style={{ animationDelay: `${index * 0.3}s` }}>
                    <benefit.icon className={`h-6 w-6 md:h-8 md:w-8 ${benefit.color} group-hover:animate-pulse`} />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 animate-text-slide-up">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </CardContent>

                {/* Efecto de partículas en hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-500 rounded-full animate-sparkle-burst"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
