import logoSupermarket from '../../../../public/supermarket.svg'

import Image from 'next/image'
import Link from 'next/link'

export function LogoHome() {
  return (
    <div>
      <Link href={'/dashboard'}>
        <Image
          src={logoSupermarket}
          alt="logo-supermarket"
          className="w-[250px]"
        />
      </Link>
    </div>
  )
}
