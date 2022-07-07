import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import DropDown from "./DropDown";
import { motion } from "framer-motion";
import { BasicData } from "../Data/Data";
const Header = () => {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-white text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">The Store</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <p className="mr-5 hover:text-gray-900">Home</p>
            </Link>
            <Link href="/about">
              <p className="mr-5 hover:text-gray-900">About</p>
            </Link>
            <Link href="/">
              <p className="mr-5 hover:text-gray-900">Contact</p>
            </Link>
            <Link href="/">
              <p className="mr-5 hover:text-gray-900">Services</p>
            </Link>
          </nav>
          <button className="inline-flex hover:bg-indigo-500 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-white duration-300 ease-linear shadow-md active:shadow-sm active:scale-90 rounded text-base mt-4 md:mt-0">
            Button
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
