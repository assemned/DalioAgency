"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
      id="about"
      ref={ref}
      className="padding-x max-container flexCenter py-20 gap-20 max-lg:flex-col">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animateLeft}
        transition={{ duration: 1 }}
        ref={ref}>
        <div className="flex-1 flex justify-start items-start gap-8 flex-col">
          <h2 className="text-h-2 font-bold">
            We Are A Creative Digital Agency
          </h2>
          <p className="text-p-3 text-primary-gray ">
            Dalio started with a vision for building an agency to solve the
            business problems of the future, and that requires a different
            model. We’re not a branding agency that dabbles in tech, and we’re
            not a development shop that leaves you hanging when it’s time to go
            to market.
            <br />
            <br />
            We start with human experience and layer in technology and marketing
            to deliver truly integrated digital solutions. This unique set of
            capabilities sets us apart from other agencies and positions DIG to
            help you attack your goals.
          </p>
          <Button title="Contact us" type="yellow" />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animateRight}
        transition={{ duration: 1 }}
        ref={ref}>
        <div className="flex-1">
          <img src="/about.png" alt="About" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
