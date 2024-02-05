import { Experience } from "@/types/Experience";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getExperience(): Promise<Experience[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "experience"]{
        _id,
        _createdAt,
        jobTitle,
        "companyImage": companyImage.asset->url,
        company,
        dateStarted,
        dateEnded,
        isCurrentlyWorking,
        stack[]->,
        tasks[]
    }`
  );
}
