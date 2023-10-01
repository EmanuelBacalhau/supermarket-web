'use client'

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { InputFile } from '../InputFile'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

import { toast } from 'react-toastify'
import { parseCookies } from 'nookies'
import { createProduct } from '@/api/services/product/createProduct'
import { getCategories } from '@/api/services/category/getCategories'

interface CategoryProps {
  id: string
  name: string
}

interface FormProductProps {
  categoryList: CategoryProps[]
}

export function FormProduct({ categoryList }: FormProductProps) {
  const cookies = parseCookies()
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [barCode, setBarCode] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [manufacturingDate, setManufacturingDate] = useState<string>('')
  const [expirationDate, setExpirationDate] = useState<string>('')
  const [categoryId, setCategoryId] = useState<string>(
    categoryList[0]?.id || '',
  )
  const [image, setImage] = useState<File>()

  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const [categories, setCategories] = useState<CategoryProps[]>(categoryList)

  useEffect(() => {
    const getData = async () => {
      const secret = process.env.NEXT_PUBLIC_SECRET as string
      const cookies = parseCookies()

      const response = await getCategories(cookies[secret])
      setCategories(response)
    }

    getData()
  }, [])

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (!Number(price)) {
      setLoading(false)
      return toast.error('Enter a valid price!')
    }

    const manufacturing = new Date(manufacturingDate)
    const expiration = new Date(expirationDate)

    if (manufacturing > expiration) {
      setLoading(false)
      return toast.error(
        'The expiration date must be greater than the manufacuting date!',
      )
    }

    const data = new FormData()

    data.append('image', image as File)
    data.append('name', name)
    data.append('description', description)
    data.append('barCode', barCode)
    data.append('price', price)
    data.append('amount', amount)
    data.append('categoryId', categoryId)
    data.append('manufacturingDate', manufacturingDate)
    data.append('expirationDate', expirationDate)

    const secret = process.env.NEXT_PUBLIC_SECRET as string

    const response = await createProduct(data, cookies[secret])

    if (response?.status === 201) {
      toast.success('Created product with success!')
      setName('')
      setDescription('')
      setAmount('')
      setBarCode('')
      setCategoryId('')
      setExpirationDate('')
      setPrice('')
      setManufacturingDate('')
      setImageUrl('')
    }

    setLoading(false)
  }

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const image = event.target.files[0]

      if (image) {
        if (image.type === 'image/jpeg' || image.type === 'image/png') {
          setImage(image)
          setImageUrl(URL.createObjectURL(image))
        } else {
          toast.error('Invalid image type')
        }
      }
    }
  }

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(event.target.value)
  }
  return (
    <div className="container flex flex-col gap-4">
      <span className="my-3 text-center text-xl font-bold">
        Register product
      </span>
      <form
        onSubmit={handleForm}
        className="grid grid-cols-2 gap-4 pb-3 max-[660px]:grid-cols-1"
      >
        <InputFile imageUrl={imageUrl} handleFile={handleFile} />
        <div className="flex flex-col gap-3">
          <Input
            value={name}
            after={true}
            type="text"
            required
            placeholder="Enter the name"
            onChange={(e) => setName(e.target.value)}
          >
            Name
          </Input>
          <Input
            value={description}
            after={true}
            type="text"
            required
            placeholder="Enter the description"
            onChange={(e) => setDescription(e.target.value)}
          >
            Description
          </Input>
          <Input
            value={barCode}
            after={true}
            type="text"
            required
            placeholder="Enter the bar code"
            minLength={10}
            data-mask="00000.00000.0000.000000"
            onChange={(e) => setBarCode(e.target.value)}
          >
            Bar code
          </Input>
          <select
            value={categoryId}
            required
            onChange={handleCategory}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-sm"
            placeholder="Select category"
          >
            {categories?.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              )
            })}
          </select>
          <div className="flex gap-2 max-[284px]:flex-col">
            <Input
              value={price}
              after={true}
              type="text"
              required
              placeholder="Enter the price"
              onChange={(e) => setPrice(e.target.value)}
            >
              Price
            </Input>
            <Input
              value={amount}
              after={true}
              type="number"
              required
              placeholder="Enter the amount"
              onChange={(e) => setAmount(e.target.value)}
            >
              Amount
            </Input>
          </div>

          <div className="flex gap-2 max-[284px]:flex-col">
            <Input
              value={manufacturingDate}
              after={true}
              type="date"
              required
              placeholder="00/00/0000"
              onChange={(e) => setManufacturingDate(e.target.value)}
            >
              Manufacturing date
            </Input>
            <Input
              value={expirationDate}
              after={true}
              type="date"
              required
              placeholder="00/00/0000"
              onChange={(e) => setExpirationDate(e.target.value)}
            >
              Expiration date
            </Input>
          </div>
          <Button loading={loading} type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  )
}
