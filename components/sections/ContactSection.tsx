'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react'
import { whatsappLink, contactInfo } from '@/data/contact'
import FadeInUp from '@/components/ui/FadeInUp'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', phone: '', message: '' })
    
    // Reset después de 3 segundos
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Tienes Dudas? ¡Hablemos!
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y te contactaré a la brevedad para resolver todas tus preguntas sin ningún compromiso.
            </p>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeInUp delay={0.3}>
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">Te contactaré pronto para resolver tus dudas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Nombre *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Tu nombre completo"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Teléfono *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+56 9 XXXX XXXX"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Mensaje (opcional)</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Cuéntame sobre tu negocio..."
                      rows={4}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Consulta'
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </FadeInUp>

          <div className="space-y-8">
            <FadeInUp delay={0.5}>
              <div className="text-center p-8 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 transform hover:scale-105">
                <MessageCircle className="h-16 w-16 text-green-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold mb-4">¿Prefieres WhatsApp?</h3>
                <p className="text-gray-600 mb-6">
                  Haz clic aquí para hablar directamente conmigo por WhatsApp
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  )
}
