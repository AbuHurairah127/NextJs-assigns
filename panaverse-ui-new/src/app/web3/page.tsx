import React from "react";

const page = () => {
  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold w-fit text-center underline-transition my-8">
        Web 3.0 (The Third Iteration of Internet)
      </h1>
      <p className="w-[85vw] text-center">
        {" "}
        Web 3.0, also known as the &quot;Semantic Web&quot; is the next
        generation of the World Wide Web that aims to make the internet more
        intelligent, connected, and decentralized. <br /> Unlike the current Web
        2.0, which is focused on social networking, e-commerce, and
        user-generated content, Web 3.0 is expected to be more machine-readable
        and interoperable. This means that computers and devices will be able to
        understand and exchange data in a more automated and efficient manner.{" "}
        <br />
        Some of the key technologies and trends driving the development of Web
        3.0 include blockchain, artificial intelligence, the Internet of Things
        (IoT), decentralized applications (dApps), and decentralized finance
        (DeFi). <br /> Overall, Web 3.0 is envisioned as a more secure, private,
        and decentralized web that puts users in control of their data and
        digital identities.
      </p>{" "}
      <div className="w-[40vw] border-b border-b-black mt-8 mx-auto"></div>
      <div className="self-start p-5">
        <p className="w-[85vw] ">
          Web 3.0 is a complex and evolving concept that encompasses a range of
          technologies and trends. Here are some of the key technologies and
          their learning curves:
        </p>
        <ul className="list-disc p-8">
          <li>
            Blockchain: Blockchain is a distributed ledger technology that
            enables secure and transparent transactions between parties without
            the need for intermediaries. Learning blockchain technology involves
            understanding the basics of cryptography, consensus algorithms, and
            smart contracts. There are several blockchain platforms and
            languages to learn, including Ethereum, Solidity, and Hyperledger
            Fabric.
          </li>
          <li>
            Decentralized Applications (dApps): Decentralized applications are
            software programs that run on a decentralized network, such as a
            blockchain, instead of a centralized server. Developing dApps
            involves learning programming languages like JavaScript, as well as
            frameworks and libraries like React, Vue.js, and Truffle.
          </li>
          <li>
            Decentralized Finance (DeFi): Decentralized finance refers to a set
            of financial applications and services that operate on a
            decentralized network, such as a blockchain. Learning about DeFi
            involves understanding concepts like smart contracts, liquidity
            pools, yield farming, and decentralized exchanges (DEXs). Some
            popular DeFi platforms to explore include Uniswap, Aave, and
            Compound.
          </li>
          <li>
            Artificial Intelligence (AI): AI is a field of computer science that
            focuses on creating machines and software that can perform tasks
            that typically require human intelligence, such as speech
            recognition, natural language processing, and computer vision.
            Learning about AI involves understanding concepts like machine
            learning, neural networks, and deep learning, as well as programming
            languages like Python and frameworks like TensorFlow.
          </li>
          Internet of Things (IoT): The Internet of Things refers to the network
          of connected devices and sensors that collect and share data over the
          internet. Learning about IoT involves understanding the basics of
          hardware, firmware, and software development, as well as communication
          protocols like MQTT and CoAP.
        </ul>
      </div>
    </div>
  );
};

export default page;
