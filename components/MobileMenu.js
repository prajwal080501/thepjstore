import React from 'react'
import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/solid'
const MobileMenu = ({ menuOpen, handleOpen }) => {
    return (
        <div className={menuOpen ? 'w-[98vw] h-fit  mx-auto pb-4  md:hidden z-10' : 'hidden'}>
            <nav className=" flex flex-col items-center space-y-8 ">
                <Link href="/">
                    <a className="cursor-pointer hover:text-blue-500 mr-5">Home</a>
                </Link>
                <Link href="/smartphone">
                    <p className="cursor-pointer hover:text-blue-500 mr-5">
                        Smartphones
                    </p>
                </Link>
                <Link href="/laptop">
                    <p className="cursor-pointer hover:text-blue-500 mr-5">Laptops</p>
                </Link>

                <Link href="/contact">
                    <p className="cursor-pointer hover:text-blue-500 mr-5">
                        Contact
                    </p>
                </Link>
                {/* <Link href="/">
              <p className="cursor-pointer hover:text-blue-500 mr-5">
                Services
              </p>
            </Link> */}
                <div className=" w-full flex items-center justify-center">
                    <button className="inline-flex hover:bg-blue-600 items-center bg-blue-500 border-0 py-1 px-3 text-white focus:outline-none duration-300 ease-linear shadow-md active:shadow-sm active:scale-90 rounded text-base md:mt-0">
                        Button
                    </button>
                        <ShoppingBagIcon onClick={handleOpen} className="h-6 w-6 ml-8 text-gray-900 align-middle hover:text-blue-500 duration-300 ease-linear cursor-pointer hover:scale-110" />
                </div>
            </nav>
        </div>
    )
}

export default MobileMenu