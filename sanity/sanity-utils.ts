import { createClient, groq } from "next-sanity";

export async function getExperience() {
  const client = createClient({
    projectId: "jlpwc9iu",
    dataset: "production",
  });

  return client.fetch(
    groq`*[_type == "experience"]{
        _id,
        _createdAt,
        jobTitle,
        "companyImage": companyImage.asset->url,
        company,
        dateStarted,
        dateEnded,
        isCurrentlyWorking,
        stack
    }`
  );
}
