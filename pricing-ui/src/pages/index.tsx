import Head from "next/head";
import Image from "next/image";
import icon1 from "./../assets/icon1.png";
import icon2 from "./../assets/icon2.png";
import icon3 from "./../assets/icon3.png";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing UI</title>
        <meta
          name="description"
          content="Pricing UI using Tailwind css and Next js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[50vh] bg-[#6B46C1] w-screen absolute -z-10"></div>
      <div className={"flex flex-col items-center h-[5vh] overflow-visible"}>
        <h3 className="text-white font-bold text-3xl text-center mt-14 ">
          Simple Pricing UI for your Business
        </h3>
        <p className="text-center text-white mt-3 text-lg">
          Plans that are carefully crafted to suit your business.
        </p>
        <div className="flex bg-white shadow-xl rounded-md w-[80vw] mt-16 h-max z-50 overflow-visible">
          <div className="bg-[#642cd34e] flex flex-col w-[35%] items-center rounded-l-md">
            <h3 className="text-center font-bold text-3xl pt-[40px]">
              Premium Pro
            </h3>
            <h1 className="text-center font-bold text-6xl pt-">$1000</h1>
            <p className="text-center text-xl">billed just once</p>
            <button className="bg-[#6B46C1] rounded px-14 py-2 w-[80%] my-8 text-white text-xl transition ease-in-out delay-100 hover:bg-white  hover:text-[#6B46C1] duration-300">
              Get Started
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <footer className="flex justify-evenly items-center w-full h-[50vh]">
        <div className="flex w-[30vw] items-center ">
          <Image src={icon1} alt={""}></Image>
          <p className="font-bold pl-4">
            30 days money back <br /> Guarantee
          </p>
        </div>
        <div className="flex w-[30vw] items-center">
          <Image src={icon2} alt={""}></Image>
          <p className="font-bold pl-4">
            No setup fees <br /> 100% hassle-free
          </p>
        </div>
        <div className="flex w-[30vw] items-center">
          <Image src={icon3} alt={""}></Image>
          <p className="font-bold pl-4">
            No monthly subscription <br /> Pay once and for all
          </p>
        </div>
      </footer>
    </>
  );
}
