"use client";
import Lottie from "lottie-react";
import React from "react";
import earn from "../../assets/earn-while-you-learn.json";
import { motion } from "framer-motion";
const LeftSection = () => {
  return (
    <motion.div
      initial={{ translateX: -500, opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      {" "}
      <Lottie animationData={earn} loop={true} />{" "}
    </motion.div>
  );
};

export default LeftSection;
