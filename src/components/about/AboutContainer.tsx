import React from "react";

const AboutContainer = () => {
  return (
    <div className=" grid grid-cols-3 gap-10 justify-around px-12 pt-24 pb-16 relative">
      <div className="absolute mt-16 w-[650px] h-[450px] blur-3xl z-0 bg-gradient-conic from-zinc-950 left-0 top-0"></div>
      <div className=" flex flex-col gap-5 z-0">
        <h2 className=" text-primary font-bold text-lg">ABOUT ME</h2>
        <h1 className=" text-[#fafafa] text-[2.6rem] leading-snug font-black">
          A Cyber Security Specialist & Consultant
        </h1>
      </div>
      <div className=" col-span-2 flex flex-col gap-4">
        <h1 className=" text-[#fafafa] text-[1.6rem] font-bold">
          I have also been involved in conducting technical sessions, workshops,
          and seminars on cybersecurity, blockchain, and network domains for
          students, faculty, and industry professionals.
        </h1>
        <p className=" text-stone-300">
          {" "}
          Additionally, I have been providing security consulting and
          penetration testing services to startups and organizations, helping
          them to protect their digital assets and systems from cyber threats.
          My mission is to empower and educate the next generation of
          cybersecurity professionals and leaders with the knowledge, skills,
          and innovation they need to defend the digital frontiers.
        </p>
        <div className=" flex items-center justify-between py-2">
          <div className=" flex flex-col gap-0.5">
            <p className=" text-primary text-xs font-semibold">BORN IN</p>
            <h1 className=" font-extrabold text-stone-50 text-xl">India</h1>
          </div>
          <div className=" flex flex-col gap-0.5">
            <p className=" text-primary text-xs font-semibold">EXPERIENCE</p>
            <h1 className=" font-extrabold text-stone-50 text-xl">16+ Years</h1>
          </div>
          <div className=" flex flex-col gap-0.5">
            <p className=" text-primary text-xs font-semibold">PROJECTS</p>
            <h1 className=" font-extrabold text-stone-50 text-xl">40+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
