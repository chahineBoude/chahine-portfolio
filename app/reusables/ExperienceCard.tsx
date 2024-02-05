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
      className="w-screen md:w-[900px] h-[90%] md:h-5/6 flex items-center justify-center space-y-7 snap-center p-4 md:p-0 md:my-4 mx-20"
    >
      <div className="flex flex-col rounded-3xl justify-start items-center md:items-start overflow-y-scroll bg-gradient-radial from-background to-card h-full w-full p-10 opacity-30 hover:opacity-100 transition-opacity scroll-smooth scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-scrollbar/70">
        <div className="mb-4 place-self-center">
          <Image
            src={job.companyImage}
            alt="about_pic"
            height={160}
            width={160}
            className="h-32 w-32 md:w-40 md:h-40  rounded-xl object-cover"
          />
        </div>
        <div className="px-0 md:pb-5 sm:px-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h4 className="font-teko text-4xl md:text-6xl ">{job.jobTitle}</h4>
          <p className="font-teko pt-2 text-2xl md:text-4xl font-extralight tracking-wide">
            {job.company}
          </p>
          {job.stack && (
            <div className="mt-2">
              <div className="grid grid-cols-4 gap-2">
                {job.stack.map((tech: Skill) => (
                  <div key={tech._id}>
                    <Image
                      src={urlFor(tech.skillLogo).url()}
                      alt="technology"
                      height={30}
                      width={30}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <p className="pt-2 font-extralight md:text-xl font-oswald">{`${
            job.dateStarted
          } TO ${job.isCurrentlyWorking ? "PRESENT" : job.dateEnded}`}</p>
          <ul className="list-disc md:mt-4 text-3xl md:text-4xl ml-4 font-noto tracking-wide w-full">
            {job.tasks?.map((task: string, i: number) => (
              <div key={i}>
                <li className="my-4">{task}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
