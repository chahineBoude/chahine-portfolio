"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  job: any;
};

function ExperienceCard({ job }: Props) {
  return (
    <article className="w-screen h-full flex items-center justify-center space-y-7 snap-center  ">
      <div className="flex flex-col rounded-3xl justify-start items-center bg-gradient-radial from-card to-background h-full w-full md:w-1/2 p-10 opacity-30 hover:opacity-100 transition-opacity">
        <motion.div
          initial={{
            y: -200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mb-8"
        >
          <Image
            src={job.companyImage}
            alt="about_pic"
            height={256}
            width={256}
            className="h-32 w-32 md:h-64 md:w-64 rounded-full object-cover"
          />
        </motion.div>
        <div className="px-0 md:px-5 sm:px-10 flex flex-col justify-center items-center text-center">
          <h4 className="font-light font-teko text-5xl 2xl:text-6xl ">
            {job.jobTitle}
          </h4>
          <p className="pt-2 font-bold  text-2xl 2xl:text-3xl">{job.company}</p>
          <div>{/* tech used */}</div>
          <p className="pt-2 font-extralight 2xl:text-xl">{`${
            job.dateStarted
          } TO ${job.isCurrentlyWorking ? "PRESENT" : job.dateEnded}`}</p>
          {job.stack && (
            <div className="mt-4">
              <span className="font-teko text-3xl uppercase">tech stack</span>
              <ul className="list-none space-y-4 ml-5 text-xl 2xl:text-2xl pt-2 text-left">
                {job.stack.map((tech, i: number) => (
                  <div key={i}>
                    <li>{tech}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
