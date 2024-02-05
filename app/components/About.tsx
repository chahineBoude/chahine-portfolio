"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from "../../public/resources/chahine-hero.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

type Props = {};

export default function About({}: Props) {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
  });

  const [index, setIndex] = useState(0);

  const [phrases, setPhrases] = useState([
    "Chahine",
    "A Software Engineer",
    "A Fullstack Developer",
    "A Sysadmin",
    "A Devops Enthusiast",
  ]);

  const [typing, setTyping] = useState(true);
  const [showCursor, setCursor] = useState(true);
  const handleTypingComplete = () => {
    setTyping(false);
    setCursor(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % phrases.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem("outOfHero", inView ? "true" : "false");
  }, [inView]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 h-screen">
        <div className="col-span-9 place-self-center text-center md:text-left row-auto order-last sm:order-first sm:mt-0">
          <div className="text-white text-5xl lg:text-9xl mb-4 md:mb-0 font-extrabold font-teko tracking-wide">
            <span className="mb-4">
              Hello
              <Typewriter
                words={[" !", ", Welcome to my page ", ", I am "]}
                loop={1}
                cursor={showCursor}
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={500}
                onLoopDone={handleTypingComplete}
              />
            </span>
            <br />
            {!typing && (
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.1,
                }}
                className=" text-transparent bg-clip-text bg-gradient-to-r from-[#D391FA] to-[#6B00D7]"
              >
                <Typewriter
                  words={phrases}
                  loop
                  cursor={true}
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={500}
                />
              </motion.span>
            )}
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="text-gray-300 text-lg lg:text-4xl mb-6 font-noto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              ullam nisi expedita sit aperiam voluptates a aspernatur placeat
              quisquam quis velit in vel voluptatum sed. Cum reiciendis fugiat
              sunt explicabo!
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-start font-bold font-orbitron">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{
                once: true,
              }}
            >
              <button className="customButton1 w-full mb-4 sm:mb-0">
                Learn More
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{
                once: true,
              }}
            >
              <button className="customButton2 w-full lg:ml-12">
                <span className="block bg-background hover:bg-slate-800 rounded-full px-5 py-3">
                  Download CV
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        <div className="col-span-3  place-self-center mt-4 lg:mt-0" ref={ref}>
          <motion.div
            className="rounded-full h-[250px] w-[250px] lg:h-[500px] lg:w-[500px] flex justify-end items-center"
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            <Image
              src={hero}
              alt="hero-pic"
              className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
