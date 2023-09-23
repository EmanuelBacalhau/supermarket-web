import { createContext } from 'react'

export type UserProps = {
  id: string
}

export type SignProps = {
  email: string
  password: string
}

interface AuthContextData {
  user: UserProps
  isAuthenticated: boolean
  signIn: (credentials: SignProps) => Promise<void>
  signUp: () => void
}

export const AuthContext = createContext({} as AuthContextData)
