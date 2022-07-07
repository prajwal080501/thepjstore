import React from 'react'
import Link from "next/link"
import { BasicData } from '../Data/Data'
const DropDown = ({isOpen, setIsOpen, handleMenu}) => {
    const handleClose = () => {
        setIsOpen(false)
    }
  return (
    // Dropdown header menu with tailwindcss
    <div className={isOpen ? 'flex flex-col space-y-6 lg:hidden top-24 z-10 shadow-md mr-5 right-0  mx-auto w-screen h-fit duration-300 items-center ease-linear absolute py-2 px-3   bg-gray-100' : 'hidden'}>
        <div className="py-2 px-3 flex items-center justify-items-center my-auto flex-col list-none text-center w-fit mx-auto space-y-8">
            <Link  href="/"><li className="link">Home</li></Link>
            <Link href="/about"><li className="link">About</li></Link>
            <Link href="/contact"><li className="link">Contact</li></Link>
            <Link href="/services"><li className="link">Services</li></Link>
        </div>
        <button className='text-center bg-blue-500 hover:bg-gray-800 hover:text-white duration-300 ease-linear transition-all text-white px-5 py-2 active:scale-95 shadow-md active:shadow-sm font-semibold self-center rounded-lg hover:shadow-md'>Login</button>

        <p className='text-normal font-bold text-gray-900 py-3'>{BasicData.title} 2022 &copy;</p>
    </div>
  )
}

export default DropDown