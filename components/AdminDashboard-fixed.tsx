'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatDate, getStatusColor, getPriorityColor, getDepartmentColor } from '@/lib/utils'
import type { DBTicket, DBUser } from '@/types'

interface AdminDashboardProps {
  tickets: DBTicket[]
