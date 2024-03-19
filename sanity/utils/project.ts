
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";
import { Project } from "@/types/Project";

export async function getProject(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      projectTitle,
      "projectImage": projectImage.asset->url,
      githubRepo,
      liveDemo,
      stack[]->{
        skillName,
        "skillLogo": skillLogo.asset->url,  // Fetching skillLogo and its URL
        level
      },
  }`
  );
}
