'use client'

import { FormEvent, useState } from 'react'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { categoryService } from '@/api/services/category/categoryService'

import { toast } from 'react-toastify'
import { parseCookies } from 'nookies'

export default function FormCategory() {
  const [name, setName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const cookies = parseCookies()

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const response = await categoryService.create(name, cookies[secret])
    setLoading(false)
    if (response?.status) {
      toast.success('Create category with success!')
    }
  }

  return (
    <div className="container mt-32 flex max-w-md flex-col items-center justify-center space-y-5">
      <span className="text-xl font-bold">Register Category</span>
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
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
