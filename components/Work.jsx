"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Button from "@/components/Button";
import { WORK } from "@/constants";
import { useState } from "react";

const Work = () => {
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

  const categories = ["UI/UX", "Web Design", "Branding", "Interaction"];
  const [category, setCategory] = useState("UI/UX");
  const filteredCategory = WORK.filter((categoryItems) => {
    return categoryItems.tag === category;
  });

  return (
    <section
      id="work"
      ref={ref}
      className="padding-x max-container flexCenter py-20 max-md:py-10 gap-10 flex-col">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={Drop}
        transition={{
          duration: 0.8,
        }}
        ref={ref}
        className="flexCenter flex-col gap-10 ">
        <h2 className="text-h-2 font-bold">Our Latest</h2>
        <div className="flexCenter md:gap-16 gap-3">
          <p
            className={`text-p-3 cursor-pointer duration-300 ${
              category === "UI/UX" ? "text-primary-yellow" : ""
            }`}
            onClick={() => setCategory("UI/UX")}>
            UI/UX
          </p>
          <p
            className={`text-p-3 cursor-pointer duration-300 ${
              category === "Web Design" ? "text-primary-yellow" : ""
            }`}
            onClick={() => setCategory("Web Design")}>
            Web Design
          </p>
          <p
            className={`text-p-3 cursor-pointer duration-300 ${
              category === "Branding" ? "text-primary-yellow" : ""
            }`}
            onClick={() => setCategory("Branding")}>
            Branding
          </p>
          <p
            className={`text-p-3 cursor-pointer duration-300 ${
              category === "Interaction" ? "text-primary-yellow" : ""
            }`}
            onClick={() => setCategory("Interaction")}>
            Interaction
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={GoUp}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        ref={ref}
        className="flexCenter gap-10 max-md:hidden lg:px-24">
        {filteredCategory.map((category) =>
          category.works.map((work) => (
            <div className="flexCenter flex-col gap-5" key={work.title}>
              <img src={work.picture} alt="" className=" rounded-3xl" />
              <h6 className="text-h-4 font-semibold px-3">{work.title}</h6>
              <p className="text-p-4 text-primary-gray px-3">
                {work.description}
              </p>
            </div>
          ))
        )}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={GoUp}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        ref={ref}
        className="flexCenter flex-wrap gap-10 md:hidden">
        <Splide hasTrack={false}>
          <SplideTrack>
            {filteredCategory.map((category) =>
              category.works.map((work) => (
                <SplideSlide className="flexCenter" key={work.title}>
                  <div
                    className="flexCenter flex-col gap-3 px-3"
                    key={work.title}>
                    <img
                      src={work.picture}
                      alt=""
                      className=" rounded-xl"
                      style={{ borderRadius: "20px" }}
                    />
                    <h6
                      className="text-h-3 font-semibold px-2 "
                      style={{ textAlign: "center" }}>
                      {work.title}
                    </h6>
                  </div>
                </SplideSlide>
              ))
            )}
          </SplideTrack>
          <div className="splide__progress">
            <div className="splide__progress__bar pt-10" />
          </div>
        </Splide>
      </motion.div>
      <Button title="Load More" type="yellow" />
    </section>
  );
};

export default Work;
