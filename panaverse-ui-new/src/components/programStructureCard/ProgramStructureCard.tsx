import { QuaterDetailType } from "@/data/quaterData";
import React from "react";

const ProgramStructureCard = ({
  quaterData,
}: {
  quaterData: QuaterDetailType;
}) => {
  return (
    <div className=" p-6  rounded-lg shadow bg-[#10002b] border border-[#10002b]/80 h-48 hover:bg-indigo-950 w-[700px] flex flex-col mx-8 mb-8 lg:mb-0">
      <h5 className="text-2xl font-bold tracking-tight text-white underline-transition mb-8">
        {"Quater " + quaterData.quater}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {quaterData.content}
      </p>
      {/* <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a> */}
    </div>
  );
};

export default ProgramStructureCard;
