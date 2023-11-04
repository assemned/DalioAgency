"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { BLOG } from "@/constants";
import Button from "./Button";

const Blog = () => {
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
      id="blog"
      ref={ref}
      className="padding-x max-container flexCenter  py-20 max-md:py-10 gap-20 flex-col max-lg:gap-10">
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={Drop}
        transition={{
          duration: 0.8,
        }}
        ref={ref}
        className=" text-h-2 font-bold">
        Blog from insights
      </motion.h2>
      <div className="flexCenter gap-16 max-lg:hidden">
        {BLOG.map((blog) => (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={GoUp}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            ref={ref}
            className="flex justify-start items-start flex-col gap-4"
            key={blog.title}>
            <img src={blog.picture} alt="" />
            <p className="text-xs font-semibold bg-primary-white text-primary-yellow py-1 px-2 rounded-3xl cursor-pointer">
              {blog.tag}
            </p>
            <p className="text-p-4">{blog.date}</p>
            <h6 className="text-h-4 font-bold">{blog.title}</h6>
            <Button title="Read More" type="blue" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={GoUp}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        ref={ref}
        className="flexCenter gap-16 flex-col lg:hidden">
        <Splide hasTrack={false}>
          <SplideTrack className="flexCenter gap-10">
            {BLOG.map((blog) => (
              <SplideSlide className="flexCenter" key={blog.title}>
                <div
                  className="flex justify-start items-center flex-col gap-4"
                  key={blog.title}>
                  <img src={blog.picture} alt="" />
                  <p className="text-xs font-semibold bg-primary-white text-primary-yellow py-1 px-2 rounded-3xl">
                    {blog.tag}
                  </p>
                  <p className="text-p-4">{blog.date}</p>
                  <h6 className="text-h-4 font-bold text-center">
                    {blog.title}
                  </h6>
                  <Button title="Read More" type="blue" />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__progress">
            <div className="splide__progress__bar pt-14" />
          </div>
        </Splide>
      </motion.div>
    </section>
  );
};

export default Blog;
