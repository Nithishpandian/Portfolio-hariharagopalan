import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const LogoContainer = () => {
  return (
    <div className=" px-4 pt-2 pb-6 flex items-center gap-6 justify-center">
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 cursor-pointer">
        <FaLinkedinIn className=" text-4xl" />
        <div className="">
          <h1 className=" text-lg font-bold">LinkedIn</h1>
          <p className=" text-xs font-medium -mt-0.5">See my work</p>
        </div>
      </div>
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 cursor-pointer">
        <FaInstagram className=" text-4xl" />
        <div className="">
          <h1 className=" text-lg font-bold">Instagram</h1>
          <p className=" text-xs font-medium -mt-0.5">See my story</p>
        </div>
      </div>
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 cursor-pointer">
        <FaFacebookF className=" text-4xl" />
        <div className="">
          <h1 className=" text-lg font-bold">Facebook</h1>
          <p className=" text-xs font-medium -mt-0.5">See my photo</p>
        </div>
      </div>
      <div className="hover:mx-3 hover:border-[#11100f] hover:px-6 duration-500 border border-[#0f0f0e] flex items-center gap-3 bg-[#161513] text-[#878A8E] rounded-md py-[9px] px-4 cursor-pointer">
        <FaTwitter className=" text-4xl" />
        <div className="">
          <h1 className=" text-lg font-bold">Twitter</h1>
          <p className=" text-xs font-medium -mt-0.5">See my thoughts</p>
        </div>
      </div>
    </div>
  );
};

export default LogoContainer;
