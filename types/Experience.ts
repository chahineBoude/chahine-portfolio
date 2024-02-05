import { Skill } from "./Skills";

export type Experience = {
  _id: string;
  _createdAt: Date;
  jobTitle: string;
  companyImage: string;
  company: string;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorking: boolean;
  stack: Skill[];
  tasks: string[];
};
