import React, { useState } from 'react'
import Link from "next/link"
import { MenuIcon } from '@heroicons/react/solid'
import DropDown from './DropDown'
const Header = () => {
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="header">
        <Link href="/">
          <p className="text-3xl font-bold px-2 py-3">The PJ Store</p>
        </Link>
        <div className='md:hidden w-fit float-right flex items-center p-4'>
          <MenuIcon onClick={handleMenu} className="h-10 w-10 cursor-pointer" />
        </div>
        <DropDown isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="hidden lg:flex list-none space-x-5 items-center ">
          <li className="link">Home</li>
          <li className="link">About</li>
          <li className="link">Contact</li>
          <li className="link">Services</li>
        </div>
      </div>
    </>


  )
}

export default Header