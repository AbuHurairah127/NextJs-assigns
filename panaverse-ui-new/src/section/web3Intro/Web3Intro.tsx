import React from "react";
import process from "./../../assets/processbg.png";
import Image from "next/image";

const Web3Intro = () => {
  return (
    <div className="bg-[#10002b] py-8 flex items-center justify-center flex-col">
      <h1 className="w-fit text-4xl font-bold text-white underline-transition text-center px-4">
        Introduction to WEB 3.0
      </h1>
      <div className="flex">
        <p className="text-white p-5 text-center">
          Web 3.0, also known as the decentralized web, is the next iteration of
          the internet that promises to revolutionize the way we interact and
          transact online. Unlike the current Web 2.0, which is largely
          centralized and controlled by a few dominant companies, Web3.0 is
          built on decentralized technologies such as blockchain and
          peer-to-peer networking, which enable a more democratic and
          transparent web experience. With Web3.0, users can take greater
          control over their data and online identities, engage in trustless
          transactions and interactions, and participate in decentralized
          applications and marketplaces. In this new paradigm, the internet
          becomes a more open, decentralized, and secure platform that empowers
          users and enables new forms of innovation and collaboration.
        </p>
      </div>
    </div>
  );
};

export default Web3Intro;
