"use client";
import Lottie from "lottie-react";
import React from "react";
import earn from "../../assets/earn-while-you-learn.json";
const LeftSection = () => {
  return (
    <>
      {" "}
      <Lottie animationData={earn} loop={true} />{" "}
    </>
  );
};

export default LeftSection;
