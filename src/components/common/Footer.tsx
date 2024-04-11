import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 border-t border-stone-500 py-6 px-24 backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
      <div className="absolute w-[500px] h-full blur-2xl -z-10 bg-gradient-radial from-neutral-900 left-0 top-0"></div>
      <div className=" w-[480px] text-center flex flex-col gap-3">
        <h1 className=" text-stone-200 font-bold text-3xl">Harihara Gopalan</h1>
        <p className=" text-stone-500 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum placeat
          dolor voluptas ipsam doloremque, omnis doloribus ducimus eaque
          consequuntur similique.
        </p>
      </div>
      <div className=" flex items-center gap-2 justify-around w-96 text-xl mt-4 text-stone-300">
        <FaLinkedin />
        <FaSquareInstagram />
        <FaSquareXTwitter />
        <FaSquareFacebook />
        <MdEmail className=" text-2xl" />
      </div>
    </div>
  );
};

export default Footer;
