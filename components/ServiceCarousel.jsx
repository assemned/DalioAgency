"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LiaEdit, LiaFileAlt } from "react-icons/lia";
import { TbTools, TbDeviceDesktop } from "react-icons/tb";
import Button from "../components/Button";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const ServiceCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
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
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={GoUp}
      transition={{
        duration: 0.8,
      }}
      ref={ref}
      className="md:hidden">
      <Splide hasTrack={false}>
        <SplideTrack>
          <SplideSlide className="flexCenter">
            <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-8 px-6 py-14 shadox-xl w-[320px] rounded-3xl">
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
          </SplideSlide>
          <SplideSlide className="flexCenter">
            <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-8 px-6 py-14 shadox-xl w-[320px] rounded-3xl">
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
          </SplideSlide>
          <SplideSlide className="flexCenter">
            <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-8 px-6 py-14 shadox-xl w-[320px] rounded-3xl">
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
          </SplideSlide>
          <SplideSlide className="flexCenter">
            <div className=" bg-primary-blue2 flex justify-center items-start flex-col gap-8 px-6 py-14 shadox-xl w-[320px] rounded-3xl">
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
          </SplideSlide>
        </SplideTrack>
        <div className="splide__progress mt-8">
          <div className="splide__progress__bar py-2" />
        </div>
      </Splide>
    </motion.div>
  );
};

export default ServiceCarousel;
