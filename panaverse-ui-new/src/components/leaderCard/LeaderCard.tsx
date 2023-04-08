import Image from "next/image";
import React from "react";
import ziaKhan from "./../../assets/ziaKhan.png";
const LeaderCard = () => {
  return (
    <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-[#10002B]/80 bg-[#10002B] ">
      <Image
        className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={ziaKhan}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Zia Khan
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise techCeo Panacloud, COO Presidential
          Initiative for Artificial Intelligence and Cloud Computing Web 3,
          DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomistnology
          acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default LeaderCard;
