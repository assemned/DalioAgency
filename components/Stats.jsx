"use client";
import { STATS } from "@/constants";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="padding-x max-container flexCenter py-12 max-md:py-6 gap-[10%] max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-10 max-xs:gap-3 max-xs:px-3">
      {STATS.map((stat) => (
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          key={stat.title}>
          <div className="flexCenter flex-col gap-2">
            {counterOn ? (
              <h4 className="text-h-2 font-bold">
                <CountUp start={0} end={stat.number} duration={3} delay={0} />+
              </h4>
            ) : (
              <h4 className="text-h-2 font-bold">0+</h4>
            )}
            <p className="text-p-2 text-primary-gray">{stat.title}</p>
          </div>
        </ScrollTrigger>
      ))}
    </section>
  );
};

export default Stats;
