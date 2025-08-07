'use client'

import { Card, CardContent } from '@/components/ui/card'
import { benefits } from '@/data/benefits'
import FadeInUp from '@/components/ui/FadeInUp'
import { useInView } from '@/hooks/useInView'

export default function BenefitsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegirnos para tu Solución de Pago?
            </h2>
            <p className="text-xl text-gray-600">
              Más que vender máquinas, somos tu socio estratégico para hacer crecer tu negocio
            </p>
          </div>
        </FadeInUp>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <FadeInUp key={index} delay={index * 0.2}>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="space-y-4">
                  <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-red-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
