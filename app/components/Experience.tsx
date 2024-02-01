import { getExperience } from "@/sanity/sanity-utils";
import React from "react";
import ExperienceCard from "../reusables/ExperienceCard";

type Props = {};

async function Experience({}: Props) {
  const experience = await getExperience();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-full flex overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory md:text-left ">
        {experience.map((exp: any) => (
          <div key={exp._id} className="w-12/12">
            <ExperienceCard job={exp} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
