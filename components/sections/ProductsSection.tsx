'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { machines } from '@/data/machines'
import { whatsappLink } from '@/data/contact'
import FadeInUp from '@/components/ui/FadeInUp'

export default function ProductsSection() {
  const [currentMachine, setCurrentMachine] = useState(0)

  const nextMachine = () => {
    setCurrentMachine((prev) => (prev + 1) % machines.length)
  }

  const prevMachine = () => {
    setCurrentMachine((prev) => (prev - 1 + machines.length) % machines.length)
  }

  return (
    <section id="productos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Elige la Máquina Perfecta para tu Negocio
            </h2>
            <p className="text-xl text-gray-600">
              Cada negocio es único. Encuentra la solución que mejor se adapte a ti.
            </p>
          </div>
        </FadeInUp>

        {/* Mobile Carousel */}
        <div className="lg:hidden mb-8">
          <FadeInUp delay={0.3}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src={machines[currentMachine].image || "/placeholder.svg"}
                  alt={machines[currentMachine].name}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{machines[currentMachine].name}</h3>
                <div className="space-y-2 mb-6">
                  {machines[currentMachine].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 animate-fade-in">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600 animate-pulse">
                    {machines[currentMachine].price}
                  </span>
                  <Button 
                    className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Consultar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInUp>

          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevMachine}
              className="rounded-full hover:bg-red-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {machines.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMachine ? 'bg-red-600 scale-125' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentMachine(index)}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextMachine}
              className="rounded-full hover:bg-red-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {machines.map((machine, index) => (
            <FadeInUp key={index} delay={index * 0.2}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={machine.image || "/placeholder.svg"}
                    alt={machine.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                    {machine.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {machine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">
                      {machine.price}
                    </span>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(whatsappLink, '_blank')}
                    >
                      Consultar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
