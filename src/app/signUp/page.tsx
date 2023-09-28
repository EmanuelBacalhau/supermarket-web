import HeaderAuth from '@/components/auth/HeaderAuth'
import { FormSignUp } from '@/components/auth/SignUp/FormSignUp'

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-supermarket bg-cover bg-center">
      <div className="pt my-2 flex w-[450px] flex-col space-y-3 rounded-md bg-white p-10 px-8 shadow-md max-lg:w-[400px] max-md:w-[350px] max-sm:w-[300px]">
        <HeaderAuth>Register</HeaderAuth>
        <FormSignUp />
      </div>
    </div>
  )
}
