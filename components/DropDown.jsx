import React from 'react'
import Link from "next/link"
const DropDown = ({isOpen, setIsOpen}) => {
    const handleClose = () => {
        setIsOpen(false)
    }
  return (
    // Dropdown header menu with tailwindcss
    <div className={isOpen ? 'flex flex-col space-y-6 lg:hidden top-20 z-10 rounded-xl shadow-md mr-5 right-0 w-[50vw] mx-auto h-fit duration-300 items-center ease-linear absolute py-2 px-3   bg-orange-500' : 'hidden'}>
        <div className="py-2 px-3 flex items-center justify-items-center my-auto flex-col list-none text-center w-fit mx-auto space-y-8">
            <Link onClick={() => handleClose()} href="/"><li className="link">Home</li></Link>
            <Link href="/about"><li className="link">About</li></Link>
            <Link href="/contact"><li className="link">Contact</li></Link>
            <Link href="/services"><li className="link">Services</li></Link>
        </div>
        <button className='text-center bg-white hover:bg-gray-800 hover:text-white duration-300 ease-linear transition-all text-black px-2 py-2 font-semibold self-center rounded-lg hover:shadow-md'>Login</button>

        <p className='text-xs font-bold text-gray-900 py-3'>The PJ Store Copyright 2022</p>
    </div>
  )
}

export default DropDown