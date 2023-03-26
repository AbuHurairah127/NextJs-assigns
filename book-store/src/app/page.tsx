import Header from "@/components/header/Header";
import BooksTable from "@/sections/booksTable/BooksTable";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={" min-h-screen"}>
      <Header />
      <div>
        <h1 className="mx-5 text-3xl font-thin tracking-wider text-[#302b63] text-center mt-5">
          Order Books: Unleash Your Imagination, One Page at a Time!
        </h1>
        <BooksTable />
      </div>
    </main>
  );
}
