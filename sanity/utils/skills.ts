import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";
import { Skill } from "@/types/Skills";

export async function getSkills(): Promise<Skill[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skill"]{
        _id,
        _createdAt,
        skillName,
        "skillLogo": skillLogo.asset->url
    }`
  );
}
