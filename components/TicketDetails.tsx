import { formatDate, getStatusColor, getPriorityColor, getDepartmentColor } from '@/lib/utils'
import type { DBTicket } from '@/types'

interface TicketDetailsProps {
  ticket: DBTicket
}

export default function TicketDetails({ ticket }: TicketDetailsProps) {
  if (!ticket) {
    return (
      <div className="card">
        <p>Loading ticket details...</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Detail Tiket</h2>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-gray-500 mb-1">Ticket ID</div>
          <div className="font-mono font-bold text-lg">
            {ticket.ticket_number}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-1">Status</div>
          <span className={`badge ${getStatusColor(ticket.status)}`}>
            {ticket.status}
          </span>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-1">Prioritas</div>
          <span className={`badge ${getPriorityColor(ticket.priority)}`}>
            {ticket.priority}
          </span>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-1">Kategori</div>
          <span className={`badge ${getDepartmentColor(ticket.category)}`}>
            {ticket.category}
          </span>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-1">Subjek</div>
          <div className="font-medium">{ticket.subject}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-1">Nama Mahasiswa</div>
          <div>{ticket.student_name}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-1">Email</div>
          <div className="text-sm">{ticket.student_email}</div>
        </div>

        {ticket.student_phone && (
          <div>
            <div className="text-sm text-gray-500 mb-1">Telepon</div>
            <div className="text-sm">{ticket.student_phone}</div>
          </div>
        )}

        <div>
          <div className="text-sm text-gray-500 mb-1">Dibuat</div>
          <div className="text-sm">{formatDate(ticket.created_at)}</div>
        </div>

        {ticket.assigned_name && (
          <div>
            <div className="text-sm text-gray-500 mb-1">Ditangani Oleh</div>
            <div className="text-sm font-medium">
              {ticket.assigned_name}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-sm text-gray-500 mb-2">Deskripsi Masalah</div>
        <div className="text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
          {ticket.description}
        </div>
      </div>
    </div>
  )
}
