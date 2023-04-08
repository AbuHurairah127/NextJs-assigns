import Image from "next/image";
import React from "react";
import ziaKhan from "./../../assets/ziaKhan.png";
import { LeaderType } from "@/data/LeadersData";
const LeaderCard = ({ leader }: { leader: LeaderType }) => {
  return (
    <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-[#10002B]/80 bg-[#10002B] my-8 md:h-64">
      <Image
        className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-white"
        src={leader.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {leader.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {leader.desc}
        </p>
      </div>
    </div>
  );
};

export default LeaderCard;
