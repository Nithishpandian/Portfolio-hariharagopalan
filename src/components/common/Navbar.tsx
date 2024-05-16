"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={` flex justify-between items-center px-4 sm:px-6 lg:px-10 xl:px-14 py-5 border-b border-stone-600 ${
        isOpen && "overflow-hidden md:overflow-auto"
      } overflow-hidden md:overflow-auto `}
    >
      <h1 className="font-space-mono font-black text-xl sm:text-2xl text-primary transition-colors duration-300 cursor-pointer">
        HARIHARA GOPALAN
      </h1>
      <div className=" flex md:hidden">
        {isOpen ? (
          <IoClose onClick={handleClose} className=" text-stone-100 text-xl" />
        ) : (
          <RiMenu3Fill
            onClick={handleOpen}
            className=" text-stone-100 text-xl"
          />
        )}
      </div>
      <div
        className={` py-28 flex flex-col items-center justify-around md:hidden absolute md:static ${
          isOpen ? " right-0 w-full " : " hidden"
        } duration-500 top-[4.5rem] bottom-0 bg-primary-black transition-all ease-in z-50 font-bold text-stone-200 text-3xl font-Noto-sans`}
      >
        <Link
          onClick={handleClose}
          href={"#Home"}
          className="hover:text-primary duration-500"
        >
          Home
        </Link>
        <Link
          onClick={handleClose}
          href={"#About"}
          className="hover:text-primary duration-500"
        >
          About
        </Link>
        <Link
          onClick={handleClose}
          href={"#Skills"}
          className="hover:text-primary duration-500"
        >
          Skills
        </Link>
        <Link
          onClick={handleClose}
          href={"#Service"}
          className="hover:text-primary duration-500"
        >
          Service
        </Link>
        <div>
          <button className=" text-2xl group/button overflow-hidden relative border border-primary py-1 px-4 text-primary font-medium rounded-sm ">
            <div className="duration-300 group-hover/button:-translate-y-8 ">
              Let's talk
            </div>
            <div className="absolute invisible duration-300 group-hover/button:-translate-y-6 group-hover/button:visible">
              Let's talk
            </div>
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-5 font-medium text-stone-200 font-Noto-sans">
        <Link href={"#Home"} className="hover:text-primary duration-500">
          Home
        </Link>
        <Link href={"#About"} className="hover:text-primary duration-500">
          About
        </Link>
        <Link href={"#Skills"} className="hover:text-primary duration-500">
          Skills
        </Link>
        <Link href={"#Service"} className="hover:text-primary duration-500">
          Service
        </Link>
      </div>
      <div className=" hidden md:flex">
        <button className=" group/button overflow-hidden relative border border-primary py-1 px-4 text-primary font-medium rounded-sm ">
          <div className="duration-300 group-hover/button:-translate-y-8 ">
            Let's talk
          </div>
          <div className="absolute invisible duration-300 group-hover/button:-translate-y-6 group-hover/button:visible">
            Let's talk
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
