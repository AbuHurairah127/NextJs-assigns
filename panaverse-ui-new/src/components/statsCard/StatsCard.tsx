import React from "react";
import teacher from "./../../assets/teachers.png";
import Image from "next/image";
const StatsCard = () => {
  return (
    <div
      className="relative w-[350px] h-[250px] rounded-lg flex flex-col justify-evenly items-center overflow-hidden group"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 14px" }}
    >
      <div
        className="bg-[#FF8701] w-20 h-20 absolute z-0 top-8 left-24 transition-all duration-[1200ms] group-hover:scale-[8]"
        style={{ borderRadius: "36% 64% 64% 36% / 39% 38% 62% 61% " }}
      ></div>
      <Image src={teacher} alt={""} className="z-10" />
      <h1 className="text-5xl font-medium z-10">15+</h1>
      <p className="z-10 text-lg">Our Skilled Teachers</p>
    </div>
  );
};

export default StatsCard;
