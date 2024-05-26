"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import LogoContainer from "./LogoContainer";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import heroImg from "../../assets/hero-nobg.png";

const Hero = () => {
  return (
    <>
      <div
        className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-2 px-3 lg:px-2 xl:px-7 2xl:px-10 md:pt-10 pb-8"
        id="Home"
      >
        <div className=" order-2 md:order-1 flex flex-col gap-3 md:gap-4 xl:gap-8 md:pt-24 md:pb-14">
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl xl:text-[3.3rem] font-extrabold xl:leading-[64px]">
            I'm
            <ReactTyped
              className=" text-primary ml-3"
              strings={[" Harihara Gopalan"]}
              typeSpeed={140}
              backSpeed={100}
              loop
            />
            <br />
            Cybersecurity Expert & Consultant
          </h1>
          <p className=" text-sm xl:text-base font-Roboto">
            As an Associate Professor at Sri Ramakrishna Engineering College, I
            have been teaching and researching various aspects of cybersecurity,
            blockchain, networking, and programming for over sixteen years. I
            hold a PhD in Mobile Adhoc Networks from Anna University and a CEH
            V12 certification from EC-Council.
          </p>
          <div>
            <button className=" font-Noto-sans flex items-center gap-2 hover:gap-4 duration-300 border border-primary rounded bg-primary text-stone-50 font-semibold py-1.5 px-4">
              <span className=" text-lg ">Contact</span>{" "}
              <FaArrowRight className="" />
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative h-full w-full flex justify-center md:justify-end items-center py-14">
          <div className=" absolute sm:w-[500px] h-[400px] bg-gradient-radial blur-3xl z-0 from-[#23553671] right-0 top-0"></div>
          <div className=" border-t border-t-primary rounded-t-full shadow shadow-primary pt-16 px-4 bg-primary flex items-center justify-center w-fit">
            <Image
              src={heroImg}
              alt="Hero"
              className=" z-10 max-h-96 sm:max-h-[450px] max-w-72 sm:max-w-96 md:max-w-64 lg:max-w-80 xl:max-w-96 "
            />
          </div>
        </div>
      </div>
      <LogoContainer />
    </>
  );
};

export default Hero;

