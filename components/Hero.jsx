"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const animateRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };
  const animateLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="hero"
      className="padding-x py-20 max-sm:py-6 max-container flexCenter  max-lg:flex-col gap-16 max-lg:py-14">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animateLeft}
        transition={{ duration: 1 }}>
        <div
          className=" px-8 max-container  flex justify-center items-start flex-col gap-16 max-lg:gap-12 flex-[1.2]"
          ref={ref}>
          <h1 className=" text-h-1 font-bold">Digital Agency</h1>
          <p className="text-p-1 text-primary-gray">
            Full-service design support that growing B2B companies need. World
            leading agency.
          </p>
          <Button title="Our Projects" type="yellow" />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animateRight}
        transition={{ duration: 1 }}>
        <div className="flexCenter flex-[0.8] px-8 relative" ref={ref}>
          <img src="/hero.png" alt="hero" className=" w-[100%]" />
          <img
            src="/hero-circle.png"
            alt="hero"
            className="absolute w-[120px] -bottom-12 right-20 cursor-pointer hover:rotate-[1800deg] duration-[5000ms] max-lg:w-[80px]"
          />
        </div>
      </motion.div>
      <div className="absolute -z-10">
        <img src="/line.png" alt="" className="  w-[600px]" />
      </div>
    </section>
  );
};

export default Hero;
