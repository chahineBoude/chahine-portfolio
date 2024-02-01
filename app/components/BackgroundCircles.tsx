import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        scale: [0, 1, 2, 2, 1],
        opacity: [0.2, 0.4, 0.6, 0.2, 1],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border rounded-full h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[300px] lg:w-[300px] mt-36 md:mt-[350px] animate-ping" />
      <div className=" absolute border rounded-full  h-[325px] w-[325px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] mt-36 md:mt-[350px] animate-ping" />
      <div className=" absolute border rounded-full  h-[425px] w-[425px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] mt-36 md:mt-[350px] animate-ping" />
      <div className=" absolute border rounded-full opacity-10  h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:h-[500px] mt-36 md:mt-[350px] lg:w-[500px]  animate-pulse" />
      <div />
    </motion.div>
  );
}

export default BackgroundCircles;
