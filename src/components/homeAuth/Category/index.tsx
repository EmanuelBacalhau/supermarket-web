import { Trash2 } from 'lucide-react'
import React from 'react'

interface CategoryProps {
  id: string
  name: string
  handleDeleteCategory: (id: string) => Promise<void>
}

export default function Category(data: CategoryProps) {
  return (
    <div className="flex h-10 w-48 items-center justify-between rounded-md border px-2 py-2 shadow-md">
      <span>{data.name}</span>
      <button onClick={() => data.handleDeleteCategory(data.id)}>
        <Trash2 className="hover:text-red-600" />
      </button>
    </div>
  )
}
