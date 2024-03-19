import { Project } from "@/types/Project";
import React from "react";
import ProjectCard from "../reusables/ProjectCard";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <div className="uppercase text-6xl tracking-widest font-teko absolute top-20 md:top-36 text-center w-full ">
        <h3>Projects</h3>
      </div>
      <div className="relative w-full flex md:items-center overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory md:text-left scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-scrollbar/70">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-12/12 h-[900px] md:flex md:items-end"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
