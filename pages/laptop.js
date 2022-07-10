import Image from 'next/image';
import React from 'react'

const Laptop = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-200">
    <div className="max-w-screen md:max-w-[80vw]  mx-auto items-start py-4 px-5">
      <p className="text-5xl pt-10 font-bold text-center md:text-left">Laptops</p>
    </div>
    <div className="max-w-[70vw] mx-auto h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center
    ">


        <div className="w-[90%] px-3 py-4 h-fit bg-white rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out hover:shadow-2xl cursor-pointer mt-3 mb-10">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-top w-full h-full block"
              src="https://shorturl.at/BGLWY"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 xs:text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium font-bold">
              The Catalyzer
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="w-[90%] px-3 py-4 h-fit bg-white rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out hover:shadow-2xl cursor-pointer mt-3">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-top w-full h-full block"
              src="https://shorturl.at/BGLWY"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 xs:text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium  font-bold">
              The Catalyzer
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="w-[90%] px-3 py-4 h-fit bg-white rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out hover:shadow-2xl cursor-pointer mt-3">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-top w-full h-full block"
              src="https://shorturl.at/BGLWY"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 xs:text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium  font-bold">
              The Catalyzer
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="w-[90%] px-3 py-4 h-fit bg-white rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out hover:shadow-2xl cursor-pointer mt-3">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-top w-full h-full block"
              src="https://shorturl.at/BGLWY"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 xs:text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium  font-bold">
              The Catalyzer
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="w-[90%] px-3 py-4 h-fit bg-white rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out hover:shadow-2xl cursor-pointer mt-3 mb-10">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-top w-full h-full block"
              src="https://shorturl.at/BGLWY"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 xs:text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium  font-bold">
              The Catalyzer
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Laptop