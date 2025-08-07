'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)
  
  const whatsappLink = "https://wa.me/569XXXXXXXX?text=Hola,%20vengo%20de%20tu%20página%20web%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20máquinas%20de%20pago%20Santander."

  useEffect(() => {
    setIsVisible(true)
    
    // Pulso intermitente cada 5 segundos
    const interval = setInterval(() => {
      setIsPulsing(false)
      setTimeout(() => setIsPulsing(true), 100)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-50'}`}>
      {/* Anillos pulsantes */}
      <div className="absolute inset-0 animate-ping">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-green-400 rounded-full opacity-30"></div>
      </div>
      <div className="absolute inset-0 animate-ping delay-300">
        <div className="w-16 h-16 md:w-18 md:h-18 bg-green-300 rounded-full opacity-20"></div>
      </div>
      
      <Button
        size="lg"
        className={`bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-125 transition-all duration-500 w-14 h-14 md:w-16 md:h-16 relative overflow-hidden group ${isPulsing ? 'animate-bounce-gentle' : ''}`}
        onClick={() => window.open(whatsappLink, '_blank')}
      >
        <MessageCircle className="h-6 w-6 md:h-8 md:w-8 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
        
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-sparkle-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </Button>
      
      {/* Tooltip animado para móvil */}
      <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-x-2 group-hover:translate-x-0 animate-fade-in-up md:hidden">
        Consultar por WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}
