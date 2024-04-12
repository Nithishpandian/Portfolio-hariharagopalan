import React from "react";
import Typed from "react-typed";
import LogoContainer from "./LogoContainer";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className=" grid grid-cols-2 items-center justify-between px-10 pt-32 pb-24">
        <div className=" flex flex-col gap-8">
          <h1 className=" text-[3.3rem] font-extrabold leading-[64px]">
            I'm
            <span className=" text-primary"> Harihara Gopalan</span>
            {/* <Typed
            className=" text-primary"
            strings={["Harihara Gopalan"]}
            typeSpeed={140}
            backSpeed={100}
            loop
          /> */}
            <br />
            Cybersecurity Expert & Consultant
          </h1>
          <p className=" font-Roboto">
            As an Associate Professor at Sri Ramakrishna Engineering College, I
            have been teaching and researching various aspects of cybersecurity,
            blockchain, networking, and programming for over sixteen years. I
            hold a PhD in Mobile Adhoc Networks from Anna University and a CEH
            V12 certification from EC-Council.
          </p>
          <div>
            <button className=" font-Noto-sans flex items-center gap-2 hover:gap-4 duration-300 border border-primary rounded bg-primary text-stone-50 font-semibold py-1.5 px-4">
              <span className=" text-lg">Contact</span> <FaArrowRight className="" />
            </button>
          </div>
        </div>
        <div className=" relative h-full">
          <div className="absolute w-[500px] h-[400px] bg-gradient-radial blur-3xl z-0 from-[#240606] right-0 top-0"></div>
        </div>
      </div>
      <LogoContainer />
    </>
  );
};

export default Hero;
