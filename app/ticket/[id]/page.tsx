import { notFound } from 'next/navigation'
import TicketDetails from '@/components/TicketDetails'
import TicketChat from '@/components/TicketChat'
import { ticketQueries, messageQueries } from '@/lib/db'

export default async function TicketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const ticket = ticketQueries.getByTicketNumber(id)

  if (!ticket) {
    notFound()
  }

  const messages = messageQueries.getByTicketNumber(id)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <TicketDetails ticket={ticket} />
          </div>
          <div className="lg:col-span-2">
            <TicketChat ticket={ticket} initialMessages={messages} />
          </div>
        </div>
      </div>
    </div>
  )
}
