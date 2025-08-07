'use client'

import { processSteps } from '@/data/process'
import FadeInUp from '@/components/ui/FadeInUp'
import { useInView } from '@/hooks/useInView'

export default function ProcessSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tan Fácil como Contar 1, 2, 3
            </h2>
            <p className="text-xl text-gray-600">
              Un proceso simple y sin complicaciones para que empieces a vender hoy
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-red-600 via-red-400 to-red-600"></div>
          
          {processSteps.map((step, index) => (
            <FadeInUp key={index} delay={index * 0.3}>
              <div className="text-center group">
                <div className={`w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transform group-hover:scale-110 transition-all duration-300 shadow-lg ${
                  isInView ? 'animate-bounce-in' : ''
                }`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-red-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
