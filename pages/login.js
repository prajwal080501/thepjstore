import React from 'react'
import {motion} from 'framer-motion'
import Link from "next/link"
import Head from 'next/head'
const Login = () => {
  return (
    <motion.section 
    initial={{opacity:0, y : -100}}
    animate={{opacity:1, y : 0}}
    transition={{ duration:1, ease:'easeInOut'}}
    className="h-full -mt-6 gradient-form bg-gray-200 md:h-screen rounded-lg">
      <Head>
        <title>Login | The Store</title>
      </Head>
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="">
                      <h4 className="text-4xl font-bold mt-1 mb-12 pb-1 pt-6 md:pt-0">The Store</h4>
                    </div>
                    <form>
                      <p className="mb-4 font-medium text-2xl text-center">Login</p>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-blue-500 hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 active:scale-95 active:shadow-none ease-in-out w-full mb-3"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"

                        >
                          Log in
                        </button>
                        <Link className="text-gray-500" href={'/forgot'}>Forgot password?</Link>
                      </div>
                      <div className="flex items-center hover:text-blue-500  duration-300 justify-between pb-6">
                        <Link className="mb-0 mr-2 " href={'/signup'}>Don&apos;t have an account?</Link>
                        
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"

                >
                  <div className="text-white rounded-lg shadow-md px-4 py-6 md:p-12  bg-blue-500 h-full w-full flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Login