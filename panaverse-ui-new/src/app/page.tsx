import AboutProgramSummary from "@/section/aboutProgram/AboutProgramSummary";
import Hero from "@/section/hero/Hero";
import Stats from "@/section/stats/Stats";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <AboutProgramSummary />
      <div>
        <h1 className="text-4xl text-center font-bold tracking-wide underline-transition">
          Achieve Your Goals
        </h1>
      </div>
    </main>
  );
}
