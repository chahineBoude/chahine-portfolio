"use client";

import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import hero from "../../public/resources/chahine-hero.jpg";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 850px)");
  const buttons = ["About", "Experience", "Skills", "Projects"];
  const buttonVarients: Variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center text-center ">
      <motion.div
        initial={{
          x: -500,
          y: 0,
          opacity: 0,
        }}
        animate={{
          x: isSmallerThanMd ? 0 : 100,
          y: isSmallerThanMd ? 150 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="font-orbitron flex relative justify-center items-center w-full md:justify-start text-3xl md:text-4xl lg:text-5xl text-gray-300 uppercase tracking-[15px] md:w-2/12 animate-pulse h-1/12"
      >
        <h1>chahine</h1>
      </motion.div>
      <div className="relative  h-screen flex flex-col justify-center items-center w-full md:w-8/12 ">
        <BackgroundCircles />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.1,
          }}
        >
          <Image
            className="h-36 w-36 lg:h-[350px] lg:w-[350px]  rounded-full mx-auto object-cover"
            src={hero}
            alt="profile_pic"
          />
        </motion.div>
        <div className="z-20 flex justify-center flex-col text-center items-center">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h2 className="text-sm md:text-xl font-SF text-gray-300 uppercase pb-5 pt-5 tracking-[15px]">
              software engineer
            </h2>
            <div className=" pt-8 md:pt-8">
              <AnimatePresence>
                {buttons.map((button, id) => (
                  <motion.button
                    key={id}
                    initial="initial"
                    animate="animate"
                    variants={buttonVarients}
                    transition={{ delay: id * 1 }}
                    className="customButton font-teko w-1/4 lg:w-auto"
                  >
                    <Link href={`#${button}`}>{button}</Link>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{
          x: 500,
          y: 0,
          opacity: 0,
        }}
        animate={{
          x: isSmallerThanMd ? 0 : -100,
          y: isSmallerThanMd ? -200 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="font-orbitron flex relative justify-center items-center w-full md:justify-end text-3xl md:text-4xl lg:text-5xl text-gray-300 uppercase tracking-[15px] md:w-2/12 animate-pulse h-1/12"
      >
        <h1>boudemagh</h1>
      </motion.div>
    </div>
  );
}
