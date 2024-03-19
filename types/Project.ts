import { Skill } from "./Skills";

export type Project = {
  _id: string;
  _createdAt: Date;
  projectTitle: string;
  projectImage: string;
  githubRepo: string;
  liveDemo: string;
  stack: Skill[];
};
