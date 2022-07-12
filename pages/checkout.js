import React from 'react'
import { MinusSmIcon, TrashIcon, XCircleIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion"
import { CreditCardIcon, PlusSmIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
const checkout = ({ cart,addToCart, subTotal, clearCart, removeFromCart }) => {
  return (
    <>
      <div className="mt-20">
        <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">Checkout
        </h1>
      </div>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
            </h2>
            <form className="justify-center w-full mx-auto" method="post" action>
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                      Name</label>
                    <input name="firstName" type="text" placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                      Name</label>
                    <input name="Last Name" type="text" placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                    <input name="Last Name" type="text" placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                    <input name="city" type="text" placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                      Postcode</label>
                    <input name="postcode" type="text" placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                    <span className="ml-2">Save this information for next time</span></label>
                </div>
                <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                  className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                  (Optional)</label><textarea name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4" placeholder="Notes for delivery"></textarea>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="rounded-l-lg relative  shadow-lg bg-white  duration-300 pb-5"
                  >
                    <div className="flex justify-between items-center py-6 px-3">
                      <p className="text-3xl  font-bold">Review Cart</p>
                    </div>
                    <div className="w-full">
                      <h3 className=" text-2xl text-center font-bold px-4 py-2">Items</h3>
                    </div>
                    <hr className="w-1/2 mx-auto border-1 border-t-blue-500 pt-3 mt-2" />
                    <div className="w-[90%] h-fit bg-gray-200 px-3 py-2 rounded-lg mx-auto mt-1">
                      <div>
                        <ol className="px-5">
                          {Object.keys(cart).length === 0 && (
                            <div clasasName="">
                              <p className="text-center mx-auto text-lg py-4 w-full">
                                Your cart is empty
                                <br />
                                <span clasaName="text-6xl font-bold">😞</span>
                              </p>
                            </div>
                          )}
                          {Object.keys(cart).map((k) => {
                            return (
                              <li key={k} type="1" className="px-5 py-3">
                                <div className="text-xl font-bold flex items-center space-x-5">
                                  <span className="text-gray-900 text-base ">
                                    {cart[k].name}
                                  </span>
                                  <span className="flex items-center px-2 py-4 space-x-3">
                                    <MinusSmIcon
                                      onClick={() => {
                                        removeFromCart(
                                          k,
                                          1,
                                          cart[k].price,
                                          cart[k].name,
                                          cart[k].size,
                                          cart[k].color,
                                          cart[k].variant
                                        );
                                      }}
                                      className="carticon"
                                    />
                                    <p>{cart[k].qty}</p>
                                    <PlusSmIcon
                                      onClick={() => {
                                        addToCart(
                                          k,
                                          1,
                                          cart[k].price,
                                          cart[k].name,
                                          cart[k].size,
                                          cart[k].color,
                                          cart[k].variant
                                        );
                                      }}
                                      className="carticon"
                                    />
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ol>

                        {/* <div className="w-full h-fit fle text-center items-center space-y-4 space-x-3">
                          <p className="text-2xl font-bold">Subtotal</p>
                          <p className="text-2xl font-bold bg-blue-500 px-3 py-2 text-white rounded-lg">
                          ₹{subTotal}
                          </p>
                        </div> */}
                      </div>
                    </div>
                    <div className="">
                      <Link href="/checkout">
                        <button className={"paybutton font-bold flex items-center justify-evenly"}>
                          <CreditCardIcon className="h-6 w-6 p-1" />
                          Pay ₹{subTotal}
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default checkout