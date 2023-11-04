"use client";
import { useState } from "react";
import { SIDEBAR_LINKS } from "@/constants";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiCloseFill,
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuToggler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <HiOutlineMenu
        size={27}
        className=" cursor-pointer"
        onClick={MenuToggler}
      />
      <div
        className={`flexCenter flex-col gap-10 absolute bg-white text-primary-bg m-auto w-[290px] sm:w-[400px] rounded-2xl px-8 pt-5 pb-8 duration-300 ease-in z-10 shadow ${
          showMenu
            ? " scale-100 top-6 right-5 lg:right-40"
            : "scale-0 -top-52 -right-28 md:-right-32 lg:right-0"
        }`}>
        <div className="flexBetween w-full">
          <Link
            href="/"
            className="bg-primary-yellow flexCenter text-xs font-semibold rounded-full px-4 py-1 gap-2 hover:pl-6 hover:gap-0 duration-500">
            <RiArrowRightLine size={18} />
            <p>Start A New Project</p>
          </Link>
          <RiCloseFill
            size={28}
            className=" cursor-pointer"
            onClick={MenuToggler}
          />
        </div>
        <ul className="flex justify-start w-full gap-5 text-base flex-col">
          {SIDEBAR_LINKS.map((link) => (
            <Link href="/" key={link.key} className=" hover:ml-3 duration-500">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="flex justify-start w-full flex-col gap-5">
          <p className="text-xs font-semibold">Follow us on</p>
          <div className="flex justify-start gap-3">
            <Link
              href="/"
              className=" bg-primary-white p-2 hover:scale-125 duration-300 rounded-lg">
              <RiInstagramFill size={22} />
            </Link>
            <Link
              href="/"
              className=" bg-primary-white p-2 hover:scale-125 duration-300 rounded-lg">
              <RiFacebookFill size={22} />
            </Link>
            <Link
              href="/"
              className=" bg-primary-white p-2 hover:scale-125 duration-300 rounded-lg">
              <RiLinkedinFill size={22} />
            </Link>
            <Link
              href="/"
              className=" bg-primary-white p-2 hover:scale-125 duration-300 rounded-lg">
              <RiTwitterFill size={22} />
            </Link>
            <Link
              href="/"
              className=" bg-primary-white p-2 hover:scale-125 duration-300 rounded-lg">
              <RiYoutubeFill size={22} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
