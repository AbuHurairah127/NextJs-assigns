import Image from "next/image";
import React from "react";
import metaverse from "./../../assets/metaverse.png";
const MetaverseIntro = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-8">
      <h1 className="text-4xl font-bold underline-transition w-fit">
        Metaverse
      </h1>
      <div className="mt-8 flex lg:h-screen flex-col lg:flex-row">
        <div className="lg:w-[50vw]">
          <Image src={metaverse} alt={""} className="w-10/12 lg:w-full" />
        </div>
        <div className="lg:w-[50vw] flex flex-col justify-center items-center lg:h-screen mt-8 lg:mt-0">
          <h1 className="text-5xl underline-transition w-fit mx-8">
            The Possibilities are Beyond Your Imagination
          </h1>
          <p className="p-5 lg:p-8">
            The metaverse refers to a virtual universe of interconnected,
            immersive, and interactive 3D environments that are created and
            sustained by advanced technologies such as virtual reality (VR),
            augmented reality (AR), blockchain, and artificial intelligence
            (AI). It is a concept that has been popularized by science fiction
            and is rapidly becoming a reality as advancements in technology
            continue to accelerate. The metaverse has the potential to
            revolutionize the way we work, socialize, learn, and play, by
            offering a seamless and persistent virtual world where users can
            engage with each other and digital content in unprecedented ways.
            From gaming and entertainment to education, healthcare, and
            commerce, the metaverse is poised to transform every aspect of our
            lives and create new opportunities for innovation, creativity, and
            collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetaverseIntro;
