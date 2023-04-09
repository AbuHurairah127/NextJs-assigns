import React from "react";
import { motion } from "framer-motion";
const Web3Intro = () => {
  return (
    <div className="bg-[#10002b] py-8 flex items-center justify-center flex-col overflow-hidden">
      <motion.h1
        className="w-fit text-4xl font-bold text-white underline-transition text-center px-4"
        initial={{ translateY: 75, opacity: 0 }}
        whileInView={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.7 }}
      >
        Introduction to WEB 3.0
      </motion.h1>
      <div className="flex">
        <motion.p
          className="text-white p-5 text-center"
          initial={{ translateY: 75, opacity: 0 }}
          whileInView={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Web 3.0, also known as the decentralized web, is the next iteration of
          the internet that promises to revolutionize the way we interact and
          transact online. Unlike the current Web 2.0, which is largely
          centralized and controlled by a few dominant companies, Web3.0 is
          built on decentralized technologies such as blockchain and
          peer-to-peer networking, which enable a more democratic and
          transparent web experience. With Web3.0, users can take greater
          control over their data and online identities, engage in trustless
          transactions and interactions, and participate in decentralized
          applications and marketplaces. In this new paradigm, the internet
          becomes a more open, decentralized, and secure platform that empowers
          users and enables new forms of innovation and collaboration.
        </motion.p>
      </div>
    </div>
  );
};

export default Web3Intro;
