import AboutProgramSummary from "@/section/aboutProgram/AboutProgramSummary";
import Hero from "@/section/hero/Hero";
import Stats from "@/section/stats/Stats";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Stats />
      <AboutProgramSummary />
    </main>
  );
}
