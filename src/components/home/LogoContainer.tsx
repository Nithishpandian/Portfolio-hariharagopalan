import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const LogoContainer = () => {
  return (
    <div className=" md:px-2 lg:px-4 pt-2 pb-6 flex items-center gap-5 sm:gap-2 md:gap-3 lg:gap-6 justify-center">
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center justify-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 sm:px-3 md:px-4 cursor-pointer">
        <motion.div
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaLinkedinIn className=" text-2xl md:text-3xl lg:text-4xl" />
        </motion.div>
        <div className="hidden sm:flex flex-col ">
          <h1 className=" text-lg font-black font-Noto-sans">LinkedIn</h1>
          <p className=" text-xs font-medium -mt-0.5 font-Roboto hidden sm:flex">
            See my work
          </p>
        </div>
      </div>
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center justify-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 sm:px-3 md:px-4 cursor-pointer">
        <motion.div
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaInstagram className=" text-2xl md:text-3xl lg:text-4xl" />
        </motion.div>
        <div className="hidden sm:flex flex-col ">
          <h1 className=" text-lg font-black font-Noto-sans">Instagram</h1>
          <p className=" text-xs font-medium -mt-0.5 font-Roboto hidden sm:flex">
            See my story
          </p>
        </div>
      </div>
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center justify-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 sm:px-3 md:px-4 cursor-pointer">
        <motion.div
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaFacebookF className=" text-2xl md:text-3xl lg:text-4xl" />
        </motion.div>
        <div className="hidden sm:flex flex-col ">
          <h1 className=" text-lg font-black font-Noto-sans">Facebook</h1>
          <p className=" text-xs font-medium -mt-0.5 font-Roboto hidden sm:flex">
            See my photo
          </p>
        </div>
      </div>
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center justify-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 sm:px-3 md:px-4 cursor-pointer">
        <motion.div
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaTwitter className=" text-2xl md:text-3xl lg:text-4xl" />
        </motion.div>
        <div className="hidden sm:flex flex-col ">
          <h1 className=" text-lg font-black font-Noto-sans">Twitter</h1>
          <p className=" text-xs font-medium -mt-0.5 font-Roboto hidden sm:flex">
            See my thoughts
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoContainer;
