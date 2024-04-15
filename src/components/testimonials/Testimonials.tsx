"use client"
import Image from "next/image";
import React from "react";
import indiaFlag from "../../assets/india-flag.png";
import { motion } from "framer-motion";
import {
  AnimationVariantLeft,
  AnimationVariantRight,
  AnimationVariantTop,
  AnimationVariantbottom,
  animationVariantPlace,
} from "./animation/TestimonialsAnimation";

const Testimonials = () => {
  return (
    <div
      className=" grid grid-cols-4 grid-rows-2 gap-4 items-center justify-between px-10 pt-20 pb-24 relative"
      id="Testimonials"
    >
      <div className="absolute w-full h-[500px] bg-gradient-radial blur-3xl z-0 from-[#030805] right-0 top-[20%]"></div>
      <motion.div
        variants={AnimationVariantLeft}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" group hover:border-stone-500 hover:rounded duration-500 flex flex-col gap-5 col-span-2 bg-gradient-to-tr from-stone-900 to-stone-800 shadow-lg border border-stone-700 backdrop-filter backdrop-blur-lg bg-opacity-30 px-5 py-5 rounded-md h-full w-full cursor-pointer"
      >
        <div className=" flex items-center gap-3">
          <Image
            src={indiaFlag}
            className=" w-10 h-10 rounded-full"
            width={10}
            height={10}
            alt="Flag"
          />
          <div>
            <h1 className=" group-hover:text-stone-100 duration-500 text-stone-200 font-bold text-lg">
              John doe
            </h1>
            <p className=" text-stone-300 text-sm font-medium">Professor</p>
          </div>
        </div>
        <p className="group-hover:text-stone-100 duration-500 text-stone-200 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim a
          quo, labore autem illum incidunt. Maiores repellendus delectus ad
          necessitatibus eveniet nam ducimus reprehenderit id quos molestias.
          Veniam, blanditiis ipsam optio, quisquam commodi nobis soluta
          cupiditate iure delectus illo ullam perferendis voluptates? Qui
          reprehenderit perferendis, voluptatem asperiores voluptas tenetur.
        </p>
      </motion.div>
      <motion.div
        variants={AnimationVariantTop}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" group hover:border-stone-500 hover:rounded duration-500 flex flex-col gap-5 bg-gradient-to-t from-neutral-900 to-neutral-800 shadow-lg border border-stone-700 backdrop-filter backdrop-blur-lg bg-opacity-30 px-5 py-5 rounded-md h-full w-full cursor-pointer"
      >
        <div className=" flex items-center gap-3">
          <Image
            src={indiaFlag}
            className=" w-10 h-10 rounded-full"
            width={10}
            height={10}
            alt="Flag"
          />
          <div>
            <h1 className=" group-hover:text-stone-100 duration-500 text-stone-200 font-bold text-lg">
              John doe
            </h1>
            <p className=" text-stone-300 text-sm font-medium">Professor</p>
          </div>
        </div>
        <p className=" group-hover:text-stone-100 duration-500 text-stone-200 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio
          corrupti eum velit explicabo possimus error rerum repellendus
          consequatur nulla!
        </p>
      </motion.div>
      <motion.div
        variants={AnimationVariantRight}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" group hover:border-stone-500 hover:rounded duration-500 flex flex-col gap-5 row-span-2 bg-gradient-to-l from-zinc-900 to-zinc-800 shadow-lg border border-stone-700 backdrop-filter backdrop-blur-lg bg-opacity-30 px-5 py-5 rounded-md h-full w-full cursor-pointer"
      >
        <div className=" flex items-center gap-3">
          <Image
            src={indiaFlag}
            className=" w-10 h-10 rounded-full"
            width={10}
            height={10}
            alt="Flag"
          />
          <div>
            <h1 className=" group-hover:text-stone-100 duration-500 text-stone-200 font-bold text-lg">
              John doe
            </h1>
            <p className=" text-stone-300 text-sm font-medium">Professor</p>
          </div>
        </div>
        <p className=" group-hover:text-stone-100 duration-500 text-stone-200 font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          magnam quaerat amet eius laudantium officia soluta sit, autem
          reprehenderit. Omnis, aspernatur. Nihil dolor ratione commodi aperiam?
          Assumenda cumque et error sint iusto, molestias consequatur eaque
          recusandae natus voluptatem rerum sunt earum accusamus, voluptas autem
          molestiae pariatur laborum. Minima, quod temporibus!
        </p>
      </motion.div>
      <motion.div
        variants={AnimationVariantbottom}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" group hover:border-stone-500 hover:rounded duration-500 flex flex-col gap-5 bg-gradient-to-tr from-stone-900 to-zinc-800 shadow-lg border border-stone-700 backdrop-filter backdrop-blur-lg bg-opacity-30 px-5 py-5 rounded-md h-full w-full cursor-pointer"
      >
        <div className=" flex items-center gap-3">
          <Image
            src={indiaFlag}
            className=" w-10 h-10 rounded-full"
            width={10}
            height={10}
            alt="Flag"
          />
          <div>
            <h1 className=" group-hover:text-stone-100 duration-500 text-stone-200 font-bold text-lg">
              John doe
            </h1>
            <p className=" text-stone-300 text-sm font-medium">Professor</p>
          </div>
        </div>
        <p className=" group-hover:text-stone-100 duration-500 text-stone-200 font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ea
          asperiores quis accusamus necessitatibus ducimus voluptatem! Iste
          eligendi aliquam odio.
        </p>
      </motion.div>
      <motion.div
        variants={animationVariantPlace}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" group hover:border-stone-500 hover:rounded duration-500 flex flex-col gap-5 col-span-2 bg-gradient-to-tl from-stone-900 via-stone-800 to-zinc-800 shadow-lg border border-stone-700 backdrop-filter backdrop-blur-lg bg-opacity-30 px-5 py-5 rounded-md h-full w-full cursor-pointer"
      >
        <div className=" flex items-center gap-3">
          <Image
            src={indiaFlag}
            className=" w-10 h-10 rounded-full"
            width={10}
            height={10}
            alt="Flag"
          />
          <div>
            <h1 className=" group-hover:text-stone-100 duration-500 text-stone-200 font-bold text-lg">
              John doe
            </h1>
            <p className=" text-stone-300 text-sm font-medium">Professor</p>
          </div>
        </div>
        <p className=" group-hover:text-stone-100 duration-500 text-stone-200 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          corrupti sint asperiores, nam, cum soluta, in sapiente ipsam totam
          quia aspernatur vel! Modi in id a cupiditate praesentium. Doloribus
          maiores voluptas, ducimus nihil sunt quibusdam libero expedita?
          Quidem, vitae ullam?
        </p>
      </motion.div>
    </div>
  );
};

export default Testimonials;
