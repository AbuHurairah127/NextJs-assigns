import Header from "@/components/header/Header";
import BooksTable from "@/sections/booksTable/BooksTable";
import Image from "next/image";
import heroBg from "./../assets/wave-haikei.svg";
import HeroRightSection from "@/components/heroRightSection/HeroRightSection";

export default function Home() {
  return (
    <main className={" min-h-screen"}>
      <Header />
      {/* <div style={{ backgroundImage: `url(${heroBg})` }}> */}
      <Image
        src={heroBg}
        alt={"Hero Bg"}
        className={"w-screen absolute -z-50"}
      />
      {/* </div> */}
      <div className="flex justify-between items-center p-5 h-[55vh]">
        <h1 className="mx-5 text-3xl font-thin tracking-wider text-white mt-5 w-screen lg:w-[50vw] text-center">
          Order Books: Unleash Your Imagination, One Page at a Time!
        </h1>
        <HeroRightSection />
      </div>
      <BooksTable />
    </main>
  );
}
