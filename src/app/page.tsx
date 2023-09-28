import { FormSignIn } from '@/components/SignIn/FormSignIn/Index'
import HeaderSignIn from '@/components/SignIn/HeaderSignIn'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-supermarket bg-cover bg-center">
      <div className="mx-2 flex w-[450px] flex-col space-y-3 rounded-md bg-white p-10 px-8 shadow-md">
        <HeaderSignIn>Login</HeaderSignIn>
        <FormSignIn />
      </div>
    </div>
  )
}
