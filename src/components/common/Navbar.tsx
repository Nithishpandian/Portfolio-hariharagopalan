import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-14 py-5 border-b border-stone-600">
      <h1 className="font-space-mono font-black text-2xl text-primary transition-colors duration-300 cursor-pointer">
        HARIHARA GOPALAN
      </h1>
      <div className=" flex items-center gap-5 font-medium text-stone-200 font-Noto-sans">
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
      <div>
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
