import { MinusSmIcon, TrashIcon, XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { motion } from "framer-motion";
import { PlusSmIcon, ShoppingCartIcon } from "@heroicons/react/outline";
const Sidebar = ({ isOpen,setIsOpen, handleOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, duration: 1, ease: "ease", delay:1 }}
      className={
        isOpen
          ? "z-20  rounded-l-lg fixed w-[75vw] md:w-[50vw] lg:w-[25vw] xl:w-[20vw]  top-0 right-0 h-full shadow-lg bg-white transform transition-transform duration-300 translate-x-full"
          : "hidden"
      }
    >
      <div className="flex justify-between items-center py-6 px-3">
        <p className="text-3xl  font-bold">Cart</p>
        <XCircleIcon
          title="close cart"
          onClick={handleOpen}
          className=" cursor-pointer h-6 w-6 mr-9  hover:text-red-500 duration-300 "
        />
      </div>
      <div className="w-full">
        <h3 className=" text-2xl text-center font-bold px-4 py-2">Items</h3>
      </div>
      <hr className="w-1/2 mx-auto border-1 border-t-blue-500 pt-3 mt-2" />
      <div className="w-[90%] h-fit bg-gray-200 px-3 py-2 rounded-lg mx-auto mt-1">
        <div>
          <ol className="px-5">
            <li type="1" className="px-5 py-3">
              <div className="text-xl font-bold flex items-center space-x-5">
                <span className="text-gray-900 text-base ">Product Name</span>
                <span className="flex items-center px-2 py-4 space-x-3">
                  <MinusSmIcon className="carticon" />
                  <p>1</p>
                  <PlusSmIcon className="carticon" />
                </span>
              </div>
            </li>
            <li type="1" className="px-5 py-3">
              <div className="text-xl font-bold flex items-center space-x-5">
                <span className="text-gray-900 text-base ">Product Name</span>
                <span className="flex items-center px-2 py-4 space-x-3">
                  <MinusSmIcon className="carticon" />
                  <p>1</p>
                  <PlusSmIcon className="carticon" />
                </span>
              </div>
            </li>
            <li type="1" className="px-5 py-3">
              <div className="text-xl font-bold flex items-center space-x-5">
                <span className="text-gray-900 text-base ">Product Name</span>
                <span className="flex items-center px-2 py-4 space-x-3">
                  <MinusSmIcon className="carticon" />
                  <p>1</p>
                  <PlusSmIcon className="carticon" />
                </span>
              </div>
            </li>
          </ol>

          <div className="w-full h-fit fle text-center items-center space-y-4 space-x-3">
            <p className="text-2xl font-bold">Subtotal</p>
            <p className="text-2xl font-bold bg-blue-500 px-3 py-2 text-white rounded-lg">
              $0
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 space-y-3 md:space-y-0 place-content-center space-x-0 md:space-x-3 md:grid-cols-2 py-5 px-3">
        <button className="cartbutton flex items-center justify-evenly">
        <ShoppingCartIcon className="h-6 w-6"/>
        Checkout</button>
        <button className="cartbutton flex items-center justify-evenly">
        <TrashIcon className="h-6 w-6"/>
        Clear Cart</button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
