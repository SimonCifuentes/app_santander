'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const whatsappLink = "https://wa.me/569XXXXXXXX?text=Hola,%20vengo%20de%20tu%20página%20web%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20máquinas%20de%20pago%20Santander."

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-500 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
          <div className="animate-fade-in-up">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-red-400 animate-text-glow">
              🏦 Santander - Tu Aliado en Ventas
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base animate-fade-in-up delay-200">
              Servicio especializado en soluciones de pago Santander para emprendedores y pymes.
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contacto</h4>
            <div className="space-y-2 md:space-y-3 text-gray-300">
              <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start text-sm md:text-base hover:text-white transition-colors duration-300 transform hover:scale-105 animate-slide-in-left">
                <Phone className="h-4 w-4 animate-pulse" />
                <span>+56 9 XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start text-sm md:text-base hover:text-white transition-colors duration-300 transform hover:scale-105 animate-slide-in-left delay-100">
                <Mail className="h-4 w-4 animate-pulse" />
                <span>contacto@tudominio.cl</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up delay-500">
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Síguenos</h4>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-110 transition-all duration-500 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-lg hover:shadow-2xl animate-button-glow relative overflow-hidden group"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="mr-2 h-4 w-4 animate-bounce-gentle" />
                WhatsApp
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base animate-fade-in-up delay-700">
          <p className="flex items-center justify-center gap-2">
            &copy; 2024 Santander - Tu Aliado en Ventas. Hecho con 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
            para tu éxito.
          </p>
        </div>
      </div>
    </footer>
  )
}
