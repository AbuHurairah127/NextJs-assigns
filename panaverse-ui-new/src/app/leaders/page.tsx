import LeaderCard from "@/components/leaderCard/LeaderCard";
import { data } from "@/data/LeadersData";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-50 p-8 flex flex-wrap justify-around">
      {data.map((leader, i) => (
        <LeaderCard leader={leader} key={i} />
      ))}
    </div>
  );
};

export default page;
