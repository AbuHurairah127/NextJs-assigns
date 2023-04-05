import React from "react";
const Hero = () => {
  return (
    <div className="min-h-screen w-screen bg-hero-pattern bg-cover bg-center flex px-20">
      <div className="w-[50vw] flex flex-col justify-center gap-10 relative">
        <h1 className="text-white text-4xl font-bold tracking-wide">
          Start Your Developer Journey in the Web 3.0 and Virtual Universe
          Arena.
        </h1>
        <div className="bg-white/30 w-[60%] backdrop-blur-md p-5 rounded-xl border h-48 overflow-visible">
          <h1 className="text-white text-4xl font-bold tracking-widest">
            Metaverse
          </h1>
          <h1 className="text-white text-4xl font-semibold tracking-widest absolute right-32 top-16">
            Web 3.0
          </h1>
          <p className="text-white absolute top-28 left-32 bg-[#231942] p-5   rounded-2xl z-50">
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet. Explore the new generation of internet
            with Panaverse.
          </p>
        </div>
      </div>
      <div className="relative">
        <h1 className="stroke text-[10vw] absolute -left-56 top-72 cursor-pointer transition-all duration-1000 hover:scale-125 z-0">
          Panaverse
        </h1>
      </div>
    </div>
  );
};

export default Hero;
