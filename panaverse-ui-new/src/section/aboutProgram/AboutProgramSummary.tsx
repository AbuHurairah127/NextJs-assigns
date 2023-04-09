"use client";
import React from "react";
import LeftSection from "./LeftSection";
import Link from "next/link";
import { motion } from "framer-motion";
const AboutProgramSummary = () => {
  return (
    <div className="p-5 bg-[#10002b]">
      <div className="flex justify-center overflow-hidden">
        <motion.span
          className="text-4xl text-white font-bold text-center underline-transition my-5"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
        >
          Get a glimpse into our program
        </motion.span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="lg:w-[50vw] overflow-hidden">
          <LeftSection />{" "}
        </div>
        <div className="lg:ml-10 overflow-hidden">
          <div className="lg:w-[50vw] relative">
            <span className="text-[12vw] absolute -top-28 -left-10 text-[#240046] hidden lg:block">
              &#8220;
            </span>
            <motion.p
              className="text-white text-lg lg:w-[40vw]"
              initial={{ translateY: 150, opacity: 0 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.95 }}
            >
              Students in this brand-new type of curriculum will learn how to
              make money and increase exports in the classroom and will be able
              to do so within six months of the program&apos;s start. It
              resembles a hybrid of a business venture and an educational
              project. With a unique blend of business and educational elements.
              Students will begin applying these skills within six months of the
              program&apos;s start.
            </motion.p>
          </div>
          <motion.button
            className="button mt-12"
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href={"/programStructure"}>Read More</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AboutProgramSummary;
