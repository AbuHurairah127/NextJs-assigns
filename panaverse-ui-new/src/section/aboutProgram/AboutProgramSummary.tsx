import React from "react";
import LeftSection from "./LeftSection";
const AboutProgramSummary = () => {
  return (
    <div className="p-5 bg-[#10002b]">
      <div className="flex justify-center">
        <span className="text-4xl text-white font-bold text-center relative underline-transition">
          Get a glimpse into our program
        </span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="lg:w-[50vw]">
          <LeftSection />{" "}
        </div>
        <div className="lg:w-[50vw] relative">
          <span className="text-[12vw] absolute -top-28 -left-10 text-[#240046] hidden lg:block">
            &#8220;
          </span>
          <q className="text-white text-lg w-[80%]">
            Students in this brand-new type of curriculum will learn how to make
            money and increase exports in the classroom and will be able to do
            so within six months of the program's start. It resembles a hybrid
            of a business venture and an educational project. With a unique
            blend of business and educational elements. Students will begin
            applying these skills within six months of the program's start
          </q>
        </div>
      </div>
    </div>
  );
};

export default AboutProgramSummary;
