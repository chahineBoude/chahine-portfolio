import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const configParams = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET!,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  basePath: "/admin",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
};

const config = defineConfig(configParams);

export default config;
