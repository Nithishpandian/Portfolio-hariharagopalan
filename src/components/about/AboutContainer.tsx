"use client";
import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const AboutContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef: any = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(countUpRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const AboutAnimationVariantLeft = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 justify-around px-4 md:px-6 xl:px-12 pt-24 pb-16 relative"
      id="About"
    >
      <div className="absolute md:mt-16 w-60 sm:w-[600px] h-[450px] blur-3xl z-0 bg-gradient-conic from-zinc-950 left-0 top-0"></div>
      <motion.div
        variants={AboutAnimationVariantLeft}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className="flex flex-col gap-5 z-0"
      >
        <h2 className="text-primary font-bold text-lg">ABOUT ME</h2>
        <h1 className="text-[#fafafa] text-3xl sm:text-4xl lg:text-[2.6rem] leading-snug font-black">
          A Cyber Security Specialist & Consultant
        </h1>
      </motion.div>
      <div className="col-span-2 flex flex-col gap-4">
        <h1 className="text-[#fafafa] text-xl sm:text-2xl sm:text-[1.6rem] font-bold">
          I have also been involved in conducting technical sessions, workshops,
          and seminars on cybersecurity, blockchain, and network domains for
          students, faculty, and industry professionals.
        </h1>
        <p className="text-stone-300 text-sm lg:text-base">
          Additionally, I have been providing security consulting and
          penetration testing services to startups and organizations, helping
          them to protect their digital assets and systems from cyber threats.
          My mission is to empower and educate the next generation of
          cybersecurity professionals and leaders with the knowledge, skills,
          and innovation they need to defend the digital frontiers.
        </p>
        <div
          className="flex items-center justify-between py-2"
          ref={countUpRef}
        >
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold">CERTIFICATION</p>
            {isVisible && (
              <div className="font-extrabold text-stone-50 text-xl">
                <CountUp start={500} end={10} duration={3} />
                <span className="ml-1">+</span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold">EXPERIENCE</p>
            {isVisible && (
              <div className="font-extrabold text-stone-50 text-xl">
                <CountUp start={500} end={16} duration={3} />
                <span className="ml-1">+ Years</span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold">PROJECTS</p>
            {isVisible && (
              <div className="font-extrabold text-stone-50 text-xl">
                <CountUp start={500} end={40} duration={3} />
                <span className="ml-1">+</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
