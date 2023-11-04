import {
  RiInstagramFill,
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiArrowRightSLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      id="footer"
      className=" padding-x pt-10 pb-8 bg-primary-blue2 flex items-center flex-col gap-10">
      <div className="flex justify-between gap-20  max-w-[1440px] max-lg:flex-col max-lg:gap-10">
        <div className=" bg-primary-yellow w-full px-10 py-14 flex flex-col gap-4 rounded-[40px] flex-1">
          <h6 className="text-p-1 font-bold text-primary-bg">
            Sign Up to Receive Product Updates and More
          </h6>
          <div className="relative">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="border-b-2 p-2 border-primary-blue2 bg-transparent text-primary-blue placeholder-primary-blue  focus:outline-none w-full"
            />
            <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer">
              <button className=" text-primary-blue">
                <RiArrowRightSLine size={22} />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex justify-between items-center gap-10 max-lg:flex-col">
          <div className=" flex flex-col gap-2 max-lg:text-center">
            <p className=" font-semibold text-p-1 mb-4 max-lg:mb-1">Office</p>
            <a href="/" className="text-p-3 text-primary-gray">
              545, Street 11,
            </a>
            <a href="/" className="text-p-3 text-primary-gray">
              Block F California, U.S.A
            </a>
          </div>
          <div className=" flex flex-col gap-2 max-lg:text-center">
            <p className=" font-semibold text-p-1 mb-4 max-lg:mb-1">Contact</p>
            <a href="/" className="text-p-3 text-primary-gray">
              +92 302 300 3215
            </a>
            <a href="/" className="text-p-3 text-primary-gray">
              ouraddress@email.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-20 max-w-[1440px] max-lg:flex-col-reverse  max-lg:text-center  max-lg:gap-5">
        <a href="" className="text-p-4 ">
          Copyright 2022. All Rights Reserved
        </a>
        <a href="" className="text-p-4 ">
          Terms & Conditions Privacy
        </a>
        <div className="flexCenter gap-4">
          <RiFacebookCircleFill
            size={30}
            className=" cursor-pointer hover:scale-125 duration-300"
          />
          <RiInstagramFill
            size={30}
            className=" cursor-pointer hover:scale-125 duration-300"
          />
          <RiLinkedinBoxFill
            size={30}
            className=" cursor-pointer hover:scale-125 duration-300"
          />
          <RiTwitterFill
            size={30}
            className=" cursor-pointer hover:scale-125 duration-300"
          />
          <RiYoutubeFill
            size={30}
            className=" cursor-pointer hover:scale-125 duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
