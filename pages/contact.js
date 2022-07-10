import React from "react";
import { motion } from "framer-motion";
const contact = () => {
  return (
    <section className="text-gray-600 body-font z-0 relative">
      <div className="absolute inset-0 bg-gray-300">
        <motion.iframe
        initial={{  zoom: 0, x: -400}}
        animate={{  zoom: 1, x: 0}}
        transition={{ duration:1, ease:'easeInOut'}}
        whileHover={{ scale: 1.3 }}
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360419083!2d73.79292741424759!3d18.52460355363665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1657353199873!5m2!1sen!2sin" 
         
          frameBorder="0"
          className="w-full h-full opacity-40 contrast-125 grayscale"
        ></motion.iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <motion.div 
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 , ease:'easeInOut'}}
        className="lg:w-1/3 md:w-1/2 focus:border-2 focus-visible:border-blue-500 bg-white rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-2xl">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-The PJ Store Mumbai, Main St 12
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-white rounded border border-gray-300 focus:shadow-lg focus:border-blue-500 duration-300  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-all  ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:shadow-lg focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
              placeholder="Enter your message"

            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default contact;
