import React from "react";
import { Skill } from "@/types/Skills";
import SkillTag from "../reusables/SkillTag";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <div className="relative flex text-center flex-col md:flex-row md:text-left min-h-screen justify-center mx-auto items-center">
      <div className="uppercase text-6xl tracking-widest font-teko absolute top-20 md:top-36 text-center w-full ">
        <h3>Skills</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8 ">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <div key={skill._id}>
            <SkillTag skill={skill} fromTheRight={false} />
          </div>
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <div key={skill._id}>
            <SkillTag skill={skill} fromTheRight={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
