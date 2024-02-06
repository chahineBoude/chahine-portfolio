import React from "react";
import ExperienceCard from "../reusables/ExperienceCard";
import { Experience } from "@/types/Experience";

type Props = {
  experience: Experience[];
};

async function Experience({ experience }: Props) {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-[url('/LooperGroup2.png')] bg-cover bg-center md:bg-none">
      <div className="hidden md:block uppercase text-6xl tracking-widest font-teko absolute top-16 text-center w-full ">
        <h3>Work experience</h3>
      </div>
      <div className="w-full flex md:items-center overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory md:text-left scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-scrollbar/70">
        {experience.map((exp) => (
          <div key={exp._id} className="w-12/12 h-[900px] md:flex md:items-end">
            <ExperienceCard job={exp} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
