"use client"
import React from "react";
import { SiKalilinux } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className=" sm:px-2 md:px-6 lg:px-10 py-10 flex flex-col gap-10 relative" id="Skills">
      <div className="absolute w-40 sm:w-full h-full blur-2xl z-0 bg-gradient-radial from-neutral-950 left-0 top-0"></div>
      <div className=" flex flex-col gap-1.5 justify-center items-center text-center">
        <h1 className=" text-stone-50 z-0 font-bold text-3xl font-Noto-sans">
          My skills
        </h1>
        <div className=" bg-primary z-0 py-0.5 w-40 rounded-sm mb-1"></div>
        <p className=" w-96 text-stone-200 z-0 text-sm font-medium font-Roboto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quos
          facilis voluptate officia vel debitis!
        </p>
      </div>
      <div className=" flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-5 gap-y-4 justify-center 2xl:px-10">
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
      </div>
    </div>
  );
};

export default Skills;

const SkillsCard = () => {
  const skillLogoAnimation = {
    initial: {
      rotate: 180,
      scale: 0,
    },
    animate: {
      rotate: 0,
      scale: 1,
    },
  };

  return (
    <div className=" hover:border-primary hover:text-primary duration-500 cursor-pointer flex items-center gap-3 text-stone-200 font-semibold bg-stone-800 shadow-lg border border-stone-700 backdrop-filter backdrop-blur-lg bg-opacity-30 px-3 sm:px-5 py-3 rounded-md h-full w-36 sm:w-40">
      <motion.div
        variants={skillLogoAnimation}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 3
        }}
      >
        <SiKalilinux className=" text-3xl" />
      </motion.div>
      <p>Kali linux</p>
    </div>
  );
};
