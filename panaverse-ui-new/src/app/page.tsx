import AboutProgramSummary from "@/section/aboutProgram/AboutProgramSummary";
import Hero from "@/section/hero/Hero";
import Stats from "@/section/stats/Stats";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <AboutProgramSummary />
    </main>
  );
}
