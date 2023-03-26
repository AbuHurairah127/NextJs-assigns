import Header from "@/components/header/Header";
import BooksTable from "../sections/booksTable/BooksTable";
import Image from "next/image";
import heroBg from "./../assets/wave-haikei.svg";
import HeroRightSection from "@/components/heroRightSection/HeroRightSection";
export type BookType = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};
async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const books: BookType[] = await getData();
  console.log("🚀 ~ file: page.tsx:16 ~ Home ~ books:", books);
  return (
    <main className={" min-h-screen overflow-x-hidden"}>
      <Header />

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-5 h-[55vh] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <h1 className="mx-5 text-3xl font-thin tracking-wider text-white mt-5 w-screen lg:w-[50vw] text-center">
          Order Books: Unleash Your Imagination, One Page at a Time!
        </h1>
        <HeroRightSection />
      </div>
      <h3 className="text-2xl font-thin text-[#302b63] text-center my-5 mx-5">
        Books you need to Enhance your knowledge!
      </h3>
      <div className="flex justify-center ">
        <BooksTable books={books} />
      </div>
    </main>
  );
}
