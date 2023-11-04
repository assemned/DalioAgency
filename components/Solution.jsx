"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SOLUTIONS } from "@/constants";
import { MdOutlineTaskAlt } from "react-icons/md";

const Solution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const fromRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };
  const fromLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const GoDown = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0 },
  };
  const GoUp = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  };
  const Zoom = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  const Drop = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <section
      id="solutions"
      ref={ref}
      className=" lg:bg-solution bg-center bg-cover bg-no-repeat flexCenter">
      <div className=" flex lg:flex-rows px-6 md:px-20 py-20 max-md:py-10 max-lg:py-14 gap-16 max-md:gap-6 max-lg:flex-col-reverse max-w-[1440px]">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={Drop}
          transition={{
            duration: 0.8,
          }}
          ref={ref}
          className="flex-1">
          <img
            ref={ref}
            src="/solution.png"
            alt="Solution"
            className=" drop-shadow-2xl"
          />
        </motion.div>
        <div className="flex justify-center flex-col gap-12 max-md:gap-6 flex-1">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={Drop}
            transition={{
              duration: 0.8,
            }}
            className="text-h-2 font-bold">
            Our Solution Approach
          </motion.h2>
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fromRight}
              transition={{
                duration: 0.7,
                delay: index * 0.4,
              }}
              className=" flex justify-start flex-row gap-5"
              key={solution.title}>
              <MdOutlineTaskAlt
                size={35}
                className=" flex-[0.2] cursor-pointer max-lg:text-primary-yellow hover:text-primary-yellow duration-500"
              />
              <div className="flex justify-start gap-5 flex-col flex-[1.8]">
                <h6 className="text-p-1 font-bold">{solution.title}</h6>
                <p className="text-p-3 text-primary-gray">{solution.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
