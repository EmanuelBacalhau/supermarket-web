import { destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'

export function useSignOut(context = undefined) {
  try {
    const router = useRouter()
    const SECRET = process.env.NEXT_PUBLIC_SECRET
    destroyCookie(context, SECRET as string)
    router.push('/')
  } catch (error) {
    console.log('Erro ao deslogar')
  }
}
