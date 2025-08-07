'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import { whatsappLink, contactInfo } from '@/data/contact'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tu Aliado en Ventas</h3>
            <p className="text-gray-400">
              Servicio especializado en soluciones de pago Santander para emprendedores y pymes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <Button 
              variant="outline" 
              className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tu Aliado en Ventas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
