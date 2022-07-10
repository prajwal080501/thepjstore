import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { BasicData } from "../Data/Data";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";
const Header = ({isOpen, setIsOpen, handleOpen}) => {

  return (
    <>
      <header className="z-10 sticky top-0 bg-white text-gray-600 body-font shadow-md">
        <div className="container xs:mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href="/">
              <span className="cursor-pointer ml-3 text-xl font-bold">
                The Store
              </span>
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
          </nav>
          <button className="inline-flex hover:bg-blue-600 items-center bg-blue-500 border-0 py-1 px-3 text-white focus:outline-none duration-300 ease-linear shadow-md active:shadow-sm active:scale-90 rounded text-base mt-4 md:mt-0">
            Button
          </button>
          <div title="cart" className="md:absolute mt-5 md:right-10 justify-items-center px-3 py-2 flex items-center my-auto  mb-4">
            <ShoppingBagIcon onClick={handleOpen} className="h-6 w-6 text-gray-900 hover:text-blue-500 duration-300 ease-linear cursor-pointer hover:scale-110" />
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOpen={handleOpen} />

    </>
  );
};

export default Header;
