import React from "react";
import { IoMdArrowUp } from "react-icons/io";

const Service = () => {
  return (
    <div className=" px-10 py-10 flex flex-col gap-10">
      <div className=" flex flex-col gap-1.5 justify-center items-center text-center">
        <h1 className=" text-stone-50 font-bold text-3xl">My Services</h1>
        <div className=" bg-primary py-0.5 w-44 rounded-sm mb-1"></div>
        <p className=" w-96 text-stone-300 text-sm font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quos
          facilis voluptate officia vel debitis!
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-x-5 gap-y-4 justify-around">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;

const ServiceCard = () => {
  return (
    <div className=" group cursor-pointer duration-500 flex flex-col gap-3 bg-gradient-to-br from-stone-900 to-stone-800 shadow-lg border border-stone-700 hover:border-stone-500 backdrop-filter backdrop-blur-lg bg-opacity-30 px-6 py-6 rounded-md h-full w-full">
      <div className=" flex justify-between items-center">
        <h1 className=" text-stone-200 text-2xl font-bold">Network Security</h1>
        <p className=" text-stone-400 flex justify-end">
          <IoMdArrowUp className=" rotate-45 text-2xl group-hover:-mt-4 group-hover:-mr-3 duration-300" />
        </p>
      </div>
      <div className=" text-stone-300 font-medium text-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        deleniti doloribus totam reiciendis aut suscipit hic neque quasi
        delectus est. Soluta optio omnis reiciendis voluptas alias nemo rem
        tenetur sequi, perferendis corporis, delectus obcaecati numquam odit.
        Eius exercitationem id minima.
      </div>
    </div>
  );
};
