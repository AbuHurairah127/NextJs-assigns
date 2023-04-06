import StatsCard from "@/components/statsCard/StatsCard";
import { data } from "@/data/StatsCardData";
import React from "react";

const Stats = () => {
  return (
    <div className="min-h-[50vh] py-8">
      <h1 className="font-bold text-5xl text-center">
        We Are Proud to Tell You
      </h1>
      <p className="text-lg text-center tracing-widest">
        Our community, teachers, and students are all essential components of
        this dynamic and thriving network, working together to create a brighter
        future.
      </p>
      <div className="flex justify-evenly flex-wrap mt-14 gap-8 lg:gap-0">
        {data.map((stat, i) => (
          <StatsCard key={i} data={stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
