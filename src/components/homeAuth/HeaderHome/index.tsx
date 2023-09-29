import { LogoHome } from '../LogoHome'
import { NavigationHome } from '../NavigationHome'

export default function HeaderHome() {
  return (
    <div className="flex items-center justify-between bg-yellow-400 px-12 py-5">
      <LogoHome />
      <NavigationHome />
    </div>
  )
}
