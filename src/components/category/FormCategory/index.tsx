'use client'

import { FormEvent, useState } from 'react'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

import { toast } from 'react-toastify'
import { parseCookies } from 'nookies'
import { createCategory } from '@/api/services/category/createCategory'

export default function FormCategory() {
  const [name, setName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const cookies = parseCookies()

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const response = await createCategory(name, cookies[secret])
    setLoading(false)
    if (response?.status === 201) {
      toast.success('Create category with success!')
    }
  }

  return (
    <div className="container mt-14 flex w-[400px] flex-col items-center justify-center space-y-5">
      <span className="text-xl font-bold">Register Category</span>
      <form onSubmit={handleForm} className="flex w-full flex-col space-y-3">
        <Input
          after={false}
          type="text"
          required
          placeholder="Enter the category name"
          onChange={(e) => setName(e.target.value)}
        >
          Name
        </Input>
        <Button loading={loading} type="submit">
          Register
        </Button>
      </form>
    </div>
  )
}
