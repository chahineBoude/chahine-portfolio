"use client";

import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  const [blur, setBlur] = useState(false);
  return (
    <div className="w-screen h-[90%] md:h-5/6 flex flex-col items-center justify-center space-y-7 snap-center p-4 md:p-0 md:my-4 mx-20">
      <div className="relative mb-4">
        <Image
          src={project.projectImage}
          alt="project"
          height={650}
          width={650}
          onMouseEnter={() => setBlur(true)}
          onMouseLeave={() => setBlur(false)}
          onClick={() => setBlur(!blur)}
          className={
            blur
              ? "blur-md transition duration-200 ease-in-out"
              : "blur-none transition duration-200 ease-in-out"
          }
        />
        {blur && (
          <motion.div
            className="absolute self-center flex items-center justify-center w-full top-1/2"
            onMouseEnter={() => setBlur(true)}
            onMouseLeave={() => setBlur(false)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {project.stack.map((tech) => (
              <Image
                src={tech.skillLogo}
                alt="tech"
                height={50}
                width={50}
                className="w-16 h-16 md:h-24 md:w-24 rounded-lg object-center mx-4"
              />
            ))}
          </motion.div>
        )}
      </div>
      <span className="font-oswald uppercase text-2xl lg:text-4xl">
        {project.projectTitle}
      </span>
      <div className="flex flex-col w-full md:w-1/6  self-center justify-around">
        {project.liveDemo && (
          <Link
            href={`${project.liveDemo}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="customButton text-base lg:text-xl p-2 w-full md:mb-1 font-oswald">
              Live Demo
            </button>
          </Link>
        )}
        <Link
          href={`${project.githubRepo}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="customButton text-base lg:text-xl p-2 w-full  font-oswald">
            Git Repo
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
