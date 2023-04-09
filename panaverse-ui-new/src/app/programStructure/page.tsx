import ProgramStructureCard from "@/components/programStructureCard/ProgramStructureCard";
import { firstThree, web3_metaverse } from "@/data/quaterData";
import React from "react";

const ProgramStructure = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center">
      <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
        Program Structure
      </h1>
      <p className="w-[75vw] text-center">
        A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting
        Ready for the Next Generation of the Internet Consolidating Web 3.0,
        Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
        Computing/IoT Technologies
      </p>
      <div className="w-[40vw] border-b border-b-black mt-8 mx-auto"></div>
      <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
        Common Part
      </h1>

      <p className="px-5 self-start mb-5 ">
        Every participant of the program will start by completing the following
        three core courses:
      </p>
      <div className="w-[95vw] flex justify-between mb-8 flex-wrap lg:flex-nowrap">
        {firstThree.map((quaterData, i) => (
          <ProgramStructureCard quaterData={quaterData} key={i} />
        ))}{" "}
      </div>
      <div className="w-[40vw] border-b border-b-black mt-8 mx-auto"></div>
      <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
        Specialized Tracks
      </h1>
      <p>
        After completing the first two quarters the participants will select one
        or more specializations consisting of two courses each:
      </p>
      <div className="w-[40vw] border-b border-b-black mt-8 mx-auto"></div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
          WEB 3.0 AND METAVERSE
        </h1>
        <p className="self-start mx-8 text-center mb-8">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
        <div className="flex justify-between w-[95vw] mb-8 flex-wrap lg:flex-nowrap">
          {web3_metaverse.map((quaterData, i) => (
            <ProgramStructureCard key={i} quaterData={quaterData} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
          WEB 3.0 AND METAVERSE
        </h1>
        <p className="self-start mx-8 text-center mb-8">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
        <div className="flex justify-between w-[95vw] mb-8 flex-wrap lg:flex-nowrap">
          {web3_metaverse.map((quaterData, i) => (
            <ProgramStructureCard key={i} quaterData={quaterData} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
          WEB 3.0 AND METAVERSE
        </h1>
        <p className="self-start mx-8 text-center mb-8">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
        <div className="flex justify-between w-[95vw] mb-8 flex-wrap lg:flex-nowrap">
          {web3_metaverse.map((quaterData, i) => (
            <ProgramStructureCard key={i} quaterData={quaterData} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
          WEB 3.0 AND METAVERSE
        </h1>
        <p className="self-start mx-8 text-center mb-8">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
        <div className="flex justify-between w-[95vw] mb-8 flex-wrap lg:flex-nowrap">
          {web3_metaverse.map((quaterData, i) => (
            <ProgramStructureCard key={i} quaterData={quaterData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramStructure;
