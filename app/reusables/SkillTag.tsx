"use client";
import { Skill } from "@/types/Skills";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  skill: Skill;
  fromTheRight: boolean;
};

function SkillTag({ skill, fromTheRight }: Props) {
  return (
    <motion.div
      initial={fromTheRight ? { x: 200 } : { x: -200 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      <div className="rounded-lg p-2 md:p-2 group-hover:border-0 transition duration-300 ease-in-out">
        <Image
          src={skill.skillLogo}
          alt="tech"
          height={128}
          width={128}
          className="w-24 h-24 md:h-32 md:w-32 rounded-lg object-center filter group-hover:blur-md transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-full h-28 w-28 md:h-36 md:w-36">
        <div className="flex justify-center items-center h-full w-full md:font-semibold font-orbitron font-semibold text-lg md:text-xl text-slate-200 object-cover">
          <p>{skill.skillName === "PostgreSQL" ? "PSQL" : skill.skillName}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillTag;
