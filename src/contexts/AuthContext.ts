import { createContext } from 'react'

export type UserProps = {
  id: string
}

export type SignInProps = {
  email: string
  password: string
}

export type SignUpProps = {
  name: string
  cpf: string
  birthday: string
  email: string
  password: string
}

interface AuthContextData {
  user: UserProps
  isAuthenticated: boolean
  signIn: (credentials: SignInProps) => Promise<void>
  signUp: (credentials: SignUpProps) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)
