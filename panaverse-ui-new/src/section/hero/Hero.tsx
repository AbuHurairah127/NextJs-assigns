"use client";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="min-h-[90vh] md:min-h-[50vh] lg:min-h-screen w-screen bg-hero-pattern bg-cover bg-center flex flex-col lg:flex-row px-5 lg:px-20">
      <div className="lg:w-[50vw] flex flex-col justify-center gap-10 relative mt-10">
        <motion.h1
          className="text-white text-4xl font-bold tracking-wide underline-transition"
          initial={{ translateY: "-50", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Start Your Developer Journey in the Web 3.0 and Virtual Universe
          Arena.
        </motion.h1>
        <motion.div
          className="md:mx-auto lg:mx-0 bg-white/30 md:w-[60%] backdrop-blur-md p-5 rounded-xl border h-48 overflow-visible"
          // initial={{ translateX: -200 }}
          // animate={{ translateX: 0 }}
          // transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-white text-4xl font-bold tracking-widest">
            Metaverse
          </h1>
          <h1 className="text-white text-4xl font-semibold tracking-widest absolute right-12 lg:right-32 top-16">
            Web 3.0
          </h1>
          <motion.p
            className="text-white absolute top-28 left-16 lg:left-32 bg-[#231942] p-5 rounded-2xl z-50"
            initial={{ translateX: 200 }}
            animate={{ translateX: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet. Explore the new generation of internet
            with Panaverse.
          </motion.p>
        </motion.div>
      </div>
      <div className="relative hidden lg:block">
        <h1 className="stroke text-[10vw] opacity-40 absolute lg:-left-56 top-72 cursor-pointer transition-all duration-1000 hover:opacity-100 hover:scale-125 z-0">
          Panaverse
        </h1>
      </div>
    </div>
  );
};

export default Hero;
