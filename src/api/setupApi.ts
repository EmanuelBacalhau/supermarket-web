import axios, { AxiosError } from 'axios'

import { parseCookies } from 'nookies'
import { AuthTokenError } from './errors/AuthTokenError'
import { useSignUp } from '@/contexts/signUp'

export function setupApi(context = undefined) {
  const cookies = parseCookies(context)

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const SECRET = process.env.NEXT_PUBLIC_SECRET

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${cookies[SECRET as string]}`,
    },
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (typeof window === undefined) {
          useSignUp()
        } else {
          return Promise.reject(new AuthTokenError())
        }
      }

      return Promise.reject(error)
    },
  )

  return api
}
