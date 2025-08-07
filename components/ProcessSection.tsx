'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: "Te Asesoro",
    description: "Contáctame y conversamos sobre tu negocio para elegir la máquina Santander ideal para ti.",
    icon: "🤝",
    color: "from-blue-500 to-purple-600"
  },
  {
    number: 2,
    title: "Te la Entrego",
    description: "Recibe tu máquina Santander completamente configurada y lista para usar. Sin complicaciones técnicas.",
    icon: "📦",
    color: "from-green-500 to-blue-500"
  },
  {
    number: 3,
    title: "¡A Vender!",
    description: "Listo! Ya puedes aceptar pagos con tarjeta y ver crecer tus ventas desde el primer día.",
    icon: "💳",
    color: "from-red-500 to-pink-500"
  }
]

const PARTICLE_COUNT = 6

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    left: `${Math.random() * 60 + 10}px`,
    top: `${Math.random() * 60 + 10}px`,
    animationDelay: `${i * 0.1}s`
  }))
}

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [particles, setParticles] = useState<{left: string, top: string, animationDelay: string}[]>([])

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

  // Animación automática de pasos
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  // Generar partículas solo cuando cambia el paso activo
  useEffect(() => {
    setParticles(generateParticles())
  }, [activeStep])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Fondo animado ultra dinámico */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Título ultra animado */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
            <span className="text-red-600 font-bold text-lg animate-pulse">PROCESO SIMPLE</span>
            <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-text-focus-in">
            Tan Fácil como Contar 1, 2, 3
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in-up delay-300">
            Un proceso simple y sin complicaciones para que empieces a vender con Santander hoy
          </p>
        </div>

        {/* Pasos ultra animados para móvil */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-90'
              } ${activeStep === index ? 'transform scale-110' : ''}`}
              style={{ transitionDelay: `${index * 0.4}s` }}
            >
              {/* Círculo con número ultra animado */}
              <div className="relative mb-4 md:mb-6">
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center mx-auto text-2xl md:text-3xl font-bold transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl animate-float-gentle relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.5}s` }}>
                  <span className="relative z-10">{step.number}</span>
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  {/* Anillo pulsante */}
                  <div className={`absolute inset-0 rounded-full border-4 border-white/50 ${activeStep === index ? 'animate-ping' : ''}`}></div>
                </div>
                
                {/* Emoji flotante */}
                <div className="absolute -bottom-2 -right-2 text-3xl md:text-4xl animate-bounce-gentle"
                  style={{ animationDelay: `${index * 0.3}s` }}>
                  {step.icon}
                </div>

                {/* Partículas alrededor del círculo */}
                {activeStep === index && (
                  <div className="absolute inset-0">
                    {particles.map((style, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-sparkle-burst"
                        style={style}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-red-600 transition-all duration-300 ${activeStep === index ? 'text-red-600 animate-pulse' : ''}`}>
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-sm mx-auto px-2 group-hover:text-gray-800 transition-colors duration-300">
                {step.description}
              </p>

              {/* Flecha conectora animada solo en desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 md:top-12 left-full w-8 lg:w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transform -translate-x-4 lg:-translate-x-6">
                  <ArrowDown className="absolute -right-1 -top-2 w-4 h-4 text-red-600 rotate-90 animate-bounce-x" />
                </div>
              )}

              {/* Línea conectora vertical para móvil */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <ArrowDown className="w-6 h-6 text-red-600 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Indicador de progreso para móvil */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeStep === index 
                    ? 'bg-red-600 scale-150 animate-pulse' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}