import React from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import useWindowSize from 'react'

const Order = ({ subTotal, cart }) => {
  return (

    <section className="text-gray-600 body-font overflow-hidden">
      <Confetti
        className='w-full h-full'
        numberOfPieces={200}
        recycle={false}

      />
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, duration: 1, ease: "easeIn", delay: 1 }}
      >
        <h2 className='text-2xl lg:text-5xl font-bold text-center px-3 py-8 animate-pulse'>
          🎉 Your order has been placed successfully! 🎉
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, duration: 1, ease: "easeIn", delay: 1 }}
        className="container px-5 py-14 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">The Store</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID - #122435</h1>
            <div className="flex mb-4 items-center space-x-24">
              <a className="flex-grow   border-indigo-500 py-2 text-lg px-1">Description</a>
              <a className="flex-grow border-gray-300 py-2 text-lg px-1">Reviews</a>
              <a className="flex-grow border-gray-300 py-2 text-lg px-1">Details</a>
            </div>
            {Object.keys(cart).map((k) => (
              <>
                <div kay={k} className="flex border-t border-gray-200 py-2 mb-10">
                  <span className="text-gray-500">{cart[k].name}</span>
                  <span className="ml-auto text-gray-900">{cart[k].qty}</span>

                  <span className="ml-auto text-gray-900">₹{cart[k].price}</span>
                </div></>

            ))}


            <div className="flex">
              <div className='flex space-x-4'>
                <span className="title-font text-2xl text-gray-900">Subtotal:</span>

                <span className="title-font font-medium text-2xl text-gray-900"> ₹{subTotal}</span>
              </div>
              <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Track Order</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </motion.div>
    </section>
  )
}

export default Order