"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { REVIEWS } from "@/constants";
import { RiStarFill } from "react-icons/ri";

const Reviews = () => {
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
      id="reviews"
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
        What say happy clients
      </motion.h2>
      <div className="flexCenter gap-16 max-lg:hidden px-10 max-xl:px-0">
        {REVIEWS.map((review) => (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={GoUp}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            ref={ref}
            className="flex justify-start flex-col bg-primary-blue2 rounded-3xl px-10 py-10 gap-10 shadow-2xl"
            key={review.user}>
            <img src="/quote.png" alt="quote" className=" w-28" />
            <p className="text-p-3 text-primary-gray">{review.comment}</p>
            <div className="flex justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-5">
              <div className="flexCenter gap-3">
                <img src={review.picture} className="w-12 cursor-pointer" />
                <div>
                  <p className="text-p-2 font-semibold cursor-pointer">
                    {review.user}
                  </p>
                  <p className=" text-primary-yellow">{review.position}</p>
                </div>
              </div>
              <div className="flexCenter gap-1">
                <RiStarFill size={20} />
                <RiStarFill size={20} />
                <RiStarFill size={20} />
                <RiStarFill size={20} />
                <RiStarFill size={20} />
              </div>
            </div>
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
            {REVIEWS.map((review) => (
              <SplideSlide className="flexCenter" key={review.user}>
                <div className="flex justify-center items-center flex-col bg-primary-blue2 rounded-3xl px-12 max-sm:px-4 py-8 w-[90%] gap-10">
                  <img src="/quote.png" alt="quote" className=" w-28" />
                  <p className="text-p-3 text-primary-gray">{review.comment}</p>
                  <div className="flex justify-center items-center w-full max-sm:flex-col max-sm:gap-5">
                    <div className="flexCenter gap-3">
                      <img
                        src={review.picture}
                        className="w-12 cursor-pointer"
                      />
                      <div>
                        <p className="text-p-2 font-semibold cursor-pointer">
                          {review.user}
                        </p>
                        <p className=" text-primary-yellow">
                          {review.position}
                        </p>
                      </div>
                    </div>
                    <div className="flexCenter gap-1">
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                    </div>
                  </div>
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

export default Reviews;
