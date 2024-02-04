"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/types/Skills";
import urlFor from "@/sanity/utils/image-util";
import { Experience } from "@/types/Experience";

type Props = {
  job: Experience;
};

function ExperienceCard({ job }: Props) {
  return (
    <motion.article
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="w-screen h-full flex items-center justify-center space-y-7 snap-center p-4 md:p-0 my-4"
    >
      <div className="flex flex-col rounded-3xl justify-start items-center overflow-y-scroll bg-gradient-radial from-background to-card h-full w-full md:w-1/2 p-10 opacity-30 hover:opacity-100 transition-opacity scroll-smooth scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-scrollbar/70">
        <div className="mb-4">
          <Image
            src={job.companyImage}
            alt="about_pic"
            height={256}
            width={256}
            className="h-32 w-32 md:h-64 md:w-64 rounded-xl object-cover"
          />
        </div>
        <div className="px-0 md:pb-5 sm:px-10 flex flex-col justify-center items-center text-center">
          <h4 className="font-light font-teko text-4xl md:text-6xl ">
            {job.jobTitle}
          </h4>
          <p className="pt-2 font-bold mb-2 text-2xl md:text-3xl">
            {job.company}
          </p>
          <div>{/* tech used */}</div>
          <p className="pt-2  md:text-xl">{`${job.dateStarted} TO ${
            job.isCurrentlyWorking ? "PRESENT" : job.dateEnded
          }`}</p>
          {job.stack && (
            <div className="mt-4">
              <span className="font-teko text-3xl uppercase">tech stack</span>
              <ul className="flex md:flex-wrap flex-col md:flex-row items-center justify-center list-none text-xl 2xl:text-2xl pt-2 text-left li">
                {job.stack.map((tech: Skill) => (
                  <div key={tech._id}>
                    <li className="my-4 md:my-0 md:mx-10">
                      <div className="flex justify-items-center items-center uppercase cursor-default font-orbitron text-lg md:text-xl mb-4">
                        <Image
                          src={urlFor(tech.skillLogo).url()}
                          alt="technology"
                          height={50}
                          width={50}
                          className="mr-4"
                        />
                        {tech.skillName}
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
