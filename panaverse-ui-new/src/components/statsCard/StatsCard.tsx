import React from "react";
import teacher from "./../../assets/teachers.png";
import Image from "next/image";
import { StatsDataType } from "@/data/StatsCardData";
const StatsCard = ({ data }: { data: StatsDataType }) => {
  return (
    <div
      className="relative w-[350px] h-[250px] rounded-lg flex flex-col justify-evenly items-center overflow-hidden group hover:scale-110 transition-all duration-500"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 14px" }}
    >
      <div
        className="w-20 h-20 absolute z-0 top-8 left-24 transition-all duration-[1200ms] group-hover:scale-[8]"
        style={{
          borderRadius: data.borderRadius,
          backgroundColor: data.blobColor,
        }}
      ></div>
      <Image src={data.img} alt={""} className="z-10" />
      <h1 className="text-5xl font-medium z-10">{data.count}+</h1>
      <p className="z-10 text-lg">{data.title}</p>
    </div>
  );
};

export default StatsCard;
