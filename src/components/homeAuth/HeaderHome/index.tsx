import { LogoHome } from '../LogoHome'
import { NavigationHome } from '../NavigationHome'

export default function HeaderHome() {
  return (
    <div className="bg-yellow-400 py-5">
      <div className="container flex items-center justify-between max-[424px]:flex-col max-[424px]:gap-4">
        <LogoHome />
        <NavigationHome />
      </div>
    </div>
  )
}
