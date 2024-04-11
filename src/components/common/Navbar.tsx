import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-14 py-5 border-b border-stone-600">
      <h1 className=" text-[1.3rem] font-bold text-primary">
        HARIHARA GOPALAN
      </h1>
      <div className=" flex items-center gap-4 font-medium text-stone-100 ">
        <button className="hover:text-primary duration-500">Home</button>
        <button className="hover:text-primary duration-500">About</button>
        <button className="hover:text-primary duration-500">Skills</button>
        <button className="hover:text-primary duration-500">Service</button>
      </div>
      <div>
        <button className="group/button overflow-hidden relative border border-primary py-1 px-4 text-primary font-medium rounded-sm ">
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
