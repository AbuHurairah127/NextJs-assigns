import AboutProgramSummary from "@/section/aboutProgram/AboutProgramSummary";
import Hero from "@/section/hero/Hero";
import Stats from "@/section/stats/Stats";
import processBg from "./../assets/processbg.png";
import Image from "next/image";
import Web3Intro from "@/section/web3Intro/Web3Intro";
import MetaverseIntro from "@/section/metaverseIntro/MetaverseIntro";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <AboutProgramSummary />
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl text-center font-bold tracking-wide underline-transition my-4 w-fit">
          Achieve Your Goals
        </h1>
        <p className="p-4 text-center">
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users to achieve you
          goals and ambitions.
        </p>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="lg:w-[50vw]">
            <p className="p-8">
              The graduates of this program will own products (Full-Stack App
              Templates, AR and VR Experiences, and APIs) that are marketed
              globally by the Panaverse DAO and, if they like, will also be able
              to start off by offering services at a roughly rate of $50 per
              hour ($96,000 per year). This would give Pakistani professionals
              and students a fantastic opportunity to better their financial
              situation while also giving the economy a much-needed boost by
              expanding software exports.
              <br />
              <br />
              Here are some useful links if you want to study in detail:
            </p>
            <ul className="list-disc ml-10 mb-10">
              <li>
                <a
                  href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
                  className="link"
                >
                  Top 5 'Metaverse' jobs that will rule the future of tech
                  industry
                </a>
              </li>
              <li>
                <a
                  href="https://web3.career/web3-salaries/blockchain-developer"
                  className="link"
                >
                  Blockchain Developer Salary
                </a>
              </li>
              <li>
                <a
                  href="https://thedefiant.io/web3-soaring-salaries"
                  className="link"
                >
                  Web3 Salaries Soar to $750,000 for Rank-and-File Devs
                </a>
              </li>
              <li>
                <a
                  href="https://newzoo.com/resources/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
                  className="link"
                >
                  The Metaverse, Blockchain Gaming, and NFTs: Navigating the
                  Internet’s Uncharted Waters
                </a>
              </li>
              <li>
                <a
                  href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
                  className="link"
                >
                  How To Become Metaverse Developer: Scope, Skills, And Salary
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-[50vw] h-80 lg:min-h-[600px] flex justify-center items-center">
            {" "}
            <div className="rounded-full lg:h-[500px] lg:w-[500px] absolute flex items-center justify-center overflow-hidden">
              {" "}
              <Image
                src={processBg}
                alt=""
                className="absolute right-0 rotateBg overflow-x-hidden"
              />
              <div className="w-72 h-72 border-2 rounded-full flex items-center justify-center">
                <p className="w-56 h-56 text-center rounded-full">
                  First learn the development. Think, Design the software and
                  then Develop. Do marketing and Earn in Dollars to change the
                  fortune of your life and family and Pakistan's economic state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Web3Intro />
      <MetaverseIntro />
    </main>
  );
}
