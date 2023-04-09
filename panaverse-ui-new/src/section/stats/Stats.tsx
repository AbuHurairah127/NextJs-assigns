"use client";
import StatsCard from "@/components/statsCard/StatsCard";
import { data } from "@/data/StatsCardData";
import React from "react";
import { motion } from "framer-motion";
const Stats = () => {
  return (
    <div className="min-h-[50vh] py-8">
      <motion.h1
        className="font-bold text-5xl text-center"
        initial={{ opacity: 0, translateY: 300 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.65 }}
      >
        We Are Proud to Tell You
      </motion.h1>
      <motion.p
        className="text-lg text-center tracing-widest"
        initial={{ opacity: 0, translateY: 300 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our community, teachers, and students are all essential components of
        this dynamic and thriving network, working together to create a brighter
        future.
      </motion.p>
      <motion.div
        className="flex justify-evenly flex-wrap mt-14 gap-8 lg:gap-0"
        initial={{ opacity: 0, translateY: 300 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7 }}
      >
        {data.map((stat, i) => (
          <StatsCard key={i} data={stat} />
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;
