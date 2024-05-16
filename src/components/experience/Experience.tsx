"use client";
import React from "react";
import srecLogo from "../../assets/srec-logo.png";
import Image from "next/image";
import { IoMdArrowUp } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { motion } from "framer-motion";

const Experience = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" w-full flex justify-center items-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"visible"}
        viewport={{
          once: true,
        }}
        className=" grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-y-5 gap-x-8 py-10 px-3 sm:px-6 md:px-8 lg:px-14 xl:px-20 relative container"
      >
        <div className="absolute w-40 sm:w-full h-full blur-2xl z-0 bg-gradient-radial from-neutral-900 left-0 top-0"></div>
        <div className=" flex justify-center px-1 z-0">
          <div className=" w-80 sm:w-[500px] flex flex-col gap-0.5">
            <div className=" flex items-center gap-3 font-bold text-stone-50 text-3xl">
              {" "}
              <MdOutlineWork /> <span>Work Experience</span>
            </div>
            <div className=" rounded-sm bg-primary py-0.5 w-64 mt-2"></div>
            {/* <p className=" text-sm text-stone-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            accusantium.
          </p> */}
          </div>
        </div>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="item grid grid-cols-1 items-center justify-center gap-y-5 gap-x-8"
            variants={item}
          >
            <ExperienceCard />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;

const ExperienceCard = () => {
  return (
    <div
      className=" group flex items-center justify-center z-0 cursor-pointer"
      id="Experience"
    >
      <div className=" border-b border-stone-500 py-4 group-hover:px-4 duration-500 px-1 w-96 sm:w-[550px] flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <Image
            className=" rounded-full"
            src={srecLogo}
            width={50}
            height={50}
            alt="Srec logo"
          />
          <div className=" flex flex-col">
            <h1 className=" font-bold text-stone-300">SREC</h1>
            <p className=" text-[13px] text-stone-400">Professor</p>
          </div>
        </div>
        <div className=" flex flex-col gap-1.5">
          <p className=" text-[13px] text-stone-400 flex justify-end">
            <IoMdArrowUp className=" rotate-45 text-lg" />
          </p>
          <p className=" text-[13px] text-stone-400">
            &#8226; Aug 2012 - Current
          </p>
        </div>
      </div>
    </div>
  );
};
