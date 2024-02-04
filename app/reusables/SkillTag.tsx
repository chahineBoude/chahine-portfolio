import { Skill } from "@/types/Skills";
import Image from "next/image";
import React from "react";

type Props = {
  skill: Skill;
};

function SkillTag({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <div className="border rounded-full border-slate-700 p-2 md:p-2 group-hover:border-0 transition duration-300 ease-in-out">
        <Image
          src={skill.skillLogo}
          alt="tech"
          height={160}
          width={160}
          className="w-24 h-24 md:h-40 md:w-40 rounded-full object-cover object-center filter group-hover:blur-md transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-full h-28 w-28 md:h-44 md:w-44">
        <div className="flex justify-center items-center h-full w-full md:font-semibold font-orbitron font-semibold text-lg md:text-xl text-slate-200 object-cover">
          <p>{skill.skillName === "PostgreSQL" ? "PSQL" : skill.skillName}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillTag;
