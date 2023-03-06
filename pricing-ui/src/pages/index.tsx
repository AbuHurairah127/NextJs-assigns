import Head from "next/head";
import Image from "next/image";
import icon1 from "./../assets/icon1.png";
import icon2 from "./../assets/icon2.png";
import icon3 from "./../assets/icon3.png";
import vectortickmark from "./../assets/Vectortickmark.png";
export default function Home() {
  const features: string[] = [
    "International calling and messaging API",
    "Additional phone numbers",
    "Automated messages via Zapier",
    "24/7 support and consulting",
  ];
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
      <div className="h-[50vh] bg-[#6B46C1] w-full absolute -z-10 overflow-x-hidden"></div>
      <div
        className={"flex flex-col items-center min-h-[50vh] overflow-x-hidden"}
      >
        <h3 className="text-white font-bold text-3xl text-center mt-14 ">
          Simple Pricing UI for your Business
        </h3>
        <p className="text-center text-white mt-3 text-lg">
          Plans that are carefully crafted to suit your business.
        </p>
        <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-md w-[80vw] mt-16 xl:mt-20 mb-8 z-50 ">
          <div className="bg-[#642cd34e] flex flex-col lg:w-[35%] items-center rounded-l-md">
            <h3 className="text-center font-bold text-3xl pt-[40px]">
              Premium Pro
            </h3>
            <h1 className="text-center font-bold text-6xl pt-">$1000</h1>
            <p className="text-center text-xl font-semibold mt-3">
              billed just once
            </p>
            <button className="bg-[#6B46C1] rounded px-14 py-2 w-[80%] my-8 text-white text-xl transition ease-in-out delay-100 hover:bg-white  hover:text-[#6B46C1] duration-300">
              Get Started
            </button>
          </div>
          <div>
            <p className="m-8">
              Access these features when you get this pricing package for your
              business.
            </p>
            <div className="mx-8 ">
              {features.map((text, i) => {
                return (
                  <div key={i} className={"flex pb-3"}>
                    <Image src={vectortickmark} alt="" className="h-4 w-4" />
                    <p className="pl-6">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col lg:flex-row justify-evenly items-center lg:h-[30vh] max-w-screen overflow-x-hidden">
        <div className="flex w-[65vw] mb-8 lg:mb-0 lg:w-[30vw] lg:items-center ">
          <Image src={icon1} alt={""}></Image>
          <p className="font-bold pl-4">
            30 days money back <br /> Guarantee
          </p>
        </div>
        <div className="flex lg:w-[30vw] w-[65vw] mb-8 lg:mb-0 lg:items-center">
          <Image src={icon2} alt={""}></Image>
          <p className="font-bold pl-4">
            No setup fees <br /> 100% hassle-free
          </p>
        </div>
        <div className="flex lg:w-[30vw] w-[65vw] mb-8 lg:mb-0 lg:items-center">
          <Image src={icon3} alt={""}></Image>
          <p className="font-bold pl-4">
            No monthly subscription <br /> Pay once and for all
          </p>
        </div>
      </footer>
    </>
  );
}
