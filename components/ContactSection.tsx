'use client'

import { useState, useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle, Phone, Mail, CheckCircle, Send, Zap } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const whatsappLink = "https://wa.me/569XXXXXXXX?text=Hola,%20vengo%20de%20tu%20página%20web%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20máquinas%20de%20pago%20Santander."

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío con animación
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', phone: '', message: '' })
    
    // Reset después de 4 segundos
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Fondo animado ultra dinámico */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Título ultra animado */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-yellow-500 animate-bounce" />
            <span className="text-red-600 font-bold text-lg animate-pulse">CONTACTO DIRECTO</span>
            <Zap className="w-8 h-8 text-yellow-500 animate-bounce delay-200" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-text-focus-in">
            ¿Tienes Dudas? ¡Hablemos!
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in-up delay-300">
            Completa el formulario y te contactaré a la brevedad para resolver todas tus preguntas sin ningún compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Formulario ultra animado */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <Card className="p-4 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-card-glow relative overflow-hidden">
              {/* Efecto de brillo en el borde */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-transparent to-red-500 opacity-20 animate-border-glow"></div>
              
              {isSubmitted ? (
                <div className="text-center py-8 md:py-12 animate-success-bounce">
                  <div className="relative">
                    <CheckCircle className="h-16 w-16 md:h-20 md:w-20 text-green-500 mx-auto mb-4 animate-bounce-success" />
                    {/* Partículas de celebración */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-green-400 rounded-full animate-confetti"
                        style={{
                          left: `${40 + Math.cos(i * 45 * Math.PI / 180) * 60}px`,
                          top: `${40 + Math.sin(i * 45 * Math.PI / 180) * 60}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2 animate-text-glow">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600 animate-fade-in-up delay-200">
                    Te contactaré pronto para resolver tus dudas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Nombre *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tu nombre completo"
                      className={`w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-500 text-base transform ${focusedField === 'name' ? 'scale-105 shadow-lg' : ''}`}
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -right-2 top-8 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Teléfono *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+56 9 XXXX XXXX"
                      className={`w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-500 text-base transform ${focusedField === 'phone' ? 'scale-105 shadow-lg' : ''}`}
                    />
                    {focusedField === 'phone' && (
                      <div className="absolute -right-2 top-8 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Mensaje (opcional)</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Cuéntame sobre tu negocio..."
                      rows={4}
                      className={`w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-500 resize-none text-base transform ${focusedField === 'message' ? 'scale-105 shadow-lg' : ''}`}
                    />
                    {focusedField === 'message' && (
                      <div className="absolute -right-2 top-8 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-base md:text-lg py-4 md:py-6 rounded-xl transform hover:scale-110 transition-all duration-500 disabled:transform-none font-bold shadow-2xl hover:shadow-3xl animate-button-glow relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Enviar Consulta
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Efecto de ondas al hacer clic */}
                    <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-active:scale-100 transition-transform duration-200"></div>
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Información de contacto ultra animada */}
          <div className="space-y-4 md:space-y-8">
            {/* WhatsApp ultra destacado */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="text-center p-4 md:p-8 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 animate-card-float relative overflow-hidden group">
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative">
                  <MessageCircle className="h-16 w-16 md:h-20 md:w-20 text-green-600 mx-auto mb-4 animate-bounce-gentle group-hover:animate-spin" />
                  {/* Anillos pulsantes */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 border-4 border-green-300 rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 border-2 border-green-200 rounded-full animate-ping delay-300"></div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 animate-text-glow">
                  ¿Prefieres WhatsApp?
                </h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base animate-fade-in-up delay-200">
                  Haz clic aquí para hablar directamente conmigo por WhatsApp
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl transform hover:scale-125 transition-all duration-500 text-base font-bold w-full md:w-auto shadow-2xl hover:shadow-3xl animate-button-glow relative overflow-hidden group"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                    Abrir WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>

            {/* Información adicional ultra animada */}
            <div className={`space-y-3 md:space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 group animate-slide-in-left">
                <div className="relative">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 group-hover:animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping group-hover:animate-pulse"></div>
                </div>
                <span className="text-gray-700 text-sm md:text-base font-medium">+56 9 XXXX XXXX</span>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 group animate-slide-in-left delay-200">
                <div className="relative">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 group-hover:animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping group-hover:animate-pulse"></div>
                </div>
                <span className="text-gray-700 text-sm md:text-base font-medium">contacto@tudominio.cl</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
