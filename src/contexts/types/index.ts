import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Dispatch, SetStateAction } from 'react'

export type UserProps = {
  id: string
  name: string
}

export type SignInProps = {
  email: string
  password: string
  router: AppRouterInstance
  setUser: Dispatch<SetStateAction<UserProps>>
}

export type SignUpProps = {
  name: string
  cpf: string
  birthday: string
  email: string
  password: string
}

export interface AuthContextData {
  user: UserProps
  isAuthenticated: boolean
  signIn: (credentials: SignInProps) => Promise<void>
  signUp: (credentials: SignUpProps) => Promise<void>
  signOut: () => void
}
