'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/data/contact'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
        onClick={() => window.open(whatsappLink, '_blank')}
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  )
}
