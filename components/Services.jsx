"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCarousel from "@/components/ServiceCarousel";
import Button from "./Button";
import { LiaEdit, LiaFileAlt } from "react-icons/lia";
import { TbTools, TbDeviceDesktop } from "react-icons/tb";

const Services = () => {
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
      id="services"
      ref={ref}
      className="padding-x max-container flexCenter py-20 max-md:py-10 gap-6 flex-col">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={Drop}
        transition={{
          duration: 0.8,
        }}
        ref={ref}
        className="flex justify-between items-center w-full max-md:justify-center">
        <h2 className="text-h-2 font-bold md:text-center">
          Service We Can Help You
        </h2>
        <div className="max-md:hidden">
          <Button title="See All" type="blue" />
        </div>
      </motion.div>

      <div className=" hidden grid-cols-2 gap-8 md:grid lg:px-24">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={GoUp}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          ref={ref}
          className="flexCenter flex-col gap-8">
          <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-10 px-10 py-20 rounded-tl-3xl shadox-xl">
            <LiaEdit size={80} className=" text-primary-yellow" />
            <h6 className="text-h-3 font-bold">Content Writing</h6>
            <p className="text-p-3 text-primary-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
              consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
              bibendum luctus viverra. Eu pellentesque sem sed platea diam
              dignissim duis purus.
            </p>
            <Button title="Read More" type="blue" />
          </div>

          <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-10 px-10 py-20 rounded-bl-3xl shadox-xl">
            <TbTools size={80} className=" text-primary-yellow" />
            <h6 className="text-h-3 font-bold">Branding</h6>
            <p className="text-p-3 text-primary-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
              consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
              bibendum luctus viverra. Eu pellentesque sem sed platea diam
              dignissim duis purus.
            </p>
            <Button title="Read More" type="blue" />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={GoUp}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          ref={ref}
          className="flexCenter flex-col gap-8 mt-24">
          <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-10 px-10 py-20 rounded-tr-3xl shadox-xl">
            <LiaFileAlt size={80} className=" text-primary-yellow" />
            <h6 className="text-h-3 font-bold">UX Research</h6>
            <p className="text-p-3 text-primary-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
              consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
              bibendum luctus viverra. Eu pellentesque sem sed platea diam
              dignissim duis purus.
            </p>
            <Button title="Read More" type="blue" />
          </div>

          <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-10 px-10 py-20 rounded-br-3xl shadox-xl">
            <TbDeviceDesktop size={80} className=" text-primary-yellow" />
            <h6 className="text-h-3 font-bold">Web Design</h6>
            <p className="text-p-3 text-primary-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
              consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
              bibendum luctus viverra. Eu pellentesque sem sed platea diam
              dignissim duis purus.
            </p>
            <Button title="Read More" type="blue" />
          </div>
        </motion.div>
      </div>

      <ServiceCarousel />
    </section>
  );
};

export default Services;
