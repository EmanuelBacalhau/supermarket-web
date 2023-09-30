import { createContext } from 'react'

export interface UserProps {
  name: string
}

interface AuthContextData {
  user: UserProps
}

export const AuthContext = createContext({} as AuthContextData)
