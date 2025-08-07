'use client'

import { useInView } from '@/hooks/useInView'

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeInUp({ children, delay = 0, className = '' }: FadeInUpProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
