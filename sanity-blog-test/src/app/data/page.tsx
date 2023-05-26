import { fetchData } from "@/sanity/sanity-utils";
import React from "react";

const page = async () => {
  const names = await fetchData();
  return (
    <div>
      <ul>
        {names.map((name: { name: string; _id: string }, i: number) => (
          <li key={i}>{name.name}</li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default page;
